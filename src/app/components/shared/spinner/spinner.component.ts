import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/+store/state/app.state';
import { Observable } from 'rxjs';
import { isLoadingSpinnerActive } from 'src/app/+store/selectors/spinner.selectors';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isLoading: Observable<any>;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.isLoading = this.store.pipe(select(isLoadingSpinnerActive));
    this.isLoading.subscribe(data => console.log(data));
  }
}
