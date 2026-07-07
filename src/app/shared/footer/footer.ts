import { Component } from '@angular/core'
import { profile } from '../../data/portfolio'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html'
})
export class Footer {
  readonly name = profile.name
  readonly socials = profile.socials
}
