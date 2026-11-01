import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import LoginOverlay from "../components/admin/LoginOverlay";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true); // true enquanto confere o token salvo

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
        if (res.ok) {
          setAuthenticated(true);
        } else {
          sessionStorage.removeItem("admin_token"); // token vencido ou inválido
        }
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
    <Box sx={{ minHeight: "100vh", bgcolor: "#0d0b0b", color: "#e8dcc8" }}>
      {/* Só mostra o overlay depois da checagem, para não piscar o login
          quando já existe sessão válida */}
      <LoginOverlay open={!checking && !authenticated} onSubmit={handleLogin} />

      {authenticated && (
        <Box sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
            Painel administrativo
          </Typography>

          {/* TODO: Gerenciamento da Wiki */}
          {/* TODO: Gerenciamento dos comentários/feedbacks */}
        </Box>
      )}
    </Box>
  );
}