import Title from "@/components/shared/title.tsx";
import { dataAboutMe } from "@/data";
import { buttonVariants } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="mx-auto md:px-12 md:py-30 p-6 max-w-5xl" id="about-me">
      <Title title="Conóceme" pretitle="Sobre mi" />

      <div className="grid">
        <div>
          <div className="gap-4 grid md:grid-cols-2 mt-7">
            {dataAboutMe.map((item) => (
              <div
                key={item.id}
                className="dark:bg-slate-800 shadow-md shadow-slate-100 p-4 border rounded-white-10 rounded-xl"
              >
                {item.icon}
                <p className="py-2">{item.name}</p>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="my-12 text-xl">
            Desarrollador Web 4+ años. Experimentado en{" "}
            <Anchor href="https://laravel.com/" title="Laravel" />,{" "}
            <Anchor href="https://vuejs.org/" title="VueJs" /> y{" "}
            <Anchor href="https://tailwindcss.com/" title="Tailwind CSS" />.
            Desde el 2023 tome la iniciativa de aprender otras tecnologías por
            lo que desde entonces estoy ampliando mis conocimientos en el ecosistema de{" "}
            <Anchor href="https://react.dev/" title="ReactJs" /> y{" "}
            <Anchor href="https://nextjs.org/" title="NextJs" /> junto a
            bibliotecas como{" "}
            <Anchor href="https://ui.shadcn.com/" title="Shad-cn UI" /> y{" "}
            <Anchor href="https://nextui.org/" title="NextUI" />
          </p>
          <Link
            className={buttonVariants()}
            href="https://api.whatsapp.com/send?phone=584247060700"
            target="_blank"
          >
            <Phone size={20} className="mr-2" /> Contacta conmigo
          </Link>
        </div>
      </div>
    </div>
  );
}

function Anchor(props: { href: string; title: string }) {
  const { href, title } = props;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <strong className="text-3xl text-orange-500">{title}</strong>
    </a>
  );
}
