import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CubeWhite from "../assets/cube_white.svg?react";

export default function Header() {
  const navItems = ["Autores", "Wiki", "Feedback"];

  return (
    <AppBar
      position="relative"
      sx={{
        width: "98%",
        left: "1%",
        borderRadius: 0,
        boxShadow: "none",
        backgroundColor: "transparent",
        borderBottom: (theme) => `2px solid ${theme.palette.primary.main}`,
      }}
    >
      <Toolbar
        sx={{
          minHeight: "70px",
          padding: "0 24px",
          justifyContent: "space-between",
          color: "transparent",
        }}
      >
        <Box
          sx={{
            fontSize: "28px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <div style={{ color: "#001233", height: "82px" }}>
            <CubeWhite style={{ width: "100%", height: "100%" }}/>
          </div>
          
        </Box>
        <Box
          sx={{
            fontSize: "28px",
            fontWeight: 500,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            color: (theme) => theme.palette.text.primary,
          }}
        >
          Hugo Lugardi
        </Box>
        <Box sx={{ display: "flex", gap: "32px" }}>
          {navItems.map((item) => (
            <Button
              key={item}
              component={Link}
              to={`/${item.toLowerCase()}`}
              sx={{
                color: (theme) => theme.palette.text.primary,
                textTransform: "none",
                fontSize: "18px",
                fontWeight: 500,
                position: "relative",
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-8px",
                  left: 0,
                  width: "0%",
                  height: "2px",
                  backgroundColor: (theme) => theme.palette.primary.main,
                  transition: "width 0.3s ease",
                },
                "&:hover::after": {
                  width: "100%",
                },
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
