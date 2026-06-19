// Backend URL

const API_BASE_URL =
  "http://localhost:5001/api";

// Get token from localStorage

function getToken() {
  return localStorage.getItem(
    "token"
  );
}

// GET Request

export async function getRequest(
  endpoint: string
) {
  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      headers: {
        Authorization:
          `Bearer ${getToken()}`,
      },
    }
  );

  return response.json();
}

// POST Request

export async function postRequest(
  endpoint: string,
  body: unknown
) {

  console.log("TOKEN:", getToken());  
  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",

        Authorization:
          `Bearer ${getToken()}`,
      },

      body: JSON.stringify(body),
    }
  );

  return response.json();
}