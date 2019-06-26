import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { CreatePromotion } from '../models/create-promotion';
import { Subscription, Subject } from 'rxjs';
import { ListPromotion } from '../models/list-promotion';

@Injectable({
    providedIn: 'root'
})
export class PromotionService implements OnDestroy {

    private promotions: ListPromotion[] = [];
    promotions$ = new Subject<ListPromotion[]>();

    constructor(
        private afDb: AngularFirestore,
        private router: Router
    ) { }

    addPromotion(payload: CreatePromotion) {
        this.afDb.collection<CreatePromotion>('promotions').add(payload)
        .then((data) => {
            console.log(data);
            this.router.navigate(['/']);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    fetchAllEvents() {
        this.afDb.collection<ListPromotion>('promotions')
          .valueChanges()
          .subscribe((promotions) => {
            this.promotions = promotions;
            this.promotions$.next([...this.promotions]);
          });
    }

    ngOnDestroy() {

    }
}
