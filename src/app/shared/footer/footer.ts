import { Component, inject } from '@angular/core'
import { ProfileLink } from '../../models/profile-link'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html'
})
export class Footer {
  private readonly _route = inject(ActivatedRoute)

  readonly profileLink = this._route.snapshot.data['profileLink'] as ProfileLink[]
}
