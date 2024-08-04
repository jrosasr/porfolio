import { Mail, Paperclip } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

import Container from "@/components/shared/container";
export default function Introduction() {
    return (
        <Container>
            <div id="home" className="text-center">
                <h3 className="mb-3 text-xl">Hola, soy</h3>
                <h1 className="mb-3 font-bold text-4xl">Juan Rosas</h1>
                <h2 className="text-2xl text-gray-400">Desarrollador Full-Stack</h2>
                <div className="flex items-center">
                    <div className="flex md:flex-row flex-col justify-between gap-4 mx-auto mt-10">
                        <Link className={buttonVariants()} href='#account'>
                            <Mail className="mr-2" /> Contacta conmigo
                        </Link>
                        <Link className={buttonVariants({ variant: "secondary" })} href='/cv-juan-rosas.pdf' target="_blank">
                            <Paperclip className="mr-2" /> Descargar CV
                        </Link>
                    </div>
                </div>
                <Image
                    src="/profile.png"
                    alt="Imagen de perfil"
                    width={500}
                    height={500} />
            </div>
        </Container>
    );
}