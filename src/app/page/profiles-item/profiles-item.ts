import { Component, inject } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { Nav }                        from '../../shared/nav/nav'
import { Footer }                     from '../../shared/footer/footer'
import { Reveal } from '../../shared/reveal'
import { DEFAULT_PROFILE_ID, getProfile, type Accent } from '../../data/portfolio'

@Component({
  selector: 'app-profile',
  imports: [RouterLink, Nav, Footer, Reveal],
  templateUrl: './profiles-item.html',
  styleUrl: './profiles-item.css'
})
export class ProfilesItem {
  private route = inject(ActivatedRoute)
  readonly profileId = this.route.snapshot.paramMap.get('profileId') ?? DEFAULT_PROFILE_ID
  readonly p = getProfile(this.profileId)

  accentText(a: Accent): string {
    return { accent: 'text-accent', primary: 'text-primary', secondary: 'text-secondary' }[a]
  }
}
