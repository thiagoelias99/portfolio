declare type Project = {
  id: number
  slug: string
  name: string
  shortDescription: string
  mainStacks: string[]
  allStacks: string[]
  githubUrl: string
  demoUrl: string
  images: Image[]
  _html: string
}

declare type Image = {
  src: string
  alt: string
}