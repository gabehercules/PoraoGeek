export async function getUserData(token: string) {
  const response = await fetch(
    `${process.env.STRAPI_API}/api/users/me?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}
