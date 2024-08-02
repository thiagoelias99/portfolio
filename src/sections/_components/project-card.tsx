import { IProject } from '@/lib/lang/lang'

interface ProjectCardProps {
  project: IProject
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='bg-card w-[380px] rounded-lg flex flex-col justify-start items-center pb-2'>
      <img
        src={project.imageUrl}
        alt={project.name}
        className='w-full h-[180px] object-cover object-top rounded-t-lg'
      />
      <h2 className='pt-4 text-xl sm:text-3xl text-primary font-semibold'>{project.name}</h2>
      <ul className='w-full flex justify-center items-start gap-x-4 gap-y-2 flex-wrap pt-2'>
        {project.stacks.map(stack => (
          <li
            key={stack.name}
            className='px-2.5 py-0.5 border-2 rounded-full text-xs sm:text-sm'
          >{stack.name}</li>
        ))}
      </ul>
      <p className='text-sm sm:text-lg px-4 pt-2 line-clamp-4'>{project.description}</p>
    </div>
  )
}