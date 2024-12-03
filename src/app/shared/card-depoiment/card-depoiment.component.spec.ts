import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDepoimentComponent } from './card-depoiment.component';

describe('CardDepoimentComponent', () => {
  let component: CardDepoimentComponent;
  let fixture: ComponentFixture<CardDepoimentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDepoimentComponent]
    });
    fixture = TestBed.createComponent(CardDepoimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
