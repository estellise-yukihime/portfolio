import { ProfileSocial } from './profile-social'
import { ProfileCV }   from './profile-cv'

export type ProfileNavi = {
  id: number
  email: string | null
  first_name: string | null
  last_name: string | null
  cv: ProfileCV | null
  socials: ProfileSocial[] | null
}
