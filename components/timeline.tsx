import { dataTimelineExperience, dataTimelineExperiencePersonal } from "@/data";
import Title from "./shared/title";
import TimelineCard from "./timeline-card";

export default function Timeline() {
  return (
    <>
      <div className="mx-auto md:mt-28 p-6 max-w-5xl" id="experience">
        <Title title="Experiencia laboral en empresas" pretitle="2020-2024" />

        <ol className="relative border-gray-200 border-s dark:border-gray-700">
          {dataTimelineExperience.map((data) => (
            <TimelineCard
              key={data.id}
              title={data.title}
              typeJob={data.typeJob}
              time={data.time}
              url={data.url}
            >
              {data.description}
            </TimelineCard>
          ))}
        </ol>
      </div>
      <div className="mx-auto md:mt-28 p-6 max-w-5xl" id="experience-personal">
        <Title title="Proyectos personales" pretitle="2023-2024" />

        <ol className="relative border-gray-200 border-s dark:border-gray-700">
          {dataTimelineExperiencePersonal.map((data) => (
            <TimelineCard
              key={data.id}
              title={data.title}
              typeJob={data.typeJob}
              time={data.time}
              url={data.url}
            >
              {data.description}
            </TimelineCard>
          ))}
        </ol>
      </div>
    </>
  );
}
