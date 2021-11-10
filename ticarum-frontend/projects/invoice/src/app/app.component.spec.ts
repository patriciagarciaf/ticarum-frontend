import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InvoiceComponent } from './app.component';


describe('InvoiceComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        InvoiceComponent
      ],
    }).compileComponents();
  });

  it('should create the Invoice', () => {
    const fixture = TestBed.createComponent(InvoiceComponent);
    const Invoice = fixture.componentInstance;
    expect(Invoice).toBeTruthy();
  });

  it(`should have as title 'invoice'`, () => {
    const fixture = TestBed.createComponent(InvoiceComponent);
    const Invoice = fixture.componentInstance;
    expect(Invoice.title).toEqual('invoice');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(InvoiceComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('invoice Invoice is running!');
  });
});
