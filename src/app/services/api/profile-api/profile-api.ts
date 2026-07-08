import { inject, Service } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Profile } from '../../../models/profile'
import { environment } from '../../../../environments/environment'
import { ProfileHero } from '../../../models/profile-hero'
import { ProfileLink } from '../../../models/profile-link'
import { ProfileInfo } from '../../../models/profile-info'

@Service()
export class ProfileApi {
  private readonly _httpClient = inject(HttpClient)

  getProfile(id: string): Observable<Profile> {
    return this._httpClient.get<Profile>(
      `${environment.api.url}/api/${environment.api.version}/profiles/${id}`
    )
  }

  getProfileHero(id: string): Observable<ProfileHero> {
    return this._httpClient.get<ProfileHero>(
      `${environment.api.url}/api/${environment.api.version}/profiles/${id}/hero`
    )
  }

  getProfileLink(id: string): Observable<ProfileLink[]> {
    return this._httpClient.get<ProfileLink[]>(
      `${environment.api.url}/api/${environment.api.version}/profiles/${id}/link`
    )
  }

  getProfileInfo(id: string): Observable<ProfileInfo> {
    return this._httpClient.get<ProfileInfo>(
      `${environment.api.url}/api/${environment.api.version}/profiles/${id}/info`
    )
  }
}
