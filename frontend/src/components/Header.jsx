import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";

const NAV_HEIGHT = { xs: "70px", md: "55px" };

export default function Header() {
  const navItems = ["Home", "Autores", "Wiki", "Feedback"];

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0, left: 0, right: 0,
        width: "100%",
        height: NAV_HEIGHT,
        borderRadius: 0,
        backgroundImage:
          "linear-gradient(to right, #0a0908 0%, #252422 50%, #0a0908 100%)",
        borderBottom: "2px solid #050505",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: NAV_HEIGHT,
          minHeight: { xs: "76px !important", md: "55px !important" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          gap: { xs: "0px", md: 0 },
          mx: { xs: "8px", md: "30px" },
        }}
      >
        {/* Logo */}
        <Box>
          <Typography
            sx={{
              color: "#e8e4dc",
              fontSize: { xs: "26px", md: "33px" },
              fontFamily: "Perandory",
              lineHeight: { xs: 0.9, md: 0.7 },
              textAlign: "center",
              letterSpacing: "3px",
            }}
          >
            Hugo Lugardi
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "17px" },
              color: "#d9d5ce",
              fontFamily: "Burgues",
              lineHeight: { xs: 0.8, md: 0.8 },
              textAlign: "center",
              mt: { xs: "-4px", md: 0},
            }}
          >
            E a Ordem Magoi
          </Typography>
        </Box>

        {/* Links */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {navItems.map((item) => (
            <Button
              key={item}
              href={`/#${item.toLowerCase()}`}
              sx={{
                color: "#e8e4dc",
                textTransform: "none",
                fontSize: { xs: "18px", md: "25px" },
                fontFamily: "Perandory",
                fontWeight: 500,
                minHeight: {xs: "28px", md: "auto"},
                minWidth: 0,
                px: { xs: "10px", md: "16px" },
                py: { xs: 0, md: "6px" },
                position: "relative",
                "&:hover": { backgroundColor: "transparent" },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "4px",
                  left: 0,
                  width: "0%",
                  height: "1.2px",
                  backgroundColor: "#a63c06",
                  transition: "width 0.4s ease",
                },
                "&:hover::after": { width: "100%" },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}