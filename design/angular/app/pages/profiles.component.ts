import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../shared/nav.component';
import { FooterComponent } from '../shared/footer.component';
import { RevealDirective } from '../shared/reveal.directive';
import { PaginationComponent } from '../shared/pagination.component';
import { DEFAULT_PROFILE_ID, profileCards, type Accent } from '../data/portfolio';

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [RouterLink, NavComponent, FooterComponent, RevealDirective, PaginationComponent],
  template: `
    <div class="min-h-screen flex flex-col">
      <app-nav [profileId]="navId"></app-nav>

      <main class="flex-1">
        <!-- HEADER -->
        <section class="max-w-shell mx-auto px-8 pt-20 pb-10">
          <div appReveal class="flex items-end justify-between flex-wrap gap-5">
            <div>
              <span class="font-mono text-[13px] tracking-[0.04em] text-primary">DIRECTORY</span>
              <h1
                class="font-display font-semibold text-[clamp(34px,5vw,56px)] tracking-[-0.02em] mt-2.5 leading-[1.03]"
              >
                Profiles
              </h1>
              <p class="max-w-[56ch] text-[17px] leading-relaxed text-muted mt-[18px] font-light">
                Engineers, designers, and builders in the network. Browse the directory and open a
                profile to see the full story.
              </p>
            </div>
            <span class="font-mono text-[13px] text-faint whitespace-nowrap"
              >{{ countLabel }} people</span
            >
          </div>
        </section>

        <!-- GRID -->
        <section class="max-w-shell mx-auto px-8 pt-3 pb-24">
          <div class="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(320px,1fr))]">
            @for (c of pageItems; track c.name) {
              <a
                appReveal
                [routerLink]="['/profiles', c.id]"
                class="group flex flex-col p-[26px] rounded-2xl border border-white/[0.08] bg-base-200 transition-all duration-200 hover:border-white/20 hover:bg-base-300 hover:-translate-y-[3px]"
              >
                <div class="flex items-center gap-4">
                  <span
                    class="w-[60px] h-[60px] rounded-full grid place-items-center flex-none font-display font-semibold text-[17px] shadow-[0_0_0_1px_oklch(100%_0_0_/_0.1)]"
                    [class]="accentSoft(c.accent)"
                    >{{ c.initials }}</span
                  >
                  <div class="min-w-0">
                    <h2 class="font-display font-semibold text-[19px] tracking-tight leading-tight">
                      {{ c.name }}
                    </h2>
                    <div class="flex items-center gap-2.5 mt-[5px]">
                      <span class="w-1.5 h-1.5 rounded-full flex-none" [class]="accentBg(c.accent)"></span>
                      <span class="text-[13.5px] text-muted">{{ c.title }}</span>
                    </div>
                  </div>
                </div>

                <p class="text-[14.5px] leading-relaxed text-muted font-light mt-5">{{ c.summary }}</p>

                <div class="flex flex-wrap gap-[7px] mt-5">
                  @for (t of c.stack; track t) {
                    <span
                      class="font-mono text-[11.5px] px-2.5 py-1 rounded-full border border-white/10 text-muted"
                      >{{ t }}</span
                    >
                  }
                </div>

                <div
                  class="flex items-center justify-between mt-6 pt-[18px] border-t border-white/[0.07]"
                >
                  <span class="font-mono text-[12px] text-faint">{{ c.location }}</span>
                  <span class="font-mono text-[13px]" [class]="accentText(c.accent)">View →</span>
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
export class ProfilesComponent {
  readonly navId = DEFAULT_PROFILE_ID;
  readonly all = profileCards;
  readonly pageSize = 4;
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

  accentSoft(a: Accent): string {
    return {
      accent: 'bg-accent/15 text-accent',
      primary: 'bg-primary/20 text-primary',
      secondary: 'bg-secondary/15 text-secondary',
    }[a];
  }
}
