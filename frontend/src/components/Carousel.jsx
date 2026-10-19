import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import WikiCard from "./card";

export default function WikiCarousel({ itens = [] }) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1400,
        mx: "auto",
        py: 4,
        position: "relative",
        clipPath: "inset(-60px -100px -60px -100px)", // corta só nas laterais, topo e base liberados
      }}
    >
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        navigation={{ prevEl, nextEl }}
      >
        {itens.map((item) => (
          <SwiperSlide key={item.title} style={{ height: "500px" }}>
            <WikiCard
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              href={item.href}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <IconButton
        ref={setPrevEl}
        sx={{
          position: "absolute",
          left: -80,
          top: "40%",
          transform: "translateY(-50%)",
          color: "#fff",
          zIndex: 10,
        }}
      >
        <ChevronLeftIcon sx={{ fontSize: 60 }} />
      </IconButton>
      <IconButton
        ref={setNextEl}
        sx={{
          position: "absolute",
          right: -80,
          top: "40%",
          transform: "translateY(-50%)",
          color: "#fff",
          zIndex: 10,
        }}
      >
        <ChevronRightIcon sx={{ fontSize: 60 }} />
      </IconButton>
    </Box>
  );
}
