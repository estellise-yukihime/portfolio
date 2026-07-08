import { ResolveFn } from '@angular/router'
import { inject } from '@angular/core'
import { ProfileApi } from '../../services/api/profile-api/profile-api'
import { ProfileLink } from '../../models/profile-link'

export const indexFootResolver: ResolveFn<ProfileLink[]> = (route, state) => {
  const profileApi = inject(ProfileApi)

  return profileApi.getProfileLink(route.data['profileId'])
}
