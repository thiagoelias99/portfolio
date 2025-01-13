import { ComponentProps } from "react"

import LinkButton from "../link"
import SkillItem from "../skill-item"
import { SectionParagraph, SectionSecondaryTitle } from "../typography"

interface ProjectCardProps extends ComponentProps<'li'> {
  img: string
  title: string
  description: string
  skills?: string[]
  link?: string
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <li className="w-full flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-10">
      <img
        className="w-full lg:w-[60%] object-cover object-center aspect-square"
        src={props.img}
        alt="project"
      />
      <div className="w-full py-4 -translate-y-20 lg:translate-y-0 flex flex-col justify-center items-center sm:gap-4">
        <SectionSecondaryTitle className="text-center">{props.title}</SectionSecondaryTitle>
        <SectionParagraph className="text-sm text-center font-light tracking-widest w-full">{props.description}</SectionParagraph>
        <ul className="w-full flex justify-start flex-wrap gap-4 mt-2">
          {props.skills?.map((skill, index) => (
            <SkillItem key={index}>{skill}</SkillItem>
          ))}
        </ul>
        <LinkButton href={props.link}>Ver mais sobre</LinkButton>
      </div>
    </li>
  )
}
