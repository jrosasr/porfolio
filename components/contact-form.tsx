"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useState } from "react";

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function ContactForm() {
  const [successForm, setSuccessForm] = useState(false);

  const formSchema = z.object({
    username: z.string().min(1, { message: "El nombre es requerido" }).max(50),
    email: z.string().min(1, { message: "El correo es requerido" }).email(),
    message: z.string().min(1, { message: "El mensaje es requerido" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(values),
    });

    if (response.status === 200) {
      setSuccessForm(true);
    }
  };

  return (
    <Form {...form}>
      {successForm ? (
        <p className="text-green-500">Formulario enviado con éxito.</p>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Nombre"
                    {...field}
                    className="dark:bg-slate-800"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Correo Eléctronico"
                    {...field}
                    className="dark:bg-slate-800"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Escriba aquí tu mensaje"
                    {...field}
                    className="dark:bg-slate-800"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <Button type="submit">Enviar</Button>
        </form>
      )}
    </Form>
  );
}
