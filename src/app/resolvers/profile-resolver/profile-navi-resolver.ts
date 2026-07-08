import { ResolveFn } from '@angular/router'
import { inject } from '@angular/core'
import { ProfileApi } from '../../services/api/profile-api/profile-api'
import { ProfileInfo } from '../../models/profile-info'

export const profileNaviResolver: ResolveFn<ProfileInfo> = (route, state) => {
  const profileApi = inject(ProfileApi)

  return profileApi.getProfileInfo(route.params['profileId'])
}
