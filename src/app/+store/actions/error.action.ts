import { Action } from '@ngrx/store';

export enum EError {
    AddError = '[Error] Add Error'
}

export class AddGlobalError implements Action {
    readonly type = EError.AddError;
    constructor(public payload: any) {}
}

export type ErrorActions = AddGlobalError;
