import { IProject } from '@/lib/lang/lang'

interface ProjectCardProps {
  project: IProject
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='w-full md:max-w-[90%] mx-auto flex flex-col md:flex-row md:even:flex-row-reverse md:gap-8'>
      <div className='w-full md:max-w-[45%]'>
        <h2 className='text-2xl md:text-4xl font-semibold'>{project.name}</h2>
        <div className='w-full flex flex-row justify-start items-start'>
          <div className='w-1 h-10 bg-primary rounded-t-full rounded-b-full md:hidden'></div>
          <div className='w-full ml-4 md:ml-0 md:pt-2'>
            <p className='w-full md:text-xl md:max-w-prose justify-start'>{project.description}</p>
            <ul className='w-full flex flex-row justify-start items-start gap-2 flex-wrap p-4'>
              {project.stacks.map(stack => (
                <li
                  key={stack.name}
                  className='text-xs md:text-base bg-card text-card-foreground px-2 md:px-4 py-1 md:py-2 rounded shadow-sm'
                >{stack.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <img
        src={project.imageUrl}
        alt={project.name}
        className='w-full md:max-w-[60%] aspect-video object-contain object-top rounded-t-lg'
      />
    </div>
  )
}