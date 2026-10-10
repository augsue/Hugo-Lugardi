import * as React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function WikiCard({
  image,
  title,
  subtitle,
  emoji,
  color = "#2e7d32", // cor hexadecimal do tema do card
  href,
  onClick,
  ...props
}) {
  return (
    <Card
      {...props}
      sx={{
        height: "100%",
        borderRadius: "1%",
        border: `1px solid ${alpha(color, 0.3)}`,
        bgcolor: "transparent",
        backgroundImage: "none",
        overflow: "hidden",
        boxShadow: `0 0 40px -15px ${alpha(color, 0.5)}`,
        transition: "transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out",
        "&:hover": {
          transform: "scale(1.04)",
          borderColor: alpha(color, 0.3),
          boxShadow: `0 0 60px -15px ${alpha(color, 0.3)}`,
          "& .card-bg": { transform: "scale(1.1)" },
          "& .card-btn": {
            bgcolor: alpha(color, 0.4),
            borderColor: alpha(color, 0.1),
          },
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
        {/* Imagem de fundo com zoom no hover */}
        <CardMedia
          className="card-bg"
          component="div"
          image={image}
          sx={{
            position: "absolute",
            inset: 0,
            transition: "transform 0.5s ease-in-out",
          }}
        />

        {/* Overlay com gradiente da cor do tema */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to top, ${alpha(color, 0.9)}, ${alpha(color, 0.6)} 30%, transparent 60%)`,
          }}
        />

        {/* Conteúdo */}
        <Box
          sx={{
            position: "relative",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            p: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h4" fontWeight={10} letterSpacing="-0.02em">
            {title}{" "}
            {emoji && (
              <Box component="span" sx={{ fontSize: "1.5rem", ml: 0.5 }}>
                {emoji}
              </Box>
            )}
          </Typography>

          {subtitle && (
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.8)", mt: 0.5, fontWeight: 500 }}
            >
              {subtitle}
            </Typography>
          )}

          {/* Botão */}
          <Box
            className="card-btn"
            sx={{
              mt: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: alpha(color, 0.2),
              backdropFilter: "blur(8px)",
              border: `1px solid ${alpha(color, 0.3)}`,
              borderRadius: 2,
              px: 2,
              py: 1.5,
              transition: "all 0.3s ease",
            }}
          >
            <Typography variant="body2" fontWeight={600} letterSpacing="0.02em">
              Ver detalhes
            </Typography>
            <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
