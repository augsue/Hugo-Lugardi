// AuthorsSection.jsx
import { Box } from "@mui/material";
import bibleBackground from "../assets/imgs/bibleBackground.jpg";

export default function AuthorsSection() {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundImage: `url(${bibleBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderTop: "2px solid #1a1a1a",
        borderBottom: "2px solid #1a1a1a",
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        paddingTop: "40px",
        paddingLeft: "40px",
        paddingRight: "40px",
      }}
    >
      {/* Card Principal - Esquerda (Maior) */}
      <Box
        sx={{
          flex: 0.5,
          border: "2px solid #000",
          height: "800px",
          p: 2,
          display: "flex",
          gap: 2,
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {/* Retângulo menor dentro do principal */}
        <Box
          sx={{
            border: "2px solid #000",
            height: "100%",
            width: "100%",
          }}
        />
      </Box>

      {/* Coluna Direita */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          marginLeft: 4,
        }}
      >
        {/* Coauthors */}
        <Box sx={{ display: "flex", gap: 3, width: "100%" }}>
          <Box
            sx={{
              flex: 1,
              border: "2px solid #000",
              minHeight: "400px",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Box
              sx={{
                border: "2px solid #000",
                minHeight: "400px",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              border: "2px solid #000",
              minHeight: "400px",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Box
              sx={{
                border: "2px solid #000",
                minHeight: "400px",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              border: "2px solid #000",
              minHeight: "400px",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Box
              sx={{
                border: "2px solid #000",
                minHeight: "400px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
