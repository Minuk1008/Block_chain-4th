#pragma once
#include <iostream>
#include <string>

using namespace std;

#pragma pack (push, 1)
class CBooks {
public:
    string m_Title;
    string m_Author;
    string m_Subject;
    int m_nBookId;

    void PrintBookInformation();
    // {
    //    cout << "Book title : " << m_Title << endl;
    //    cout << "Book author : " << m_Author << endl;
    //    cout << "Book subject : " << m_Subject << endl;
    //    cout << "Book id : " << m_nBookId << endl;
    //} // inside class definition
};
#pragma pack (pop)

void CBooks::PrintBookInformation() {
    cout << "Book title : " << m_Title << endl;
    cout << "Book author : " << m_Author << endl;
    cout << "Book subject : " << m_Subject << endl;
    cout << "Book id : " << m_nBookId << endl;
} //outside class definition