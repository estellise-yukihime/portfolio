import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Nav } from '../../shared/nav/nav'
import { Footer } from '../../shared/footer/footer'
import { Reveal } from '../../shared/reveal'
import { DEFAULT_PROFILE_ID, profile } from '../../data/portfolio'

@Component({
  selector: 'app-index',
  imports: [RouterLink, Nav, Footer, Reveal],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {
  readonly profileId = DEFAULT_PROFILE_ID
  readonly status = profile.status
  readonly bio = profile.bio

  readonly links = [
    {
      num: '01',
      title: 'Profile',
      desc: 'Career summary, skills, certifications, education, and social links.',
      route: ['/profiles', this.profileId],
      badgeClass: 'bg-secondary/[0.14] text-secondary'
    },
    {
      num: '02',
      title: 'Work & Projects',
      desc: 'Career timeline with project details and tech stacks.',
      route: ['/profiles', this.profileId, 'career'],
      badgeClass: 'bg-primary/[0.16] text-primary'
    },
    {
      num: '03',
      title: 'Articles',
      desc: 'Writing about developer experience, building software, and sharing knowledge.',
      route: ['/profiles', this.profileId, 'articles'],
      badgeClass: 'bg-accent/[0.14] text-accent'
    },
    {
      num: '04',
      title: 'Learning',
      desc: 'Continuously building, reviewing, and refreshing knowledge and skills',
      route: ['/profiles', this.profileId, 'learning'],
      badgeClass: 'bg-info/[0.14] text-info'
    }
  ]
}
