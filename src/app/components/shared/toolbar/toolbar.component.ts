import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() { }

  toggleSidenav() {
    this.sidenavToggle.emit();
  }
}
