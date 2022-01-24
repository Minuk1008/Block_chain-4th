// CPPDynamicExam.cpp : 이 파일에는 'main' 함수가 포함됩니다. 거기서 프로그램 실행이 시작되고 종료됩니다.
//

#include <iostream>

int main() //메모리에 동적 할당
{
    //int* ptrInt = new int;
    //*ptrInt = 1024;

    //double* ptrDouble = new double;
    //*ptrDouble = 3.141592;

    //std::cout << "int type ptr value : " << *ptrInt << std::endl;
    //std::cout << "double type ptr value : " << *ptrDouble << std::endl;

    //if (ptrInt != NULL) {
    //    delete ptrInt;
    //    ptrInt = NULL;
    //}

    //if (ptrDouble != NULL) {
    //    delete ptrDouble;
    //    ptrDouble = NULL;
    //}

    char* pChar = new char;
    *pChar = 'a';
    std::cout << "Memory pChar address : " << (void*)pChar << "\t value : " << *pChar << std::endl;
    std::cout << "pChar Heap size : " << sizeof(*pChar) << std::endl;
    if (pChar != NULL) {
        delete pChar;
        pChar = NULL;
    }

    int* ptrNum = new int;
    *ptrNum = 24;
    std::cout << "Memory ptrNum address : " << (void*)ptrNum << "\t value : " << *ptrNum << std::endl;
    std::cout << "ptrNum Heap size : " << sizeof(*ptrNum) << std::endl;
    if (ptrNum != NULL) {
        delete ptrNum;
        ptrNum = NULL;
    }

    float* ptrFNum = new float;
    *ptrFNum = 3.141592;
    std::cout << "Memory ptrFNum address : " << (void*)ptrFNum << "\t value : " << *ptrFNum << std::endl;
    std::cout << "ptrFNum Heap size : " << sizeof(*ptrFNum) << std::endl;
    if (ptrFNum != NULL) {
        delete ptrFNum;
        ptrFNum = NULL;
    }

    double* ptrDNum = new double;
    *ptrDNum = 3.141592;
    std::cout << "Memory ptrDNum address : " << (void*)ptrDNum << "\t value : " << *ptrDNum << std::endl;
    std::cout << "ptrDNum Heap size : " << sizeof(*ptrDNum) << std::endl;
    if (ptrDNum != NULL) {
        delete ptrDNum;
        ptrDNum = NULL;
    }

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
