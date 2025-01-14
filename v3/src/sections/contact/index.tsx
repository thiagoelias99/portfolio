/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import Button from "@/components/button"
import FormInputLabel from "@/components/form-input-label"
import Section from "@/components/section"
import TextAreaInputField from "@/components/text-area-input-field"
import TextInputField from "@/components/text-input-field"
import { SectionParagraph, SectionPrimaryTitle } from "@/components/typography"
import { useState } from "react"
import Modal from "@/components/modal"

type FormData = {
  name: string
  email: string
  message: string
}

export default function ContactSection() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState("")
  const [isSending, setIsSending] = useState(false)

  async function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSending(true)
    const formData: FormData = {
      name: (event.target as any).name.value,
      email: (event.target as any).email.value,
      message: (event.target as any).message.value,
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formData,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
        },
      )
      setModalMessage("Sua mensagem foi enviada com sucesso!")
      setModalOpen(true)
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        setModalMessage("Ocorreu um erro ao enviar sua mensagem. Tente novamente.")
        setModalOpen(true)
        return
      }
      setModalMessage("Ocorreu um erro inesperado. Por favor, tente novamente.")
      setModalOpen(true)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <Section
      id="contato"
      className="bg-hero text-hero-foreground"
    >
      <SectionPrimaryTitle className="text-center">Contato</SectionPrimaryTitle>
      <SectionParagraph
        className="text-center"
      >
        Sinta-se à vontade para entrar em contato através do formulário abaixo ou pelo email <a className="text-primary underline underline-offset-2">contato@thiagoeliaseng.com.br</a> e entrarei em contato o mais rápido possível
      </SectionParagraph>

      <form
        id="contact-form"
        className="w-full max-w-screen-md bg-popover text-popover-foreground p-6 flex flex-col gap-1 rounded"
        onSubmit={sendEmail}
      >
        <FormInputLabel htmlFor="name">Nome</FormInputLabel>
        <TextInputField required id="name" placeholder="Digite seu nome" />
        <FormInputLabel htmlFor="email" spacer>Email</FormInputLabel>
        <TextInputField required id="email" type="email" placeholder="Digite seu email" />
        <FormInputLabel htmlFor="message" spacer>Mensagem</FormInputLabel>
        <TextAreaInputField required id="message" />
        <Button type="submit" isLoading={isSending} className="self-center">Enviar</Button>
      </form>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Mensagem"
        message={modalMessage}
      />
    </Section>
  )
}
