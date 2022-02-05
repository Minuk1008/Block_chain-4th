// SimpleTemplateExam.cpp : 이 파일에는 'main' 함수가 포함됩니다. 거기서 프로그램 실행이 시작되고 종료됩니다.
//

#include <iostream>

using namespace std;

//1
template <typename T>
void Swap(T& a, T& b);
//1-1 
template <> 
void Swap<double>(double&, double&); //더블값만 바뀌지 않게 만듬

//2
template <typename T>
T const& Max(T const& a, T const& b);


int main()
{
    int c = 12, d = 15;

    std::cout << "c :" << c << ", d : " << d << endl;
    Swap(c, d);
    cout << "after swap => " << "c : " << c << ", d : " << d << endl;

    double x = 12.45, y = 72.12;
    std::cout << "x :" << (double)x << ", y : " << (double)y << endl;
    Swap(x, y);
    cout << "after swap => " << "x : " << (double)x << ", y : " << (double)y << endl;

    string strA = "Hello", strB = "World";
    std::cout << "strA :" << strA << ", strB : " << strB << endl;
    Swap(strA, strB);
    cout << "after swap => " << "strA : " << strA << ", strB : " << strB << endl;

    cout << "int Max value : " << Max(c, d) << endl;
    cout << "double Max value : " << Max(x, y) << endl;
    cout << "string Max value : " << Max(strA, strB) << endl;

    return 0;
}

//1에 대한 함수
template <typename T>
void Swap(T& a, T& b) {
    T temp;
    temp = a;
    a = b;
    b = temp;
};

//1-1에 대한 함수
template <>
void Swap<double>(double& a, double& b)
{

}

//2에 대한 함수
template <typename T>
T const& Max(T const& a, T const& b) {
    return a < b ? b : a;
};


// 프로그램 실행: <Ctrl+F5> 또는 [디버그] > [디버깅하지 않고 시작] 메뉴
// 프로그램 디버그: <F5> 키 또는 [디버그] > [디버깅 시작] 메뉴

// 시작을 위한 팁: 
//   1. [솔루션 탐색기] 창을 사용하여 파일을 추가/관리합니다.
//   2. [팀 탐색기] 창을 사용하여 소스 제어에 연결합니다.
//   3. [출력] 창을 사용하여 빌드 출력 및 기타 메시지를 확인합니다.
//   4. [오류 목록] 창을 사용하여 오류를 봅니다.
//   5. [프로젝트] > [새 항목 추가]로 이동하여 새 코드 파일을 만들거나, [프로젝트] > [기존 항목 추가]로 이동하여 기존 코드 파일을 프로젝트에 추가합니다.
//   6. 나중에 이 프로젝트를 다시 열려면 [파일] > [열기] > [프로젝트]로 이동하고 .sln 파일을 선택합니다.
