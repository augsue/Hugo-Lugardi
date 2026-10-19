import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import blackGauze from "../assets/imgs/blackGauze.png";

// Dados mockados (substituir por props vindas da API futuramente)
const MOCK_REVIEWS = [
  {
    id: 1,
    comment: "Texto genérico de review para testar o layout.",
    author: "Autor Um",
    date: "há 2 dias",
  },
  {
    id: 2,
    comment:
      "Outro comentário de exemplo, um pouco mais longo para ver como o card se comporta com mais texto.",
    author: "Autor Dois",
    date: "há 1 semana",
  },
  {
    id: 3,
    comment: "Comentário curto de teste.",
    author: "Autor Três",
    date: "há 3 semanas",
  },
  {
    id: 4,
    comment: "Mais uma review genérica para validar a rotação do carrossel.",
    author: "Autor Quatro",
    date: "há 1 mês",
  },
  {
    id: 5,
    comment: "Review de exemplo número cinco, para checar o loop.",
    author: "Autor Cinco",
    date: "há 2 meses",
  },
  {
    id: 6,
    comment: "Sexta review mockada.",
    author: "Autor Seis",
    date: "há 3 meses",
  },
  {
    id: 7,
    comment: "Sétima review mockada.",
    author: "Autor sete",
    date: "há 3 meses",
  },
  {
    id: 8,
    comment: "Última review mockada, depois o carrossel volta ao início.",
    author: "Autor Oito",
    date: "há 3 meses",
  },
];

// 4 estilos visuais de card. Atribuídos pela posição do slide (índice % 4),
// independentes do comentário exibido
const CARD_STYLES = [
  // Estilo 1: claro, borda lateral marrom
  {
    backgroundColor: "#F9F8F6",
    color: "#252422",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
    borderLeft: "4px solid #8B7355",
  },
  // Estilo 2: creme com borda dourada
  {
    backgroundColor: "#F3EBDD",
    color: "#2B2215",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
    border: "1px solid #C9A96E",
  },
  // Estilo 3: escuro com texto claro
  {
    backgroundColor: "#262626",
    color: "#EDEDED",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
    border: "1px solid #3A3A3A",
  },
  // Estilo 4: bordô com texto claro
  {
    backgroundColor: "#001d3d",
    color: "#F5E9E2",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
    border: "1px solid #003566",
  },
];

const AUTOPLAY_DELAY_MS = 3000; // Intervalo entre cada deslocamento
const TRANSITION_SPEED_MS = 700; // Duração da animação de deslizamento

// Embaralha um array (Fisher-Yates) sem mutar o original
const shuffle = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

// Componente da seção de reviews (ReviewSection)
export default function ReviewSection({ reviews = MOCK_REVIEWS }) {
  // Ordem embaralhada, calculada uma vez por montagem
  const [order] = useState(() => shuffle(reviews));

  return (
    // Section wrapper: largura total da viewport, fundo em gradiente + ruído SVG
    <Box
      sx={{
        width: "100vw",
        py: 6,
        position: "relative",
        backgroundImage: `url(${blackGauze})`,
      }}
    >
      {/* Container (MUI): limita a largura do conteúdo e centraliza */}
      <Box sx={{ maxWidth: "100%", mx: "auto", px: 3 }}>
        {/* Header: título com linhas decorativas dos dois lados */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            mb: { xs: 3, md: 4 },
            py: 1,
          }}
        >
          <Box
            sx={{
              flex: 1,
              height: "1px",
              backgroundColor: (theme) => theme.palette.secondary.main,
              opacity: 0.4,
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "32px" },
              color: "#fff",
              fontWeight: 400,
              letterSpacing: "0.05em",
            }}
          >
            Comentários
          </Typography>
          <Box
            sx={{
              flex: 1,
              height: "1px",
              backgroundColor: (theme) => theme.palette.secondary.main,
              opacity: 0.4,
            }}
          />
        </Box>

        {/* Swiper (carousel root): gerencia slides, loop, autoplay e transições */}
        <Swiper
          modules={[Autoplay]}
          loop // Loop infinito: o Swiper duplica slides conforme necessário
          autoplay={{
            delay: AUTOPLAY_DELAY_MS,
            disableOnInteraction: false, // Mantém o autoplay após interação do usuário
            pauseOnMouseEnter: true, // Pausa ao passar o mouse, para leitura
          }}
          speed={TRANSITION_SPEED_MS}
          slidesPerView={1} // Base mobile: 1 card por vez
          spaceBetween={16} // Espaçamento horizontal entre os slides
          breakpoints={{
            900: { slidesPerView: 4, spaceBetween: 24 }, // Desktop: 4 cards simultâneos
          }}
          style={{ paddingTop: 8, paddingBottom: 8 }} // Respiro para as sombras dos cards
        >
          {order.map((item, index) => {
            // Estilo pela posição do slide original no ciclo de 4 estilos
            const style = CARD_STYLES[index % CARD_STYLES.length];

            return (
              // SwiperSlide: cada item do carrossel. Altura 100% para todos os cards ficarem iguais
              <SwiperSlide key={item.id} style={{ height: "auto" }}>
                {/* Card individual: estilo pela posição, conteúdo pelo comentário embaralhado */}
                <Box
                  sx={{
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: { xs: 120, md: 140 },
                    p: { xs: 2.5, md: 3 },
                    borderRadius: "2px",
                    ...style,
                  }}
                >
                  {/* Corpo do card: texto do comentário */}
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", md: "17px" },
                      lineHeight: 1.6,
                      fontStyle: "italic",
                      color: "inherit",
                    }}
                  >
                    "{item.comment}"
                  </Typography>

                  {/* Rodapé do card: autor e data */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 2,
                      pt: 1.5,
                      borderTop: "1px solid rgba(128,128,128,0.25)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "inherit",
                      }}
                    >
                      {item.author}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "12px", color: "inherit", opacity: 0.7 }}
                    >
                      {item.date}
                    </Typography>
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
