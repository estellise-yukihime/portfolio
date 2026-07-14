import { afterNextRender, Component, inject } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { Nav } from '../../shared/nav/nav'
import { Footer } from '../../shared/footer/footer'
import { Reveal } from '../../shared/reveal'
import { DEFAULT_PROFILE_ID, getProfile, type Accent } from '../../data/portfolio'
import { PaginationComponent } from '../../../../design/angular/app/shared/pagination.component'

@Component({
  selector: 'app-articles',
  imports: [RouterLink, Nav, Footer, Reveal, PaginationComponent],
  templateUrl: './articles.html',
  styleUrl: './articles.css'
})
export class Articles {
  private route = inject(ActivatedRoute)
  readonly profileId = this.route.snapshot.paramMap.get('profileId') ?? DEFAULT_PROFILE_ID
  readonly p = getProfile(this.profileId)

  constructor() {
    afterNextRender(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    })
  }

  accentText(a: Accent): string {
    return { accent: 'text-accent', primary: 'text-primary', secondary: 'text-secondary' }[a]
  }
}
