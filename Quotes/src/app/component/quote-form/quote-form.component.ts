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
  published: any ;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    let published = new Date();
    this.newQuote = new QuoteMessage(0, this.quoteMessage, this.quoteAuthor, this.quoteUser, this.likes, this.dislikes, this.published);
    this.quotes.push(this.newQuote)
  }
  
  onLike (index : number) : void{
    const currentList = this.quotes;
    const subjectQuote = currentList[index];
    subjectQuote.likes = subjectQuote.likes + 1
  }
  onDislike (index : number) : void{
    const currentList = this.quotes;
    const subjectQuote = currentList[index];
    subjectQuote.dislikes = subjectQuote.dislikes + 1
  }

  onDelete (index: number): void{
    this.quotes.splice(index, 1)
  }

  isMostLiked(index: number): boolean {
    const currentList = this.quotes;
    const subjectQuote = currentList[index];
    let quotesComparisons: boolean[] = [];
    currentList.forEach(item => {
      const value = subjectQuote.likes >= item.likes;
      quotesComparisons.push(value);
    })
    return quotesComparisons.every(item => item === true);
  }
}