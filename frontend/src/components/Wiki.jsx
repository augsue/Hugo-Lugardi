import { Box, Container, Card } from "@mui/material";
import peoplebackground from "../assets/imgs/peoplebackground.jpg";

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
      <Container>
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
            Box 1
          </Box>
          <Box
            sx={{
              fontSize: "15px",
              lineHeight: 1.6,
              mb: 3,
              color: "#252422",
            }}
          >
            Box 2
          </Box>
          <Box
            sx={{
              fontSize: "15px",
              lineHeight: 1.6,
              mb: 3,
              color: "#252422",
            }}
          >
            Box 3
          </Box>
          <Box
            sx={{
              fontSize: "15px",
              lineHeight: 1.6,
              mb: 3,
              color: "#252422",
            }}
          >
            Box 4
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
