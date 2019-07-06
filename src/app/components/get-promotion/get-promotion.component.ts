import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/+store/state/app.state';
import { GetPromotion } from 'src/app/+store/actions/promotion.action';
import { selectSelectedPromotion } from 'src/app/+store/selectors/promotion.selectors';
import { ListPromotion } from 'src/app/core/models/list-promotion';

@Component({
  selector: 'app-get-promotion',
  templateUrl: './get-promotion.component.html',
  styleUrls: ['./get-promotion.component.css']
})
export class GetPromotionComponent implements OnInit, OnDestroy {
  promotion: ListPromotion = null;
  private promotion$: Subscription;

  private id: string = null;

  constructor(private store: Store<IAppState>,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.store.dispatch(new GetPromotion(this.id));
    this.promotion$ = this.store.pipe(select(selectSelectedPromotion)).subscribe((promotion) => {
      this.promotion = promotion;
    });
  }

  ngOnDestroy() {
    this.promotion$.unsubscribe();
  }
}
