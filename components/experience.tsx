import { dataExperience } from "@/data";
import Title from "./shared/title";
import { BadgeCheck } from "lucide-react";
import { Progress } from "./ui/progress";

export default function Experience() {
    return (
        <div className="mx-auto md:px-12 md:py-44 p-6 max-w-5xl">
            <Title title="Mis Habilidades" pretitle="Tecnologías" />
            <div className="gap-8 grid md:grid-cols-2 mt-5">
                {dataExperience.map((data) => (
                    <div
                        key={data.id}
                        className="border-gray-400 p-6 border rounded-xl"
                    >
                        <h3 className="text-center text-xl">{data.title}</h3>
                        <div className="gap-4 grid md:grid-cols-2">
                            {data.experience.map((exp) => (
                                <div key={exp.name} className="my-4">
                                    <p className="flex gap-2 mb-2">
                                        <BadgeCheck /> {exp.name}
                                    </p>
                                    <p className="mb-2 text-gray-400">{exp.subtitle}</p>
                                    <Progress value={exp.value} className="w-[60%]" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}