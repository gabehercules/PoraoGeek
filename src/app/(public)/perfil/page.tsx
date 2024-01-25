import { Suspense } from "react";
import UserProfileHeader from "../../../components/UserProfile/UserProfileHeader";

export default function Page() {
  return (
    <div className="flex w-full">
      <div className="flex-1">
        {/* seção perfil */}
        <Suspense fallback={<p>Loading</p>}>
          <UserProfileHeader />
        </Suspense>

        {/* seção de conteúdo */}
      </div>
    </div>
  );
}
