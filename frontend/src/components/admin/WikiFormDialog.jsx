import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import { Heading } from "./Ornaments";
import {
  COLORS,
  dialogPaperSx,
  fieldSx,
  outlineBtnSx,
  solidBtnSx,
} from "./adminStyles";

const EMPTY = { title: "", subtitle: "", text: "", category: "" };

export default function WikiFormDialog({
  open,
  page,
  categories = [],
  onClose,
  onSave,
}) {
  const [form, setForm] = useState(EMPTY);
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Preenche o formulário ao abrir (vazio = criar, com página = editar)
  useEffect(() => {
    if (!open) return;
    setForm(
      page
        ? {
            title: page.title,
            subtitle: page.subtitle,
            text: page.text,
            category: page.category,
          }
        : EMPTY,
    );
    setPreview(page?.imageUrl || "");
    setImageFile(null);
    setError("");
  }, [open, page]);

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 4 * 1024 * 1024) {
      setError("A imagem precisa ter até 4 MB.");
      return;
    }
    setError("");
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (!form.title.trim()) return setError("O título é obrigatório.");
    if (!form.category) return setError("Escolha uma categoria.");
    if (!preview) return setError("Escolha uma imagem.");
    setSaving(true);
    setError("");
    try {
      await onSave({ ...form, imageFile, imageUrl: page?.imageUrl });
    } catch {
      setError("Não foi possível salvar. Tente de novo.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={saving ? undefined : onClose}
      fullWidth
      maxWidth="sm"
      slotProps={{ paper: { sx: dialogPaperSx } }}
    >
      <Box sx={{ pt: 4, px: 4 }}>
        <Heading title={page ? "Editar página" : "Nova página"} />
      </Box>

      <DialogContent sx={{ px: 4 }}>
        <Stack spacing={2.5} sx={{ mt: 2 }}>
          <TextField
            label="Título"
            value={form.title}
            onChange={handleChange("title")}
            sx={fieldSx}
            fullWidth
          />
          <TextField
            label="Subtítulo"
            value={form.subtitle}
            onChange={handleChange("subtitle")}
            sx={fieldSx}
            fullWidth
          />
          <TextField
            select
            label="Categoria"
            value={form.category}
            onChange={handleChange("category")}
            sx={fieldSx}
            fullWidth
          >
            {categories.map((c) => (
              <MenuItem key={c.key} value={c.key}>
                {c.label}
              </MenuItem>
            ))}
          </TextField>
          <Box>
            <Button component="label" sx={outlineBtnSx}>
              {preview ? "Trocar imagem" : "Escolher imagem"}
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                hidden
                onChange={handleFile}
              />
            </Button>
            {preview && (
              <Box
                component="img"
                src={preview}
                alt="Prévia"
                sx={{
                  display: "block",
                  mt: 3,
                  maxWidth: "100%",
                  maxHeight: 220,
                  border: `1px solid ${COLORS.navy}`,
                }}
              />
            )}
          </Box>

          <TextField
            label="Texto"
            value={form.text}
            onChange={handleChange("text")}
            sx={fieldSx}
            fullWidth
            multiline
            minRows={6}
          />

          {error && <Typography sx={{ color: "#9b2c2c" }}>{error}</Typography>}
        </Stack>
      </DialogContent>

      <DialogActions sx={{ p: 4, pt: 2, justifyContent: "center", gap: 2 }}>
        <Button sx={outlineBtnSx} onClick={onClose} disabled={saving}>
          Cancelar
        </Button>
        <Button sx={solidBtnSx} onClick={handleSubmit} disabled={saving}>
          {saving ? "Salvando..." : "Salvar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
