import { Component, inject } from '@angular/core';
import { ActivatedRoute }                              from '@angular/router';
import { NavComponent }                                from '../shared/nav.component';
import { FooterComponent }                             from '../shared/footer.component';
import { RevealDirective }                             from '../shared/reveal.directive';
import { DEFAULT_PROFILE_ID, getProfile, type Accent } from '../data/portfolio';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NavComponent, FooterComponent, RevealDirective],
  template: `
    <div class="min-h-screen flex flex-col">
      <app-nav [profileId]="profileId"></app-nav>

      <main class="flex-1">
        <!-- HEADER -->
        <section class="max-w-shell mx-auto px-8 pt-20 pb-10">
          <div appReveal>
            <span class="font-mono text-[13px] tracking-[0.04em] text-primary">WORK</span>
            <h1
              class="font-display font-semibold text-[clamp(34px,5vw,56px)] tracking-[-0.02em] mt-2.5 leading-[1.03] max-w-[18ch]"
            >
              Career &amp; project detail
            </h1>
            <p class="max-w-[62ch] text-[17px] leading-relaxed text-muted mt-5 font-light">
              The full record, company by company — what I built, why it mattered, and the stack it
              ran on.
            </p>
          </div>
        </section>

        <!-- COMPANIES -->
        @for (c of p.companies; track c.name; let lastCompany = $last) {
          <section class="max-w-shell mx-auto px-8 pt-6" [class.pb-16]="lastCompany">
            <div
              appReveal
              class="sticky top-[73px] z-10 py-5 bg-base-100/90 backdrop-blur-sm flex flex-wrap gap-3 items-baseline justify-between border-b border-white/[0.08]"
            >
              <div class="flex items-center gap-3.5">
                <span
                  class="w-2.5 h-2.5 rounded-full"
                  [class]="accentDot(c.accent)"
                ></span>
                <h2 class="font-display font-semibold text-[26px] tracking-[-0.015em]">
                  {{ c.name }}
                </h2>
                <span class="text-sm text-muted">{{ c.role }}</span>
              </div>
              <span class="font-mono text-[13px]" [class]="accentText(c.accent)"
                >{{ c.start }} — {{ c.end }}</span
              >
            </div>

            @for (proj of c.projects; track proj.title; let lastProj = $last) {
              <article appReveal class="py-11" [class]="!lastProj ? 'border-b border-white/[0.06]' : ''">
                <!-- image gallery -->
                <div class="grid grid-cols-2 gap-3 mb-7">
                  @for (img of proj.images; track img) {
                    <div
                      class="rounded-[14px] border border-white/10 grid place-items-center"
                      [class]="proj.images.length === 3 && $first ? 'row-span-2 aspect-[16/10]' : 'aspect-video'"
                      style="background: repeating-linear-gradient(45deg, oklch(25.33% 0.016 252.42) 0 12px, oklch(23.26% 0.014 253.1) 12px 24px)"
                    >
                      <span class="font-mono text-[11px] text-faint">{{ img }}</span>
                    </div>
                  }
                </div>
                <!-- summary + stack -->
                <div class="grid grid-cols-[1fr_300px] gap-10 items-start max-md:grid-cols-1">
                  <div>
                    <h3 class="font-display font-semibold text-2xl tracking-tight">
                      {{ proj.title }}
                    </h3>
                    <p class="text-[15.5px] leading-[1.7] text-content/[0.78] mt-3.5 font-light">
                      {{ proj.summary }}
                    </p>
                  </div>
                  <div>
                    <p class="font-mono text-xs text-faint mb-3">TECH STACK</p>
                    <div class="flex flex-wrap gap-[7px]">
                      @for (tech of proj.stack; track tech) {
                        <span
                          class="font-mono text-xs px-[11px] py-[5px] rounded-md border"
                          [class]="accentChip(c.accent)"
                          >{{ tech }}</span
                        >
                      }
                    </div>
                  </div>
                </div>
              </article>
            }
          </section>
        }
      </main>

      <app-footer></app-footer>
    </div>
  `,
})
export class ProjectsComponent {
  private route = inject(ActivatedRoute);
  readonly profileId = this.route.snapshot.paramMap.get('profileId') ?? DEFAULT_PROFILE_ID;
  readonly p = getProfile(this.profileId);

  accentText(a: Accent): string {
    return { accent: 'text-accent', primary: 'text-primary', secondary: 'text-secondary' }[a];
  }
  accentDot(a: Accent): string {
    return {
      accent: 'bg-accent shadow-[0_0_12px_oklch(77%_0.152_181.912_/_0.7)]',
      primary: 'bg-primary shadow-[0_0_12px_oklch(58%_0.233_277.117_/_0.7)]',
      secondary: 'bg-secondary shadow-[0_0_12px_oklch(65%_0.241_354.308_/_0.7)]',
    }[a];
  }
  accentChip(a: Accent): string {
    return {
      accent: 'bg-accent/[0.12] text-accent border-accent/25',
      primary: 'bg-primary/[0.16] text-primary border-primary/30',
      secondary: 'bg-secondary/[0.14] text-secondary border-secondary/30',
    }[a];
  }
}
