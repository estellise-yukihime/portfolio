import { Component, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Nav } from '../../shared/nav/nav'
import { Footer } from '../../shared/footer/footer'
import { Reveal } from '../../shared/reveal'
import { DEFAULT_PROFILE_ID, getProfile, type Accent } from '../../data/portfolio'

@Component({
  selector: 'app-career',
  imports: [Nav, Footer, Reveal],
  templateUrl: './career.html',
  styleUrl: './career.css'
})
export class Career {
  private route = inject(ActivatedRoute)
  readonly profileId = this.route.snapshot.paramMap.get('profileId') ?? DEFAULT_PROFILE_ID
  readonly p = getProfile(this.profileId)

  accentText(a: Accent): string {
    return { accent: 'text-accent', primary: 'text-primary', secondary: 'text-secondary' }[a]
  }
  accentDot(a: Accent): string {
    return {
      accent: 'bg-accent shadow-[0_0_12px_oklch(77%_0.152_181.912_/_0.7)]',
      primary: 'bg-primary shadow-[0_0_12px_oklch(58%_0.233_277.117_/_0.7)]',
      secondary: 'bg-secondary shadow-[0_0_12px_oklch(65%_0.241_354.308_/_0.7)]'
    }[a]
  }
  accentChip(a: Accent): string {
    return {
      accent: 'bg-accent/[0.12] text-accent border-accent/25',
      primary: 'bg-primary/[0.16] text-primary border-primary/30',
      secondary: 'bg-secondary/[0.14] text-secondary border-secondary/30'
    }[a]
  }
}
