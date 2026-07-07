import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideRouter } from '@angular/router'

import { ProfilesItem } from './profiles-item'

describe('Profile', () => {
  let component: ProfilesItem
  let fixture: ComponentFixture<ProfilesItem>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilesItem],
      providers: [provideRouter([])]
    }).compileComponents()

    fixture = TestBed.createComponent(ProfilesItem)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
