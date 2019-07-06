import { Image } from './image';
import { Tag } from './tag';

export interface ListPromotion {
    id?: string;
    description: string;
    tags: Tag[];
    images: Image[];
    createdOn: Date;
}
