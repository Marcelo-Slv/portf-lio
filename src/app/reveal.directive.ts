import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() appRevealDelay = 0;

  private observer?: IntersectionObserver;

  constructor(private readonly elRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const el = this.elRef.nativeElement;
    el.classList.add('reveal');
    el.style.setProperty('--reveal-delay', `${this.appRevealDelay}ms`);

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            this.observer?.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
