import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function getServerSessionHelper() {
  const session = await getServerSession(authOptions);

  const hasSession = !!session;

  console.log("hasSession", hasSession);

  return hasSession;
}
