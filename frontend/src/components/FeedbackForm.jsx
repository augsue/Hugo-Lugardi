import { useState } from "react";
import blueBlackBoard from "../assets/imgs/blueBlackBoard.jpg";
import { Box, TextField, Button } from "@mui/material";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // aqui você pode enviar os dados para uma API ou realizar alguma outra ação com eles
    console.log(`Name: ${name}, Email: ${email}, Comment: ${comment}`);
  }

  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage: `url(${blueBlackBoard})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem",
      }}
    >
      <Box
        style={{
          width: "66%",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box style={{ marginBottom: 20 }}>
          <h2 style={{ textAlign: "left", color: "#ffffff" }}>
            Deixe seu Feedback
          </h2>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-multiline-static"
            label="Comentário"
            multiline
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ width: "100%", marginBottom: 20, color: "#ffffff" }}
          />
          <Box sx={{ display: "flex" }}>
            <TextField
              id="outlined-required"
              label="Nome"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "50%", marginRight: 20, color: "#ffffff" }}
            />
            <TextField
              id="outlined-email-address"
              label="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "50%", color: "#ffffff" }}
            />
          </Box>
          <br />
          <Button variant="contained" color="primary" type="submit">
            Publicar Comentário
          </Button>
        </form>
      </Box>
      <Box
        sx={{
          width: "33%",
          background: "transparent",
        }}
      ></Box>
    </Box>
  );
}

export default FeedbackForm;
