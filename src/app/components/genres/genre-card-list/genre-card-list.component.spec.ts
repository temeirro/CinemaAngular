import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreCardListComponent } from './genre-card-list.component';

describe('GenreCardListComponent', () => {
  let component: GenreCardListComponent;
  let fixture: ComponentFixture<GenreCardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenreCardListComponent]
    });
    fixture = TestBed.createComponent(GenreCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
