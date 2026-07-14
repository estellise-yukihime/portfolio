import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-nav-empty',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-empty.html'
})
export class NavEmpty {}
