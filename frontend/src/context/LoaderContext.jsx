import { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { LoaderContext } from "./useLoader";

const NAV_MS = 2000;

export function LoaderProvider({ children }) {
  const [count, setCount] = useState(0);
  const [booted, setBooted] = useState(false);
  const location = useLocation();

  // Detecta troca de rota durante o render, antes da pintura
  const [lastPath, setLastPath] = useState(location.pathname);
  const [navLoading, setNavLoading] = useState(false);
  if (location.pathname !== lastPath) {
    setLastPath(location.pathname);
    setNavLoading(true);
  }

  // Timer da navegação (assíncrono, permitido no effect)
  useEffect(() => {
    if (!navLoading) return;
    const t = setTimeout(() => setNavLoading(false), NAV_MS);
    return () => clearTimeout(t);
  }, [navLoading, location.pathname]);

  // Primeira carga
  useEffect(() => {
    const t = setTimeout(() => setBooted(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const show = useCallback(() => setCount((n) => n + 1), []);
  const hide = useCallback(() => setCount((n) => Math.max(0, n - 1)), []);

  const withLoader = useCallback(async (promise) => {
    show();
    try {
      return await promise;
    } finally {
      hide();
    }
  }, [show, hide]);

  return (
    <LoaderContext.Provider value={{ withLoader }}>
      <Loader open={!booted || navLoading || count > 0} />
      {booted && children}
    </LoaderContext.Provider>
  );
}