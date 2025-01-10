interface IconsInfiniteScrollProps {
  hidden?: boolean
}

export default function IconsInfiniteScroll({ hidden = false }: IconsInfiniteScrollProps) {
  return (
    <div
      aria-hidden={hidden}
      className='flex space-x-12 animate-loop-scroll'>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/labview/labview-original-wordmark.svg"
        className='h-12 w-12 max-w-none'
        alt='LabVIEW Logo'
      />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
        className='h-12 w-12 max-w-none'
        alt='C++ Logo'
      />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"
        className='h-12 w-12 max-w-none'
        alt='Rust Logo'
      />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tauri/tauri-original.svg"
        className='h-12 w-12 max-w-none'
        alt='Tauri Logo'
      />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        className='h-12 w-12 max-w-none'
        alt='TypeScript Logo'
      />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        className='h-12 w-12 max-w-none'
        alt='React Logo'
      />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
        className='h-12 w-12 max-w-none'
        alt='Next.js Logo'
      />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
        className='h-12 w-12 max-w-none'
        alt='Vite Logo'
      />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
        className='h-12 w-12 max-w-none'
        alt='Express Logo'
      />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
        className='h-12 w-12 max-w-none'
        alt='Nest.js Logo'
      />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
        className='h-12 w-12 max-w-none'
        alt='SQLite Logo'
      />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
        className='h-12 w-12 max-w-none'
        alt='PostgreSQL Logo'
      />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
        className='h-12 w-12 max-w-none'
        alt='MongoDB Logo'
      />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original-wordmark.svg"
        className='h-12 w-12 max-w-none'
        alt='Redis Logo'
      />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
        className='h-12 w-12 max-w-none'
        alt='Prisma Logo'
      />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg"
        className='h-12 w-12 max-w-none'
        alt='Arduino Logo'
      />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
        className='h-12 w-12 max-w-none'
        alt='Jest Logo'
      />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        className='h-12 w-12 max-w-none'
        alt='Tailwind CSS Logo'
      />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg"
        className='h-12 w-12 max-w-none'
        alt='Raspberry Pi Logo'
      />
    </div>
  )
}