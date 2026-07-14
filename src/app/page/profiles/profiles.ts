import { Component } from '@angular/core'
import { Footer } from '../../shared/footer/footer'
import { Nav } from '../../shared/nav/nav'
import { Pagination } from '../../shared/pagination/pagination'
import { Reveal } from '../../shared/reveal'
import { RouterLink } from '@angular/router'

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
  imports: [Footer, Nav, Pagination, Reveal, RouterLink],
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
      summary: 'A software developer of 7+ years building reliable, maintainable, and scalable systems.',
      stack: ['C#', '.NET', 'ASP.NET'],
      location: 'Cebu'
    }
  ]
}
