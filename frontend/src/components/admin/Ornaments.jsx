import { Box, Typography } from "@mui/material";
import { COLORS, FONT_DISPLAY } from "./adminStyles";

// Tracinho vermelho que fica acima dos títulos
export function AccentDash({ sx }) {
  return <Box sx={{ width: 28, height: 2, bgcolor: COLORS.accent, ...sx }} />;
}

const Diamond = () => (
  <Box sx={{ width: 7, height: 7, bgcolor: COLORS.accent, transform: "rotate(45deg)", flexShrink: 0 }} />
);

// ◆───── conteúdo opcional ─────◆
export function OrnamentDivider({ children, sx }) {
  const line = { flex: 1, height: "1px", bgcolor: "rgba(176,58,72,0.55)" };
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, ...sx }}>
      <Diamond />
      <Box sx={line} />
      {children}
      {children && <Box sx={line} />}
      <Diamond />
    </Box>
  );
}

// Título centralizado: tracinho + título + subtítulo em itálico
export function Heading({ title, subtitle }) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <AccentDash sx={{ mx: "auto", mb: 1.5 }} />
      <Typography
        variant="h5"
        sx={{
          color: COLORS.navy,
          fontFamily: FONT_DISPLAY,
          textTransform: "uppercase",
          letterSpacing: 4,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography sx={{ color: COLORS.muted, fontStyle: "italic", mt: 0.5 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}