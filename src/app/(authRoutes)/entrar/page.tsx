import LogInForm from "../../../components/Forms/LogInForm";

export default function Page() {
  return (
    <div className="flex h-screen">
      <div className="w-[52vw] bg-dark-contrast border-r border-dark-border text-sm"></div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-[400px] flex shadow-md">
          <LogInForm />
        </div>
      </div>
    </div>
  );
}
