import { TestBed } from '@angular/core/testing'

import { IndexHtmlBuilder } from './index-html-builder'

describe('IndexHtmlBuilder', () => {
  let service: IndexHtmlBuilder

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(IndexHtmlBuilder)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  describe('buildHtml', () => {
    test('return the html', () => {
      // arrange
      const input = 'A <<text-primary,"machine">> brewing <<text-secondary,text-sm,"coffee">>'
      const output = 'A <span class="text-primary">machine</span> brewing <span class="text-secondary text-sm">coffee</span>'

      // act
      const html = service.buildHtml(input)

      // assert
      expect(html).toEqual(output)
    })

    test('return a part not parse', () => {
      // arrange
      const input = 'A <<text-primary,"machine" brewing <<text-secondary,text-sm,"coffee">>'
      const output = 'A <<text-primary,"machine" brewing <span class="text-secondary text-sm">coffee</span>'

      // act
      const html = service.buildHtml(input)

      // assert
      expect(html).toEqual(output)
    })

    test('return Error Parsing part', () => {
      // arrange
      const input = 'A <<>> brewing <<text-secondary,text-sm,"coffee">>'
      const output =
        'A <<Error Parsing = <<>>>> brewing <span class="text-secondary text-sm">coffee</span>'

      // act
      const html = service.buildHtml(input)

      // assert
      expect(html).toEqual(output)
    })

    test('return empty class', () => {
      // arrange
      const input = 'A <<"machine">> brewing <<text-secondary,text-sm,"coffee">>'
      const output =
        'A <span class="">machine</span> brewing <span class="text-secondary text-sm">coffee</span>'

      // act
      const html = service.buildHtml(input)

      // assert
      expect(html).toEqual(output)
    })
  })
})
