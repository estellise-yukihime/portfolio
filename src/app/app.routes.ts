import { Routes } from '@angular/router'
import { Index } from './page/index'
import { Articles } from './page/articles/articles'
import { ArticlesItem } from './page/articles-item/articles-item'
import { Career } from './page/career/career'
import { ProfilesItem } from './page/profiles-item/profiles-item'
import { Error } from './page/error/error'
import { indexNaviResolver } from './resolvers/profile-resolver/index-navi-resolver'
import { profileNaviResolver } from './resolvers/profile-resolver/profile-navi-resolver'
import { indexHeroResolver } from './resolvers/profile-resolver/index-hero-resolver'
import { indexFootResolver } from './resolvers/profile-resolver/index-foot-resolver'
import { profileFootResolver } from './resolvers/profile-resolver/profile-foot-resolver'

const profileIndexResolver = {
  profileInfo: indexNaviResolver,
  profileHero: indexHeroResolver,
  profileLink: indexFootResolver
}

const profileProfileResolver = {
  profileInfo: profileNaviResolver,
  profileLink: profileFootResolver
}

export const routes: Routes = [
  {
    path: '',
    component: Index,
    title: 'Software Developer',
    data: { profileId: '62a9ff3f-73d3-444c-a70d-20c01fac3e00' },
    resolve: profileIndexResolver
  },
  {
    path: 'profiles',
    redirectTo: `profiles/62a9ff3f-73d3-444c-a70d-20c01fac3e00`,
    pathMatch: 'full'
  },
  {
    path: 'profiles/:profileId',
    component: ProfilesItem,
    title: 'Profile',
    resolve: {
      ...profileProfileResolver
    }
  },
  {
    path: 'profiles/:profileId/career',
    component: Career,
    title: 'Work & Projects',
    resolve: {
      ...profileProfileResolver
    }
  },
  {
    path: 'profiles/:profileId/articles',
    component: Articles,
    title: 'Articles',
    resolve: {
      ...profileProfileResolver
    }
  },
  {
    path: 'profiles/:profileId/articles/:articleId',
    component: ArticlesItem,
    title: 'Article',
    resolve: {
      ...profileProfileResolver
    }
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
