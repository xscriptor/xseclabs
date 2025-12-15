function getToken() {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem("token");
  } catch {
    return null;
  }
}

function setToken(token) {
  if (typeof window === "undefined") return;
  localStorage.setItem("token", token);
}

function clearToken() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("token");
}

function isAuthenticated() {
  return !!getToken();
}

export { getToken, setToken, clearToken, isAuthenticated };
