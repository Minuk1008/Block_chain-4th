#include <iostream>

using namespace std;

int main()
{
    int n;
    int* ptrNumber;

    cout << "How many numbers input ? "; cin >> n; //줄바꿈안하고 한줄에
    ptrNumber = new int[n];
    //ptrNumber = new(nothrow) int[n]; // 메모리 할당이 실패 할때 bad_alloc exception 을 주거나 nullptr 을 반환한다.
    if (ptrNumber == nullptr ) { // ==NULL도 가능
        cout << "Error Memory could not be allocated\n";
        exit(1);
    }
    else { //메모리를 할당 받았다면
        for (int i = 0; i < n; i++) {
            cout << "Enter a number : "; cin >> ptrNumber[i];
        }

        cout << "You have entered : ";
        for (int i = 0; i < n; i++) {
            cout << ptrNumber[i] << ", ";
        }

        delete[] ptrNumber;
    }

    return 0;
}
