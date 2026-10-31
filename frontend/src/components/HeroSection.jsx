// src/components/HeroSection.jsx
import bookCover from "../assets/imgs/book-cover.jpeg";
import book from "../assets/imgs/library.png";
import { Box, Typography } from "@mui/material";

/* ============ PALETA (igual à WikiPage; HEX de 6 dígitos) ============ */
const PRIMARIA = "#a8454f";
const TEXTO = "#efe4cc";
const TEXTO_SUAVE = "#b9ab8e";
const FUNDO = "#120e0c";
/* ===================================================================== */

export default function HeroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "90vh", md: "96vh" },
        backgroundImage: `url(${book})`,
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
          minHeight: { xs: "100px", md: "700px" },
          mx: "auto",
          boxSizing: "border-box",
          p: { xs: "28px 20px", md: "48px 56px" },
          color: TEXTO,
          border: `1px solid ${PRIMARIA}47`,
          borderRadius: "4px",
          backgroundImage: [
            // reflexo diagonal (vidro)
            "linear-gradient(115deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 22%, transparent 42%)",
            // brilho vinho no canto superior esquerdo
            `radial-gradient(ellipse at 0% 0%, ${PRIMARIA}22, transparent 55%)`,
            // base escura
            `linear-gradient(to right, ${FUNDO}eb 0%, #1c1714cc 50%, ${FUNDO}eb 100%)`,
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
              fontSize: { xs: "26px", md: "46px" },
              lineHeight: 1.15,
              letterSpacing: { xs: 1, md: 3 },
              textTransform: "uppercase",
              pb: 1.5,
              textShadow: `0 0 24px ${PRIMARIA}88, 0 2px 6px rgba(0,0,0,.8)`,
            }}
          >
            Hugo Lugardi e a Ordem Magoi
          </Typography>

          {/* Linha com losango */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
                flex: 1,
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
              float: "left",
              width: { xs: "120px", md: "300px" },
              mr: { xs: 2, md: 4 },
              mb: { xs: 1, md: 2 },
              borderRadius: "3px",
              overflow: "hidden", // mantém o brilho dentro da capa
              border: `1px solid ${PRIMARIA}`,
              boxShadow: `0 14px 34px rgba(0,0,0,.7), 0 0 28px ${PRIMARIA}40`,
              transition: "transform .4s ease, box-shadow .4s ease",
              // passa o brilho e descansa o resto do ciclo
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
                border: `1px solid ${TEXTO}40`,
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
              fontSize: { xs: "15px", md: "19px" },
              lineHeight: 1.8,
              "&::first-letter": {
                fontFamily: "Perandory",
                color: PRIMARIA,
                filter: "brightness(1.35)",
                fontSize: { xs: "2.7em", md: "3.4em" },
                float: "left",
                lineHeight: 0.75,
                mt: { xs: "0.22em", md: "0.12em" },
                pr: 1,
              },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Odit earum ipsum
            enim soluta! Distinctio aliquid iste dolor maiores, ipsum earum sunt
            blanditiis aliquam doloribus voluptate. Rem consectetur omnis
            accusamus quas! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. A facere quibusdam, numquam praesentium adipisci sed
            consecteturs officia, iste modi aliquam suscipit dicta voluptates
            eveniet. Perferendis modi praesentium delectus dolorem a!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
