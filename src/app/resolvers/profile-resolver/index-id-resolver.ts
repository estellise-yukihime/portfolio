import { ResolveFn } from '@angular/router'
import { ProfileId } from '../../models/profile-id'

export const indexIdResolver: ResolveFn<ProfileId> = (route, state) => {
  return { id: route.data['profileId'] } as ProfileId
}
