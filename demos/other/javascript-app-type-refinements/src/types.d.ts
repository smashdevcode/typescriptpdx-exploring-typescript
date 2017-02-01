
declare interface BookConstructor {
  new (title: string, publisher: string): Book;
}

declare interface Book {
  ratings: Rating[];
  title: string;
  publisher: string;

  addRating: (username: string, rating: number, comment: string) => Rating;
}

declare interface Rating {
  username: string;
  rating: number;
  comment: string;
}
