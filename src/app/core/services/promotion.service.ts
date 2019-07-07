import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';
import { IPromotion } from '../models/promotion';

@Injectable({
    providedIn: 'root'
})
export class PromotionService implements OnDestroy {

    private promotions: IPromotion[] = [];
    promotions$ = new Subject<IPromotion[]>();

    constructor(
        private afDb: AngularFirestore,
        private router: Router
    ) { }

    addPromotion(payload: IPromotion) {
        this.afDb.collection<IPromotion>('promotions').add(payload)
        .then((data) => {
            console.log(data);
            this.router.navigate(['/']);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    fetchPromotion(id: string): Observable<any> {
        return this.afDb.collection<IPromotion>('promotions').doc(id).valueChanges();
    }

    fetchAllPromotions(): Observable<IPromotion[]> {
        return this.afDb.collection<IPromotion>('promotions', x => x.orderBy('createdOn', 'desc')).snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data() as IPromotion;
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
