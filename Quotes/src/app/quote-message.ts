export class QuoteMessage {
    constructor( public id: number, public quoteMessage: string, public quoteAuthor:string, quoteUser: string, public likes: number, public dislikes: number, public published: Date){}
}
