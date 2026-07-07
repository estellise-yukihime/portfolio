import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Nav }        from '../../shared/nav/nav'
import { Footer }     from '../../shared/footer/footer'
import { Reveal } from '../../shared/reveal'
import { DEFAULT_PROFILE_ID } from '../../data/portfolio'

@Component({
  selector: 'app-error',
  imports: [RouterLink, Nav, Footer, Reveal],
  templateUrl: './error.html',
  styleUrl: './error.css'
})
export class Error {
  readonly profileId = DEFAULT_PROFILE_ID
}
