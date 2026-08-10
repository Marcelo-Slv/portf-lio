import { TestBed } from '@angular/core/testing';

import { HabilidadesComponent } from './habilidades';

describe('HabilidadesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabilidadesComponent],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(HabilidadesComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the page title', () => {
    const fixture = TestBed.createComponent(HabilidadesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Habilidades');
  });
});
