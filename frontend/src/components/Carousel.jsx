import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import WikiCard from "./card";
import bible from "../assets/imgs/bible.jpg"
import bsb from "../assets/imgs/bsb.jpg"
import art from "../assets/imgs/art.jpg"
import rcube from "../assets/imgs/RCube.jpg"
import people from "../assets/imgs/people.png"
import castle from "../assets/imgs/castel.jpg"

export default function WikiCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1400,
        mx: "auto",
        py: 4,
        position: "relative",
      }}
    >
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        style={{ padding: "20px" }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        <SwiperSlide style={{ height: "450px" }}>
          <WikiCard
            image= {bible}
            title="Referências Bíblicas"
            subtitle="Bases bíblicas para a escrita"
            color="#979DAC"
            href="/wiki/personagem"
          />
        </SwiperSlide>

        <SwiperSlide style={{ height: "450px" }}>
          <WikiCard
            image= {art}
            title="Aventura"
            subtitle="Explore o mundo espiritual"
            color="#caf0f8"
            href="/wiki/personagem"
          />
        </SwiperSlide>

        <SwiperSlide style={{ height: "450px" }}>
          <WikiCard
            image= {bsb}
            title="Ambientação"
            subtitle="Brasília - Águas Claras"
            color="#1b2a41"
            href="/wiki/personagem"
          />
        </SwiperSlide>

        <SwiperSlide style={{ height: "450px" }}>
          <WikiCard
            image={rcube}
            title="Poderes"
            subtitle="Definição dos poderes"
            color="#979DAC"
            href="/wiki/personagem"
          />
        </SwiperSlide>

        <SwiperSlide style={{ height: "450px" }}>
          <WikiCard
            image= {people}
            title="Reino Espiritual"
            subtitle="O Reino invisível"
            color="#979DAC"
            href="/wiki/personagem"
          />
        </SwiperSlide>

        <SwiperSlide style={{ height: "450px" }}>
          <WikiCard
            image={castle}
            title="A Ordem Magoi"
            subtitle="O esconderijo da ordem"
            color="#252422"
            href="/wiki/personagem"
          />
        </SwiperSlide>
      </Swiper>

      <IconButton
        ref={prevRef}
        sx={{
          position: "absolute",
          left: -80,
          top: "50%",
          transform: "translateY(-50%)",
          color: "#fff",
          zIndex: 10,
        }}
      >
        <ChevronLeftIcon sx={{ fontSize: 60 }} />
      </IconButton>
      <IconButton
        ref={nextRef}
        sx={{
          position: "absolute",
          right: -80,
          top: "50%",
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
