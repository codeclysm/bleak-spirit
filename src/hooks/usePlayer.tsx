import { Auth } from "firebase/auth";
import useUser from "./useUser";
import { db } from "../firebase";
import { IPlayer } from "../types/types";
import { useEffect, useMemo, useState } from "react";
import { DatabaseReference, onDisconnect, ref, set } from "firebase/database";

export default function usePlayer(auth: Auth, lobbyId: string) {
  const [user, error] = useUser(auth);

  const playerRef = useMemo(() => {
    if (!user || lobbyId === "") {
      return null;
    }
    return ref(db, `${lobbyId}/players/${user.uid}`);
  }, [lobbyId, user]);

  const [player, setPlayer] = useState<IPlayer | null>(null);

  useEffect(() => {
    if (user) {
      setPlayer({
        uid: user.uid,
        name: "test",
      });
    }
  }, [user]);

  // Add the user to the lobby
  useEffect(() => {
    if (user && playerRef) {
      writePlayerData(playerRef, {
        uid: user.uid,
        name: "test",
      });
    }
  }, [user, playerRef]);

  // Remove the user from the lobby on disconnect
  useEffect(() => {
    if (user && playerRef) {
      onDisconnect(playerRef)
        .remove()
        .catch((err) => {
          console.error(err);
        });
    }
  }, [user, playerRef]);

  if (!user || error) {
    return [null, error];
  }

  return [player, null];
}

function writePlayerData(ref: DatabaseReference, player: IPlayer) {
  set(ref, player).catch((err) => {
    console.error(err);
  });
}
