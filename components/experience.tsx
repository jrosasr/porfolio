import { dataExperience } from "@/data";
import Title from "./shared/title";
import { BadgeCheck } from "lucide-react";
import { Progress } from "./ui/progress";

export default function Experience() {
    return (
        <div className="mx-auto md:px-12 md:py-44 p-6 max-w-5xl">
            <Title title="Mis Habilidades" pretitle="Tecnologías" />
            <div className="gap-8 grid md:grid-cols-3 mt-5">
                {dataExperience.map((data) => (
                    <div
                        key={data.id}
                        className="border-gray-400 p-6 border rounded-xl"
                    >
                        <h3 className="mb-4 text-center text-xl">{data.title}</h3>
                        <div className="gap-4 grid md:grid-cols-1">
                            {data.experience.map((exp) => (
                                <div key={exp.name} className="flex">
                                    <div className="flex items-center gap-2">
                                        <BadgeCheck />
                                        <p className="flex flex-col">
                                            <span>{exp.name}</span>
                                            <span className="text-orange-400 text-xs">{exp.subtitle}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}