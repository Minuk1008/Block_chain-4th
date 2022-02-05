// SimpleClassTemplateExam.cpp : 이 파일에는 'main' 함수가 포함됩니다. 거기서 프로그램 실행이 시작되고 종료됩니다.
//

#include <iostream>

using namespace std;

template <typename T>
class CData { //얘는 CData라는 것을 class로만 설정해준 것
private:
    T m_data;
public:
    CData(T dt);
    T get_data();
};

int main()
{
    CData<string> strData("Learning C++"); // 즉 여기서는 밑에 있는 CData 함수가 적용된 것
    CData<int> nData(12);

    std::cout << "strData : " << strData.get_data() << endl;
    std::cout << "nData : " << nData.get_data() << endl;

    return 0;
}

template <typename T>
CData<T>::CData(T dt) { // 이 CData가 위에 str int 값이 담기도록 하는 함수
    m_data = dt;
}

template <typename T>
T CData<T>::get_data() {
    return m_data;
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
