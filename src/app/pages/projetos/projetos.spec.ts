import { TestBed } from '@angular/core/testing';

import { ProjetosComponent } from './projetos';

describe('ProjetosComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetosComponent],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ProjetosComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the page title', () => {
    const fixture = TestBed.createComponent(ProjetosComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Projetos');
  });
});
