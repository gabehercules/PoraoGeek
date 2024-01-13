import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function getServerSessionHelper() {
  const session = await getServerSession(authOptions);

  const hasSession = !!session;

  console.log("hasSession", hasSession);

  return hasSession;
}
