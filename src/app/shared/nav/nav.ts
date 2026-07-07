import { Component, Input } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { profile } from '../../data/portfolio'

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
  @Input({ required: true }) profileId!: string
  readonly initials = profile.initials
  readonly name = profile.name
  readonly resumeUrl = profile.resumeUrl
}
