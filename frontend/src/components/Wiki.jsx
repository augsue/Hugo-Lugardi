import { Box, Container } from "@mui/material";
import peoplebackground from "../assets/imgs/peoplebackground.jpg";
import Carousel from "./Carousel"

export default function Wiki() {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "80vh",
        backgroundImage: `url(${peoplebackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 8,
        marginLeft: "calc(-50vw + 50%)",
        borderTop: "2px solid #1a1a1a",
        borderBottom: "2px solid #1a1a1a",
        position: "relative",
      }}
    >
      <Container
        sx={{
          height: "100%",
          p: 0,
          maxWidth: "85% !important"
        }}
      >
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
            Discover
          </Box>
          <Box sx={{ flex: 1, height: "1px", backgroundColor: "#FFF" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Carousel />
        </Box>
      </Container>
    </Box>
  );
}
