import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PromotionService } from 'src/app/core/services/promotion.service';
import { Tag } from 'src/app/core/models/tag';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { Image } from 'src/app/core/models/image';
import { CreatePromotion } from 'src/app/core/models/create-promotion';

@Component({
  selector: 'app-create-promotion',
  templateUrl: './create-promotion.component.html',
  styleUrls: ['./create-promotion.component.css']
})
export class CreatePromotionComponent implements OnInit {

  private user: User;
  private tags: Tag[] = [];
  private images: Image[] = [];

  form: FormGroup;
  isHovering: boolean;
  files: File[] = [];

  constructor(private fb: FormBuilder,
              private promotionService: PromotionService,
              public authService: AuthService) {
    this.authService.user$.subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.form = this.fb.group({
      description: ['', [Validators.required]]
    });
  }

  createPromotion() {
    if (this.authService.canEdit(this.user)) {
      const promotion: CreatePromotion = Object.assign(this.form.value,
                                                      {tags: this.tags},
                                                      {images: this.images},
                                                      {createdOn: new Date()});
      this.promotionService.addPromotion(promotion);
    } else {
      console.error('you are not allowed to do that!');
    }
  }

  getTags(event) {
    this.tags = event;
  }

  getImages(event) {
    this.images.push(event);
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  get uploads() { return !!this.images.length; }
}
