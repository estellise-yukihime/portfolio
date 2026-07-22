import { ProfileCV } from './profile-cv'
import { ProfileCareer } from './profile-career'
import { ProfileSkill } from './profile-skill'
import { ProfileCertificate } from './profile-certificate'
import { ProfileEducation } from './profile-education'
import { ProfileSocial } from './profile-social'

export type ProfilePlus = {
  external_id: string | null
  first_name: string | null
  last_name: string | null
  email: string | null
  photo: string | null
  title: string | null
  stack: string | null
  state: string | null
  summary: string | null
  created_at: string
  updated_at: string

  cv: ProfileCV | null
  career: ProfileCareer[] | null
  skills: ProfileSkill[] | null
  certificates: ProfileCertificate[] | null
  educations: ProfileEducation[] | null
  socials: ProfileSocial[] | null
}
