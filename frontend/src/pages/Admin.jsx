import { useState } from "react";
import { Box, Typography } from "@mui/material";
import LoginOverlay from "../components/admin/LoginOverlay";

// TODO (autenticação): REMOVER. Só para testar o fluxo do overlay.
// Nunca validar chave no frontend em produção, ela ficaria exposta no bundle.
const DEV_KEY = "dev123";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);

  // TODO (autenticação): trocar por chamada ao backend:
  //   const res = await fetch("/api/admin/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ key }),
  //   });
  //   if (!res.ok) throw new Error("invalid");
  //   const { token } = await res.json();
  //   TODO (sessão): guardar token (sessionStorage ou cookie httpOnly)
  const handleLogin = async (key) => {
    if (key !== DEV_KEY) throw new Error("invalid");
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