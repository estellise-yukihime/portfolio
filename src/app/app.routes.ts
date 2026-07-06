import { Routes } from '@angular/router'
import { Index } from './page/index'
import { Articles } from './page/articles/articles'
import { ArticlesItem } from './page/articles-item/articles-item'
import { Career } from './page/career/career';
import { ProfilesItem } from './page/profiles-item/profiles-item.component';

export const routes: Routes = [
  {
    path: '',
    component: Index,
    children: [
      {
        path: 'profiles/:profileId',
        component: ProfilesItem,
        children: [
          {
            path: 'articles',
            component: Articles
          },
          {
            path: 'articles/:articleId',
            component: ArticlesItem
          },
          {
            path: 'career',
            component: Career
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
