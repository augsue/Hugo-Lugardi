// AuthorsSection.jsx
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import gauze from "../assets/imgs/gauze.png";
import Glaucio from "../assets/imgs/Glaucio.jpg";
import Lucas from "../assets/imgs/Lucas.jpg";
import Gabs from "../assets/imgs/Gabs.jpg";
import Davi from "../assets/imgs/Davi.jpg";

const authors = [
  { name: "Gláucio Augsuê", role: "Escritor", photo: Glaucio, text: "Autor principal do livro, criador deste mundo." },
  { name: "Lucas Augsuê", role: "Revisor técnico", photo: Lucas, text: "Lia cada capítulo e revisava os detalhes." },
  { name: "Gabriela Gerusa", role: "Coordenadora editorial", photo: Gabs, text: "Corrigia erros e avaliava os personagens." },
  { name: "Davi Augsuê", role: "Diretor de mundo", photo: Davi, text: "Ajudou a desenvolver o mundo e seus poderes." },
];

function AuthorCard({ name, role, photo, text, height = "94%" }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height,
        minWidth: 0,
        borderRadius: "4px",
        overflow: "hidden",
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "translateY(-4px)" },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.1))",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          p: "6%",
          color: "#fff",
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "clamp(1.1rem, 1.8vw, 1.7rem)",
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: 1.1,
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: "clamp(0.85rem, 1vw, 1.05rem)",
            fontWeight: 600,
            color: "#ffb347",
            mb: "0.6rem",
          }}
        >
          {role}
        </Typography>
        <Typography
          sx={{
            fontSize: "clamp(0.8rem, 0.95vw, 1rem)",
            lineHeight: 1.5,
            opacity: 0.9,
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
      }}
    >
      <Box sx={{ textAlign: "center", py: { xs: 3, md: 5 } }}>
        <Typography
          sx={{
            fontSize: { xs: "38px", md: "60px" },
            fontWeight: "bold",
            fontFamily: "Perandory",
            letterSpacing: "3px",
          }}
        >
          Autores
        </Typography>
      </Box>

      {/* Desktop: grid fixo (igual ao original) */}
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