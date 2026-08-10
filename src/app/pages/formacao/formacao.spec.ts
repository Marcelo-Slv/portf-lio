import { TestBed } from '@angular/core/testing';

import { FormacaoComponent } from './formacao';

describe('FormacaoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormacaoComponent],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(FormacaoComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the page title', () => {
    const fixture = TestBed.createComponent(FormacaoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Formação');
  });
});
