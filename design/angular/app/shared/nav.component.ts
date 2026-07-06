import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { profile }                      from '../data/portfolio';

/**
 * Sticky top navigation. Pass the current profileId so the section links resolve
 * to /profiles/:profileId/...
 */
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header
      class="sticky top-0 z-50 backdrop-blur-md bg-base-100/70 border-b border-white/[0.07]"
    >
      <nav
        class="max-w-shell mx-auto px-8 py-[18px] flex items-center justify-between"
      >
        <a routerLink="/" class="flex items-center gap-3">
          <span
            class="w-[34px] h-[34px] rounded-lg grid place-items-center bg-primary font-display font-bold text-[15px] text-primary-content"
            >{{ initials }}</span
          >
          <span class="font-display font-semibold text-base tracking-tight">{{ name }}</span>
        </a>
        <div class="flex items-center gap-7">
          <a
            routerLink="/"
            routerLinkActive="text-content"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-sm text-muted hover:text-content transition-colors"
            >Home</a
          >
          <a
            [routerLink]="['/profiles', profileId]"
            routerLinkActive="text-content"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-sm text-muted hover:text-content transition-colors"
            >Profile</a
          >
          <a
            [routerLink]="['/profiles', profileId, 'projects']"
            routerLinkActive="text-content"
            class="text-sm text-muted hover:text-content transition-colors"
            >Work</a
          >
          <a
            [routerLink]="['/profiles', profileId, 'articles']"
            routerLinkActive="text-content"
            class="text-sm text-muted hover:text-content transition-colors"
            >Articles</a
          >
          <a
            [href]="resumeUrl"
            class="font-mono text-[12.5px] px-3.5 py-2 border border-white/[0.16] rounded-full text-content hover:bg-white/[0.06] hover:border-white/[0.28] transition-colors"
            >Résumé ↓</a
          >
        </div>
      </nav>
    </header>
  `,
})
export class NavComponent {
  @Input({ required: true }) profileId!: string;
  readonly initials = profile.initials;
  readonly name = profile.name;
  readonly resumeUrl = profile.resumeUrl;
}
