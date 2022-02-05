// StackTemplateExam.cpp : 이 파일에는 'main' 함수가 포함됩니다. 거기서 프로그램 실행이 시작되고 종료됩니다.
//

#include <iostream>
#include <vector>
#include <cstdlib>
#include <string>
#include <stdexcept>

using namespace std;

template <class T> 
class CStack {
private:
    vector<T> elements; // <T> 템플랫 타입을 쓴다는 것
public:
    void push(T const&);     // push elements
    void pop();              // pop elements
    T top() const;           // return top element

    // vector empty check function
    bool empty() const {
        return elements.empty();
    };
};

int main()
{
    try
    {
        CStack<int> nStack; // int = 숫자 = integer = n(umber)
        CStack<string> strStack;

        // manipulate (조작하다) integer(숫자) stack
        nStack.push(25);
        cout << "nStack top element : " << nStack.top() << endl;

        // manipultae string stack
        strStack.push("Hello Stack");
        strStack.push("Hello C++");
        strStack.push("Hello World");
        strStack.pop();

        cout << "strStack top element : " << strStack.top() << endl;

        strStack.pop();
        cout << "strStack top element : " << strStack.top() << endl;

        //strStack.pop(); // 1개 푸쉬할때 에러 확인용
    }
    catch (const std::exception& ex)
    {
        cerr << "Exception : " << ex.what() << endl;
        return -1;
    }

    return 0;
}

template <class T>
void CStack<T>::push(T const& elem) {
    elements.push_back(elem);
}

template <class T>
void CStack<T>::pop() {
    if (elements.empty()) {
        throw out_of_range("CStack<>::pop() : empty stack");
    }

    //remove last(top) element
    elements.pop_back();
}

template <class T>
T CStack<T>::top() const{ // const가 뒤에 붙으면 이 함수에서는 어떤 값도 변경 불가
    if (elements.empty()) {
        throw out_of_range("CStack<>::pop() : empty stack");
    }
    
    //return copy of last(top) element
    return elements.back();
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
