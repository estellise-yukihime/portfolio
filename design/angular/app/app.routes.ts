import { Routes } from '@angular/router';

// Site structure (matches the original design plan):
//   /                                          Home
//   /profiles/:profileId                       Profile overview
//   /profiles/:profileId/projects              Career & project detail
//   /profiles/:profileId/articles              Article listing
//   /profiles/:profileId/articles/:articleId   Article detail
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.component').then((m) => m.HomeComponent),
    title: 'Maya Chen — Software Engineer',
  },
  {
    path: 'profiles',
    loadComponent: () => import('./pages/profiles.component').then((m) => m.ProfilesComponent),
    title: 'Profiles — Maya Chen',
    pathMatch: 'full',
  },
  {
    path: 'profiles/:profileId',
    loadComponent: () => import('./pages/profile.component').then((m) => m.ProfileComponent),
    title: 'Profile — Maya Chen',
  },
  {
    path: 'profiles/:profileId/projects',
    loadComponent: () => import('./pages/projects.component').then((m) => m.ProjectsComponent),
    title: 'Work & Projects — Maya Chen',
  },
  {
    path: 'profiles/:profileId/articles',
    loadComponent: () => import('./pages/articles.component').then((m) => m.ArticlesComponent),
    title: 'Articles — Maya Chen',
  },
  {
    path: 'profiles/:profileId/articles/:articleId',
    loadComponent: () => import('./pages/article.component').then((m) => m.ArticleComponent),
    title: 'Article — Maya Chen',
  },
  {
    path: 'learnings',
    loadComponent: () => import('./pages/learnings.component').then((m) => m.LearningsComponent),
    title: 'Learnings — Maya Chen',
    pathMatch: 'full',
  },
  {
    path: 'learnings/:learningId',
    loadComponent: () => import('./pages/learning.component').then((m) => m.LearningComponent),
    title: 'Learning — Maya Chen',
  },
  // 404 — anything unmatched renders the Not Found page.
  {
    path: '**',
    loadComponent: () => import('./pages/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Page not found — Maya Chen',
  },
];
