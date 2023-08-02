import RegisterForm from "../../../components/Forms/RegisterForm";

export default function Page() {
  return (
    <div className="flex h-screen">
      <div className="w-[52vw] bg-[url('/hero-login.webp')]">Image</div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-[400px] flex shadow-md">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
