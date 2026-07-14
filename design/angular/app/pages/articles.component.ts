import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavComponent } from '../shared/nav.component';
import { FooterComponent } from '../shared/footer.component';
import { RevealDirective } from '../shared/reveal.directive';
import { PaginationComponent } from '../shared/pagination.component';
import { DEFAULT_PROFILE_ID, getProfile, type Accent } from '../data/portfolio';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [RouterLink, NavComponent, FooterComponent, RevealDirective, PaginationComponent],
  template: `
    <div class="min-h-screen flex flex-col">
      <app-nav [profileId]="profileId"></app-nav>

      <main class="flex-1">
        <!-- HEADER -->
        <section class="max-w-list mx-auto px-8 pt-20 pb-10">
          <div appReveal>
            <span class="font-mono text-[13px] tracking-[0.04em] text-accent">ARTICLES</span>
            <h1
              class="font-display font-semibold text-[clamp(34px,5vw,56px)] tracking-[-0.02em] mt-2.5 leading-[1.03]"
            >
              Writing
            </h1>
            <p class="max-w-[56ch] text-[17px] leading-relaxed text-muted mt-[18px] font-light">
              Notes on distributed systems, developer experience, and the craft of keeping software
              boring in the best way.
            </p>
          </div>
        </section>

        <!-- LIST -->
        <section class="max-w-list mx-auto px-8 pt-3 pb-20">
          <div class="flex flex-col border-b border-white/[0.08]">
            @for (a of pageItems; track a.id) {
              <a
                appReveal
                [routerLink]="['/profiles', profileId, 'articles', a.id]"
                class="group block py-8 border-t border-white/[0.08] transition-[padding] duration-200 hover:pl-3.5"
              >
                <div class="flex items-center gap-4 mb-3">
                  <span class="font-mono text-[12.5px]" [class]="accentText(a.accent)">{{
                    a.date
                  }}</span>
                  <span class="w-1 h-1 rounded-full bg-faint"></span>
                  <span class="font-mono text-[12.5px] text-faint">{{ a.readingTime }}</span>
                </div>
                <h2
                  class="font-display font-semibold text-[26px] tracking-[-0.015em] leading-tight"
                >
                  {{ a.title }}
                </h2>
                <p class="text-base leading-relaxed text-muted mt-3 font-light max-w-[64ch]">
                  {{ a.excerpt }}
                </p>
              </a>
            }
          </div>

          <app-pagination
            [total]="p.articles.length"
            [size]="pageSize"
            [page]="page"
            (pageChange)="page = $event"
          ></app-pagination>
        </section>
      </main>

      <app-footer></app-footer>
    </div>
  `,
})
export class ArticlesComponent {
  private route = inject(ActivatedRoute);
  readonly profileId = this.route.snapshot.paramMap.get('profileId') ?? DEFAULT_PROFILE_ID;
  readonly p = getProfile(this.profileId);
  readonly pageSize = 3;
  page = 1;

  get pageItems() {
    return this.p.articles.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
  }

  accentText(a: Accent): string {
    return { accent: 'text-accent', primary: 'text-primary', secondary: 'text-secondary' }[a];
  }
}
