export const fetchBlogPosts = async () => {
  const response = await fetch("http://localhost:1337/api/posts");

  if (!response.ok) {
    throw new Error("Erro ao buscar os posts do blog");
  }

  return response.json();
};
