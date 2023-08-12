import Image from "next/image";
import Link from "next/link";
import { authOptions } from "../../../app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getUserData } from "../../../utils/getUserData";
import { Suspense } from "react";

export default async function UserProfileHeader() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div>Faça o login</div>;
  }

  const userData = await getUserData(session?.accessToken as unknown as string);

  const user = await userData.json();

  return (
    <Suspense
      fallback={
        <div className="w-full h-[245px] bg-white/10 animate-pulse duration-300 rounded-md" />
      }
    >
      <div className="">
        {/* banner de capa */}
        <div className="flex w-full h-[245px] rounded-md overflow-hidden border border-dark-border">
          <div className="flex gap-4 items-start bg-dark-contrast p-6">
            {/* foto de perfil */}
            <span className="relative w-[80px] h-[80px]">
              <Image
                src={user.avatar.url}
                alt="Profile fic"
                width={90}
                height={90}
                className="w-full relative rounded-lg"
              />
            </span>
            <div className="flex flex-col">
              {/* info like name, username and other things */}
              <span className="text-xl font-bold leading-none">
                {user.username}
              </span>
              <span>{user?.email}</span>
            </div>
          </div>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${user.coverImage.url})`,
            }}
          ></div>
        </div>
        {/* user profile content */}
        <div className="border border-dark-border rounded mt-4 overflow-hidden">
          <div className="h-10"></div>
        </div>
      </div>
    </Suspense>
  );
}
