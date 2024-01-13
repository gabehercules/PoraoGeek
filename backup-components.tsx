export default function AvisoDashboard() {
  return (
    <div className="flex gap-4">
      <div className="p-4 rounded-lg bg-brand-green/10">
        <h2 className="pb-2 font-bold text-brand-green">
          Bem vindo(a) ao Porão Geek
        </h2>
        <p className="text-sm">
          Somos uma plataforma de mídia e entretenimento - ainda não tão -
          completa focada na experiência do usuário. Aqui você encontrará
          notícias, reviews, análises, críticas, opiniões e muito mais e com uma
          experiência focada no consumo do conteúdo.{" "}
          <span className="font-semibold text-brand-green underline underline-offset-2">
            Sem ADS chatões
          </span>{" "}
          😎
        </p>
      </div>

      <div className="p-4 rounded-lg bg-orange-500/10">
        <h2 className="pb-2 font-bold text-orange-500">
          Em breve, nossa campanha no Apoia.se
        </h2>
        <p className="text-sm">
          Para continuar mantendo a qualidade dos nossos serviços bem como
          independência de ADS precisamos da sua ajuda. Em breve, nossa campanha
          no Apoia.se estará no ar onde você poderá ajudar o Porão a continuar
          operando e ainda ganhará brindes e recompensas exclusivas.
        </p>
      </div>
    </div>
  );
}
