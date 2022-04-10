import { Component, OnInit } from '@angular/core';
import { QuoteMessage } from 'src/app/quote-message';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  quotes: QuoteMessage [] = [];

  quoteMessage! : string;
  quoteAuthor! : string;
  quoteUser!: string;
  newQuote: any;
  likes: number = 0;
  dislikes: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    let published = new Date();
    this.newQuote = new QuoteMessage(0, this.quoteMessage, this.quoteAuthor, this.quoteUser, this.likes, this.dislikes, published);
    this.quotes.push(this.newQuote)
  }

  onDelete (index: number): void{
    this.quotes.splice(index, 1)
  }
}
