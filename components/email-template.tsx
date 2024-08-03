import * as React from "react"

interface EmailTemplateProps {
    firstName: string
    email: string
    message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName, email, message
}) => (
    <div>
        <h2>Hola, mi nombre es <strong>{firstName}</strong></h2>
        <p>{message}</p>
        <h4>Correo enviado de: {email}</h4>
    </div>
)