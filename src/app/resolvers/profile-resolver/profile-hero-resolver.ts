import { ResolveFn } from '@angular/router'
import { inject }    from '@angular/core'
import { ProfileApi } from '../../services/api/profile-api/profile-api'
import { ProfileHero } from '../../models/profile-hero'

export const profileHeroResolver: ResolveFn<ProfileHero> = (route, state) => {
  const profileApi = inject(ProfileApi)

  return profileApi.getProfileHero(route.params['profileId'])
}
