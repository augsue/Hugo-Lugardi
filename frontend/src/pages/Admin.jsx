import { useState } from "react";
import { Box, Typography } from "@mui/material";
import LoginOverlay from "../components/admin/LoginOverlay";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);

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

  // TODO (sessão): ao montar, checar se já existe token válido
  //   e chamar setAuthenticated(true) para pular o login.

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#0d0b0b", color: "#e8dcc8" }}>
      <LoginOverlay open={!authenticated} onSubmit={handleLogin} />

      {/* Só renderiza o conteúdo após autenticar, assim ele nem
          existe no DOM por baixo do overlay */}
      {authenticated && (
        <Box sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
            Painel administrativo
          </Typography>

          {/* TODO: Gerenciamento da Wiki */}
          {/* TODO: Gerenciamento dos comentários/feedbacks */}
          {/* TODO: botão de logout */}
        </Box>
      )}
    </Box>
  );
}