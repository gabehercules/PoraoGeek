"use client";

import { useState, useEffect } from "react";
import { LoaderAlt } from "@styled-icons/boxicons-regular";

export default function FeedbackForm() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (feedback === "") {
      const feedbackContent = localStorage.getItem("feedback");
      setFeedback(feedbackContent?.valueOf() as string);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    const formData = new FormData(e.currentTarget);

    const feedbackContent = formData.get("feedback");

    // console.log("CONTEUDO", feedbackContent);

    fetch("/api/send/feedback", {
      method: "POST",
      body: JSON.stringify(feedbackContent),
    });

    setFeedback("");
    localStorage.removeItem("feedback");
  };

  const saveFeedback = (e: any) => {
    setFeedback(e.currentTarget.value);
    localStorage.setItem("feedback", `${feedback}`);
  };

  return (
    <div>
      <h3 className="text-xl mb-3">Feedback</h3>
      <p className="text-sm mb-4 text-zinc-400">
        Ajude o Porão Geek com seu feedback sobre nossa plataforma. Sinta-se à
        vontade para deixar qualquer tipo de consideração, elogio, crítica
        (construtiva) e até mesmo sugestão de funcionalidade (avaliaremos e
        levaremos em consideração para próximas versões do app).
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
        {/* ideia: salvar o conteudo da mensagem em cache, para que o usuário não
        perca o que escreveu caso a página seja recarregada ou que ele decida
        fechar o formulário e voltar depois */}
        <textarea
          name="feedback"
          id="feedback"
          required
          onChange={saveFeedback}
          placeholder="Deixe seus comentários"
          className="h-[120px] bg-dark-contrast border-dark-border p-4 rounded-md text-sm text-zinc-300 focus:ring-transparent focus:border-brand-green resize-none"
          value={feedback}
        />
        <button
          type="submit"
          className="p-2 bg-brand-green text-zinc-900 font-medium rounded-md"
        >
          {loading ? (
            <LoaderAlt className="animate-spin" width={18} />
          ) : (
            "Enviar Feedback"
          )}
        </button>
      </form>
    </div>
  );
}
