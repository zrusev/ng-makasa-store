import { Image } from './image';
import { Tag } from './tag';

export interface CreatePromotion {
    description: string;
    tags: Tag[];
    images: Image[];
    createdOn: Date;
}
