import { useState } from "react";
import penandquill from "../assets/imgs/gauze.png";
import { Box, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { API_URL } from "../api";

function FeedbackForm() {
  const theme = useTheme();
  const [status, setStatus] = useState(""); // "", "enviando", "ok", "erro"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("enviando");

    try {
      const response = await fetch(`${API_URL}/feedbacks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: comment }),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      setName("");
      setEmail("");
      setComment("");
      setStatus("ok");
    } catch (err) {
      console.error(err);
      setStatus("erro");
    }
  }

  const primaryField = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: theme.palette.primary.main },
      "&:hover fieldset": { borderColor: theme.palette.primary.main },
      "&.Mui-focused fieldset": { borderColor: theme.palette.primary.main },
    },
    "& .MuiInputLabel-root": { color: theme.palette.primary.main },
    "& .MuiInputLabel-root.Mui-focused": { color: theme.palette.primary.main },
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${penandquill})`,
        backgroundSize: "cover",
        backgroundPosition: "center -70px",
        py: 8,
        width: "100vw",
        }}
      >
      <Box
        sx={{
          maxWidth: "1200px",
          background: "transparent",
          padding: "2rem",
    margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          border: `2px solid ${theme.palette.primary.main}`,
          borderRadius: "2px",
        }}
      >
        <Box sx={{ marginBottom: "20px" }}>
          <h2 style={{ textAlign: "left", color: theme.palette.primary.main }}>
            Deixe seu Feedback
          </h2>
        </Box>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            id="outlined-multiline-static"
            label="Comentário"
            multiline
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            sx={{
              ...primaryField,
              width: "100%",
              mb: "20px",
              borderRadius: "0",
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              id="outlined-required"
              label="Nome"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ ...primaryField, width: "50%", mr: "20px" }}
            />
            <TextField
              id="outlined-email-address"
              label="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ ...primaryField, width: "50%" }}
            />
            <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: theme.palette.primary.main,
              "&:hover": { backgroundColor: theme.palette.primary.main },
              marginLeft: "20px",
              height: "56px",
              width: "90px",
            }}
          >
            Enviar
          </Button>
          </Box>
          <br />
          {status === "ok" && <p>Comentário enviado!</p>}
          {status === "erro" && <p>Não foi possível enviar. Tente de novo.</p>}
        </form>
      </Box>
    </Box>
  );
}

export default FeedbackForm;
