import { ISkill } from '@/lib/lang/lang'

interface SkillCardProps {
  skill: ISkill
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className='w-full max-w-[960px] mx-auto flex even:flex-row-reverse gap-4 bg-card sm:bg-transparent px-2 py-4 rounded-lg shadow-shape sm:shadow-none'>
      <div className='w-full sm:w-[60%] h-full flex flex-col justify-center sm:justify-start  items-center'>
        <h2 className='text-xl sm:text-3xl text-primary font-semibold'>{skill.name}</h2>
        <p className='w-full text-sm sm:text-lg text-center sm:text-right pt-4 leading-relaxed'>{skill.description}</p>
        <ul className='w-full flex justify-center items-start gap-x-4 gap-y-2 flex-wrap pt-2 sm:pt-4'>
          {skill.stacks.map(stack => (
            <li
              key={stack.name}
              className='px-2.5 py-0.5 border-2 rounded-full text-xs sm:text-sm'
            >{stack.name}</li>
          ))}
        </ul>
      </div>
      <img
        // src={coverPhoto} 
        src={skill.imageUrl}
        alt={skill.name}
        className='hidden sm:block w-[30%] h-[280px] object-cover rounded-lg' />
    </div>
  )
}
