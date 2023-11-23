import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-cartev',
  templateUrl: './cartev.component.html',
  styleUrls: ['./cartev.component.css']
})
export class CartevComponent implements OnInit {

  constructor() {}
  fullName: string = '';
  job: string = '';
  imageUrl: string = '';
  favoriteQuote: string = '';
  work: string = '';
  keywords: string = '';
  followers: number = 0;
  following: number = 0;
  projects: number = 0;
  ngOnInit(): void {}
  // addCard(form: NgForm) {
  //   this.fullName = form.value.fullName;
  //   this.job = form.value.job;
  //   this.imageUrl = form.value.imageUrl;
  //   this.favoriteQuote = form.value.favoriteQuote;
  //   this.work = form.value.work;
  //   this.keywords = form.value.keywords;
  // }
}

