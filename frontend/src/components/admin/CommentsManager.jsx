import { useEffect, useState } from "react";
import { Box, Button, Stack, Switch, Typography, CircularProgress } from "@mui/material";
import AdminCard from "./AdminCard";
import { AccentDash } from "./Ornaments";
import { COLORS, FONT_DISPLAY, outlineBtnSx, solidBtnSx } from "./adminStyles";
import { getComments, setCommentPinned } from "../../services/adminApi";

export default function CommentsManager() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [onlyPinned, setOnlyPinned] = useState(false);

  useEffect(() => {
    getComments() // TODO (back): conectar em adminApi.getComments
      .then(setComments)
      .catch(() => setError("Não foi possível carregar os comentários."))
      .finally(() => setLoading(false));
  }, []);

  const handleTogglePin = async (comment) => {
    const pinned = !comment.pinned;
    // Atualiza na tela na hora e desfaz se o back falhar
    setComments((prev) => prev.map((c) => (c.id === comment.id ? { ...c, pinned } : c)));
    try {
      await setCommentPinned(comment.id, pinned); // TODO (back): conectar em adminApi.setCommentPinned
    } catch {
      setComments((prev) => prev.map((c) => (c.id === comment.id ? { ...c, pinned: !pinned } : c)));
      setError("Não foi possível atualizar o comentário.");
    }
  };

  const visible = onlyPinned ? comments.filter((c) => c.pinned) : comments;

  return (
    <AdminCard title="Comentários" subtitle="Escolha quais ficam na seção de reviews do site.">
      <Stack direction="row" spacing={2} sx={{ mb: 4, justifyContent: "center" }}>
        <Button sx={onlyPinned ? outlineBtnSx : solidBtnSx} onClick={() => setOnlyPinned(false)}>
          Todos ({comments.length})
        </Button>
        <Button sx={onlyPinned ? solidBtnSx : outlineBtnSx} onClick={() => setOnlyPinned(true)}>
          Fixados ({comments.filter((c) => c.pinned).length})
        </Button>
      </Stack>

      {error && <Typography sx={{ color: "#9b2c2c", mb: 2, textAlign: "center" }}>{error}</Typography>}
      {loading && <Box sx={{ textAlign: "center" }}><CircularProgress size={24} sx={{ color: COLORS.navy }} /></Box>}
      {!loading && visible.length === 0 && (
        <Typography sx={{ color: COLORS.muted, fontStyle: "italic", textAlign: "center" }}>
          Nenhum comentário por aqui.
        </Typography>
      )}

      <Stack spacing={2.5}>
        {visible.map((c) => (
          <Box
            key={c.id}
            sx={{
              position: "relative",
              p: 3,
              bgcolor: "rgba(255,255,255,0.65)",
              border: `1px solid ${c.pinned ? COLORS.accent : "rgba(15,28,43,0.3)"}`,
              display: "flex",
              gap: 3,
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 4,
                border: `1px solid ${c.pinned ? "rgba(176,58,72,0.45)" : "rgba(15,28,43,0.12)"}`,
                pointerEvents: "none",
              },
            }}
          >
            <Box sx={{ flex: 1, minWidth: 240 }}>
              {c.pinned && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <AccentDash />
                  <Typography sx={{ color: COLORS.accent, fontSize: 12, letterSpacing: 3, textTransform: "uppercase" }}>
                    Fixado na review
                  </Typography>
                </Box>
              )}
              <Typography sx={{ color: COLORS.navy, fontFamily: FONT_DISPLAY, textTransform: "uppercase", letterSpacing: 2, fontSize: 20 }}>
                {c.name}
              </Typography>
              <Typography sx={{ color: COLORS.muted, fontStyle: "italic", fontSize: 14, mb: 1 }}>
                {c.email} · {new Date(c.createdAt).toLocaleString("pt-BR")}
              </Typography>
              <Typography sx={{ color: COLORS.navy, whiteSpace: "pre-wrap" }}>{c.text}</Typography>
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <Switch
                checked={c.pinned}
                onChange={() => handleTogglePin(c)}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": { color: COLORS.accent },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": { bgcolor: COLORS.accent },
                }}
              />
              <Typography sx={{ color: COLORS.muted, fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>
                Fixar
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </AdminCard>
  );
}