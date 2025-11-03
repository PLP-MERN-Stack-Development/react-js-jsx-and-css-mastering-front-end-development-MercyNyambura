// utils/api.js

export const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = async (page = 1, limit = 9) => {
  const res = await fetch(`${API_URL}?_page=${page}&_limit=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return await res.json();
};
