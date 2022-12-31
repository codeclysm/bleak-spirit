import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { ref, onValue } from "firebase/database";
import { useParams } from "react-router-dom";

import { auth, db } from "./firebase";
import usePlayer from "./hooks/usePlayer";
import { IPlayer } from "./types/types";

export default function Lobby() {
  const { lobbyId } = useParams();

  const [player, error] = usePlayer(auth, lobbyId || "");

  // Retrieve the list of users in the lobby
  const [players, setPlayers] = useState<IPlayer[]>([]);
  useEffect(() => {
    if (player) {
      const query = ref(db, `${lobbyId}/players`);
      return onValue(query, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const players: IPlayer[] = [];
          Object.keys(data).forEach((uid) => {
            players.push(data[uid]);
          });
          setPlayers(players);
        }
      });
    }
  }, [player, lobbyId]);

  // Render
  if (error) {
    console.error(error);
    return null;
  }

  return (
    <Card>
      <CardHeader title="Giocatory nella Lobby" />
      <CardContent>
        {players.map((player) => {
          return (
            <Typography key={player.uid}>
              {player.uid} - {player.name}
            </Typography>
          );
        })}
      </CardContent>
    </Card>
  );
}
