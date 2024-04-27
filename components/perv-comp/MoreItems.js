import ItemPreview from "./item-preview";

export default function MoreItems({ items }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Items
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {items.map((item) => (
          <ItemPreview
            key={item.slug}
            title={item.title}
            coverImage={item.coverImage}
            date={item.date}
            author={item.author}
            slug={item.slug}
            excerpt={item.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
