import { IImage } from './image';
import { ITag } from './tag';

export interface IPromotion {
    id?: string;
    description: string;
    tags: ITag[];
    images: IImage[];
    createdOn: Date;
}
