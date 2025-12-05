"use client";
import { useState, useCallback } from "react";
import { getToken, setToken, clearToken } from "../lib/auth";

export function useAuth() {
  const [token, setTokenState] = useState<string | null>(() => getToken());

  const login = useCallback((t: string) => {
    setToken(t);
    setTokenState(t);
  }, []);

  const logout = useCallback(() => {
    clearToken();
    setTokenState(null);
  }, []);

  return { token, login, logout, authenticated: !!token };
}
