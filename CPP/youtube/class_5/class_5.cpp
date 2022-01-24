// class_5.cpp : 이 파일에는 'main' 함수가 포함됩니다. 거기서 프로그램 실행이 시작되고 종료됩니다.
//

#include <iostream>

using namespace std;

int main()
{
    int data = 10 + 10;
    //data = data + 20;
    data += 20;

    data = 10 % 3; // %는 정수만 가능

    //data = 10. / 3.; 이렇게 사용하고 싶으면
    data = (int)(10.f / 3.f);
    //실수를 상수로 적을 경우 소수점 뒤에 f르 붙이면 float 자료형으로 , f를 불이지 않으면 double 자료형으로 간주 . (0.1f ; 0.1)

    cout << data << endl;

    return 0;
}
