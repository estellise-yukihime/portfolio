import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProfilesItem } from './profiles-item.component'

describe('Profile', () => {
  let component: ProfilesItem
  let fixture: ComponentFixture<ProfilesItem>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilesItem]
    }).compileComponents()

    fixture = TestBed.createComponent(ProfilesItem)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
