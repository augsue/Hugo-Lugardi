// src/components/HeroSection.jsx
import bookCover from "../assets/imgs/book-cover.jpeg";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import book from "../assets/imgs/Bookshelf.jpg";
import { Box, Typography, Button } from "@mui/material";
import { FaAmazon } from "react-icons/fa";

/* ============ PALETA (igual à WikiPage; HEX de 6 dígitos) ============ */
const PRIMARIA = "#a8454f";
const TEXTO_SUAVE = "#b9ab8e";
const TEXTO = "#efe4cc";
const FUNDO = "#120e0c";
/* ===================================================================== */

const textoBase = {
  fontFamily: "Play Fair",
  color: TEXTO,
  fontSize: { xs: "15px", md: "20px" },
  lineHeight: 1.7,
  mb: 2,
};

export default function HeroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "90vh", md: "97vh" },
        backgroundImage: `linear-gradient(180deg, ${FUNDO}10 0%, ${FUNDO}cc 150%), url(${book})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 12, md: 14 },
        px: { xs: 2, md: 3 },
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Painel principal */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: { xs: "100%", md: "1300px" },
          minHeight: { xs: "100px", md: "auto" },
          mx: "auto",
          boxSizing: "border-box",
          p: { xs: "28px 20px", md: "48px 56px" },
          color: TEXTO,
          border: `1px solid ${PRIMARIA}47`,
          borderRadius: "4px",
          backgroundImage: [
            // reflexo diagonal (vidro)
            "linear-gradient(115deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 32%, transparent 92%)",
            // brilho vinho no canto superior esquerdo
            `radial-gradient(ellipse at 0% 0%, ${PRIMARIA}22, transparent 55%)`,
            // base escura
            `linear-gradient(to right, ${FUNDO}eb 0%, #1c1714cc 40%, ${FUNDO}eb 110%)`,
          ].join(", "),
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: [
            `inset 0 0 0 6px ${FUNDO}b3`,
            `inset 0 0 0 7px ${PRIMARIA}26`,
            "0 24px 60px rgba(0,0,0,.65)",
          ].join(", "),
        }}
      >
        {/* Cabeçalho */}
        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          <Typography
            sx={{
              fontFamily: "Play Fair",
              fontSize: { xs: "10px", md: "14px" },
              mb: 1,
              fontWeight: "bold",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: PRIMARIA,
              filter: "brightness(1.35)",
            }}
          >
            Gláucio Augsue & Seus Filhos
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontFamily: "Perandory",
              fontWeight: 400,
              fontSize: { xs: "22px", md: "46px" },
              lineHeight: 1.15,
              letterSpacing: { xs: 0.5, md: 3 },
              textTransform: "uppercase",
              pb: 1.5,
              textShadow: `0 0 24px ${PRIMARIA}88, 0 2px 6px rgba(0,0,0,.8)`,
            }}
          >
            Hugo Lugardi e a Ordem Magoi
          </Typography>

          {/* Linha com losango */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: 7,
                height: 7,
                bgcolor: PRIMARIA,
                transform: "rotate(45deg)",
                flexShrink: 0,
              }}
            />
            <Box
              sx={{
                flex: "1 1 auto",
                minWidth: 0,
                width: "100%",
                height: "1px",
                background: `linear-gradient(90deg, ${PRIMARIA}, ${PRIMARIA}00)`,
              }}
            />
          </Box>
        </Box>

        {/* Capa + texto */}
        <Box sx={{ display: "flow-root" }}>
          {/* Capa */}
          <Box
            sx={{
              position: "relative",
              float: { xs: "none", md: "left" },
              display: "block",
              width: { xs: "75%", md: "320px" },
              mx: { xs: "auto", md: 0 },
              mr: { xs: "auto", md: 4 },
              mb: { xs: 3, md: 2 },
              borderRadius: "3px",
              overflow: "hidden",
              border: `1px solid ${PRIMARIA}`,
              boxShadow: `0 14px 34px rgba(0,0,0,.7), 0 0 28px ${PRIMARIA}40`,
              transition: "transform .4s ease, box-shadow .4s ease",
              "@keyframes brilhoCapa": {
                "0%": { transform: "translateX(0) skewX(-20deg)" },
                "110%": { transform: "translateX(450%) skewX(-20deg)" },
                "100%": { transform: "translateX(450%) skewX(-20deg)" },
              },
            }}
          >
            <Box
              component="img"
              src={bookCover}
              alt="Capa do livro Hugo Lugardi e a Ordem Magoi"
              sx={{ display: "block", width: "100%", height: "auto" }}
            />

            {/* Moldura interna */}
            <Box
              sx={{
                position: "absolute",
                inset: 6,
                border: `1px solid ${PRIMARIA}60`,
                borderRadius: "2px",
                pointerEvents: "none",
              }}
            />

            {/* Brilho constante e suave */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: "-40%",
                width: "35%",
                height: "100%",
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,.1), transparent)",
                transform: "skewX(-20deg)",
                animation: "brilhoCapa 4s ease-in-out infinite",
                pointerEvents: "none",
              }}
            />
          </Box>

          <Typography
            sx={{
              fontFamily: "Play Fair",
              color: TEXTO,
              fontSize: { xs: "15px", md: "20px" },
              lineHeight: 1.7,
              mb: 2,
              "&::first-letter": {
                fontFamily: "Perandory",
                color: PRIMARIA,
                filter: "brightness(1.35)",
                fontSize: { xs: "2em", md: "2.3em" },
                float: { xs: "none", md: "left" },
                mt: { xs: 0, md: 0 },
                pr: { xs: 0, md: 0 },
              },
            }}
          >
            Hugo Lugardi é um jovem comum de Brasília, com uma vida simples e
            sonhos ainda indefinidos. Não imagina que, em breve, tudo será
            diferente.
          </Typography>

          <Typography sx={textoBase}>
            Tudo muda quando ele é chamado para algo maior do que jamais
            imaginou. Um chamado que chega de forma inesperada, carregado de
            mistério e de uma sensação difícil de explicar, como se alguém
            estivesse esperando por ele há muito tempo.
          </Typography>

          <Typography sx={textoBase}>
            Hugo vai aprender que o propósito de cada um começa com um passo de
            fé. Haverá momentos de dúvida, de medo e de coragem, e é justamente
            nesses momentos que ele descobrirá a força que sempre esteve dentro
            de si.
          </Typography>

          <Typography sx={{ ...textoBase, fontStyle: "italic", mb: 0 }}>
            Uma jornada de coragem, mistério e fé.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "row" },
              flexWrap: "nowrap",
              gap: { xs: 1, md: 2 },
              mt: 4,
              ml: { xs: 0, md: "336px" },
              clear: "none",
            }}
          >
            <Button
              component="a"
              href="https://www.amazon.com.br/dp/B0FKHNXFSD"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<FaAmazon size={20} />}
              sx={{
                flex: { xs: 1, md: "0 0 auto" },
                fontFamily: "Play Fair",
                color: TEXTO,
                borderColor: PRIMARIA,
                borderRadius: "3px",
                px: { xs: 1, md: 3 },
                py: 1.2,
                fontSize: { xs: "12px", md: "15px" },
                whiteSpace: "nowrap",
                textTransform: "none",
                "&:hover": { borderColor: TEXTO, bgcolor: `${PRIMARIA}33` },
              }}
              variant="outlined"
            >
              Comprar na Amazon
            </Button>

            <Button
              component="a"
              href="https://loja.uiclap.com/titulo/ua108108/"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<MenuBookIcon />}
              sx={{
                flex: { xs: 1, md: "0 0 auto" },
                fontFamily: "Play Fair",
                color: TEXTO,
                borderColor: PRIMARIA,
                borderRadius: "3px",
                px: { xs: 1, md: 3 },
                py: 1.2,
                fontSize: { xs: "12px", md: "15px" },
                whiteSpace: "nowrap",
                textTransform: "none",
                "&:hover": { borderColor: TEXTO, bgcolor: `${PRIMARIA}33` },
              }}
              variant="outlined"
            >
              Comprar na Uiclap
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
