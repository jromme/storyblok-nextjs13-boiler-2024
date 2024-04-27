import Link from "next/link";

export default function Header() {
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/">
          <a className="hover:underline">Perverts guide to Amazon</a>
        </Link>
        .
      </h2>
    </div>
  );
}
