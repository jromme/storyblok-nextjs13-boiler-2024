import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Intro(siteConfig) {
  const instagram = siteConfig.siteConfig.instagram;
  const intro = documentToReactComponents(siteConfig.siteConfig.intro.json);
  console.log(intro);
  return (
    <section className="flex-col flex items-left p-l lg:p-xl w-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <p className="mini">Welcome</p>
          <h1 className="mr-[40%] lg:mr-0 font-bold tracking-tighter leading-tight uppercase text-5xl lg:text-[3vw]">
            Pervert's guide to Amazon.
          </h1>
        </div>
        <div className="text-right hidden md:block">
          <div>
            <p className="mini">Social Media</p>
            <a href={instagram} rel="noreferrer" target="_blank">
              <p className="uppercase font-bold">(Instagram)</p>
            </a>
          </div>
        </div>
      </div>
      <div className="h-spacer"></div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="intro-text text-left">
          <p className="mini">Intro</p>
          {intro}
        </div>
        <div className="text-right pt-14 md:hidden">
          <div>
            <p className="mini">Social Media</p>
            <p className="uppercase font-bold text-xl">(Instagram)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
