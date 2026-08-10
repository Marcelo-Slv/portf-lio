import { TestBed } from '@angular/core/testing';

import { SobreComponent } from './sobre';

describe('SobreComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreComponent],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(SobreComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the page title', () => {
    const fixture = TestBed.createComponent(SobreComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Sobre mim');
  });
});
