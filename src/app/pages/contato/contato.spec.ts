import { TestBed } from '@angular/core/testing';

import { ContatoComponent } from './contato';

describe('ContatoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoComponent],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ContatoComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the page title', () => {
    const fixture = TestBed.createComponent(ContatoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Contato');
  });

  it('should render the social links', () => {
    const fixture = TestBed.createComponent(ContatoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.contact-link');
    expect(links.length).toBe(3);
    expect(links[0].getAttribute('href')).toContain('github.com');
  });
});
