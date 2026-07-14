import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../shared/nav.component';
import { FooterComponent } from '../shared/footer.component';
import { RevealDirective } from '../shared/reveal.directive';
import { PaginationComponent } from '../shared/pagination.component';
import { DEFAULT_PROFILE_ID, learningFilters, learnings, type Accent } from '../data/portfolio';

@Component({
  selector: 'app-learnings',
  standalone: true,
  imports: [RouterLink, NavComponent, FooterComponent, RevealDirective, PaginationComponent],
  template: `
    <div class="min-h-screen flex flex-col">
      <app-nav [profileId]="navId"></app-nav>

      <main class="flex-1">
        <!-- HEADER -->
        <section class="max-w-shell mx-auto px-8 pt-20 pb-9">
          <div appReveal class="flex items-end justify-between flex-wrap gap-5">
            <div>
              <span class="font-mono text-[13px] tracking-[0.04em] text-primary">LEARNING LOG</span>
              <h1
                class="font-display font-semibold text-[clamp(34px,5vw,56px)] tracking-[-0.02em] mt-2.5 leading-[1.03]"
              >
                Learnings
              </h1>
              <p class="max-w-[58ch] text-[17px] leading-relaxed text-muted mt-[18px] font-light">
                A running index of concepts, patterns, and architectures worth internalizing —
                distilled to the idea, why it matters, and when to reach for it.
              </p>
            </div>
            <span class="font-mono text-[13px] text-faint whitespace-nowrap"
              >{{ countLabel }} entries</span
            >
          </div>
        </section>

        <!-- FILTERS -->
        <section class="max-w-shell mx-auto px-8 pt-1 pb-10">
          <div appReveal class="flex flex-wrap gap-2">
            @for (f of filters; track f) {
              <span
                class="font-mono text-[12.5px] px-3.5 py-1.5 rounded-full border border-white/[0.12] text-muted"
                >{{ f }}</span
              >
            }
          </div>
        </section>

        <!-- GRID -->
        <section class="max-w-shell mx-auto px-8 pt-1 pb-24">
          <div class="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(340px,1fr))]">
            @for (l of pageItems; track l.id) {
              <a
                appReveal
                [routerLink]="['/learnings', l.id]"
                class="group relative flex flex-col p-[26px] rounded-2xl border border-white/[0.08] bg-base-200 overflow-hidden transition-all duration-200 hover:border-white/20 hover:bg-base-300 hover:-translate-y-[3px]"
              >
                <span class="absolute top-0 left-0 w-full h-[3px]" [class]="accentBg(l.accent)"></span>
                <div class="flex items-center justify-between gap-3">
                  <span
                    class="font-mono text-[12px] tracking-[0.03em]"
                    [class]="accentText(l.accent)"
                    >{{ l.category }}</span
                  >
                  <span
                    class="font-mono text-[11px] px-2.5 py-[3px] rounded-full border border-white/10 text-faint"
                    >{{ l.level }}</span
                  >
                </div>
                <h2
                  class="font-display font-semibold text-[22px] tracking-[-0.015em] leading-[1.18] mt-4"
                >
                  {{ l.title }}
                </h2>
                <p class="text-[14.5px] leading-relaxed text-muted font-light mt-3 flex-1">
                  {{ l.summary }}
                </p>
                <div
                  class="flex items-center justify-between mt-[22px] pt-4 border-t border-white/[0.07]"
                >
                  <span class="font-mono text-[12px] text-faint">{{ l.meta }}</span>
                  <span class="font-mono text-[13px]" [class]="accentText(l.accent)">Study →</span>
                </div>
              </a>
            }
          </div>

          <app-pagination
            [total]="all.length"
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
export class LearningsComponent {
  readonly navId = DEFAULT_PROFILE_ID;
  readonly all = learnings;
  readonly filters = learningFilters;
  readonly pageSize = 6;
  page = 1;

  get pageItems() {
    return this.all.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
  }

  get countLabel(): string {
    return String(this.all.length).padStart(2, '0');
  }

  accentText(a: Accent): string {
    return { accent: 'text-accent', primary: 'text-primary', secondary: 'text-secondary' }[a];
  }

  accentBg(a: Accent): string {
    return { accent: 'bg-accent', primary: 'bg-primary', secondary: 'bg-secondary' }[a];
  }
}
