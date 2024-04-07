import { Component } from '@angular/core';
import { Book } from 'src/models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = "Diego"
  listBooks: Book[] = [
    new Book('El señor de los anillos', 'J.R.R. Tolkien', 1954),
    new Book('Cien años de soledad', 'Gabriel García Márquez', 1967),
    new Book('Harry Potter y la piedra filosofal', 'J.K. Rowling', 1997)
  ];
}
