export default function FeedbackForm() {
  return (
    <div>
      <h3 className="text-xl mb-3">Feedback</h3>
      <p className="text-sm mb-4 text-zinc-400">
        Ajude o Porão Geek com seu feedback sobre nossa plataforma. Sinta-se à
        vontade para deixar qualquer tipo de consideração, elogio, crítica
        (construtiva) e até mesmo sugestão de funcionalidade (avaliaremos e
        levaremos em consideração para próximas versões do app).
      </p>
      <form action="" className="flex flex-col gap-3 w-full">
        {/* ideia: salvar o conteudo da mensagem em cache, para que o usuário não
        perca o que escreveu caso a página seja recarregada ou que ele decida
        fechar o formulário e voltar depois */}
        <textarea
          name="message"
          id="message"
          placeholder="Deixe seus comentários"
          className="h-[120px] bg-darker-bg border-dark-border p-4 rounded-md text-sm text-zinc-300 focus:ring-transparent focus:border-brand-green resize-none"
        />
        <button
          type="submit"
          className="p-2 bg-brand-green text-zinc-900 font-medium rounded-md"
        >
          Enviar Feedback
        </button>
      </form>
    </div>
  );
}
