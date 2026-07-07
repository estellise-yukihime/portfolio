import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideRouter } from '@angular/router'

import { Career } from './career'

describe('Career', () => {
  let component: Career
  let fixture: ComponentFixture<Career>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Career],
      providers: [provideRouter([])]
    }).compileComponents()

    fixture = TestBed.createComponent(Career)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
