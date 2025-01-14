import { ComponentProps } from "react"

import LinkButton from "../link"
import SkillItem from "../skill-item"
import { SectionParagraph, SectionSecondaryTitle } from "../typography"

interface ProjectCardProps extends ComponentProps<'li'> {
  project: Project
}

export default function ProjectCard({ project, ...rest }: ProjectCardProps) {
  return (
    <li
      className="w-full flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-10"
      {...rest}
    >
      <img
        className="w-full lg:w-[60%] object-cover object-center aspect-square"
        src={`/images/${project.images[0].src}`}
        alt={project.images[0].alt}
      />
      <div className="w-full py-4 -translate-y-20 lg:translate-y-0 flex flex-col justify-center items-center sm:gap-4">
        <SectionSecondaryTitle className="text-center">{project.name}</SectionSecondaryTitle>
        <SectionParagraph className="text-sm text-center font-light tracking-widest w-full">{project.shortDescription}</SectionParagraph>
        <ul className="w-full flex justify-start flex-wrap gap-4 mt-2">
          {project.mainStacks?.map((skill, index) => (
            <SkillItem key={index}>{skill}</SkillItem>
          ))}
        </ul>
        <LinkButton href={`/projetos/${project.slug}`}>Ver mais sobre</LinkButton>
      </div>
    </li>
  )
}
