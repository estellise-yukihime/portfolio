import { Routes } from '@angular/router'
import { Index } from './page/index'
import { Articles } from './page/articles/articles'
import { ArticlesItem } from './page/articles-item/articles-item'
import { Career }       from './page/career/career'
import { ProfilesItem } from './page/profiles-item/profiles-item'
import { Error }        from './page/error/error'

export const routes: Routes = [
  {
    path: '',
    component: Index,
    title: 'Estellise — Software Engineer'
  },
  {
    path: 'profiles',
    redirectTo: `profiles/estellise`,
    pathMatch: 'full'
  },
  {
    path: 'profiles/:profileId',
    component: ProfilesItem,
    title: 'Profile'
  },
  {
    path: 'profiles/:profileId/career',
    component: Career,
    title: 'Work & Projects'
  },
  {
    path: 'profiles/:profileId/articles',
    component: Articles,
    title: 'Articles'
  },
  {
    path: 'profiles/:profileId/articles/:articleId',
    component: ArticlesItem,
    title: 'Article'
  },
  {
    path: '404',
    component: Error,
    title: 'Page not found',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
]
