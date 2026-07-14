import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LearnItem } from './learn-item'

describe('LearnItem', () => {
  let component: LearnItem
  let fixture: ComponentFixture<LearnItem>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnItem]
    }).compileComponents()

    fixture = TestBed.createComponent(LearnItem)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
