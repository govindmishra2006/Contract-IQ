// Save JWT token

export function saveToken(
  token: string
) {
  localStorage.setItem(
    "token",
    token
  );
}

// Read JWT token

export function getToken() {
  return localStorage.getItem(
    "token"
  );
}

// Remove JWT token

export function logout() {
  localStorage.removeItem(
    "token"
  );
}