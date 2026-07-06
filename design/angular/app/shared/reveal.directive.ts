import {
  AfterViewInit,
  Directive,
  ElementRef,
  NgZone,
  OnDestroy,
  inject,
} from '@angular/core';

/**
 * Scroll-reveal directive. Add `appReveal` to any element:
 *   <div appReveal> … </div>
 * The element starts hidden (via the [data-reveal] CSS rule) and animates in
 * when it scrolls into view. Uses IntersectionObserver where available, with a
 * timeout failsafe so content is never permanently hidden.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private zone = inject(NgZone);
  private io?: IntersectionObserver;
  private failsafe?: number;

  ngAfterViewInit(): void {
    const node = this.el.nativeElement as HTMLElement;
    node.setAttribute('data-reveal', '');

    this.zone.runOutsideAngular(() => {
      if ('IntersectionObserver' in window) {
        this.io = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                this.show();
                break;
              }
            }
          },
          { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
        );
        this.io.observe(node);
      }
      // Failsafe: reveal after a beat regardless (covers no-IO + edge cases).
      this.failsafe = window.setTimeout(() => this.show(), 1400);
    });
  }

  private show(): void {
    this.el.nativeElement.setAttribute('data-shown', '');
    this.cleanup();
  }

  private cleanup(): void {
    this.io?.disconnect();
    this.io = undefined;
    if (this.failsafe) {
      clearTimeout(this.failsafe);
      this.failsafe = undefined;
    }
  }

  ngOnDestroy(): void {
    this.cleanup();
  }
}
