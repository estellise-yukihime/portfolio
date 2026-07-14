import { Component, inject } from '@angular/core'
import { Pagination }        from '../../shared/pagination/pagination'
import { Reveal } from '../../shared/reveal'
import { Nav } from '../../shared/nav/nav'
import { Footer }                     from '../../shared/footer/footer'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { DEFAULT_PROFILE_ID }         from '../../data/portfolio'

type TempItem = {
  id: number
  category: string
  level: string
  title: string
  summary: string
  meta: string
}

@Component({
  selector: 'app-learn',
  imports: [Footer, Nav, Pagination, Reveal, RouterLink],
  templateUrl: './learn.html',
  styleUrl: './learn.css'
})
export class Learn {
  private route = inject(ActivatedRoute)

  readonly profileId = this.route.snapshot.paramMap.get('profileId')

  items: TempItem[] = [
    {
      id: 0,
      category: 'Next',
      level: '2',
      title: 'NextJS',
      summary: 'A framework for building server-rendered React applications',
      meta: 'For your NextJS journey'
    }
  ]
  filters: string[] = ['Tempest', 'Next', 'Tragic']
}
