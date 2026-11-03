import { Box } from "@mui/material";
import { COLORS } from "./adminStyles";
import { Heading, OrnamentDivider } from "./Ornaments";

// Moldura: borda azul-marinho + filete interno vermelho
export default function AdminCard({ title, subtitle, children, sx }) {
  return (
    <Box
      sx={{
        position: "relative",
        p: { xs: 2.5, md: 5 },
        bgcolor: COLORS.paper,
        border: `1px solid ${COLORS.navy}`,
        boxShadow: "0 6px 24px rgba(0,0,0,0.15)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 6,
          border: "1px solid rgba(176,58,72,0.6)",
          pointerEvents: "none",
        },
        ...sx,
      }}
    >
      {title && (
        <>
          <Heading title={title} subtitle={subtitle} />
          <OrnamentDivider sx={{ my: 3 }} />
        </>
      )}
      {children}
    </Box>
  );
}