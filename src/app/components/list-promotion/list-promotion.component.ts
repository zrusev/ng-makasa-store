import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAppState } from 'src/app/+store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectPromotionsList } from 'src/app/+store/selectors/promotion.selectors';
import { ListPromotion } from 'src/app/core/models/list-promotion';
import { GetPromotions } from 'src/app/+store/actions/promotion.action';

@Component({
  selector: 'app-list-promotion',
  templateUrl: './list-promotion.component.html',
  styleUrls: ['./list-promotion.component.css']
})
export class ListPromotionComponent implements OnInit, OnDestroy {

  promotions: ListPromotion[] = [];
  private promotions$: Subscription;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetPromotions());
    this.promotions$ = this.store.pipe(select(selectPromotionsList)).subscribe((promotions) => {
       this.promotions = promotions;
    });
  }

  ngOnDestroy() {
    this.promotions$.unsubscribe();
  }
}
