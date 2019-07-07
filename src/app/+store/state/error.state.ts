import { IError } from 'src/app/core/models/error';

export interface IErrorState {
    error: IError;
}

export const initialErrorState: IErrorState = {
    error: null
};
