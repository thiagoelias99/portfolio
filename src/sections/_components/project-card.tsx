import { IProject, ITranslation } from '@/lib/lang/lang'
import { ExternalLinkIcon, FolderGit2Icon } from 'lucide-react'

interface ProjectCardProps {
  translation: ITranslation
  project: IProject
}

export default function ProjectCard({ project, translation }: ProjectCardProps) {
  return (
    <div className='w-full md:max-w-[90%] mx-auto flex flex-col md:flex-row md:even:flex-row-reverse md:gap-8'>
      <div className='w-full md:max-w-[45%]'>
        <h2 className='text-2xl md:text-4xl font-semibold'>{project.name}</h2>
        <div className='pt-2 py-2 md:pb-0 flex justify-start items-start gap-4'>
          {project.deployUrl && (
            <a
              href={project.deployUrl}
              target='_blank'
              rel='noreferrer'
              className='bg-primary text-primary-foreground px-4 py-1 rounded-full shadow flex flex-row justify-start items-center gap-2 w-min'
            >
              <ExternalLinkIcon size={16} className='' />
              <p>{translation.projects.deploy}</p></a>
          )}
          <a
            href={project.repositoryUrl}
            target='_blank'
            rel='noreferrer'
            className='bg-primary text-primary-foreground px-4 py-1 rounded-full shadow flex flex-row justify-start items-center gap-2 w-min'
          >
            <FolderGit2Icon size={16} className='' />
            <p>{translation.projects.repository}</p></a>
        </div>

        <div className='w-full flex flex-row justify-start items-start'>
          <div className='w-1 h-10 bg-primary rounded-t-full rounded-b-full md:hidden'></div>
          <div className='w-full ml-4 md:ml-0 md:pt-2'>
            <p className='w-full md:text-xl md:max-w-prose justify-start text-balance'>{project.description}</p>
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