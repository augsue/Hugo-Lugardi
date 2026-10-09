import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import BookIcon from "@mui/icons-material/Book";

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
          <BookIcon
            sx={{
              fontSize: "32px",
              color: (theme) => theme.palette.primary.main,
            }}
          />
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
