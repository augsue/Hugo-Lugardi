// AuthorsSection.jsx
import { Box, Typography } from "@mui/material";
import gauze from "../assets/imgs/gauze.png";
import Glaucio from "../assets/imgs/Glaucio.jpg";
import Lucas from "../assets/imgs/Lucas.jpg";
import Gabs from "../assets/imgs/Gabs.jpg";
import Davi from "../assets/imgs/Davi.jpg";

const authors = [
  {
    name: "Gláucio Augsuê",
    role: "Escritor",
    photo: Glaucio,
    text: "Autor principal do livro, criador deste mundo.",
  },
  {
    name: "Lucas Augsuê",
    role: "Revisor técnico",
    photo: Lucas,
    text: "Lia cada capítulo e revisava os detalhes.",
  },
  {
    name: "Gabriela Gerusa",
    role: "Coordenadora editorial",
    photo: Gabs,
    text: "Corrigia erros e avaliava os personagens.",
  },
  {
    name: "Davi Augsuê",
    role: "Diretor de mundo",
    photo: Davi,
    text: "Ajudou a desenvolver o mundo e seus poderes.",
  },
];

function AuthorCard({ name, role, photo, text }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "94%",
        minWidth: 0,
        borderRadius: "4px",
        overflow: "hidden",
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
        width: "100vw",
        height: "90vh",
        backgroundColor: "#f1f1f1",
        backgroundImage: `url(${gauze})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxSizing: "border-box",
        px: "4%",
        py: "3%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          gap: 2,
          mb: 6,
        }}
      >

        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            fontSize: "clamp(2rem, 4vw, 3.6rem)",
            fontFamily: "Eloquence",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Autores
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "100%",
          gap: "2%",
        }}
      >
        {authors.map((author) => (
          <AuthorCard key={author.name} {...author} />
        ))}
      </Box>
    </Box>
  );
}
