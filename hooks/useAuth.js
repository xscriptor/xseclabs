"use client";
import { useState, useCallback } from "react";
import { getToken, setToken, clearToken } from "../lib/auth";

export function useAuth() {
  /** @type {import('../lib/types').AuthState} */
  const initial = { token: getToken(), authenticated: !!getToken() };
  const [token, setTokenState] = useState(initial.token);

  const login = useCallback((t) => {
    setToken(t);
    setTokenState(t);
  }, []);

  const logout = useCallback(() => {
    clearToken();
    setTokenState(null);
  }, []);

  return { token, login, logout, authenticated: !!token };
}
