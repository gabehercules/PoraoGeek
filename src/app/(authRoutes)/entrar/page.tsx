import LogInForm from "../../../components/Forms/LogInForm";

export default function Page() {
  return (
    <div className="flex h-dvh">
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="flex">
          <LogInForm />
        </div>
      </div>
    </div>
  );
}
