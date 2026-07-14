import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { RevealDirective } from './reveal.directive';

/**
 * Reusable pagination control. Emits the requested 1-based page number.
 *   <app-pagination [total]="items.length" [pageSize]="6" [page]="page"
 *                   (pageChange)="page = $event"></app-pagination>
 * Renders nothing when everything fits on a single page.
 */
@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgClass, RevealDirective],
  template: `
    @if (pageCount > 1) {
      <nav appReveal class="flex items-center justify-center gap-2 mt-[52px]">
        <button
          type="button"
          (click)="emit(page - 1)"
          [disabled]="page <= 1"
          aria-label="Previous page"
          class="font-mono text-[15px] w-[38px] h-[38px] rounded-[10px] border border-white/[0.14] grid place-items-center text-content/80 transition-colors enabled:hover:bg-white/[0.06] disabled:opacity-30 disabled:cursor-default"
        >
          ←
        </button>
        @for (n of pagesArray; track n) {
          <button
            type="button"
            (click)="emit(n)"
            class="font-mono text-[13.5px] min-w-[38px] h-[38px] px-3 rounded-[10px] border transition-colors"
            [ngClass]="
              n === page
                ? 'bg-primary text-primary-content border-transparent'
                : 'border-white/[0.14] text-content/80 hover:bg-white/[0.06]'
            "
          >
            {{ n }}
          </button>
        }
        <button
          type="button"
          (click)="emit(page + 1)"
          [disabled]="page >= pageCount"
          aria-label="Next page"
          class="font-mono text-[15px] w-[38px] h-[38px] rounded-[10px] border border-white/[0.14] grid place-items-center text-content/80 transition-colors enabled:hover:bg-white/[0.06] disabled:opacity-30 disabled:cursor-default"
        >
          →
        </button>
      </nav>
    }
  `,
})
export class PaginationComponent {
  @Input({ required: true }) total = 0;
  @Input() size = 6;
  @Input() page = 1;
  @Output() pageChange = new EventEmitter<number>();

  get pageCount(): number {
    return Math.max(1, Math.ceil(this.total / this.size));
  }

  get pagesArray(): number[] {
    return Array.from({ length: this.pageCount }, (_, i) => i + 1);
  }

  emit(n: number): void {
    const clamped = Math.min(Math.max(1, n), this.pageCount);
    if (clamped !== this.page) this.pageChange.emit(clamped);
  }
}
