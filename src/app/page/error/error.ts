import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Reveal } from '../../shared/reveal'
import { FooterEmpty } from '../../shared/footer-empty/footer-empty'

@Component({
  selector: 'app-error',
  imports: [RouterLink, Reveal, FooterEmpty],
  templateUrl: './error.html',
  styleUrl: './error.css'
})
export class Error {
  readonly profileId = '33a88871-2a53-47db-98a3-c479c196f4f5'
}
