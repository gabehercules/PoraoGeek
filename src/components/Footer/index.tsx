function getYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <div>
      <div>©, {getYear()}. Porão Geek. Todos os direitos reservados</div>
    </div>
  );
}
