// src/pages/Wiki.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Typography, IconButton, CircularProgress } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BoltIcon from "@mui/icons-material/Bolt";
import PublicIcon from "@mui/icons-material/Public";
import PersonIcon from "@mui/icons-material/Person";
import book from "../assets/imgs/Bookshelf.jpg";


import Header from "../components/Header";
import Footer from "../components/Footer";
import { getWikiPage } from "../services/adminApi";

const FONTE_TITULO = "Perandory";
const FONTE_TEXTO = "'Playfair Display', serif";

/* ============ PALETA (igual à WikiPage; HEX de 6 dígitos) ============ */
const PRIMARIA = "#f0ebd8";
const TEXTO = "#efe4cc";
const FUNDO = "#120e0c";

const CAT_PODERES = "#d0683f";
const CAT_AMBIENTACAO = "#7fa072";
const CAT_PERSONAGENS = "#a98bc9";
/* ===================================================================== */

// As chaves precisam bater com WIKI_CATEGORIES do back
const categorias = {
  poderes: { titulo: "Poderes", cor: CAT_PODERES, Icone: BoltIcon },
  ambientacao: {
    titulo: "Ambientação",
    cor: CAT_AMBIENTACAO,
    Icone: PublicIcon,
  },
  personagens: {
    titulo: "Personagens",
    cor: CAT_PERSONAGENS,
    Icone: PersonIcon,
  },
};

const fadeIn = {
  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(12px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
};

function Ornamento({ cor }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1.5,
      }}
    >
      <Box
        sx={{
          width: { xs: 50, md: 90 },
          height: "1px",
          background: `linear-gradient(90deg, ${cor}00, ${cor})`,
        }}
      />
      <Box
        sx={{ width: 7, height: 7, bgcolor: cor, transform: "rotate(45deg)" }}
      />
      <Box
        sx={{
          width: { xs: 50, md: 90 },
          height: "1px",
          background: `linear-gradient(90deg, ${cor}, ${cor}00)`,
        }}
      />
    </Box>
  );
}

export default function Wiki() {
  const { slug } = useParams();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setPage(null);
    getWikiPage(slug)
      .then(setPage) // null = não encontrada
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  const categoria = categorias[page?.category];
  const cor = categoria?.cor ?? PRIMARIA;
  const Icone = categoria?.Icone;
  const displayTitle = page?.title ?? "";

  const textoCorrido = {
    fontFamily: FONTE_TEXTO,
    color: TEXTO,
    fontSize: { xs: "15px", md: "18px" },
    lineHeight: 1.8,
  };

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(180deg, ${FUNDO}59 0%, ${FUNDO}cc 100%), url(${book})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        ...fadeIn,
      }}
    >
      <Header />

      <Box
        sx={{
          flex: 1,
          width: "100%",
          boxSizing: "border-box",
          pt: { xs: 12, md: 14 },
          pb: { xs: 8, md: 40 },
          px: { xs: 2, md: 3 },
        }}
      >
        {/* Painel principal */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "1000px",
            mx: "auto",
            boxSizing: "border-box",
            border: `1px solid ${PRIMARIA}47`,
            borderRadius: "4px",
            background: `${FUNDO}cc`,
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow: `0 24px 60px rgba(0,0,0,.65), inset 0 0 0 6px ${FUNDO}cc, inset 0 0 0 7px ${PRIMARIA}1f`,
            animation: "fadeIn .4s ease",
          }}
        >
          <Box sx={{ p: { xs: "22px 18px", md: "40px 60px" } }}>
            {loading ? (
              <Box sx={{ textAlign: "center", py: 8 }}>
                <CircularProgress size={28} sx={{ color: TEXTO }} />
              </Box>
            ) : error || !page ? (
              <Box sx={{ textAlign: "center", py: 8 }}>
                <Typography sx={{ ...textoCorrido, fontStyle: "italic" }}>
                  {error
                    ? "Não foi possível carregar esta página."
                    : "Página não encontrada."}
                </Typography>
                <IconButton
                  component={Link}
                  to="/wiki"
                  aria-label="Voltar para Wiki"
                  sx={{ color: TEXTO, mt: 2 }}
                >
                  <ArrowBackIcon />
                </IconButton>
              </Box>
            ) : (
              <>
                {/* Topo: voltar + categoria + título */}
                <Box sx={{ position: "relative", textAlign: "center", mb: 4 }}>
                  <IconButton
                    component={Link}
                    to="/wiki"
                    aria-label="Voltar para Wiki"
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      color: TEXTO,
                    }}
                  >
                    <ArrowBackIcon />
                  </IconButton>

                  {categoria && (
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        color: cor,
                        mb: 1,
                        pt: { xs: 0.5, md: 0 },
                      }}
                    >
                      <Icone sx={{ fontSize: 16 }} />
                      <Typography
                        sx={{
                          fontFamily: FONTE_TEXTO,
                          fontSize: { xs: 11, md: 12 },
                          fontWeight: 700,
                          letterSpacing: 3,
                          textTransform: "uppercase",
                        }}
                      >
                        {categoria.titulo}
                      </Typography>
                    </Box>
                  )}

                  <Typography
                    component="h1"
                    sx={{
                      fontFamily: FONTE_TITULO,
                      color: TEXTO,
                      fontSize: { xs: "2rem", md: "3.2rem" },
                      fontWeight: 400,
                      letterSpacing: { xs: 3, md: 6 },
                      textTransform: "uppercase",
                      lineHeight: 1.1,
                      wordBreak: "break-word",
                      textShadow: `0 0 24px ${cor}99, 0 2px 6px rgba(0,0,0,.8)`,
                    }}
                  >
                    {displayTitle}
                  </Typography>

                  {page.subtitle && (
                    <Typography
                      sx={{
                        fontFamily: FONTE_TEXTO,
                        fontStyle: "italic",
                        color: "#b9ab8e",
                        fontSize: { xs: 14, md: 17 },
                        mt: 1.5,
                      }}
                    >
                      {page.subtitle}
                    </Typography>
                  )}

                  <Box sx={{ mt: 2 }}>
                    <Ornamento cor={cor} />
                  </Box>
                </Box>

                {/* Imagem flutuando + texto contornando */}
                <Box sx={{ display: "flow-root", pb: { xs: 2, md: 3 } }}>
                  {page.imageUrl && (
                    <Box
                      sx={{
                        position: "relative",
                        float: "left",
                        width: { xs: "120px", md: "280px" },
                        mr: { xs: 2, md: 4 },
                        mb: { xs: 1, md: 2 },
                        border: `1px solid ${cor}`,
                        borderRadius: "4px",
                        overflow: "hidden",
                        boxShadow: `0 10px 26px rgba(0,0,0,.6), 0 0 22px ${cor}40`,
                      }}
                    >
                      <Box
                        component="img"
                        src={page.imageUrl}
                        alt={displayTitle}
                        sx={{
                          display: "block",
                          width: "100%",
                          aspectRatio: "3 / 4",
                          objectFit: "cover",
                        }}
                      />
                      {/* Moldura interna */}
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 6,
                          border: `1px solid ${cor}66`,
                          borderRadius: "2px",
                          pointerEvents: "none",
                        }}
                      />
                      {/* Fita da categoria */}
                      {categoria && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            right: 10,
                            width: { xs: 22, md: 28 },
                            height: { xs: 30, md: 38 },
                            bgcolor: cor,
                            clipPath:
                              "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)",
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            pt: { xs: "5px", md: "7px" },
                            color: FUNDO,
                            boxShadow: "0 4px 8px rgba(0,0,0,.4)",
                          }}
                        >
                          <Icone sx={{ fontSize: { xs: 13, md: 16 } }} />
                        </Box>
                      )}
                    </Box>
                  )}

                  <Typography
                    sx={{
                      ...textoCorrido,
                      whiteSpace: "pre-wrap",
                      "&::first-letter": {
                        fontFamily: FONTE_TITULO,
                        color: cor,
                        fontSize: { xs: "2.8em", md: "3.4em" },
                        float: "left",
                        lineHeight: 0.75,
                        mt: { xs: "0.22em", md: "0.12em" },
                        mr: "0.12em",
                      },
                    }}
                  >
                    {page.text}
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
