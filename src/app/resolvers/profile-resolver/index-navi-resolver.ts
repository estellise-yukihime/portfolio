import { ResolveFn } from '@angular/router'
import { ProfileInfo } from '../../models/profile-info'
import { inject } from '@angular/core'
import { ProfileApi } from '../../services/api/profile-api/profile-api'

export const indexNaviResolver: ResolveFn<ProfileInfo> = (route, state) => {
  const profileApi = inject(ProfileApi)

  return profileApi.getProfileInfo(route.data['profileId'])
}
