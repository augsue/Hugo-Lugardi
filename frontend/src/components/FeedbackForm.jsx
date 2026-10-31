import { useState } from "react";
import penandquill from "../assets/imgs/gauze.png";
import { Box, TextField, Button, Typography } from "@mui/material";
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

  const MAX_CHARS = 500;

  // reaproveita seu primaryField, só deixando o fundo e os cantos no estilo novo
  const field = {
    ...primaryField,
    "& .MuiOutlinedInput-root": {
      ...(primaryField["& .MuiOutlinedInput-root"] || {}),
      backgroundColor: "rgba(255,255,255,0.5)",
      borderRadius: 0,
    },
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${penandquill})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 5, md: 8 },
        px: { xs: 2, md: 3 },
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          maxWidth: "1300px",
          mx: "auto",
          boxSizing: "border-box",
          p: { xs: "24px 18px", md: "40px 48px" },
          backgroundColor: "transparent",
          backdropFilter: "blur(4px)",
          border: `2px solid ${theme.palette.primary.main}`,
          outline: "1px solid rgba(166, 60, 6, 0.45)",
          outlineOffset: "-8px",
          borderRadius: "2px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        }}
      >
        {/* Título */}
        <Box sx={{ mb: { xs: 2.5, md: 3.5 } }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: "Perandory",
              fontSize: { xs: "30px", md: "44px" },
              letterSpacing: "2px",
              lineHeight: 1.1,
              color: theme.palette.primary.main,
              mb: 2,
            }}
          >
            Deixe seu Feedback
          </Typography>
          <Box
            sx={{
              height: "1px",
              background:
                "linear-gradient(to right, #a63c06, rgba(166,60,6,0.3) 60%, transparent)",
            }}
          />
        </Box>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            id="feedback-comment"
            label="Comentário"
            multiline
            minRows={3}
            maxRows={8}
            fullWidth
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            helperText={`${comment.length}/${MAX_CHARS}`}
            slotProps={{
              htmlInput: { maxLength: MAX_CHARS },
              formHelperText: { sx: { textAlign: "right", mx: 0 } },
            }}
            sx={{ ...field, mb: 1.5 }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
            }}
          >
            <TextField
              id="feedback-name"
              label="Nome"
              required
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={field}
            />
            <TextField
              id="feedback-email"
              label="Email"
              type="email"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={field}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: theme.palette.primary.main,
                fontFamily: "Perandory",
                fontSize: "22px",
                letterSpacing: "1px",
                textTransform: "none",
                borderRadius: 0,
                height: "56px",
                width: { xs: "100%", md: "160px" },
                flexShrink: 0,
                "&:hover": { backgroundColor: "#a63c06" },
              }}
            >
              Enviar
            </Button>
          </Box>

          {status === "ok" && (
            <Typography sx={{ mt: 2, color: "#2f5d2f", fontWeight: 600 }}>
              Comentário enviado!
            </Typography>
          )}
          {status === "erro" && (
            <Typography sx={{ mt: 2, color: "#a63c06", fontWeight: 600 }}>
              Não foi possível enviar. Tente de novo.
            </Typography>
          )}
        </form>
      </Box>
    </Box>
  );
}

export default FeedbackForm;
