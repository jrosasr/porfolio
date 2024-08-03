import Title from "@/components/shared/title.tsx";
import { dataAboutMe } from "@/data";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="mx-auto md:px-12 md:py-30 p-6 max-w-5xl" id="about-me">
      <Title title="Conóceme" pretitle="Sobre mi" />

      <div className="grid">
        <div>
          <div className="gap-4 grid md:grid-cols-3 mt-7">
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
            Soy un desarrollador apasionado que encuentra su mayor inspiración
            entre líneas de código y algoritmos desafiantes. Cuando no estoy
            inmerso en la programación, disfruto del aire libre y el deporte,
            creyendo firmemente en mantener un equilibrio entre mente y cuerpo.
            Además, soy un ávido lector, encontrando en los libros una fuente
            inagotable de conocimiento y crecimiento personal. En las redes
            sociales, comparto mi pasión por la programación, creando contenido
            inspirador y educativo para conectar con otros apasionados del
            desarrollo de software.
          </p>
          <Button>
            <Phone size={20} className="mr-2" /> Contactarme
          </Button>
        </div>
      </div>
    </div>
  );
}
