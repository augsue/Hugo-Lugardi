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
          <Typography
            variant="h3"
            sx={{ fontFamily: FONT_DISPLAY, textTransform: "uppercase", mb: 3 }}
          >
            Painel administrativo
          </Typography>

          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            sx={{
              mb: 3,
              "& .MuiTab-root": { color: COLORS.muted, textTransform: "uppercase", letterSpacing: 2, fontFamily: FONT_DISPLAY },
              "& .Mui-selected": { color: `${COLORS.navy} !important` },
              "& .MuiTabs-indicator": { bgcolor: COLORS.orange },
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