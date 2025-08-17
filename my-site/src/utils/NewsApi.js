const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const apiKey = "81f99a34298043a3a4364ef746457b59";

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

export async function getNews(keyword) {
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);

  const url = `${newsApiBaseUrl}?q=${encodeURIComponent(
    keyword
  )}&apiKey=${apiKey}&from=${formatDate(sevenDaysAgo)}&to=${formatDate(
    today
  )}&pageSize=100`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return await response.json();
}
