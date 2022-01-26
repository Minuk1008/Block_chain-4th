#pragma once

using namespace std;

namespace BooksInfo {
    struct Books
    {
        char title[50]; //50πŸ¿Ã∆Æ : char =1byte
        char author[50];
        char subject[100];
        int book_id;
    };
    void PrintBooksInformation(struct Books* book) 
    {
        cout << "Book title : " << book->title << ", author : " << book->author << ", subject : " << book->subject << ", book id : " << book->book_id << endl;

        return;
    }

    struct Books SetBooksInformation(char* title, char* author, char* subject, int bookId)
    {
        struct Books book;

        strcpy_s(book.title, _countof(book.title), title);
        strcpy_s(book.author, _countof(book.author), author);
        strcpy_s(book.subject, _countof(book.subject), subject);
        book.book_id = 12423;
        //PrintBooksInformation(book);

        return book;
    }
}

