import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable ()
export class NavigationService {
    private source = new BehaviorSubject(null);
    currentIndex = this.source.asObservable();

    changeIndex(index: number) {
        this.source.next(index);
    }
}
