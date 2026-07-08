import { afterNextRender, Component, inject } from '@angular/core'
import { ActivatedRoute, RouterLink }         from '@angular/router'
import { Nav } from '../../shared/nav/nav'
import { Footer } from '../../shared/footer/footer'
import { Reveal } from '../../shared/reveal'
import { DEFAULT_PROFILE_ID, getArticle, profile, type Accent } from '../../data/portfolio'

@Component({
  selector: 'app-articles-item',
  imports: [RouterLink, Nav, Footer, Reveal],
  templateUrl: './articles-item.html',
  styleUrl: './articles-item.css'
})
export class ArticlesItem {
  private route = inject(ActivatedRoute)
  readonly profileId = this.route.snapshot.paramMap.get('profileId') ?? DEFAULT_PROFILE_ID
  readonly article = getArticle(this.route.snapshot.paramMap.get('articleId') ?? '')
  readonly author = { initials: profile.initials, name: profile.name, role: profile.role }

  constructor() {
    afterNextRender(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    })
  }

  accentText(a: Accent): string {
    return { accent: 'text-accent', primary: 'text-primary', secondary: 'text-secondary' }[a]
  }
}
