import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feeds-app',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})

export class feedsComponent {
  comments: Array<string>;
  constructor() {
    this.comments = ['Hello Everyone!', 'This is Alex Lim from Singapore.']
  }
  ngOnInit() {
    console.log("ngOnInit");
  }

  addComment(newComment: string) {
    this.comments.push(newComment);
  }

  removeComment(i: number) {
    this.comments.splice(i,1);
  }

  commentEnter(i: any, show: boolean) {
    // jQuery('.one').css('background', '#777');
    i.style.display = show ? "initial" : "none";
    console.log("commentOver = ",i, show)
  }

}