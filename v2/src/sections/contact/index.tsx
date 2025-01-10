import Button from "../../components/button"
import FormInputLabel from "../../components/form-input-label"
import Section from "../../components/section"
import TextAreaInputField from "../../components/text-area-input-field"
import TextInputField from "../../components/text-input-field"
import { SectionParagraph, SectionPrimaryTitle } from "../../components/typography"

export default function ContactSection() {
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
        className="w-full bg-popover text-popover-foreground p-6 flex flex-col gap-1"
      >
        <FormInputLabel htmlFor="name">Nome</FormInputLabel>
        <TextInputField required id="name" placeholder="Digite seu nome" />
        <FormInputLabel htmlFor="email" spacer>Email</FormInputLabel>
        <TextInputField required id="email" type="email" placeholder="Digite seu email" />
        <FormInputLabel htmlFor="message" spacer>Mensagem</FormInputLabel>
        <TextAreaInputField required id="message" />
        <Button type="submit">Enviar</Button>
      </form>
    </Section>
  )
}
