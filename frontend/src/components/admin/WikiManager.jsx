import { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  Switch,
  Typography,
  CircularProgress,
} from "@mui/material";
import AdminCard from "./AdminCard";
import WikiFormDialog from "./WikiFormDialog";
import { AccentDash, Heading } from "./Ornaments";
import {
  COLORS,
  FONT_DISPLAY,
  dangerBtnSx,
  dialogPaperSx,
  outlineBtnSx,
  solidBtnSx,
} from "./adminStyles";
import {
  getWikiPages,
  createWikiPage,
  updateWikiPage,
  deleteWikiPage,
  setWikiPagePinned,
  uploadImage,
  getWikiCategories,
} from "../../services/adminApi";

// Botãozinho claro, para ficar sobre a imagem escura
const tileBtnSx = {
  color: COLORS.cream,
  border: "1px solid rgba(239,230,214,0.6)",
  borderRadius: 0,
  fontSize: 12,
  letterSpacing: 2,
  px: 2,
  py: 0.5,
  minWidth: 0,
  "&:hover": { bgcolor: "rgba(239,230,214,0.14)" },
};

export default function WikiManager() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [onlyPinned, setOnlyPinned] = useState(false);
  const [formState, setFormState] = useState({ open: false, page: null }); // page null = criar
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getWikiCategories()
      .then(setCategories)
      .catch(() => setError("Não foi possível carregar as categorias."));
    getWikiPages() // TODO (back): conectar em adminApi.getWikiPages
      .then(setPages)
      .catch(() => setError("Não foi possível carregar a wiki."))
      .finally(() => setLoading(false));
  }, []);

  // data: { title, subtitle, text, imageFile?, imageUrl? }
  const handleSave = async ({ imageFile, ...data }) => {
    // TODO (back): o upload da imagem acontece antes de salvar a página
    if (imageFile) data.imageUrl = await uploadImage(imageFile);

    if (formState.page) {
      const updated = await updateWikiPage(formState.page.id, data); // TODO (back)
      setPages((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    } else {
      const created = await createWikiPage(data); // TODO (back)
      setPages((prev) => [...prev, created]);
    }
    setFormState({ open: false, page: null });
  };

  const handleTogglePin = async (page) => {
    const pinned = !page.pinned;
    // Atualiza na tela na hora e desfaz se o back falhar
    setPages((prev) =>
      prev.map((p) => (p.id === page.id ? { ...p, pinned } : p)),
    );
    try {
      await setWikiPagePinned(page.id, pinned); // TODO (back): conectar em adminApi.setWikiPagePinned
    } catch {
      setPages((prev) =>
        prev.map((p) => (p.id === page.id ? { ...p, pinned: !pinned } : p)),
      );
      setError("Não foi possível atualizar a página.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteWikiPage(deleteTarget.id); // TODO (back)
      setPages((prev) => prev.filter((p) => p.id !== deleteTarget.id));
    } catch {
      setError("Não foi possível excluir a página.");
    }
    setDeleteTarget(null);
  };

  const visible = onlyPinned ? pages.filter((p) => p.pinned) : pages;

  return (
    <AdminCard
      title="Wiki"
      subtitle="Escolha quais páginas ficam em destaque no carrossel do site."
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{ mb: 4, justifyContent: "center" }}
      >
        <Button
          sx={onlyPinned ? outlineBtnSx : solidBtnSx}
          onClick={() => setOnlyPinned(false)}
        >
          Todas ({pages.length})
        </Button>
        <Button
          sx={onlyPinned ? solidBtnSx : outlineBtnSx}
          onClick={() => setOnlyPinned(true)}
        >
          Fixadas ({pages.filter((p) => p.pinned).length})
        </Button>
      </Stack>

      {error && (
        <Typography sx={{ color: "#9b2c2c", mb: 2, textAlign: "center" }}>
          {error}
        </Typography>
      )}
      {loading && (
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <CircularProgress size={24} sx={{ color: COLORS.navy }} />
        </Box>
      )}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
          gap: 3,
        }}
      >
        {/* Card "Nova página" */}
        <ButtonBase
          onClick={() => setFormState({ open: true, page: null })}
          sx={{
            aspectRatio: "3 / 4",
            border: `1px dashed ${COLORS.navy}`,
            flexDirection: "column",
            gap: 1,
            color: COLORS.navy,
            transition: "all .2s",
            "&:hover": {
              bgcolor: "rgba(176,58,72,0.06)",
              borderColor: COLORS.accent,
            },
          }}
        >
          <Typography
            sx={{ fontSize: 40, lineHeight: 1, color: COLORS.accent }}
          >
            +
          </Typography>
          <Typography
            sx={{
              fontFamily: FONT_DISPLAY,
              textTransform: "uppercase",
              letterSpacing: 3,
            }}
          >
            Nova página
          </Typography>
        </ButtonBase>

        {!loading && visible.length === 0 && onlyPinned && (
          <Typography
            sx={{
              color: COLORS.muted,
              fontStyle: "italic",
              alignSelf: "center",
            }}
          >
            Nenhuma página fixada.
          </Typography>
        )}

        {/* Cards das páginas, no estilo do carrossel da wiki */}
        {visible.map((p) => (
          <Box
            key={p.id}
            sx={{
              position: "relative",
              aspectRatio: "3 / 4",
              overflow: "hidden",
              border: `1px solid ${p.pinned ? COLORS.accent : COLORS.navy}`,
              bgcolor: "#14100f",
              backgroundImage: p.imageUrl ? `url(${p.imageUrl})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(10,8,8,0.95) 0%, rgba(10,8,8,0.6) 40%, transparent 75%)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 8,
                border: `1px solid ${p.pinned ? "rgba(176,58,72,1)" : "rgba(176,58,72,0.7)"}`,
                zIndex: 2,
                pointerEvents: "none",
              },
            }}
          >
            {/* Fixar no carrossel */}
            <Box
              sx={{
                position: "absolute",
                top: 18,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 3,
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                pl: 1.5,
                pr: 0.5,
                bgcolor: "rgba(10,8,8,0.65)",
                border: "1px solid rgba(239,230,214,0.25)",
              }}
            >
              <Typography
                sx={{
                  color: COLORS.cream,
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                {p.pinned ? "Fixada" : "Fixar"}
              </Typography>
              <Switch
                size="small"
                checked={!!p.pinned}
                onChange={() => handleTogglePin(p)}
                sx={{
                  "& .MuiSwitch-switchBase": { color: "rgba(239,230,214,0.8)" },
                  "& .MuiSwitch-track": {
                    bgcolor: "rgba(239,230,214,0.35)",
                    opacity: 1,
                  },
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: COLORS.cream,
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    bgcolor: COLORS.accent,
                    opacity: 1,
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 3,
                p: 3,
                textAlign: "center",
              }}
            >
              <AccentDash sx={{ mx: "auto", mb: 1 }} />
              <Typography
                sx={{
                  color: COLORS.cream,
                  opacity: 0.7,
                  fontSize: 11,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  mb: 0.5,
                }}
              >
                {categories.find((c) => c.key === p.category)?.label}
              </Typography>
              <Typography
                sx={{
                  color: COLORS.cream,
                  fontFamily: FONT_DISPLAY,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  fontSize: 22,
                }}
              >
                {p.title}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(239,230,214,0.75)",
                  fontStyle: "italic",
                  fontSize: 14,
                  mb: 2,
                }}
              >
                {p.subtitle}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{ justifyContent: "center" }}
              >
                <Button
                  size="small"
                  sx={tileBtnSx}
                  onClick={() => setFormState({ open: true, page: p })}
                >
                  Editar
                </Button>
                <Button
                  size="small"
                  sx={{
                    ...tileBtnSx,
                    color: "#e8a0a0",
                    borderColor: "rgba(232,160,160,0.6)",
                  }}
                  onClick={() => setDeleteTarget(p)}
                >
                  Excluir
                </Button>
              </Stack>
            </Box>
          </Box>
        ))}
      </Box>

      <WikiFormDialog
        categories={categories}
        open={formState.open}
        page={formState.page}
        onClose={() => setFormState({ open: false, page: null })}
        onSave={handleSave}
      />

      {/* Confirmação antes de excluir */}
      <Dialog
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        slotProps={{ paper: { sx: dialogPaperSx } }}
      >
        <Box sx={{ pt: 4, px: 4 }}>
          <Heading title="Excluir página?" />
        </Box>
        <DialogContent>
          <Typography sx={{ color: COLORS.navy, textAlign: "center" }}>
            "{deleteTarget?.title}" será apagada e não dá para desfazer.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 3, justifyContent: "center", gap: 2 }}>
          <Button sx={outlineBtnSx} onClick={() => setDeleteTarget(null)}>
            Cancelar
          </Button>
          <Button sx={dangerBtnSx} onClick={handleDelete}>
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
    </AdminCard>
  );
}
