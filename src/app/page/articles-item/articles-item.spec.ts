import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideRouter } from '@angular/router'

import { ArticlesItem } from './articles-item'

describe('ArticlesItem', () => {
  let component: ArticlesItem
  let fixture: ComponentFixture<ArticlesItem>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesItem],
      providers: [provideRouter([])]
    }).compileComponents()

    fixture = TestBed.createComponent(ArticlesItem)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
