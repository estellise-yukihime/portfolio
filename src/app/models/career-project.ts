import { ProjectImij } from './project-imij'
import { ProjectTeck } from './project-teck'

export type CareerProject = {
  id: number
  career_id: number
  title: string | null
  description: string | null
  significance: number

  imijs: ProjectImij[] | null
  tecks: ProjectTeck[] | null
}
