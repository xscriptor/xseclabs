export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem("token");
  } catch {
    return null;
  }
}

export function setToken(token: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem("token", token);
}

export function clearToken(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem("token");
}

export function isAuthenticated(): boolean {
  return !!getToken();
}

