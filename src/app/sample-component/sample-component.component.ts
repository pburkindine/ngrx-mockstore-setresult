import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { RootState } from '../reducers';
import { SampleSelectors } from '../selectors';
import { SampleActions } from '../actions';

@Component({
  selector: 'app-sample-component',
  templateUrl: './sample-component.component.html'
})
export class SampleComponent {
  readonly sampleValue$ = this.store.pipe(
    select(SampleSelectors.selectSampleValue)
  );

  newValue: number;

  constructor(private store: Store<RootState>) {}

  set(): void {
    this.store.dispatch(
      SampleActions.updateSampleValue({ value: this.newValue })
    );
  }
}
