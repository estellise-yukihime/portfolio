import { ProfileCV }    from './profile-cv'
import { ProfileSkill } from './profile-skill'
import { ProfileSocial } from './profile-social'

export type ProfileCard = {
  id: number
  external_id: string
  first_name: string | null
  last_name: string | null
  email: string | null
  title: string | null
  stack: string | null
  state: string | null
  about: string | null
  created_at: string
  updated_at: string

  cv: ProfileCV | null
  skills: ProfileSkill[] | null
  socials: ProfileSocial[] | null
}
