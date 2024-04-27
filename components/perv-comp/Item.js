import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

const Item = ({ blok }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    <div className="p-6">
      <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
        {blok.main_description}
      </h1>
      <h2 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
        {blok.detailed_description}
      </h2>
      <div className="relative w-60 h-60">
        <Image
          src={blok.image.filename}
          alt={blok.image.id}
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div>
        <h3>Price</h3>
        <p>{blok.price}</p>
      </div>
      <div className="mt-4">
        <a
          href={blok.link.url}
          className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
          title="Amazon"
        >
          Amazon
        </a>
      </div>
    </div>
  </div>
);

export default Item;
