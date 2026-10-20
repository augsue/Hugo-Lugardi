import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";
import CubeWhite from "../assets/cube_white.svg?react";

const NAV_HEIGHT = "48px";

export default function Header() {
  const navItems = ["Home", "Autores", "Wiki", "Feedback"];

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        margin: 0,
        width: "100%",
        height: NAV_HEIGHT,
        zIndex: (theme) => theme.zIndex.appBar,
        borderRadius: 0,
        backgroundImage:
          "linear-gradient(to right, #0a0908 0%, #161a1d 50%, #0a0908 100%)",
        backgroundSize: "auto, auto",
        backgroundRepeat: "no-repeat, repeat",
        borderBottom: "2px solid #000000",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: NAV_HEIGHT,
          minHeight: `${NAV_HEIGHT} !important`,
          padding: "0 24px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginLeft: "50px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", height: "26px" }}>
            <CubeWhite
              style={{
                width: "auto",
                height: "40px",
                filter: "brightness(0) invert(1)",
              }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: "30px",
              fontFamily: "Eloquence",
              color: "#e8e4dc",
            }}
          >
            Hugo Lugardi
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: "32px", marginRight: "50px" }}>
          {navItems.map((item) => (
            <Button
              key={item}
              href={`#${item.toLowerCase()}`}
              sx={{
                color: "#e8e4dc",
                textTransform: "none",
                fontSize: "20px",
                fontFamily: "Eloquence",
                fontWeight: 500,
                position: "relative",
                "&:hover": { backgroundColor: "transparent" },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "2px",
                  left: 0,
                  width: "0%",
                  height: "1.2px",
                  backgroundColor: "#e8e4dc",
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
