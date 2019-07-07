import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, Output, EventEmitter, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import { ITag } from 'src/app/core/models/tag';

@Component({
  selector: 'app-chips-input',
  templateUrl: './chips-input.component.html',
  styleUrls: ['./chips-input.component.css']
})
export class ChipsInputComponent implements OnInit {

  @Output() tagsEmitter: EventEmitter<ITag[]> = new EventEmitter();

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  tags: ITag[] = [
    { name: 'МаКаСа' },
    { name: 'Био' },
  ];

  constructor() { }

  ngOnInit() {
    this.tagsEmitter.emit(this.tags);
  }

  add(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
      this.tagsEmitter.emit(this.tags);
    }

    if (input) {
      input.value = '';
    }
  }

  remove(tag: ITag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
      this.tagsEmitter.emit(this.tags);
    }
  }
}
