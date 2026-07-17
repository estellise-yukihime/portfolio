import { Component, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ProfileNavi } from '../../models/profile-navi'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html'
})
export class Footer {
  private readonly _route = inject(ActivatedRoute)

  readonly profileLink = (this._route.snapshot.data['profileInfo'] as ProfileNavi).socials
}
