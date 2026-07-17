import { Component, inject } from '@angular/core'
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router'
import { ProfileId } from '../../models/profile-id'
import { ProfileNavi } from '../../models/profile-navi'

/**
 * Sticky top navigation. Pass the current profileId so the section links resolve
 * to /profiles/:profileId/...
 */
@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html'
})
export class Nav {
  private readonly _route = inject(ActivatedRoute)

  readonly profileId = this._route.snapshot.data['profileId'] as ProfileId
  readonly profileNavi = this._route.snapshot.data['profileInfo'] as ProfileNavi

  get initials(): string {
    const initialF = this.profileNavi.first_name?.slice(0, 1)
    const initialL = this.profileNavi.last_name?.slice(0, 1)

    return `${initialF}${initialL}`.toUpperCase()
  }

  get name(): string {
    return `${this.profileNavi.first_name} ${this.profileNavi.last_name}`
  }
}
