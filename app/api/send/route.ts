import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const dataForm = await req.json();

  const { data, error } = await resend.emails.send({
    from: "Resend: Acme <onboarding@resend.dev>",
    to: ["juan.rosasr01@gmail.com"],
    subject: "Juan Rosas - Porfolio",
    react: EmailTemplate({
      firstName: dataForm.username,
      email: dataForm.email,
      message: dataForm.message,
    }),
  });

  if (error) {
    return Response.json(error);
  }
  return Response.json(data);
}
