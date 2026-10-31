// src/components/ReviewSection.jsx
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import blackGauze from "../assets/imgs/blackGauze.png";

/* ============ PALETA (igual à WikiPage; HEX de 6 dígitos) ============ */
const PRIMARIA = "#a8454f";
const TEXTO = "#efe4cc";
const TEXTO_SUAVE = "#b9ab8e";
const FUNDO = "#120e0c";

// Cores dos 4 estilos de card (fundo, texto, destaque)
const CARD_1 = { fundo: "#4a1a20", texto: "#efe4cc", destaque: "#a8454f" }; // vinho
const CARD_2 = { fundo: "#1a1410", texto: "#e6d9c0", destaque: "#b9ab8e" }; // escuro
const CARD_3 = { fundo: "#26301f", texto: "#efe6cf", destaque: "#7fa072" }; // musgo
const CARD_4 = { fundo: "#efe4cc", texto: "#33261a", destaque: "#d0683f" }; // pergaminho
/* ===================================================================== */

// Dados mockados (substituir por props vindas da API futuramente)
const MOCK_REVIEWS = [
  { id: 1, comment: "Texto genérico de review para testar o layout.", author: "Autor Um", date: "há 2 dias" },
  { id: 2, comment: "Outro comentário de exemplo, um pouco mais longo para ver como o card se comporta com mais texto.", author: "Autor Dois", date: "há 1 semana" },
  { id: 3, comment: "Comentário curto de teste.", author: "Autor Três", date: "há 3 semanas" },
  { id: 4, comment: "Mais uma review genérica para validar a rotação do carrossel.", author: "Autor Quatro", date: "há 1 mês" },
  { id: 5, comment: "Review de exemplo número cinco, para checar o loop.", author: "Autor Cinco", date: "há 2 meses" },
  { id: 6, comment: "Sexta review mockada.", author: "Autor Seis", date: "há 3 meses" },
  { id: 7, comment: "Sétima review mockada.", author: "Autor sete", date: "há 3 meses" },
  { id: 8, comment: "Última review mockada, depois o carrossel volta ao início.", author: "Autor Oito", date: "há 3 meses" },
];

// 4 estilos visuais, atribuídos pela posição do slide (índice % 4)
const CARD_STYLES = [CARD_1, CARD_2, CARD_3, CARD_4];

const AUTOPLAY_DELAY_MS = 3000;
const TRANSITION_SPEED_MS = 700;

const shuffle = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

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

export default function ReviewSection({ reviews = MOCK_REVIEWS }) {
  const [order] = useState(() => shuffle(reviews));

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 3, md: 5 },
        px: { xs: 1.5, md: 0 },
        boxSizing: "border-box",
        position: "relative",
        backgroundImage: `linear-gradient(180deg, ${FUNDO}d9 0%, ${FUNDO}f2 100%), url(${blackGauze})`,
        backgroundSize: "cover",
        borderTop: `1px solid ${PRIMARIA}59`,
        borderBottom: `1px solid ${PRIMARIA}59`,
        // fios vinho com degradê nas bordas
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          height: "1px",
          background: `linear-gradient(90deg, ${PRIMARIA}00 0%, ${PRIMARIA} 50%, ${PRIMARIA}00 100%)`,
          pointerEvents: "none",
        },
        "&::before": { top: -1 },
        "&::after": { bottom: -1 },
      }}
    >
      <Box sx={{ maxWidth: "100%", mx: "auto", px: { xs: 1, md: 3 } }}>
        {/* Título */}
        <Box sx={{ mb: { xs: 3, md: 4 }, px: { md: 4 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Ornamento direcao="right" />
            <Typography
              sx={{
                fontFamily: "Perandory",
                color: TEXTO,
                fontWeight: 400,
                fontSize: { xs: "32px", md: "46px" },
                letterSpacing: { xs: 4, md: 8 },
                lineHeight: 1.1,
                textTransform: "uppercase",
                textShadow: `0 0 24px ${PRIMARIA}99, 0 2px 6px rgba(0,0,0,.8)`,
              }}
            >
              Comentários
            </Typography>
            <Ornamento direcao="left" />
          </Box>
          <Typography
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: TEXTO_SUAVE,
              textAlign: "center",
              fontSize: { xs: 13, md: 16 },
              mt: 1.5,
            }}
          >
            O que os leitores têm dito sobre o livro.
          </Typography>
        </Box>

        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{
            delay: AUTOPLAY_DELAY_MS,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={TRANSITION_SPEED_MS}
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            900: { slidesPerView: 4, spaceBetween: 24 },
          }}
          style={{ paddingTop: 8, paddingBottom: 12 }}
        >
          {order.map((item, index) => {
            const { fundo, texto, destaque } =
              CARD_STYLES[index % CARD_STYLES.length];

            return (
              <SwiperSlide key={item.id} style={{ height: "auto" }}>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: "4px",
                    minHeight: { xs: 120, md: 170 },
                    p: { xs: 2.5, md: 3 },
                    bgcolor: fundo,
                    color: texto,
                    border: `1px solid ${destaque}66`,
                    boxShadow: "0 8px 22px rgba(0,0,0,.5)",
                    transition: "transform .3s, box-shadow .3s, border-color .3s",
                    // moldura interna
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: 6,
                      border: `1px solid ${destaque}40`,
                      borderRadius: "2px",
                      pointerEvents: "none",
                    },
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: destaque,
                      boxShadow: `0 14px 30px rgba(0,0,0,.6), 0 0 20px ${destaque}44`,
                    },
                  }}
                >
                  {/* Aspas decorativas */}
                  <Typography
                    aria-hidden
                    sx={{
                      position: "absolute",
                      top: -2,
                      right: 14,
                      fontFamily: "Perandory",
                      fontSize: 70,
                      lineHeight: 1,
                      color: destaque,
                      opacity: 0.35,
                      pointerEvents: "none",
                    }}
                  >
                    ”
                  </Typography>

                  {/* Comentário */}
                  <Typography
                    sx={{
                      position: "relative",
                      fontFamily: "'Playfair Display', serif",
                      fontSize: { xs: "15px", md: "17px" },
                      lineHeight: 1.65,
                      fontStyle: "italic",
                      color: "inherit",
                    }}
                  >
                    {item.comment}
                  </Typography>

                  {/* Rodapé: autor e data */}
                  <Box sx={{ position: "relative", mt: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1.2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 5,
                          height: 5,
                          bgcolor: destaque,
                          transform: "rotate(45deg)",
                          flexShrink: 0,
                        }}
                      />
                      <Box
                        sx={{
                          flex: 1,
                          height: "1px",
                          background: `linear-gradient(90deg, ${destaque}99, ${destaque}00)`,
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Perandory",
                          fontSize: "19px",
                          letterSpacing: 1.5,
                          textTransform: "uppercase",
                          color: "inherit",
                        }}
                      >
                        {item.author}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'Playfair Display', serif",
                          fontStyle: "italic",
                          fontSize: "12px",
                          color: "inherit",
                          opacity: 0.7,
                        }}
                      >
                        {item.date}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
}