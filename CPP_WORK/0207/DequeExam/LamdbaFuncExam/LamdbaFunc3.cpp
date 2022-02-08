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

class LambdaTest
{
private:
    vector<int> vec;
    int nNumErased;
//  객체 생성자 실행
public:     //초기화
    LambdaTest()
    {
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

        nNumErased =1;
        
        vec.erase(::remove_if(vec.begin(), vec.end(),
             //bool로 리턴하자    
            [this](int i ) ->bool {
                if(this->nNumErased >=2)
                    return false;
                else if (i % 2 ==1)
                {
                    this->nNumErased++;
                    return true;
                }

            }    
            ), vec.end());

        PrintVector(vec.begin(),vec.end());
    }
};

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
    int numErased = 0;
    vec.erase(remove_if(
        vec.begin(), vec.end(),
        [&numErased](int i) -> bool{
            if(numErased >= 2) 
            {
                return false;
            }
            else if (i %2 == 1)
            {
                numErased++;
                return true;
            }
            }), vec.end());  
    PrintVector(vec.begin(), vec.end());

    // 그냥 선언만 해도 된다
    LambdaTest lTest;

    return 0;
}