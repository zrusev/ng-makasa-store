import { Component, OnInit, OnDestroy } from '@angular/core';
import { PromotionService } from 'src/app/core/services/promotion.service';
import { Subscription } from 'rxjs';
import { ListPromotion } from 'src/app/core/models/list-promotion';

@Component({
  selector: 'app-list-promotion',
  templateUrl: './list-promotion.component.html',
  styleUrls: ['./list-promotion.component.css']
})
export class ListPromotionComponent implements OnInit, OnDestroy {

  promotions: ListPromotion[] = [];
  private propotions$: Subscription;

  constructor(private promotionsService: PromotionService) { }

  ngOnInit() {
    this.promotionsService.fetchAllEvents();
    this.propotions$ = this.promotionsService.promotions$.subscribe((promotions) => {
      this.promotions = promotions;
    });
  }

  ngOnDestroy() {
    this.propotions$.unsubscribe();
  }
}
