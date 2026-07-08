import { Component, inject, input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Nav } from '../../shared/nav/nav'
import { Footer } from '../../shared/footer/footer'
import { Reveal } from '../../shared/reveal'
import { ProfileHero } from '../../models/profile-hero'
import { IndexHtmlBuilder } from '../../services/html-builder/index-html-builder/index-html-builder'
import { ProfileId } from '../../models/profile-id'

interface IndexLink {
  number: string
  title: string
  desc: string
  route: string[]
  badgeClass: string
}

@Component({
  selector: 'app-index',
  imports: [RouterLink, Nav, Footer, Reveal],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {
  private readonly _htmlBuilder = inject(IndexHtmlBuilder)

  readonly profileId = input.required<ProfileId>()
  readonly profileHero = input.required<ProfileHero>()

  get status(): string {
    return [this.profileHero().title, this.profileHero().state, this.profileHero().status]
      .filter(Boolean)
      .join(' · ')
  }

  get headHtml(): string {
    return this._htmlBuilder.buildHtml(this.profileHero().head ?? '')
  }

  get textHtml(): string {
    return this._htmlBuilder.buildHtml(this.profileHero().text ?? '')
  }

  get indexLinks(): IndexLink[] {
    return [
      {
        number: '01',
        title: 'Profile',
        desc: 'Career summary, skills, certifications, education, and social links.',
        route: ['/profiles', this.profileId().id],
        badgeClass: 'bg-secondary/[0.14] text-secondary'
      },
      {
        number: '02',
        title: 'Work & Projects',
        desc: 'Career timeline with project details and tech stacks.',
        route: ['/profiles', this.profileId().id, 'career'],
        badgeClass: 'bg-primary/[0.16] text-primary'
      },
      {
        number: '03',
        title: 'Articles',
        desc: 'Writing about developer experience, building software, and sharing knowledge.',
        route: ['/profiles', this.profileId().id, 'articles'],
        badgeClass: 'bg-accent/[0.14] text-accent'
      },
      {
        number: '04',
        title: 'Learning',
        desc: 'Continuously building, reviewing, and refreshing knowledge and skills',
        route: ['/profiles', this.profileId().id, 'learning'],
        badgeClass: 'bg-info/[0.14] text-info'
      }
    ]
  }
}
