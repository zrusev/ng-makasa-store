import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable ()
export class NavigationService {
    private source = new BehaviorSubject(null);
    currentIndex = this.source.asObservable();

// tslint:disable-next-line: ban-types
    changeIndex(index: Number) {
        this.source.next(index);
    }
}