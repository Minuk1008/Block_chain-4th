// Variables_exam.cpp : 이 파일에는 'main' 함수가 포함됩니다. 거기서 프로그램 실행이 시작되고 종료됩니다.
//

#include <iostream>
#include <stdio.h>
#include <string>

#include "Variables_exam.hpp"

using namespace std;

int main(int argc, char* argv[])//원형
{
    const int nNumber = 10;
    //nNumber = 200;

    cout << nNumber << endl;

    const int iMinutesPerHour = 60;
    const float PI = 3.141592;

    cout << "iMinutesPerHour: " << iMinutesPerHour << NEW_LINE;
    cout << "PI: " << PI << endl;

    printf("iMinutesPerHour[%d], PI[%f]\n", iMinutesPerHour, PI);

    cout << "Define const WIDTH: " << WIDTH << NEW_LINE;
    cout << "const HEIGHT: " << HEIGHT << NEW_LINE;

    if (argc > 1)
    {
        cout << "argc = " << argc << endl;
        for (int i = 0; i < argc; i++)
        {
            cout << "argv[" << "]" << "=" << argv[i] << endl;
        }
    }
    return 0;
}

//int main()
//{
//	int nNum = 6;
//	float fNum = 6234.12345678;
//	double dNum = 81213231232312312312312123124232354535212124124124124124214124124124124124124124124124.1234567890123456;
//	char cLetter = 'S';
//	bool isBool = true, isFalse = false;
//	string strText = "Hello\tWorld!!!\a";
//	int isNumber = true;
//
//	cout << "int : " << nNum << endl;
//	//cout.precision(7);
//	//cout << "float : " << fixed << fNum << endl;
//	cout << "float : " << fNum << endl;
//	//cout.precision(15);
//	//cout << "double : " << fixed << dNum << endl; //fixed => 소수점 15자리 고정
//	cout << "double : " << dNum << endl; //fixed => 소수점 15자리 고정
//	cout << "char : " << cLetter << endl;
//	cout << "bool isBool : " << isBool << ", bool isFalse : " << isFalse << endl;
//	cout << "string : " << strText << endl;
//	cout << "isNumber: " << isNumber << endl;
//
//	printf("cLetter number : %d\r\n", cLetter);
//	//printf("float : %f\n", fNum);
//	//printf("double : %f\n", dNum);
//	cout << "========================" << endl;
//
//	float f1 = 24e3;
//	double d1 = 15E4;
//	cout << "f1: " << f1 << "\nd1: " << d1 << endl;
//
//	char chA = 'A';
//	char chAA = 65; //0x41도 같음(16진수)
//	char chBB = 66;
//	char chCC = 67;
//	
//	cout << "chA : " << (int)chA << endl;
//	cout << chAA << chBB << chCC << endl;
//
//	return 0;
//
//}


// 프로그램 실행: <Ctrl+F5> 또는 [디버그] > [디버깅하지 않고 시작] 메뉴
// 프로그램 디버그: <F5> 키 또는 [디버그] > [디버깅 시작] 메뉴

// 시작을 위한 팁: 
//   1. [솔루션 탐색기] 창을 사용하여 파일을 추가/관리합니다.
//   2. [팀 탐색기] 창을 사용하여 소스 제어에 연결합니다.
//   3. [출력] 창을 사용하여 빌드 출력 및 기타 메시지를 확인합니다.
//   4. [오류 목록] 창을 사용하여 오류를 봅니다.
//   5. [프로젝트] > [새 항목 추가]로 이동하여 새 코드 파일을 만들거나, [프로젝트] > [기존 항목 추가]로 이동하여 기존 코드 파일을 프로젝트에 추가합니다.
//   6. 나중에 이 프로젝트를 다시 열려면 [파일] > [열기] > [프로젝트]로 이동하고 .sln 파일을 선택합니다.
