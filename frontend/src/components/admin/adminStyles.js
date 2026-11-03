export const COLORS = {
  navy: "#0f1c2b",
  accent: "#b03a48", // vermelho da wiki, usado nos ornamentos e filetes
  paper: "rgba(245,244,242,0.92)",
  muted: "rgba(15,28,43,0.65)",
  cream: "#efe6d6",
};

// TODO: trocar pela fonte dos títulos do site
export const FONT_DISPLAY = "Perandory";

export const fieldSx = {
  "& .MuiInputLabel-root": {
    color: COLORS.navy,
    "&.Mui-focused": { color: COLORS.navy },
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 0,
    color: COLORS.navy,
    bgcolor: "rgba(255,255,255,0.7)",
    "& fieldset": { borderColor: COLORS.navy },
    "&:hover fieldset": { borderColor: COLORS.navy },
    "&.Mui-focused fieldset": { borderColor: COLORS.accent, borderWidth: 1 },
  },
};

// Botões com "borda dupla" (borda + outline deslocado), como o "Veja a wiki completa"
const btnBase = {
  borderRadius: 0,
  px: 3,
  py: 1,
  textTransform: "uppercase",
  letterSpacing: 3,
  fontFamily: FONT_DISPLAY,
  outline: "1px solid rgba(176,58,72,0.45)",
  outlineOffset: 3,
  transition: "all .2s",
};

export const solidBtnSx = {
  ...btnBase,
  bgcolor: COLORS.navy,
  color: "#f2f1ef",
  "&:hover": { bgcolor: "#1a2d44", outlineColor: COLORS.accent },
  "&.Mui-disabled": { bgcolor: "rgba(15,28,43,0.35)", color: "#f2f1ef", outline: "none" },
};

export const outlineBtnSx = {
  ...btnBase,
  color: COLORS.navy,
  border: `1px solid ${COLORS.navy}`,
  "&:hover": { bgcolor: "rgba(15,28,43,0.06)", outlineColor: COLORS.accent },
  "&.Mui-disabled": { outline: "none" },
};

export const dangerBtnSx = {
  ...btnBase,
  color: "#9b2c2c",
  border: "1px solid #9b2c2c",
  outline: "1px solid rgba(155,44,44,0.35)",
  "&:hover": { bgcolor: "rgba(155,44,44,0.08)", outlineColor: "#9b2c2c" },
};

// Papel dos diálogos (mesma moldura dos cards)
export const dialogPaperSx = {
  borderRadius: 0,
  bgcolor: "#f5f4f2",
  backgroundImage: "none",
  border: `1px solid ${COLORS.navy}`,
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 5,
    border: `1px solid ${COLORS.accent}`,
    opacity: 0.5,
    pointerEvents: "none",
  },
};