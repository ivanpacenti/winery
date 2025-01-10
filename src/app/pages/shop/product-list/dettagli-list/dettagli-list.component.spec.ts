import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliListComponent } from './dettagli-list.component';

describe('DettagliListComponent', () => {
  let component: DettagliListComponent;
  let fixture: ComponentFixture<DettagliListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettagliListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettagliListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
