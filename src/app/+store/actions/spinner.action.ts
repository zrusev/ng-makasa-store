import { Action } from '@ngrx/store';

export enum ESpinnerActions {
    ShowSpinner = '[Spinner] Show loading spinner',
    HideSpinner = '[Spinner] Hide loading spinner'
}

export class ShowSpinner implements Action {
  readonly type = ESpinnerActions.ShowSpinner;
  constructor(public payload?: any) {}
}

export class HideSpinner implements Action {
  readonly type = ESpinnerActions.HideSpinner;
  constructor(public payload?: any) {}
}

export type SpinnerActions = ShowSpinner | HideSpinner;
