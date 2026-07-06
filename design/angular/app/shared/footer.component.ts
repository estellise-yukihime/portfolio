import { Component } from '@angular/core';
import { profile }   from '../data/portfolio';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="border-t border-white/[0.07] mt-10">
      <div
        class="max-w-shell mx-auto px-8 py-10 flex flex-wrap gap-6 items-center justify-between"
      >
        <span class="font-mono text-[12.5px] text-faint"
          >© 2026 {{ name }} — built for the joy of it</span
        >
        <div class="flex gap-[22px] font-mono text-[12.5px]">
          @for (s of socials; track s.label) {
            <a [href]="s.href" class="text-muted hover:text-content transition-colors">{{
              s.label
            }}</a>
          }
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly name = profile.name;
  readonly socials = profile.socials;
}
