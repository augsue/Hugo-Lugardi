// src/components/WikiCard.jsx
import { Card, CardActionArea, CardMedia, Box, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

/* ============ PALETA (igual à WikiPage; HEX de 6 dígitos) ============ */
const PRIMARIA = "#a8454f";
const TEXTO = "#efe4cc";
const TEXTO_SUAVE = "#b9ab8e";
const FUNDO = "#120e0c";
/* ===================================================================== */

export default function WikiCard({
  image,
  title,
  subtitle,
  color = PRIMARIA, // cor de destaque do card
  href,
  onClick,
  ...props
}) {
  return (
    <Card
      {...props}
      sx={{
        position: "relative",
        height: "100%",
        borderRadius: "6px",
        overflow: "hidden",
        border: `1px solid ${TEXTO}24`,
        bgcolor: FUNDO,
        backgroundImage: "none",
        boxShadow: "0 10px 26px rgba(0,0,0,.55)",
        transition:
          "transform .4s ease, box-shadow .4s ease, border-color .4s ease",
        // moldura interna
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 8,
          border: `1px solid ${alpha(color, 0.4)}`,
          borderRadius: "3px",
          pointerEvents: "none",
          zIndex: 3,
          transition: "border-color .4s",
        },
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: color,
          boxShadow: `0 16px 34px rgba(0,0,0,.65), 0 0 26px ${alpha(color, 0.45)}`,
          "&::after": { borderColor: alpha(color, 0.8) },
          "& .card-bg": { transform: "scale(1.08)" },
          "& .card-brilho": { transform: "translateX(260%) skewX(-20deg)" },
          "& .card-linha": { width: 64 },
        },
        ...props.sx,
      }}
    >
      <CardActionArea
        href={href}
        onClick={onClick}
        aria-label={`Explorar ${title}`}
        sx={{
          position: "relative",
          height: "100%",
          display: "block",
          "&:hover .MuiCardActionArea-focusHighlight": { opacity: 0 },
        }}
      >
        {/* Imagem de fundo */}
        <CardMedia
          className="card-bg"
          component="div"
          image={image}
          sx={{
            position: "absolute",
            inset: 0,
            transition: "transform .6s ease",
            filter: "saturate(.85) contrast(1.05)",
          }}
        />

        {/* Escurecimento geral leve + degradê inferior */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to top, ${FUNDO} 0%, ${alpha(FUNDO, 0.85)} 22%, ${alpha(FUNDO, 0.25)} 50%, ${alpha(FUNDO, 0.1)} 100%)`,
            zIndex: 1,
          }}
        />

        {/* Brilho no hover */}
        <Box
          className="card-brilho"
          sx={{
            position: "absolute",
            top: 0,
            left: "-60%",
            width: "40%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,.12), transparent)",
            transform: "skewX(-20deg)",
            transition: "transform .9s ease",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        {/* Conteúdo */}
        <Box
          sx={{
            position: "relative",
            zIndex: 4,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            p: 3,
            pb: 3.5,
            textAlign: "center",
          }}
        >
          <Box
            className="card-linha"
            sx={{
              width: 30,
              height: "2px",
              bgcolor: color,
              mb: 1.2,
              transition: "width .4s ease",
            }}
          />

          <Typography
            sx={{
              fontFamily: "Perandory",
              color: TEXTO,
              fontSize: "30px",
              letterSpacing: 2,
              lineHeight: 1.1,
              textTransform: "uppercase",
              textShadow: "0 2px 10px rgba(0,0,0,.9)",
            }}
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography
              variant="body2"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: TEXTO_SUAVE,
                mt: 0.8,
                textShadow: "0 1px 6px rgba(0,0,0,.9)",
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      </CardActionArea>
    </Card>
  );
}