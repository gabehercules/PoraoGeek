"use client";
import { PostsMeta } from "@/types/strapi-models";
import { useRouter, usePathname } from "next/navigation";

export default function PaginationControl({ pagination }: PostsMeta) {
  const pathname = usePathname(); // busca o pathname da página atual
  const router = useRouter();

  // const page = searchParams.get("page") ?? "1"; // se não existir o parâmetro page, assume o valor 1
  // const perPage = searchParams.get("perPage") ?? "8"; // se não existir o parâmetro perPage, assume o valor 8

  const { page, pageCount, pageSize, total } = pagination;

  // por padrão o valor retornado para page é 1

  function handlePrevPage() {
    router.push(pathname + `?page=${page - 1}`);
  }

  function handleNextPage() {
    router.push(pathname + `?page=${page + 1}`);
  }

  // console.log("LOG DA PAGINATIONCONTROL", pagination);

  return (
    <div className="flex flex-wrap items-center gap-2 mt-6">
      {/* prev */}
      <button
        disabled={Number(page) === 1}
        onClick={handlePrevPage}
        className="flex-grow rounded font-medium py-2 px-6 text-dark-primary bg-brand-green disabled:opacity-50"
      >
        Anterior
      </button>

      {/* next */}
      {/* gambi para não renderizar o botao 'next' so para teste */}
      <button
        disabled={Number(page) === pageCount}
        onClick={handleNextPage}
        className="flex-grow rounded font-medium py-2 px-6 text-dark-primary bg-brand-green disabled:opacity-50"
      >
        Próximo
      </button>

      <span className="w-full text-dark-text">
        {total} resultados - página {page} de {pageCount}
      </span>
    </div>
  );
}
