import { CareerProject } from './career-project'

export type ProfileCareer = {
  id: number
  profile_id: number
  name: string | null
  position: string | null
  joined: string | null
  leaved: string | null

  projects: CareerProject[] | null
}
