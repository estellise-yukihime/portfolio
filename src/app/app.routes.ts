import { Routes } from '@angular/router'
import { App } from './app'
import { Index } from './page/index'
import { Profile } from './page/profile/profile'
import { Articles } from './page/articles/articles'
import { ArticlesItem } from './page/articles-item/articles-item'

export const routes: Routes = [
  {
    path: '',
    component: Index,
    children: [
      {
        path: 'profiles/:profileId',
        component: Profile,
        children: [
          {
            path: 'articles',
            component: Articles
          },
          {
            path: 'articles/:articleId',
            component: ArticlesItem
          }
        ]
      }
    ]
  },
  {
    path: '404',
    component: Error,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
]
