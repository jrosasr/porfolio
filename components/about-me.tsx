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
          <p className="my-12">
            Desarrollador web Full-Stack con una pasión por construir 
            experiencias digitales. Mi interés por los 
            puzzles y los desafios intelectuales, por lo que continuamente
            estoy buscando nuevos retos, asi como mi experiencia en tenis
            me ha enseñado la importancia de la perseverancia. Busco un entorno
            de trabajo dinámico donde pueda aplicar mis conocimientos y
            habilidades para crear productos web de alta calidad.
          </p>
          <Link className={buttonVariants()} href="https://api.whatsapp.com/send?phone=584247060700" target="_blank">
              <Phone size={20} className="mr-2" /> Contacta conmigo
          </Link>
        </div>
      </div>
    </div>
  );
}
