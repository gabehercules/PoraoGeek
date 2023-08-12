export async function getUserData(token: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/users/me?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}
