import { ResolveFn }   from '@angular/router'
import { ProfileNavi } from '../../models/profile-navi'
import { inject }      from '@angular/core'
import { ProfileApi } from '../../services/api/profile-api/profile-api'

export const indexNaviResolver: ResolveFn<ProfileNavi> = (route, state) => {
  const profileApi = inject(ProfileApi)

  return profileApi.getProfileNavi(route.data['profileId'])
}
