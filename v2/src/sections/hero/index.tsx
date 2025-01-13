import { ComponentProps } from "react"
import LinkButton from "../../components/link"
import Section from "../../components/section"
import { SectionParagraph, SectionPrimaryTitle } from "../../components/typography"
import { cn } from "../../utils"

interface HeroSectionProps extends ComponentProps<'section'> {
  title?: string
  description?: string
  link?: string
  linkLabel?: string
}

export default function HeroSection({ title, description, link, linkLabel, className, ...rest }: HeroSectionProps) {
  return (
    <Section
      className={cn("min-h-[580px] sm:min-h-[720px] bg-hero justify-center gap-6", className)}
      {...rest}
    >
      <SectionPrimaryTitle className="text-4xl sm:text-5xl sm:font-extrabold sm:leading-loose sm:text-pretty">{title}</SectionPrimaryTitle>
      <SectionParagraph className="text-center">{description}</SectionParagraph>
      {link && linkLabel &&
        <LinkButton
          href={link}
        >
          {linkLabel}
        </LinkButton>}
    </Section>
  )
}
