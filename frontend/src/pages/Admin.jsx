import { useState, useEffect } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import LoginOverlay from "../components/admin/LoginOverlay";
import CommentsManager from "../components/admin/CommentsManager";
import WikiManager from "../components/admin/WikiManager";
import { COLORS, FONT_DISPLAY } from "../components/admin/adminStyles";
import gauze from "../assets/imgs/gauze.png"; // ajuste o caminho se preciso

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [tab, setTab] = useState("comments");

  // Ao abrir a página, confere se já existe um token válido
  useEffect(() => {
    const checkSession = async () => {
      const token = sessionStorage.getItem("admin_token");
      if (!token) {
        setChecking(false);
        return;
      }
      try {
        const res = await fetch("/api/admin/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) setAuthenticated(true);
        else sessionStorage.removeItem("admin_token");
      } catch {
        // backend fora do ar: cai no login
      } finally {
        setChecking(false);
      }
    };
    checkSession();
  }, []);

  const handleLogin = async (key) => {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key }),
    });
    if (!res.ok) throw new Error("invalid");
    const { token } = await res.json();
    sessionStorage.setItem("admin_token", token);
    setAuthenticated(true);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f2f1ef",
        backgroundImage: `url(${gauze})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        color: COLORS.navy,
      }}
    >
      <LoginOverlay open={!checking && !authenticated} onSubmit={handleLogin} />

      {authenticated && (
        <Box sx={{ maxWidth: 1100, mx: "auto", px: 2, py: 5 }}>
          {/* Título */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                mb: 1,
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  maxWidth: 120,
                  height: "1px",
                  background: `linear-gradient(90deg, transparent, ${COLORS.orange})`,
                }}
              />
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  bgcolor: COLORS.orange,
                  transform: "rotate(45deg)",
                }}
              />
              <Box
                sx={{
                  flex: 1,
                  maxWidth: 120,
                  height: "1px",
                  background: `linear-gradient(270deg, transparent, ${COLORS.orange})`,
                }}
              />
            </Box>
            <Typography
              component="h1"
              sx={{
                fontFamily: FONT_DISPLAY,
                textTransform: "uppercase",
                letterSpacing: { xs: 3, md: 6 },
                fontSize: { xs: "28px", md: "42px" },
                color: COLORS.navy,
                textShadow:
                  "0 2px 0 rgba(255,255,255,.6), 0 4px 12px rgba(0,0,0,.25)",
              }}
            >
              Painel administrativo
            </Typography>
          </Box>

          {/* Abas */}
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            variant="fullWidth"
            sx={{
              mb: 3,
              borderBottom: `1px solid ${COLORS.navy}33`,
              minHeight: 52,
              "& .MuiTabs-flexContainer": { width: "100%" },
              "& .MuiTab-root": {
                flex: 1,
                width: "50%",
                minHeight: 52,
                color: COLORS.muted,
                textTransform: "uppercase",
                letterSpacing: 3,
                fontFamily: FONT_DISPLAY,
                fontSize: "15px",
                transition: "color .3s, background .3s",
                "&:hover": {
                  color: COLORS.navy,
                  bgcolor: `${COLORS.orange}14`,
                },
              },
              "& .Mui-selected": {
                color: `${COLORS.navy} !important`,
                fontWeight: 600,
              },
              "& .MuiTabs-indicator": {
                height: 3,
                bgcolor: COLORS.orange,
                boxShadow: `0 0 12px ${COLORS.orange}88`,
              },
            }}
          >
            <Tab value="comments" label="Comentários" />
            <Tab value="wiki" label="Wiki" />
          </Tabs>

          {tab === "comments" && <CommentsManager />}
          {tab === "wiki" && <WikiManager />}
        </Box>
      )}
    </Box>
  );
}