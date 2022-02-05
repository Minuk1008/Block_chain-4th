// OpeOverloadExam.cpp : 이 파일에는 'main' 함수가 포함됩니다. 거기서 프로그램 실행이 시작되고 종료됩니다.
//

#include <iostream>
#include "Box.h"

int main()
{
    CBox box1;
    CBox box2;
    CBox box3;
    double volume = 0.0f;

    box1.SetLength(6.5);
    box1.SetBreadth(7.0);
    box1.SetHeight(5.0);

    box2.SetLength(12.5);
    box2.SetBreadth(13.0);
    box2.SetHeight(10.25);

    volume = box1.GetVolume();
    cout << "Volume of box1 : " << volume << endl;

    volume = box2.GetVolume();
    cout << "Volume of box2 : " << volume << endl;

    box3 = box1 + box2;
    cout << "Volume of box3 : " << volume << endl;


    return 0;
}

// 프로그램 실행: <Ctrl+F5> 또는 [디버그] > [디버깅하지 않고 시작] 메뉴
// 프로그램 디버그: <F5> 키 또는 [디버그] > [디버깅 시작] 메뉴

// 시작을 위한 팁: 
//   1. [솔루션 탐색기] 창을 사용하여 파일을 추가/관리합니다.
//   2. [팀 탐색기] 창을 사용하여 소스 제어에 연결합니다.
//   3. [출력] 창을 사용하여 빌드 출력 및 기타 메시지를 확인합니다.
//   4. [오류 목록] 창을 사용하여 오류를 봅니다.
//   5. [프로젝트] > [새 항목 추가]로 이동하여 새 코드 파일을 만들거나, [프로젝트] > [기존 항목 추가]로 이동하여 기존 코드 파일을 프로젝트에 추가합니다.
//   6. 나중에 이 프로젝트를 다시 열려면 [파일] > [열기] > [프로젝트]로 이동하고 .sln 파일을 선택합니다.
