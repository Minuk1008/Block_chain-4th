#include <iostream>

using namespace std;

int main(int argc, char* argv[])
{
    int num;//반드시 초기화!! 안해주면 warning
    num = 15;
    cout << num << "\n";

    if(argc > 1)
    {
        cout << "argc = " << argc << endl;
        for(int i = 0; i < argc; i++)
        {
            cout << "argv[" << i << "]" << "=" << argv[i] << endl;
        }
    }

    double fNum = 99.999;
    char cLetter = 'A';
    string strText = "Hello C++ !!!";

    cout << "fNum = " << fNum << ", cLetter = " << cLetter << ", strText = " << strText << endl;
    printf("floatNumber[%f], charLetter[%c]\n", fNum, cLetter);

    int x = 15, y = 21, z = 60; 

    cout << "x = " << x << " y = " << y << " z = " << z << endl;
    cout << "sum = " << x + y + z << endl;

    return 0;
}
