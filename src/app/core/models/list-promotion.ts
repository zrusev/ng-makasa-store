import { Image } from './image';
import { Tag } from './tag';

export interface ListPromotion {
    description: string;
    tags: Tag[];
    images: Image[];
    createdOn: Date;
}
