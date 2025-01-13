import { ComponentProps } from "react"
import Section from "../../components/section"
import { SectionSecondaryTitle } from "../../components/typography"
import SkillItem from "../../components/skill-item"

interface ProjectStackSectionProps extends ComponentProps<"section"> {
  title?: string
  stacks?: string[]
}

export default function ProjectStackSection({ title = "Tecnologias Utilizadas", stacks, className, ...rest }: ProjectStackSectionProps) {
  return (
    <Section
      className={className}
      {...rest}
    >
      <SectionSecondaryTitle>{title}</SectionSecondaryTitle>
      <ul className="flex flex-wrap gap-2">
        {stacks?.map((stack, index) => (
          <SkillItem key={index}>{stack}</SkillItem>
        ))}
      </ul>
    </Section>
  )
}
