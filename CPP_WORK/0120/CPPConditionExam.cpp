// CPPConditionExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <time.h>

using namespace std;

tm GetCurrentTime(void) {
    
    time_t curTime = time(NULL);
    struct tm pLocalTime;

    localtime_s(&pLocalTime, &curTime);

    cout << "currentTime: " << curTime;

    return pLocalTime;
}

int main()
{
    int time = -1;
    tm test = GetCurrentTime();

    cout << test.tm_year << endl;
    cout << test.tm_mon << endl;
    cout << test.tm_hour << endl;
    cout << test.tm_wday << endl;
    cout << test.tm_isdst << endl;
    cout << test.tm_mday << endl;
    cout << test.tm_min << endl;

    switch (test.tm_wday) {
        case 1:
            cout << "Monday!" << endl;
            break;
        case 2:
            cout << "Tuesday!" << endl;
            break;
        case 3:
            cout << "Wednesday!" << endl;
            break;
        case 4:
            cout << "Thursday!" << endl;
            break;
        case 5:
            cout << "Friday!" << endl;
            break;
        case 6:
            cout << "Saturday!" << endl;
            break;
        default:
            cout << "Sunday!" << endl;
    }

    /*cout << "Input a number: ";
    scanf_s("%d", &time);*/

    /*if (time < 0) return 128;

    if (time < 10) {
        cout << "Good Morning KDigital Class 4";
    }
    else if (time < 20) {
        cout << "Good Afternoon everyone";
    }
    else {
        cout << "Good Night sweet dream!";
    }*/
    
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
