import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Portfolio() {
    return (
        <div id="portfolio" className="mx-auto mb-8 md:py-24 p-4 max-w-4xl">
            <Title title="Portfolio Freelancer" pretitle="Proyectos Realizados" />

            <div className="gap-14 grid md:grid-cols-3">
                {dataPortfolio.map((item) => (
                    <div key={item.id}>
                        <h3 className="mb-4 text-xl">{item.title}</h3>
                        <Image src={item.image} alt={item.title} height={300} width={300} className="rounded-2xl w-full" />
                        <div className="flex gap-3 mt-4">
                            <Link className={buttonVariants({variant: "outline"})} href={item.urlGithub} target="_blank">Github</Link>
                            <Link className={buttonVariants()} href={item.urlDemo} target="_blank">Demo</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}