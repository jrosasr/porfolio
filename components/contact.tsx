import { dataContact } from "@/data";
import Title from "./shared/title";
import Link from "next/link";
import ContactForm from "./contact-form";

export default function Contact() {
    return (
        <div className="mx-auto md:px-12 md:py-44 p-6 max-w-5xl" id="contact">
            <Title title="Ponte en contacto conmingo" pretitle="Contactame" />

            <div className="md:gap-7 grid grid-cols-1 md:grid-cols-3 mt-8">
                <div>
                    {dataContact.map((data) => (
                        <div key={data.id} className="flex flex-col items-center dark:bg-slate-800 mb-5 p-4 rounded-lg">
                            {data.icon}
                            <p>{data.title}</p>
                            <Link href={data.link} target="_blank" className="text-blue-500">{data.subtitle}</Link>
                        </div>
                    ))}
                </div>
                <div className="col-span-2">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}