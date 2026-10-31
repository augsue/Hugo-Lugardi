// src/pages/WikiPage.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  ButtonBase,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AppsIcon from "@mui/icons-material/Apps";
import BoltIcon from "@mui/icons-material/Bolt";
import PublicIcon from "@mui/icons-material/Public";
import PersonIcon from "@mui/icons-material/Person";
import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import HugoLugardi from "../assets/imgs/HugoLugardi.jpg"; // mantenha o SEU import do fundo
import book from "../assets/imgs/library.png"

const FONTE_TITULO = "inherit";
const FONTE_TEXTO = "'Playfair Display', serif";

/* ============ PALETA (use sempre HEX de 6 dígitos: #rrggbb) ============ */
const PRIMARIA = "#f0ebd8"; // destaque geral: bordas, ornamentos, brilho do título
const TEXTO = "#efe4cc"; // texto principal e títulos
const TEXTO_SUAVE = "#b9ab8e"; // texto secundário
const FUNDO = "#120e0c"; // painel, barra do título, fundo das abas
const FUNDO_CARD = "#1a1410"; // fundo dos cards

const CAT_TUDO = "#a8454f"; // aba "Tudo"
const CAT_PODERES = "#d0683f"; // categoria Poderes
const CAT_AMBIENTACAO = "#7fa072"; // categoria Ambientação
const CAT_PERSONAGENS = "#a98bc9"; // categoria Personagens
/* ======================================================================= */

const abas = [
  { id: "tudo", titulo: "Tudo", cor: CAT_TUDO, Icone: AppsIcon },
  { id: "poderes", titulo: "Poderes", cor: CAT_PODERES, Icone: BoltIcon },
  {
    id: "ambientacao",
    titulo: "Ambientação",
    cor: CAT_AMBIENTACAO,
    Icone: PublicIcon,
  },
  {
    id: "personagens",
    titulo: "Personagens",
    cor: CAT_PERSONAGENS,
    Icone: PersonIcon,
  },
];

const corDe = Object.fromEntries(abas.map((a) => [a.id, a.cor]));
const iconeDe = Object.fromEntries(abas.map((a) => [a.id, a.Icone]));

// Placeholders (trocar pelos dados da API depois)
const itens = ["poderes", "ambientacao", "personagens"].flatMap((categoria) =>
  Array.from({ length: 6 }).map((_, i) => ({
    id: `${categoria}-${i}`,
    slug: `${categoria}-${i + 1}`,
    nome: `Item ${i + 1}`,
    categoria,
  })),
);

const fadeIn = {
  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(12px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
};

function Ornamento({ cor = PRIMARIA, direcao = "right", sx }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flex: 1,
        flexDirection: direcao === "right" ? "row" : "row-reverse",
        gap: 1,
        ...sx,
      }}
    >
      <Box
        sx={{
          width: 7,
          height: 7,
          bgcolor: cor,
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
          }, ${cor} 0%, ${cor}00 100%)`,
        }}
      />
    </Box>
  );
}

function Aba({ aba, ativa, onClick }) {
  const { titulo, cor, Icone } = aba;
  return (
    <ButtonBase
      onClick={onClick}
      sx={{
        position: "relative",
        height: { xs: 80, md: 96 },
        flexDirection: "column",
        gap: 0.8,
        borderRadius: "4px",
        color: cor,
        border: `1px solid ${ativa ? cor : `${TEXTO}24`}`,
        background: ativa
          ? `linear-gradient(180deg, ${cor}38 0%, ${FUNDO}e6 100%)`
          : `${FUNDO}b8`,
        boxShadow: ativa
          ? `0 0 22px ${cor}44, inset 0 0 0 3px ${FUNDO}, inset 0 0 0 4px ${cor}66`
          : `inset 0 0 0 3px ${FUNDO}, inset 0 0 0 4px ${TEXTO}14`,
        opacity: ativa ? 1 : 0.8,
        transition: "all .25s",
        "&:hover": {
          opacity: 1,
          borderColor: cor,
          transform: "translateY(-2px)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -6,
          left: "50%",
          width: 10,
          height: 10,
          bgcolor: cor,
          transform: "translateX(-50%) rotate(45deg)",
          opacity: ativa ? 1 : 0,
          transition: "opacity .25s",
        },
      }}
    >
      <Icone sx={{ fontSize: { xs: 24, md: 28 } }} />
      <Typography
        sx={{
          fontFamily: FONTE_TEXTO,
          fontSize: { xs: 10.5, md: 12 },
          fontWeight: 700,
          letterSpacing: 2.5,
          textTransform: "uppercase",
        }}
      >
        {titulo}
      </Typography>
    </ButtonBase>
  );
}

function CardWiki({ nome, slug, categoria }) {
  const navigate = useNavigate();
  const cor = corDe[categoria];
  const Icone = iconeDe[categoria];

  return (
    <ButtonBase
      onClick={() => navigate(`/wiki/${slug}`)}
      sx={{
        display: "block",
        textAlign: "left",
        position: "relative",
        overflow: "hidden",
        borderRadius: "6px",
        bgcolor: FUNDO_CARD,
        border: `1px solid ${TEXTO}1f`,
        boxShadow: "0 8px 20px rgba(0,0,0,.45)",
        transition: "transform .28s, box-shadow .28s, border-color .28s",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: cor,
          boxShadow: `0 14px 30px rgba(0,0,0,.6), 0 0 22px ${cor}55`,
        },
        "&:hover .card-icone": {
          opacity: 0.4,
          transform: "scale(1.12) rotate(-4deg)",
        },
        "&:hover .card-brilho": { transform: "translateX(260%) skewX(-20deg)" },
      }}
    >
      {/* Área da imagem (placeholder) */}
      <Box
        sx={{
          position: "relative",
          aspectRatio: "3 / 4",
          overflow: "hidden",
          background: `radial-gradient(circle at 50% 35%, ${cor}30 0%, ${FUNDO_CARD} 72%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Moldura interna */}
        <Box
          sx={{
            position: "absolute",
            inset: 8,
            border: `1px solid ${cor}40`,
            borderRadius: "3px",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        <Icone
          className="card-icone"
          sx={{
            fontSize: 60,
            color: cor,
            opacity: 0.2,
            transition: "all .35s",
          }}
        />

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
              "linear-gradient(90deg, transparent, rgba(255,255,255,.12), transparent)",
            transform: "skewX(-20deg)",
            transition: "transform .8s ease",
            pointerEvents: "none",
            zIndex: 3,
          }}
        />

        {/* Degradê para dar leitura ao nome */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "55%",
            background: `linear-gradient(180deg, ${FUNDO}00 0%, ${FUNDO}f2 100%)`,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Nome na frente da imagem */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            px: 2,
            pb: 2.2,
            textAlign: "center",
            zIndex: 4,
          }}
        >
          <Box
            sx={{
              width: 28,
              height: "2px",
              bgcolor: cor,
              mx: "auto",
              mb: 1,
              transition: "width .3s",
              ".MuiButtonBase-root:hover &": { width: 56 },
            }}
          />
          <Typography
            sx={{
              fontFamily: FONTE_TITULO,
              color: TEXTO,
              fontSize: { xs: 15, md: 17 },
              letterSpacing: 2,
              textTransform: "uppercase",
              textShadow: "0 2px 8px rgba(0,0,0,.9)",
              lineHeight: 1.2,
            }}
          >
            {nome}
          </Typography>
        </Box>
      </Box>

      {/* Fita da categoria */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 10,
          width: 28,
          height: 38,
          bgcolor: cor,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          pt: "7px",
          color: FUNDO,
          boxShadow: "0 4px 8px rgba(0,0,0,.4)",
          zIndex: 5,
        }}
      >
        <Icone sx={{ fontSize: 16 }} />
      </Box>
    </ButtonBase>
  );
}
export default function WikiPage() {
  const [abaAtiva, setAbaAtiva] = useState("tudo");

  const abaAtual = abas.find((a) => a.id === abaAtiva);
  const filtrados =
    abaAtiva === "tudo" ? itens : itens.filter((i) => i.categoria === abaAtiva);

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(180deg, ${FUNDO}30 0%, ${FUNDO}cc 1000%), url(${book})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        ...fadeIn,
      }}
    >
      <Header />

      <Container maxWidth="lg" sx={{ pt: 18, pb: 33 }}>
        {/* Painel principal */}
        <Box
          sx={{
            position: "relative",
            border: `1px solid ${PRIMARIA}47`,
            borderRadius: "4px",
            background: `${FUNDO}cc`,
            backdropFilter: "blur(8px)",
            boxShadow: `0 24px 60px rgba(0,0,0,.65), inset 0 0 0 6px ${FUNDO}cc, inset 0 0 0 7px ${PRIMARIA}1f`,
          }}
        >
          <Box sx={{ p: { xs: 2, md: 5 } }}>
            <Box
              sx={{
                position: "relative",
                textAlign: "center",
                mb: 4,
              }}
            >
              <IconButton
                component={Link}
                to="/"
                aria-label="Voltar para Home"
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  color: TEXTO,
                }}
              >
                <ArrowBackIcon />
              </IconButton>

              <Typography
                variant="h1"
                sx={{
                  fontFamily: FONTE_TITULO,
                  color: TEXTO,
                  fontSize: { xs: "1.9rem", md: "2.8rem" },
                  fontWeight: 400,
                  letterSpacing: { xs: 6, md: 10 },
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                  pt: { xs: 0.5, md: 0 },
                  textShadow: `0 0 24px ${PRIMARIA}99, 0 2px 6px rgba(0,0,0,.8)`,
                }}
              >
                Wiki
              </Typography>

              {/* Ornamento central */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.5,
                  mt: 1.5,
                  mb: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: { xs: 50, md: 90 },
                    height: "1px",
                    background: `linear-gradient(90deg, ${PRIMARIA}00, ${PRIMARIA})`,
                  }}
                />
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    bgcolor: PRIMARIA,
                    transform: "rotate(45deg)",
                  }}
                />
                <Box
                  sx={{
                    width: { xs: 50, md: 90 },
                    height: "1px",
                    background: `linear-gradient(90deg, ${PRIMARIA}, ${PRIMARIA}00)`,
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontFamily: FONTE_TEXTO,
                  fontStyle: "italic",
                  color: TEXTO_SUAVE,
                  fontSize: { xs: 14, md: 17 },
                }}
              >
                Explore os segredos, lugares e figuras do universo de Hugo
                Lugardi.
              </Typography>
            </Box>

            {/* Abas */}
            <Box
              sx={{
                display: "grid",
                gap: { xs: 1.5, md: 2.5 },
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                mb: 5,
              }}
            >
              {abas.map((aba) => (
                <Aba
                  key={aba.id}
                  aba={aba}
                  ativa={abaAtiva === aba.id}
                  onClick={() => setAbaAtiva(aba.id)}
                />
              ))}
            </Box>

            {/* Divisor com nome da seção */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
              <Ornamento cor={abaAtual.cor} direcao="right" />
              <Typography
                sx={{
                  fontFamily: FONTE_TEXTO,
                  color: abaAtual.cor,
                  letterSpacing: 3,
                  fontSize: { xs: 12, md: 14 },
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                {abaAtual.titulo} · {filtrados.length} registros
              </Typography>
              <Ornamento cor={abaAtual.cor} direcao="left" />
            </Box>

            {/* Grid de cards */}
            <Box
              key={abaAtiva}
              sx={{
                display: "grid",
                gap: { xs: 1.5, md: 2.5 },
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                  md: "repeat(4, 1fr)",
                  lg: "repeat(5, 1fr)",
                },
                animation: "fadeIn .4s ease",
              }}
            >
              {filtrados.map((item) => (
                <CardWiki key={item.id} {...item} />
              ))}
            </Box>

            {filtrados.length === 0 && (
              <Typography
                sx={{
                  fontFamily: FONTE_TEXTO,
                  fontStyle: "italic",
                  textAlign: "center",
                  color: TEXTO_SUAVE,
                  py: 6,
                }}
              >
                Os arquivos desta seção ainda estão sendo escritos...
              </Typography>
            )}
          </Box>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
