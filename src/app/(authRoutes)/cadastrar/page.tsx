import RegisterForm from "../../../components/Forms/RegisterForm";

export default function Page() {
  return (
    <div className="flex h-dvh">
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="flex">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
