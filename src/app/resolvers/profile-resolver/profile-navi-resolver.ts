import { ResolveFn } from '@angular/router'
import { inject } from '@angular/core'
import { ProfileApi }  from '../../services/api/profile-api/profile-api'
import { ProfileNavi } from '../../models/profile-navi'

export const profileNaviResolver: ResolveFn<ProfileNavi> = (route, state) => {
  const profileApi = inject(ProfileApi)

  return profileApi.getProfileNavi(route.params['profileId'])
}
