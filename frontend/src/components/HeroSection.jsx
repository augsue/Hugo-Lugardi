import bookCover from "../assets/imgs/book-cover.jpeg";
import book from "../assets/imgs/library.png";
import { Box, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: {xs: "90vh", md: "96vh"},
        backgroundImage: `url(${book})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 12, md: 14 },
        px: { xs: 2, md: 3 },
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", md: "1200px" },
          minHeight: { xs: "100px", md: "650px" },
          mx: "auto",
          boxSizing: "border-box",
          p: { xs: "22px 18px", md: "40px 50px" },

          border: "1px solid rgba(255,255,255,0.22)",
          outline: "1px solid rgba(255,255,255,0.08)",

          outlineOffset: "-10px",
          borderRadius: 0,
          backgroundColor: "rgba(60, 40, 25, 0.55)",
          color: "#f0e4cc",
          backgroundImage: [
            // reflexo diagonal (a "faixa" de vidro)
            "linear-gradient(115deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 22%, transparent 42%)",
            // brilho suave no canto superior esquerdo
            "radial-gradient(ellipse at 0% 0%, rgba(255,255,255,0.10), transparent 55%)",
            // base igual ao header
            "linear-gradient(to right, rgba(10,9,8,.92) 0%, rgba(37,36,34,.80) 50%, rgba(10,9,8,.92) 100%)",
          ].join(", "),
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: [
            "inset 0 1px 0 rgba(255,255,255,0.18)", // fio de luz na borda de cima
            "inset 0 0 70px rgba(255,255,255,0.03)", // névoa interna
            "0 10px 40px rgba(0,0,0,0.6)", // sombra externa
          ].join(", "),
        }}
      >
        {/* Cabeçalho */}
        <Box
          sx={{
            // no Box do cabeçalho: remova o borderBottom e adicione
            "&::after": {
              content: '""',
              display: "block",
              height: "1px",
              background:
                "linear-gradient(to right, #a63c06, #b8893b 50%, transparent)",
            },
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Play Fair",
              fontSize: { xs: "10px", md: "14px" },
              mb: 1,
              fontWeight: "bold",
              letterSpacing: "2px",
              color: "#eae2b7",
            }}
          >
            Gláucio Augsue & Seus Filhos
          </Typography>
          <Typography
            sx={{
              fontFamily: "Perandory",
              fontWeight: "bold",
              fontSize: { xs: "24px", md: "40px" },
              lineHeight: 1.2,
              pb: 1,
            }}
          >
            Hugo Lugardi e a Ordem Magoi
          </Typography>
        </Box>

        {/* Capa + texto */}
        <Box sx={{ display: "flow-root" }}>
          <Box
            component="img"
            src={bookCover}
            alt="Capa do livro Hugo Lugardi e a Ordem Magoi"
            sx={{
              float: "left",
              width: { xs: "120px", md: "280px" },
              height: "auto",
              mr: { xs: 2, md: 4 },
              mb: { xs: 1, md: 2 },
              borderRadius: "2px",
              border: "1px solid rgba(255,255,255,0.22)",
              boxShadow:
                "0 0 0 1px #7a5a2e, 0 10px 30px rgba(0,0,0,.7), 0 0 24px rgba(166,60,6,.25)",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Play Fair",
              fontSize: { xs: "15px", md: "18px" },
              lineHeight: 1.7,
              "&::first-letter": {
                fontFamily: "Perandory",
                fontSize: {xs: "2.7em", md: "3.4em"},
                float: "left",
                lineHeight: 0.75,
                mt: { xs: "0.22em", md: "0.12em"},
                pr: 1,
              },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Odit earum ipsum
            enim soluta! Distinctio aliquid iste dolor maiores, ipsum earum sunt
            blanditiis aliquam doloribus voluptate. Rem consectetur omnis
            accusamus quas! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. A facere quibusdam, numquam praesentium adipisci sed
            consecteturs officia, iste modi aliquam suscipit dicta voluptates
            eveniet. Perferendis modi praesentium delectus dolorem a!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
