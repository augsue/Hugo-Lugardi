// src/components/AuthorsSection.jsx
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import gauze from "../assets/imgs/gauze.png";
import Glaucio from "../assets/imgs/Glaucio.jpg";
import Lucas from "../assets/imgs/Lucas.jpg";
import Gabs from "../assets/imgs/Gabs.jpg";
import Davi from "../assets/imgs/Davi.jpg";

/* ============ PALETA (fundo claro; HEX de 6 dígitos) ============ */
const PRIMARIA = "#a8454f"; // destaque: bordas, ornamentos, hover
const TINTA = "#1a1410"; // texto escuro sobre o fundo claro
const TINTA_SUAVE = "#5a4a3c"; // texto secundário sobre o fundo claro
const FUNDO = "#120e0c"; // base escura dos cards
const TEXTO = "#efe4cc"; // texto claro sobre as fotos
const DESTAQUE_CARGO = "#e08a8f"; // cargo sobre a foto (versão clara da primária)
/* ================================================================ */

const authors = [
  { name: "Gláucio Augsuê", role: "Escritor", photo: Glaucio, text: "Autor principal do livro, criador deste mundo." },
  { name: "Lucas Augsuê", role: "Revisor técnico", photo: Lucas, text: "Lia cada capítulo e revisava os detalhes." },
  { name: "Gabriela Gerusa", role: "Coordenadora editorial", photo: Gabs, text: "Corrigia erros e avaliava os personagens." },
  { name: "Davi Augsuê", role: "Diretor de mundo", photo: Davi, text: "Ajudou a desenvolver o mundo e seus poderes." },
];

function Ornamento({ direcao = "right" }) {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        flexDirection: direcao === "right" ? "row" : "row-reverse",
        gap: 1,
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
          flex: 1,
          height: "1px",
          background: `linear-gradient(${
            direcao === "right" ? "90deg" : "270deg"
          }, ${PRIMARIA} 0%, ${PRIMARIA}00 100%)`,
        }}
      />
    </Box>
  );
}

function AuthorCard({ name, role, photo, text, height = "94%" }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height,
        minWidth: 0,
        borderRadius: "6px",
        overflow: "hidden",
        backgroundColor: FUNDO,
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        border: `1px solid ${FUNDO}`,
        boxShadow: "0 10px 26px rgba(0,0,0,.35)",
        transition: "transform .3s ease, box-shadow .3s ease, border-color .3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: PRIMARIA,
          boxShadow: `0 16px 34px rgba(0,0,0,.45), 0 0 22px ${PRIMARIA}55`,
          "&::after": { borderColor: `${TEXTO}99` },
          "& .card-brilho": { transform: "translateX(260%) skewX(-20deg)" },
          "& .card-linha": { width: 64 },
        },
        // degradê escuro para leitura
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to top, ${FUNDO}f2 18%, ${FUNDO}8c 50%, ${FUNDO}1a 100%)`,
        },
        // moldura interna
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 8,
          border: `1px solid ${TEXTO}40`,
          borderRadius: "3px",
          pointerEvents: "none",
          zIndex: 2,
          transition: "border-color .3s",
        },
      }}
    >
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
            "linear-gradient(90deg, transparent, rgba(255,255,255,.14), transparent)",
          transform: "skewX(-20deg)",
          transition: "transform .9s ease",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          p: "8%",
          pb: "7%",
          color: TEXTO,
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Perandory",
            fontSize: "clamp(1.4rem, 2.1vw, 2rem)",
            letterSpacing: 2,
            textTransform: "uppercase",
            lineHeight: 1.1,
            textShadow: "0 2px 10px rgba(0,0,0,.9)",
          }}
        >
          {name}
        </Typography>

        <Box
          className="card-linha"
          sx={{
            width: 30,
            height: "2px",
            bgcolor: PRIMARIA,
            my: 1,
            transition: "width .4s ease",
          }}
        />

        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(0.8rem, 0.95vw, 1rem)",
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: DESTAQUE_CARGO,
            mb: "0.6rem",
          }}
        >
          {role}
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "clamp(0.85rem, 1vw, 1.05rem)",
            lineHeight: 1.55,
            opacity: 0.92,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

export default function AuthorsSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "auto", md: "80vh" },
        backgroundColor: "#f1f1f1",
        backgroundImage: `url(${gauze})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxSizing: "border-box",
        px: { xs: 2, md: "4%" },
        pb: { xs: 4, md: 0 },
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        // fios vinho com degradê nas bordas
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          height: "1px",
          background: `linear-gradient(90deg, ${PRIMARIA}00 0%, ${PRIMARIA} 50%, ${PRIMARIA}00 100%)`,
          pointerEvents: "none",
          zIndex: 1,
        },
        "&::before": { top: 0 },
        "&::after": { bottom: 0 },
      }}
    >
      {/* Título */}
      <Box sx={{ py: { xs: 3, md: 4 }, px: { md: 4 } }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Ornamento direcao="right" />
          <Typography
            sx={{
              fontFamily: "Perandory",
              color: TINTA,
              fontSize: { xs: "36px", md: "56px" },
              letterSpacing: { xs: 5, md: 10 },
              lineHeight: 1.1,
              textTransform: "uppercase",
              textShadow: `0 0 24px ${PRIMARIA}33`,
            }}
          >
            Autores
          </Typography>
          <Ornamento direcao="left" />
        </Box>
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            color: TINTA_SUAVE,
            textAlign: "center",
            fontSize: { xs: 13, md: 16 },
            mt: 1,
          }}
        >
          As mentes por trás da Ordem Magoi.
        </Typography>
      </Box>

      {/* Desktop: grid fixo */}
      <Box
        sx={{
          display: { xs: "none", md: "grid" },
          flex: 1,
          minHeight: 0,
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "100%",
          gap: "2%",
        }}
      >
        {authors.map((author) => (
          <AuthorCard key={author.name} {...author} />
        ))}
      </Box>

      {/* Celular: carrossel com autoplay */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={600}
          slidesPerView={1}
          spaceBetween={14}
          style={{ padding: "4px 0 8px" }}
        >
          {authors.map((author) => (
            <SwiperSlide key={author.name}>
              <Box sx={{ height: 440 }}>
                <AuthorCard {...author} height="100%" />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}