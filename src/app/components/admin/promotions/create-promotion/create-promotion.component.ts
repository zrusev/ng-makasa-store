import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PromotionService } from 'src/app/core/services/promotion.service';
import { Tag } from 'src/app/core/models/tag';

@Component({
  selector: 'app-create-promotion',
  templateUrl: './create-promotion.component.html',
  styleUrls: ['./create-promotion.component.css']
})
export class CreatePromotionComponent implements OnInit {

  private tags: Tag[];
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private promotionService: PromotionService) { }

  ngOnInit() {
    this.form = this.fb.group({
      description: ['', [Validators.required]]
    });
  }

  createPromotion() {
    this.promotionService.addPromotion(this.form.value);
  }

  getTags(event) {
    this.tags = event;
  }

}
