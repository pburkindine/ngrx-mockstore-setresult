import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MemoizedSelector, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { RootState } from '../reducers/index';
import { SampleSelectors } from '../selectors';
import { SampleComponent } from './sample-component.component';

describe('SampleComponent', () => {
  const initialExpectedValue = 3;

  let component: SampleComponent;
  let store: MockStore<RootState>;
  let fixture: ComponentFixture<SampleComponent>;
  let selectSampleValueMock: MemoizedSelector<RootState, number>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SampleComponent],
      providers: [provideMockStore()]
    }).compileComponents();

    store = TestBed.get(Store);
    selectSampleValueMock = store.overrideSelector(
      SampleSelectors.selectSampleValue,
      initialExpectedValue
    );
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const getCurrentValue = (): number => {
    return parseInt(
      fixture.debugElement.query(By.css('.currentValue')).nativeElement
        .innerText,
      10
    );
  };

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the initial expected value', () => {
    expect(getCurrentValue()).toBe(initialExpectedValue);
  });

  it('should display the expected value on stream update', () => {
    const updatedValue = 8;
    selectSampleValueMock.setResult(updatedValue);

    expect(getCurrentValue()).toBe(updatedValue);
  });
});
