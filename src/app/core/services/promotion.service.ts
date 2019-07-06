import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { CreatePromotion } from '../models/create-promotion';
import { Subscription, Subject, Observable } from 'rxjs';
import { ListPromotion } from '../models/list-promotion';
import { map } from 'rxjs/operators';

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

    fetchPromotion(id: string): Observable<any> {
        return this.afDb.collection<ListPromotion>('promotions').doc(id).valueChanges();

        // return this.afDb.collection<ListPromotion>('promotions').snapshotChanges().pipe(
        //     map(actions => {
        //         return actions.map((promotion) => {
        //             const data = promotion.payload.doc.data() as ListPromotion;
        //             const id = promotion.payload.doc.id;
        //             return { id, ...data };
        //         });
        //     })
        // );
    }

    fetchAllPromotions(): Observable<ListPromotion[]> {
        return this.afDb.collection<ListPromotion>('promotions', x => x.orderBy('createdOn', 'desc')).snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data() as ListPromotion;
                    const id = a.payload.doc.id;
                    return {id, ...data};
                });
            })
        );
    }

    ngOnDestroy() {
        this.promotions$.unsubscribe();
    }
}
