import { ResolveFn } from '@angular/router'
import { ProfilePlus } from '../../models/profile-plus'
import { inject } from '@angular/core'
import { ProfileApi } from '../../services/api/profile-api/profile-api'

export const profilePlusResolver: ResolveFn<ProfilePlus> = (route, state) => {
  const profileApi = inject(ProfileApi)

  return profileApi.getProfilePlus(route.params['profileId'])
}
