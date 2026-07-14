import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Footer } from '../../shared/footer/footer'
import { Reveal } from '../../shared/reveal'
import { Nav } from '../../shared/nav/nav'

type TempItem = {
  category: string
  title: string
  level: string
  learnedOn: string
  lede: string
  tags: string[]
  oneSentence: string
  body: [
    {
      kind: string
      html: string
      text: string
      items: string[]
    }
  ]
  related: [
    {
      id: string
      title: string
      category: string
    }
  ]
}

@Component({
  selector: 'app-learn-item',
  imports: [Footer, Nav, Reveal, RouterLink],
  templateUrl: './learn-item.html',
  styleUrl: './learn-item.css'
})
export class LearnItem {
  item: TempItem = {
    body: [
      {
        html: '<span>Sample</span>',
        items: ['Learn', 'Study'],
        kind: 'Knowledge',
        text: 'A text of knowledge'
      }
    ],
    category: 'Professor',
    learnedOn: 'Sample',
    lede: 'Sample',
    level: 'Sample',
    oneSentence: 'Sample',
    related: [
      {
        category: 'Sample',
        id: 'Sample',
        title: 'Sample'
      }
    ],
    tags: ['Isekai', 'Shield', 'Heavy'],
    title: 'Oceana'
  }
}
