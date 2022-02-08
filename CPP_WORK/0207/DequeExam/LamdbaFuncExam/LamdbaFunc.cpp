//라이브러리들
#include <iostream>
#include <algorithm>
#include <string>
#include <vector>
#include <functional> 

using namespace std;

template<typename T>
void PrintVector(T begin, T end)
{
    while (begin != end)
    {
        cout << "[" << *begin << "]";
        begin++;
    }
    cout << endl;
}

int main()
{
    vector<int> vec;
    vec.push_back(5);
    vec.push_back(2);
    vec.push_back(3);
    vec.push_back(1);
    vec.push_back(4);
    vec.push_back(6);
    vec.push_back(7);
    vec.push_back(0);
    vec.push_back(9);
    vec.push_back(8);

    cout << "Initial status" << endl;
    PrintVector(vec.begin(),vec.end());

    cout << "Delete odd number in vector" << endl;
    auto func = [](int i) -> bool{return i % 2 ==1; };
    vec.erase(remove_if(
        vec.begin(), vec.end(),
        [](int i) -> bool{return i % 2 ==1; } //int 라는것으로 활용해서
    ), vec.end());  //처음부터 끝까지 홀수만 남기겠다

    //  "Delete odd number in vector" << endl;
    // auto func = [](int i) -> bool{return i % 2 ==1; };
    // func(4);
    // vec.erase(remove_if(
    //     vec.begin(), vec.end(),
    // ), vec.end());  //처음부터 끝까지 홀수만 남기겠다

    PrintVector(vec.begin(), vec.end());

    return 0;
}