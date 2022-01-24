// CPPIOExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>

using namespace std;

int main()
{
    /*int x = 0;

    cout << "input a number: ";
    cin >> x;
    cout << "Your input number: " << x << "\n";*/

	/*int x, y;
	int nSum;

	cout << "input number x: ";
	cin >> x; cout << endl;
	cout << "input number y: ";
	cin >> y; cout << endl;

	nSum = x + y;
	cout << "x + y = " << nSum << endl;*/

	char strName[50];
	int age = 0;

	cout << "Enter Your Name and age: ";
	cin >> strName >> age; cout << endl;
	cout << "Your name is " << strName << ", Your age is " << age << endl;

	char strErr[] = "Welcome to C++ Hell!!";
	cerr << "Error Message : " << strErr << endl;

	char strLog[] = "It is a piece of cake";
	clog << "Log Message : " << strLog << endl;

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
