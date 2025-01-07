export const baseURL = "http://localhost:8000"

export const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
}

export function truncateText(text, maxWords) {
  const words = text.split(" ")
  return words.length > maxWords
    ? words.slice(0, maxWords).join(" ") + "..."
    : text
}
