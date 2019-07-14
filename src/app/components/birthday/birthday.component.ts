import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const firstSlideContainer = document.getElementsByClassName('slide--content')[0];
    const secondSlideContainer = document.getElementsByClassName('slide--content--one')[0];
    const secondCanvas = document.getElementsByClassName('second--canvas')[0];

    secondSlideContainer.setAttribute('style', 'display:none');
    secondCanvas.setAttribute('style', 'display:none');

    const thirdCanvas = document.getElementsByClassName('third--canvas')[0];

    thirdCanvas.setAttribute('style', 'display:none');

    const containerToggleOne = setTimeout(() => {
      firstSlideContainer.setAttribute('style', 'display:none');
      secondSlideContainer.setAttribute('style', 'display:block');
    }, 2500);

    const removeFirstSlide = window.setTimeout(() => {
      document.getElementsByClassName('first--slide')[0].setAttribute('style', 'display:none;');
      secondCanvas.setAttribute('style', 'display:block');
    }, 6500);

    const removeSecondCanvas = window.setTimeout(() => {
      secondCanvas.setAttribute('style', 'display:none');
      thirdCanvas.setAttribute('style', 'display:block');
    }, 9800);
  }
}
