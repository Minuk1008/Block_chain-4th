// CPPOperator.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <bitset>

using namespace std;

int main()
{
    int x = 100 + 200;
    int y = x + 400;
    //int z = y / x; //x / y = 0.~ => 0 반올림
    float z = (float) y / x;
    int xx = y / x;

    cout << "x = " << x << endl; 
    cout << "y = " << y << endl; 
    cout << "z = " << z << endl; 
    cout << "xx = " << xx << endl; 

    int nNumber = 10;
    nNumber -= 25;

    cout << "nNumber : " << nNumber << endl;

    int isX = 10, isY = 7;
    cout << "Return value : " << (isX > isY) << endl;
    cout << "Return value : " << (isX < isY) << endl;
    cout << "Return value : " << (isX != isY) << endl;

    // 비트연산자

    int a = 128;
    int b = 255;

    // 60 : 0011 1100, 13: 0000 1101
    //1100 0011 128+64+2+1 195-256 = -61

    unsigned char A = 257, B = 13;

    cout << (A & B) << endl;
    cout << (A | B) << endl;
    cout << (A ^ B) << endl;
    cout << (~A) << endl;
    cout << bitset<8>(~A) << endl;

    return 0;
}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
