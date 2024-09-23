import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayComponent } from './play.component';
import { By } from '@angular/platform-browser';

describe('PlayComponent', () => {
  let component: PlayComponent;
  let fixture: ComponentFixture<PlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should test if the answer selected is blue after select', () => {
    expect(component).toBeTruthy();
    const element = fixture.debugElement.query(By.css('[data-testid=""]'))
  });
});
