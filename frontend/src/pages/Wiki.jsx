import { useParams, Link } from "react-router-dom";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import whiteGauze from "../assets/imgs/gauze.png";
import art from "../assets/imgs/art.jpg";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Wiki() {
  const { slug } = useParams();
  const title = slug ? slug.replace(/-/g, " ") : "Wiki Page";
  const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);
  const displayTitle = formattedTitle.replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header />

      {/* Fundo da página (igual ao original) */}
      <Box
        sx={{
          backgroundImage: `url(${whiteGauze})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 12, md: 10 },
          pb: { xs: 5, md: 8 },
          px: { xs: 2, md: 3 },
        }}
      >
        {/* Card transparente com blur */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1000px",
            boxSizing: "border-box",
            color: "#0d1b2a",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
            border: "1px solid rgba(0, 0, 0, 0.25)",
            boxShadow: {
              xs: "0 6px 20px rgba(0,0,0,0.3)",
              md: "10px 10px 34px rgba(0,0,0,0.35)",
            },
          }}
        >
          {/* Barra de título */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, md: 2 },
              px: { xs: 1, md: 2 },
              py: { xs: 1, md: 1.5 },
              backgroundImage:
                "linear-gradient(to right, #0a0908 0%, #161a1d 50%, #0a0908 100%)",
              borderBottom: "2px solid #000",
            }}
          >
            <IconButton
              component={Link}
              to="/"
              aria-label="Voltar para a home"
              sx={{ color: "#e8e4dc" }}
            >
              <ArrowBackIcon />
            </IconButton>

            <Box
              sx={{
                display: { xs: "none", md: "block" },
                height: "1px",
                flex: 1,
                backgroundColor: "#e8e4dc",
              }}
            />
            <Typography
              sx={{
                flex: { xs: 1, md: "none" },
                textAlign: "center",
                fontSize: { xs: 28, md: 45 },
                fontFamily: "Perandory",
                letterSpacing: { xs: "2px", md: "3px" },
                lineHeight: 1.1,
                color: "#e8e4dc",
                wordBreak: "break-word",
                pr: { xs: 5, md: 0 }, // compensa a seta pra centralizar o título
              }}
            >
              {displayTitle}
            </Typography>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                height: "1px",
                flex: 1,
                backgroundColor: "#e8e4dc",
              }}
            />
          </Box>

          {/* Conteúdo */}
          <Box sx={{ p: { xs: "22px 18px", md: "40px 60px" } }}>
            {/* Título + linha */}
            <Box sx={{ mb: { xs: 2, md: 3 } }}>
              <Typography
                component="h1"
                sx={{
                  fontFamily: "Perandory",
                  fontSize: { xs: "30px", md: "48px" },
                  lineHeight: 1.1,
                  pb: 1,
                  wordBreak: "break-word",
                }}
              >
                {displayTitle}
              </Typography>
              <Box
                sx={{
                  height: "1px",
                  background:
                    "linear-gradient(to right, #a63c06, rgba(166,60,6,0.3) 60%, transparent)",
                }}
              />
            </Box>

            {/* Imagem flutuando + texto contornando */}
            <Box
              sx={{
                display: "flow-root",
                pb: { xs: 2, md: 3 },
                borderBottom: "1px solid #050505",
              }}
            >
              <Box
                component="img"
                src={art}
                alt={displayTitle}
                sx={{
                  float: "left",
                  width: { xs: "120px", md: "240px" },
                  height: "auto",
                  mr: { xs: 2, md: 4 },
                  mb: { xs: 1, md: 2 },
                  border: "2px solid #2d2a32",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Play Fair",
                  fontSize: { xs: "15px", md: "18px" },
                  lineHeight: 1.7,
                  "&::first-letter": {
                    fontFamily: "Perandory",
                    fontSize: { xs: "2.8em", md: "3.4em" },
                    float: "left",
                    lineHeight: 0.75,
                    mt: {xs: "0.22em", md: "0.12em"},
                    mr: "0.12em",
                  },
                }}
              >
                Placeholder para o slug: "{slug}". Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Natus nobis facere voluptate non
                ex atque molestiae, laboriosam quas consectetur, veniam odit
                fugit magnam, sapiente a expedita possimus inventore aspernatur
                libero. Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Voluptate impedit quaerat veniam dolorum! Non veritatis
                nulla laudantium quas at impedit? Doloribus, odio distinctio
                labore magni obcaecati esse facilis ipsam accusantium?
              </Typography>
            </Box>

            {/* Texto de baixo */}
            <Typography
              sx={{
                fontFamily: "Play Fair",
                fontSize: { xs: "15px", md: "18px" },
                lineHeight: 1.7,
                pt: { xs: 2, md: 3 },
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              odio perferendis veniam officiis, obcaecati tenetur perspiciatis
              eaque, adipisci, excepturi culpa facilis provident minima tempore
              non incidunt harum assumenda ullam sapiente. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam sequi dicta
              laudantium ducimus repellendus voluptates asperiores.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}