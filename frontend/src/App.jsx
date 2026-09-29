import {
  Button,
  TextField,
  Box,
  Card,
  CardContent,
  Typography,
  CssBaseline,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

// const API_URL = import.meta.env.VITE_API_URL;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box sx={{ p: 2, display: "flex", gap: 2 }}>
        <TextField label="Nome" variant="outlined" />
        <Button variant="contained" size="large">
          Enviar
        </Button>
        <Card sx={{ maxWidth: 300 }}>
          <CardContent>
            <Typography variant="h5">Card</Typography>
            <Typography color="text.secondary">Conteudo</Typography>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}

export default App;
