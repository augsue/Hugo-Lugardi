import { createContext, useCallback, useContext, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const ToastContext = createContext(() => {});

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const notify = useCallback((message, severity = "success") => {
    setToast({ message, severity, key: Date.now() });
  }, []);

  return (
    <ToastContext.Provider value={notify}>
      {children}
      <Snackbar
        key={toast?.key}
        open={!!toast}
        autoHideDuration={3000}
        onClose={() => setToast(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setToast(null)}
          severity={toast?.severity ?? "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {toast?.message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);