import {
  Box,
  CssBaseline,
  Toolbar,
  AppBar,
  Button,
  Container,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import BookIcon from "@mui/icons-material/Book";
import bookCover from "./assets/imgs/book-cover.jpeg";
import "@fontsource/cinzel";
import brasilia from "./assets/imgs/brasilia.png";

export default function App() {
  const navItems = ["Home", "Wiki", "Autores", "Feedback"];

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Hero Section */}
        <Box
          sx={{
            minHeight: "100vh",
            backgroundImage: `url(${brasilia})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "relative",
          }}
        >
          <AppBar
            position="relative"
            sx={{
              width: "100%",
              borderRadius: 0,
              boxShadow: "none",
              backgroundColor: "transparent",
              borderBottom: (theme) =>
                `1px solid ${theme.palette.text.primary}`,
            }}
          >
            <Toolbar
              sx={{
                minHeight: "70px",
                padding: "0 24px",
                justifyContent: "space-between",
                color: "transparent",
              }}
            >
              <Box
                sx={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <BookIcon
                  sx={{
                    fontSize: "32px",
                    color: (theme) => theme.palette.primary.light,
                  }}
                />
              </Box>
              <Box
                sx={{
                  fontSize: "24px",
                  fontWeight: 500,
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                Hugo Lugardi
              </Box>
              <Box sx={{ display: "flex", gap: "32px" }}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    component={Link}
                    to={`/${item.toLowerCase()}`}
                    sx={{
                      color: (theme) => theme.palette.text.primary,
                      textTransform: "none",
                      fontSize: "18px",
                      fontWeight: 500,
                      position: "relative",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "-8px",
                        left: 0,
                        width: "0%",
                        height: "2px",
                        backgroundColor: (theme) => theme.palette.primary.main,
                        transition: "width 0.3s ease",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>

          <Container
            maxWidth="lg"
            sx={{ py: 6, display: "flex", alignItems: "center" }}
          >
            <Box sx={{ display: "flex", gap: 6, alignItems: "stretch" }}>
              {/* Texto esquerda */}
              <Box
                sx={{
                  flex: 1,
                  padding: "48px 40px",
                  backgroundColor: "transparent",
                  borderRadius: "8px",
                  border: (theme) => `2px solid ${theme.palette.primary.main}`,
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    fontSize: "12px",
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    color: (theme) => theme.palette.primary.main,
                  }}
                >
                  Gláucio Augsue e seus filhos
                </Box>
                <Box
                  sx={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    mb: 3,
                    lineHeight: 1.3,
                    color: (theme) => theme.palette.text.primary,
                  }}
                >
                  Hugo Lugardi e a Ordem Magoi
                </Box>
                <Box
                  sx={{
                    fontSize: "16px",
                    lineHeight: 1.8,
                    color: (theme) => theme.palette.text.secondary,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                  earum ipsum enim soluta! Distinctio aliquid iste dolor
                  maiores, ipsum earum sunt blanditiis aliquam doloribus
                  voluptate. Rem consectetur omnis accusamus quas! Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. A facere
                  quibusdam, numquam praesentium adipisci sed consecteturs
                  officia, iste modi aliquam suscipit dicta voluptates eveniet.
                  Perferendis modi praesentium delectus dolorem a!
                </Box>
              </Box>

              {/* Imagem direita */}
              <Box sx={{ flex: 1 }}>
                <Box
                  component="img"
                  src={bookCover}
                  alt="Book Cover"
                  sx={{
                    width: "100%",
                    aspectRatio: "3/4",
                    objectFit: "cover",
                    border: (theme) =>
                      `8px solid ${theme.palette.primary.main}`,
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                    borderRadius: "2px",
                  }}
                />
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Faixa de comentarios */}
        <Box
          sx={{
            width: "100vw",
            backgroundColor: (theme) => theme.palette.primary.main,
            py: 2,
            marginLeft: "calc(-50vw + 50%)",
            borderTop: "1px solid #000",
            borderBottom: "1px solid #000",
          }}
        >
          <Container maxWidth="lg">
            {/* Linha decorativa */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 6,
                opacity: 0.3,
              }}
            >
              <Box sx={{ flex: 1, height: "1px", backgroundColor: "#FFF" }} />
              <Box sx={{ fontSize: "20px", color: "#FFF", fontWeight: 500 }}>
                Comentarios
              </Box>
              <Box sx={{ flex: 1, height: "1px", backgroundColor: "#FFF" }} />
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 4,
                justifyContent: "space-between",
              }}
            >
              {[
                {
                  comment: "Livro incrível, totalmente envolvente!",
                  author: "João Silva",
                  date: "2 dias atrás",
                },
                {
                  comment:
                    "A história é mágica, personagens bem desenvolvidos.",
                  author: "Maria Santos",
                  date: "1 semana atrás",
                },
                {
                  comment: "Recomendo para qualquer fã de fantasia!",
                  author: "Pedro Costa",
                  date: "3 semanas atrás",
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: 1,
                    padding: "24px",
                    backgroundColor: "#F9F8F6",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform:
                        "perspective(1000px) rotateY(-5deg) rotateX(2deg)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "15px",
                      lineHeight: 1.6,
                      mb: 3,
                      color: "#252422",
                    }}
                  >
                    "{item.comment}"
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#403D39",
                      }}
                    >
                      {item.author}
                    </Box>
                    <Box sx={{ fontSize: "12px", color: "#999" }}>
                      {item.date}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}
