import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/+store/state/app.state';
import { IPromotion } from 'src/app/core/models/promotion';
import { GetPromotion } from 'src/app/+store/actions/promotion.action';
import { selectSelectedPromotion} from 'src/app/+store/selectors/promotion.selectors';

@Component({
  selector: 'app-get-promotion',
  templateUrl: './get-promotion.component.html',
  styleUrls: ['./get-promotion.component.css']
})
export class GetPromotionComponent implements OnInit, OnDestroy {
  private id: string = null;
  private promotion$: Subscription;
  public promotion: IPromotion = null;

  constructor(private store: Store<IAppState>,
              private route: ActivatedRoute) {}

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
