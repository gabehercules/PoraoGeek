export default function CategoryPage({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>;
}
