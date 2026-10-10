// AuthorsSection.jsx
import { Box, Typography, Divider } from "@mui/material";
import bibleBackground from "../assets/imgs/bibleBackground.jpg";
import Lucas from "../assets/imgs/Lucas.jpg";
import Gabs from "../assets/imgs/Gabs.jpg";
import Davi from "../assets/imgs/Davi.jpg";

import Glaucio from "../assets/imgs/Glaucio.jpg";

function RoleDivider({ children, fontSize }) {
  return (
    <Divider
      sx={{
        width: "100%",
        px: "18%",
        color: (theme) => theme.palette.text.primary,
        fontSize,
        opacity: 0.9,
        "&::before, &::after": {
          borderColor: "#5a5a5a",
          borderBottomWidth: "0.5px",
        },
        "& .MuiDivider-wrapper": {
          px: "0.5em",
        },
      }}
    >
      {children}
    </Divider>
  );
}

function MainAuthorCard({ name, role, photo, text }) {
  return (
    <Box
      sx={{
        height: "100%",
        border: (theme) => `2px solid ${theme.palette.primary.main}`,
        minHeight: 0,
        minWidth: 0,
        backgroundColor: "#ffff",
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
        backgroundRepeat: "repeat",
        boxSizing: "border-box",
        p: "1%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "2.5%",
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.35)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.005)",
          boxShadow: "0 8px 22px rgba(0, 0, 0, 0.4)",
        },
      }}
    >
      <Box
        sx={{
          width: "80%",
          borderRadius: "50%",
          aspectRatio: "1 / 1",
          flexShrink: 0,
          overflow: "hidden",
          backgroundColor: "#3a3a3a",
          boxSizing: "border-box",
        }}
      >
        <Box
          component="img"
          src={photo}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      <Typography
        sx={{
          fontSize: "clamp(1.1rem, 2.4vw, 2.6rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          flexShrink: 0,
        }}
      >
        {name}
      </Typography>

      <RoleDivider fontSize="clamp(0.6rem, 0.8vw, 0.85rem)">{role}</RoleDivider>
      <Box sx={{ width: "90%" }}>
        <Typography
          sx={{
            fontSize: "clamp(0.6rem, 0.80vw, 0.85rem)",
            textAlign: "justify",
            flex: 1,
            minHeight: 0,
            overflow: "auto",
            color: (theme) => theme.palette.text.main,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

function CoauthorCard({ name, role, photo, text }) {
  return (
    <Box
      sx={{
        height: "100%",
        minHeight: 0,
        minWidth: 0,
        border: (theme) => `2px solid ${theme.palette.primary.main}`,
        backgroundColor: "#ffff",
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
        backgroundRepeat: "repeat",
        boxSizing: "border-box",
        p: "1%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "3%",
        maxHeight: "380px",
        boxShadow: "0 6px 10px rgba(0, 0, 0, 0.35)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.005)",
          boxShadow: "0 8px 22px rgba(0, 0, 0, 0.4)",
        },
      }}
    >
      {/* Foto circular */}
      <Box
        sx={{
          width: "60%",
          aspectRatio: "1 / 1",
          flexShrink: 0,
          borderRadius: "50%",
          overflow: "hidden",
          border: (theme) => `3px solid ${theme.palette.primary.main}`,
          boxSizing: "border-box",
        }}
      >
        <Box
          component="img"
          src={photo}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      <Typography
        sx={{
          fontSize: "clamp(0.9rem, 1.6vw, 1.6rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          flexShrink: 0,
        }}
      >
        {name}
      </Typography>

      <RoleDivider fontSize="clamp(0.6rem, 0.8vw, 0.85rem)">{role}</RoleDivider>
      <Box sx={{ width: "90%" }}>
        <Typography
          sx={{
            fontSize: "clamp(0.5rem, 0.70vw, 0.85rem)",
            textAlign: "justify",
            flex: 1,
            minHeight: 0,
            overflow: "auto",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
export default function AuthorsSection() {
  const mainAuthor = {
    name: "Gláucio Augsuê",
    role: "Escritor",
    photo: Glaucio,
    text: "Pastor Gláucio Augsuê Cavalcante e Silva, autor principal do livro, nascido em 14 de fevereiro de 1977. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum architecto beatae ipsum optio tenetur temporibus, sapiente iste perferendis quidem. Impedit, ratione aliquid inventore quam officia placeat? Repellat voluptas nihil perspiciatis?",
  };

  const coauthors = [
    {
      name: "Lucas Augsuê",
      role: "Revisor técnico",
      photo: Lucas,
      text: "Lucas, o filho mais velho, lia cada capitulo junto ao pai, avaliando, revisando e pontuando detalhes e possiveis mudanças.",
    },
    {
      name: "Gabriela Gerusa",
      role: "Coordenadora editorial",
      photo: Gabs,
      text: "Gabriela, a filha do meio, lia cada capitulo e corrigia erros ortograficos, avaliava perssonagens e pontuava detalhes a serem mudados sobre os perssonagens e a escrita.",
    },
    {
      name: "Davi Augsuê",
      role: "Diretor de mundo",
      photo: Davi,
      text: "Davi, o caçula, ajudou o pai a desenvolver o mundo e as limitações dos poderes.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        aspectRatio: "9 / 4",
        boxSizing: "border-box",
        backgroundImage: `url(${bibleBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderTop: "2px solid #1a1a1a",
        borderBottom: "2px solid #1a1a1a",
        p: "2.5%",
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gridTemplateRows: "100%",
        gap: "2.5%",
        overflow: "hidden",
      }}
    >
      
      <MainAuthorCard {...mainAuthor} />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "90%",
          gap: "2.5%",
          minWidth: 0,
          minHeight: 0,
        }}
      >
        {coauthors.map((author) => (
          <CoauthorCard key={author.name} {...author} />
        ))}
      </Box>
    </Box>
  );
}
