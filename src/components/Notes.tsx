import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

export default function Notes() {
  return (
    <Card sx={{ width: 450 }}>
      <CardHeader title="Saltare alle Conclusioni" />
      <CardContent>
        <Stack spacing={1}>
          <TextField
            multiline
            minRows={2}
            label="Cos'era l'area ai suoi fasti?"
          />
          <TextField
            multiline
            minRows={2}
            label="Com'è avvenuta la sua caduta?"
          />
          <TextField
            multiline
            minRows={2}
            label="Qual'è la natura dell'Antagonista?"
          />
          <TextField
            multiline
            minRows={2}
            label="Come sono collegati l'Antagonista e la caduta dell'area?"
          />
          <TextField
            multiline
            minRows={2}
            label="Chi è lə Viandante e cosa sta facendo qui?"
          />
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">Finito!</Button>
      </CardActions>
    </Card>
  );
}
