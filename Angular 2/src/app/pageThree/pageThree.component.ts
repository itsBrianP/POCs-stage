/**
 * Created by Robin on 15/04/2017.
 */
import {AfterViewChecked, Component, OnInit} from '@angular/core';

@Component({
  selector: 'pageThree',
  templateUrl: 'app/pageThree/pageThree.html'
})

export class PageThreeComponent implements OnInit, AfterViewChecked {

  constructor() {
    this.addLorems();
  }

  ngAfterViewChecked(){
    this.stop = performance.now();
    console.log(this.stop - this.start);
  }

  start: number;
  stop: number;
  lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  lorems: String[] = [];

  addLorems(){
    for(let i = 0; i < 100000; i++){
      this.lorems.push(this.lorem);
    }
  };

  ngOnInit(): void {
    this.start = performance.now();
  }
}
