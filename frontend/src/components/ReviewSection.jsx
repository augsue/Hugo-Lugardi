import {
  Box,
  Container,
} from "@mui/material";

export default function ReviewSection() {
    return (
         <Box
          sx={{
            width: "100vw",
            background: `
      linear-gradient(90deg, #0d0d0d 0%, #1a1a1a 50%, #0d0d0d 100%),
      url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise"/><feColorMatrix in="noise" type="saturate" values="0"/></filter><rect width="100" height="100" fill="rgba(255,255,255,0.02)" filter="url(%23noise)"/></svg>')
    `,
            backgroundSize: "100% 100%, 200px 200px",
            py: 3,
            marginLeft: "calc(-50vw + 50%)",
            borderTop: "2px solid #1a1a1a",
            borderBottom: "2px solid #1a1a1a",
            position: "relative",
          }}
        >
          <Container maxWidth="lg">
            {/* Linha decorativa */}
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
                Comentarios
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
              {[
                {
                  comment: "Livro incrível, totalmente envolvente!",
                  author: "João Silva",
                  date: "2 dias atrás",
                },
                {
                  comment:
                    "A história é mágica, personagens bem desenvolvidos.",
                  author: "Maria Santos",
                  date: "1 semana atrás",
                },
                {
                  comment: "Recomendo para qualquer fã de fantasia!",
                  author: "Pedro Costa",
                  date: "3 semanas atrás",
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: 1,
                    padding: "24px",
                    backgroundColor: "#F9F8F6",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform:
                        "perspective(1000px) rotateZ(1deg)",
                    },
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
                    "{item.comment}"
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#403D39",
                      }}
                    >
                      {item.author}
                    </Box>
                    <Box sx={{ fontSize: "12px", color: "#999" }}>
                      {item.date}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
    )
}