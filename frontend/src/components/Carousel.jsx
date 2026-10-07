import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";

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
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        <SwiperSlide>
          <Card
            sx={{
              height: 400,
              backgroundColor: "transparent",
              border: "3px solid rgba(255,255,255,0.2)",
            }}
          >
            <CardContent>
              <Typography variant="h5">Card 1</Typography>
              <Typography variant="body2" color="textSecondary">
                {/* TODO: Conectar ao backend aqui */}
                Descrição do card 1
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card
            sx={{
              height: 400,
              backgroundColor: "transparent",
              border: "3px solid rgba(255,255,255,0.2)",
            }}
          >
            <CardContent>
              <Typography variant="h5">Card 2</Typography>
              <Typography variant="body2" color="textSecondary">
                {/* TODO: Conectar ao backend aqui */}
                Descrição do card 2
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card
            sx={{
              height: 400,
              backgroundColor: "transparent",
              border: "3px solid rgba(255,255,255,0.2)",
            }}
          >
            <CardContent>
              <Typography variant="h5">Card 3</Typography>
              <Typography variant="body2" color="textSecondary">
                {/* TODO: Conectar ao backend aqui */}
                Descrição do card 3
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card
            sx={{
              height: 400,
              backgroundColor: "transparent",
              border: "3px solid rgba(255,255,255,0.2)",
            }}
          >
            <CardContent>
              <Typography variant="h5">Card 4</Typography>
              <Typography variant="body2" color="textSecondary">
                {/* TODO: Conectar ao backend aqui */}
                Descrição do card 4
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card
            sx={{
              height: 400,
              backgroundColor: "transparent",
              border: "3px solid rgba(255,255,255,0.2)",
            }}
          >
            <CardContent>
              <Typography variant="h5">Card 5</Typography>
              <Typography variant="body2" color="textSecondary">
                {/* TODO: Conectar ao backend aqui */}
                Descrição do card 5
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card
            sx={{
              height: 400,
              backgroundColor: "transparent",
              border: "3px solid rgba(255,255,255,0.2)",
            }}
          >
            <CardContent>
              <Typography variant="h5">Card 6</Typography>
              <Typography variant="body2" color="textSecondary">
                {/* TODO: Conectar ao backend aqui */}
                Descrição do card 6
              </Typography>
            </CardContent>
          </Card>
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
