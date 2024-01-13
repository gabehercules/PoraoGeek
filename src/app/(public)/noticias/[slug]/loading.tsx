export default function Loading() {
  // melhorar a animação de loading (talvez deixar o pulse assincrono)

  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="flex items-center gap-3 mt-10">
        {/* ideia: voltar para a home ou para a página anterior ou ter um breadcrumb */}
        <div className="flex items-center animate-pulse h-4 bg-white/10"></div>
        <span className="w-3 h-3 rounded-full bg-white/10"></span>
        <p className="animate-pulse h-4 bg-white/10"></p>
      </div>
      <div className="w-full">
        <div className="animate-pulse w-full h-10 bg-white/10 mt-6 mb-4" />
        <div className="animate-pulse h-10 bg-white/10" />
        <div className="animate-pulse w-full h-[400px] my-6 bg-white/10" />
        <div className="animate-pulse w-full h-3 bg-white/10 mb-3" />
        <div className="animate-pulse w-full h-3 bg-white/10 mb-3" />
        <div className="animate-pulse w-full h-3 bg-white/10 mb-3" />
        <div className="animate-pulse h-3 bg-white/10 mb-3" />
      </div>
    </div>
  );
}
