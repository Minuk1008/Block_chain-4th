#include <iostream>
#include "StruckExam.h"

using namespace std;
using namespace BooksInfo;

int main()
{
    //struct Books book1; , Memory assign to stack
    //struct Books book2;

    Books* book1 = new Books; //동적 할당 , Memory allocated in Heap Memory, instantiating
    Books* book2 = new Books; //동적 할당

    //strcpy_s(book1.title, "Learn c++ Programming 21 days");
    //strcpy_s(book1.author, "Sieun Lee");
    //strcpy_s(book1.subject, "C++ Programming in liquore");
    //book1.book_id = 12423;
    //PrintBooksInformation(&book1);
 
    //strcpy_s(book2.title, "Learn c++ Programming 21 days");
    //strcpy_s(book2.author, "Hyein Lee");
    //strcpy_s(book2.subject, "C++ Programming in liquore");
    //book2.book_id = 43223;
    //PrintBooksInformation(&book2);

    strcpy_s(book1->title, _countof(book1->title),"Learn c++ Programming 21 days");
    strcpy_s(book1->author, _countof(book1->author), "Sieun Lee");
    strcpy_s(book1->subject, _countof(book1->subject),"C++ Programming in liquore");
    book1->book_id = 12423;
    PrintBooksInformation(book1);

    strcpy_s(book2->title, _countof(book2->title), "Learn c++ Programming 21 days");
    strcpy_s(book2->author, _countof(book2->author), "Hyein Lee");
    strcpy_s(book2->subject, _countof(book2->subject), "C++ Programming in liquore");
    book2->book_id = 43223;
    PrintBooksInformation(book2);
    //book1.title = 동적할당이 되지 않았을때 , 지금처럼 -> 이게 들어가면 포인터를 사용해서 동적할당을 했을때 사용
    //countof : 길이가 정해진 곳에 넣어야 뻑(?)날 일이 없다

    struct Books book3 = SetBooksInformation((char*)"Welcome to Hell in C++", (char*)"Bjane stroustoup", (char*)"Hell in the C++" , 345676);
    PrintBooksInformation(&book3);

    // He is dodosae

    //cout << "Book1 title : " << book1.title << ", author : " << book1.author << ", subject : " << book1.subject << ", book id : " << book1.book_id << endl;
    //cout << "Book2 title : " << book2.title << ", author : " << book2.author << ", subject : " << book2.subject << ", book id : " << book2.book_id << endl;

    delete book1; //heap에 반납
    delete book2;
    //동적 할당 (new) 를 안할시 delete 사용x : err

    return 0;
}