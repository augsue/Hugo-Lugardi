import { useState } from "react";
import { Box, Fade, Typography, TextField, Button } from "@mui/material";

// Cores base (trocar pelos tokens do tema do site, se já existirem)
const RED = "#a8454f";
const BG = "#0d0b0b";
const TEXT = "#e8dcc8";

export default function LoginOverlay({ open, onSubmit }) {
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await onSubmit(key); // lança erro se a chave for inválida
    } catch {
      setError("Chave inválida.");
      setKey("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fade in={open} timeout={600} unmountOnExit>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 2000, // acima de tudo (header incluso)
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: BG,
          backgroundImage:
            "radial-gradient(ellipse at top, rgba(120,30,40,0.25), transparent 60%)",
          px: 2,
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            maxWidth: 420,
            p: 4,
            textAlign: "center",
            border: `1px solid ${RED}`,
            outline: "1px solid rgba(192,57,75,0.3)",
            outlineOffset: 6,
            bgcolor: "rgba(0,0,0,0.45)",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: TEXT, textTransform: "uppercase", letterSpacing: 4 }}
          >
            Acesso
          </Typography>

          {/* Divisor vermelho, igual ao dos cards da Wiki */}
          <Box sx={{ width: 32, height: 2, bgcolor: RED, mx: "auto", my: 2 }} />

          <Typography
            sx={{ color: "rgba(232,220,200,0.7)", fontStyle: "italic", mb: 3 }}
          >
            Área restrita. Informe a chave de acesso.
          </Typography>

          <TextField
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Chave de acesso"
            autoFocus
            fullWidth
            error={!!error}
            helperText={error}
            slotProps={{ input: { sx: { color: TEXT } } }}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(192,57,75,0.5)" },
                "&:hover fieldset": { borderColor: RED },
                "&.Mui-focused fieldset": { borderColor: RED },
                "&.Mui-error fieldset": { borderColor: RED },
              },
            }}
          />

          <Button
            type="submit"
            sx={{
              color: TEXT,
              border: `1px solid ${RED}`,
              borderRadius: 0,
              px: 4,
              textTransform: "uppercase",
              letterSpacing: 3,
              "&:hover": { bgcolor: "rgba(192,57,75,0.15)" },
            }}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Fade>
  );
}
