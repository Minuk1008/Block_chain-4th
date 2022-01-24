//증감 연산자 ++; --; 한 단계 증가 또는 감소

#include <iostream>

using namespace std;

int main()
{
    int data = 0;
    data--;
    data--;

    int a = 0;

    a = 10;
    data = ++a; // result : 11
    data = a++;  // result : 10

    cout << data << endl;


    return 0;
}
