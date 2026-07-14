import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavComponent } from '../shared/nav.component';
import { FooterComponent } from '../shared/footer.component';
import { RevealDirective } from '../shared/reveal.directive';
import { DEFAULT_PROFILE_ID, getLearning, type Accent } from '../data/portfolio';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [RouterLink, NavComponent, FooterComponent, RevealDirective],
  template: `
    <div class="min-h-screen flex flex-col">
      <app-nav [profileId]="navId"></app-nav>

      <main class="flex-1">
        @if (learning; as l) {
          <article class="max-w-read mx-auto px-8 pt-14 pb-10">
            <div appReveal>
              <a
                routerLink="/learnings"
                class="font-mono text-[13px] text-muted hover:text-content transition-colors inline-flex items-center gap-2"
                ><span>←</span> All learnings</a
              >

              <div class="flex items-center gap-3.5 mt-10 flex-wrap">
                <span class="font-mono text-[12.5px] tracking-[0.03em]" [class]="accentText(l.accent)">{{
                  l.category
                }}</span>
                <span class="w-1 h-1 rounded-full bg-faint"></span>
                <span class="font-mono text-[12.5px] text-faint">{{ l.level }} concept</span>
                <span class="w-1 h-1 rounded-full bg-faint"></span>
                <span class="font-mono text-[12.5px] text-faint">{{ l.learnedOn }}</span>
              </div>

              <h1
                class="font-display font-semibold text-[clamp(32px,5vw,46px)] tracking-[-0.02em] leading-[1.08] mt-[18px] text-balance"
              >
                {{ l.title }}
              </h1>

              <p
                class="text-[19px] leading-relaxed text-content/80 font-light mt-5"
                [innerHTML]="l.lede"
              ></p>

              <div class="flex flex-wrap gap-2 mt-[26px] pb-8 border-b border-white/[0.08]">
                @for (t of l.tags; track t) {
                  <span
                    class="font-mono text-[11.5px] px-[11px] py-1 rounded-full border border-white/[0.12] text-muted"
                    >{{ t }}</span
                  >
                }
              </div>
            </div>

            <!-- IN ONE SENTENCE -->
            <div appReveal class="mt-2 p-6 rounded-2xl bg-base-200 border border-white/[0.08]">
              <span class="font-mono text-[12px] tracking-[0.04em] text-primary">IN ONE SENTENCE</span>
              <p class="text-[16.5px] leading-relaxed text-content/85 font-light mt-2.5">
                {{ l.oneSentence }}
              </p>
            </div>

            <!-- BODY -->
            <div appReveal class="prose mt-10">
              @for (block of l.body; track $index) {
                @switch (block.kind) {
                  @case ('p') {
                    <p [innerHTML]="block.html"></p>
                  }
                  @case ('h2') {
                    <h2>{{ block.text }}</h2>
                  }
                  @case ('quote') {
                    <blockquote>{{ block.text }}</blockquote>
                  }
                  @case ('ul') {
                    <ul>
                      @for (item of block.items; track item) {
                        <li>{{ item }}</li>
                      }
                    </ul>
                  }
                  @case ('code') {
                    <pre [innerHTML]="block.html"></pre>
                  }
                }
              }
            </div>

            <!-- RELATED -->
            <div appReveal class="mt-11 p-6 rounded-2xl bg-base-200 border border-white/[0.08]">
              <span class="font-mono text-[12px] tracking-[0.04em] text-accent">RELATED</span>
              <div class="flex flex-col gap-0.5 mt-3">
                @for (r of l.related; track r.id) {
                  <a
                    [routerLink]="['/learnings', r.id]"
                    class="group flex items-center justify-between py-3 border-t border-white/[0.06] transition-[padding] hover:pl-2"
                  >
                    <span class="text-[15px] text-content/85">{{ r.title }}</span>
                    <span class="font-mono text-[12px] text-faint">{{ r.category }} →</span>
                  </a>
                }
              </div>
            </div>

            <div
              appReveal
              class="mt-10 pt-8 border-t border-white/[0.08] flex flex-wrap gap-4 items-center justify-between"
            >
              <a
                routerLink="/learnings"
                class="font-mono text-[13px] text-primary hover:brightness-125 transition"
                >← Back to all learnings</a
              >
              <div class="flex gap-3">
                <a
                  href="#"
                  class="font-mono text-[13px] px-4 py-2.5 rounded-lg border border-white/[0.14] hover:bg-white/[0.05] hover:border-white/[0.28] transition-colors"
                  >Bookmark</a
                >
                <a
                  href="#"
                  class="font-mono text-[13px] px-4 py-2.5 rounded-lg border border-white/[0.14] hover:bg-white/[0.05] hover:border-white/[0.28] transition-colors"
                  >Share</a
                >
              </div>
            </div>
          </article>
        } @else {
          <section class="max-w-read mx-auto px-8 pt-24 pb-24 text-center">
            <h1 class="font-display font-semibold text-3xl tracking-tight">Learning not found</h1>
            <p class="text-muted mt-4 font-light">We couldn’t find that entry.</p>
            <a
              routerLink="/learnings"
              class="inline-block mt-8 font-mono text-[13px] px-4 py-2.5 rounded-lg bg-primary text-primary-content"
              >← Back to all learnings</a
            >
          </section>
        }
      </main>

      <app-footer></app-footer>
    </div>
  `,
})
export class LearningComponent {
  private route = inject(ActivatedRoute);
  readonly navId = DEFAULT_PROFILE_ID;

  // Getter (not a snapshot field) so navigating between related learnings —
  // which reuses this component with a new :learningId — resolves the new entry.
  get learning() {
    return getLearning(this.route.snapshot.paramMap.get('learningId') ?? '');
  }

  accentText(a: Accent): string {
    return { accent: 'text-accent', primary: 'text-primary', secondary: 'text-secondary' }[a];
  }
}
