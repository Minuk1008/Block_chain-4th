// CPPStringExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <string>
#include <stdio.h>

using namespace std;

int main()
{
    string firstName = "James";
    string secondName = "Hetsfield";
    string equip = "ESP Explorer Guitar";

    string fullNameEquip = firstName + " " + secondName + ", " + equip;
    string fullNameEquip1 = firstName.append(" " + secondName.append(" " + equip.append(" Hello")));

    cout << fullNameEquip << endl;
    cout << fullNameEquip1 << endl;

    string strAlphabet = "abcdefghijklmnopqrstuvwxyz";

    cout << "strAlphabet length: " << strAlphabet.length() << endl;
    cout << "strAlphabet size: " << strAlphabet.size() << endl;

    string strHello = "Hello world!!!";
    cout << strHello[0] << endl;
    strHello[0] = 'h';

    for (int i = 0; i < strHello.length(); i++) {
        cout << strHello[i];
    }
    cout << endl;

    string baseballTeam;

    cout << "Enter your favourite baseball team: ";
    getline(cin, baseballTeam);

    cout << baseballTeam << endl;
    /*printf("Input firstName: ");
    scanf_s("%s", firstName, sizeof(firstName));
    printf("Input secondName: ");
    scanf_s("%s", secondName, sizeof(secondName));

    string fullNameEquip = firstName + secondName;

    cout << "fullname: " << firstName << endl;*/

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
