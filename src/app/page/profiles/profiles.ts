import { Component } from '@angular/core'
import { Footer } from '../../shared/footer/footer'
import { NavEmpty } from '../../shared/nav-empty/nav-empty'
import { Pagination } from '../../shared/pagination/pagination'
import { Reveal } from '../../shared/reveal'
import { RouterLink } from '@angular/router'
import { FooterEmpty } from '../../shared/footer-empty/footer-empty'

type TempItem = {
  id: number
  name: string
  nameInitial: string
  title: string
  summary: string
  stack: string[]
  location: string
}

@Component({
  selector: 'app-profiles',
  imports: [Footer, NavEmpty, Pagination, Reveal, RouterLink, FooterEmpty],
  templateUrl: './profiles.html',
  styleUrl: './profiles.css'
})
export class Profiles {
  items: TempItem[] = [
    {
      id: 0,
      name: 'Sample',
      nameInitial: 'SS',
      title: '.NET Developer',
      summary:
        'A software developer of 7+ years building reliable, maintainable, and scalable systems.',
      stack: ['C#', '.NET', 'ASP.NET'],
      location: 'Cebu'
    }
  ]
}
