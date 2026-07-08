import { ResolveFn } from '@angular/router'
import { ProfileId } from '../../models/profile-id'

export const profileIdResolver: ResolveFn<ProfileId> = (route, state) => {
  return { id: route.params['profileId'] } as ProfileId;
}
