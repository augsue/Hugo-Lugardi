import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRef } from "react";
import "swiper/css";
import WikiCard from "./card";

// card = altura da tela - (tudo que fica acima e abaixo dele)
const RESERVED_MOBILE = 300; // navbar ~68 + título Wiki ~130 + setas ~70 + respiro

export default function WikiCarousel({ itens = [] }) {
  const swiperRef = useRef(null);

  const arrowSx = {
    color: "#f0e4cc",
    zIndex: 10,
    position: { xs: "static", md: "absolute" },
    top: { md: "50%" },
    transform: { md: "translateY(-50%)" },
  };

  return (
    <Box
      sx={{
        width: "100%",
        mx: "auto",
        py: { xs: 1, md: 5 },
        px: { xs: 2, md: 0 },
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop
        speed={700}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          900: { slidesPerView: 5, spaceBetween: 30 },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        style={{overflow: "visible", clipPath: "inset(-60px -10px -60px -10px)",}}
      >
        {itens.map((item) => (
          <SwiperSlide key={item.title} style={{ height: "auto" }}>
            <Box
              sx={{
                height: {
                  xs: `calc(100svh - ${RESERVED_MOBILE}px)`,
                  md: 570,
                },
                minHeight: { xs: 380, md: 0 },
              }}
            >
              <WikiCard
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Setas: embaixo no celular, nas laterais no desktop */}
      <Box
        sx={{
          display: { xs: "flex", md: "contents" },
          justifyContent: "center",
          gap: 30,
          mt: 2,
        }}
      >
        <IconButton
          aria-label="Anterior"
          onClick={() => swiperRef.current?.slidePrev()}
          sx={{ ...arrowSx, left: { md: -80 } }}
        >
          <ChevronLeftIcon sx={{ fontSize: { xs: 44, md: 60 } }} />
        </IconButton>
        <IconButton
          aria-label="Próximo"
          onClick={() => swiperRef.current?.slideNext()}
          sx={{ ...arrowSx, right: { md: -80 } }}
        >
          <ChevronRightIcon sx={{ fontSize: { xs: 44, md: 60 } }} />
        </IconButton>
      </Box>
    </Box>
  );
}