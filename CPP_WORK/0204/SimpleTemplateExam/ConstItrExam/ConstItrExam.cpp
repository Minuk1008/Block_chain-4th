// ConstItrExam.cpp : 이 파일에는 'main' 함수가 포함됩니다. 거기서 프로그램 실행이 시작되고 종료됩니다.
//

#include <iostream>
#include <vector>

using namespace std;

template <typename T>
void PrintVector(std::vector<T>& vc)
{
    //Print All vector elements
    cout << "[";
    for (typename vector<T>::iterator itr = vc.begin(); itr != vc.end(); ++itr) {
        cout << *itr << " ";
    }
    cout << "]\n";
}

template <typename T>
void print_vector_range_based(std::vector<T>& vec) {
    for (const auto& elem : vec) { //auto가 위의 Vector를 인식한다.
        std::cout << elem << std::endl;
    }
}

int main()
{
    std::vector<int> vec;
    vec.push_back(10);
    vec.push_back(20);
    vec.push_back(30);
    vec.push_back(40);
    vec.push_back(20);

    std::cout << "Initate status vector" << endl;
    PrintVector(vec);

    vector<int>::iterator itr = vec.begin() + 2; //vec[2]
    *itr = 50;
    cout << "====================================" << endl;
    PrintVector(vec);

    vector<int>::const_iterator citr = vec.begin() + 2;
    // cannot assign to a variable that is const iterator
    // *citr = 70;
    cout << "====================================" << endl;
    cout << "Reverse Vector Print" << endl;
    vector<int>::reverse_iterator ritr = vec.rbegin();

    cout << "[";
    for (; ritr != vec.rend(); ritr++)
    {
        cout << *itr << " ";
    };
    cout << "]\n";

    vector<int> nVector;
    nVector.push_back(1);
    nVector.push_back(2);
    nVector.push_back(3);

    // reverse print 
    // for(vector<int>::size_type i = nVector.size() -1; i >= 0; i-- )
    // {
    //     cout << nVector[i] << endl;
    // }

    for (int elem : nVector)
    {
        cout << "element : " << elem << endl;
    }

    print_vector_range_based(nVector);

    auto nNum = 10;
    auto strHello = "Hello";

    cout << "nNum : " << nNum << ", strHello : " << strHello << endl;

    return 0;
}