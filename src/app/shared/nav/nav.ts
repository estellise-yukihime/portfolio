import { Component, inject } from '@angular/core'
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router'

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

  readonly profileId = this._route.snapshot.data['profileId']
  readonly profileInfo = this._route.snapshot.data['profileInfo']

  get initials(): string {
    const initialF = this.profileInfo.first_name?.slice(0, 1)
    const initialL = this.profileInfo.last_name?.slice(0, 1)

    return `${initialF}${initialL}`.toUpperCase()
  }

  get name(): string {
    return `${this.profileInfo.first_name} ${this.profileInfo.last_name}`
  }
}
