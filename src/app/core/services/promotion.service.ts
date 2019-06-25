import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { CreatePromotion } from '../models/create-promotion';
import { Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PromotionService implements OnDestroy {
    private promotionsSubscriptions$: Subscription[] = [];

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

    ngOnDestroy() {

    }
}
