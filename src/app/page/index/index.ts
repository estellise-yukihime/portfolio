import { Component, inject, input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Nav } from '../../shared/nav/nav'
import { Footer } from '../../shared/footer/footer'
import { Reveal } from '../../shared/reveal'
import { ProfileHero } from '../../models/profile-hero'
import { IndexHtmlBuilder } from '../../services/html-builder/index-html-builder/index-html-builder'
import { ProfileId } from '../../models/profile-id'

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
}
