import { ResolveFn } from '@angular/router'
import { ProfileLink } from '../../models/profile-link'
import { inject } from '@angular/core'
import { ProfileApi } from '../../services/api/profile-api/profile-api'

export const profileFootResolver: ResolveFn<ProfileLink[]> = (route, state) => {
  const profileApi = inject(ProfileApi)

  return profileApi.getProfileLink(route.params['profileId'])
}
