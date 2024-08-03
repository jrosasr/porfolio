import { Mail, Paperclip } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

import Container from "@/components/shared/container";
export default function Introduction() {
    return (
        <Container>
            <div id="home" className="text-center">
                <h3 className="text-xl mb-3">Hola, soy</h3>
                <h1 className="text-4xl font-bold mb-3">Juan Rosas</h1>
                <h2 className="text-2xl text-gray-400">Ingeniero de Software</h2>
                <div className="flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
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