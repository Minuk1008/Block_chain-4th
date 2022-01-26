#include <iostream>
#include <string>

using std::cout; //std에서 cout만 사용할때 이렇게 사용
using std::endl;
// std = standrad library

namespace first_space {
    void myFunc() {
        cout << "This function is in first_space" << endl;
    }
    namespace second_space { //이렇게 이중으로 사용할 수 있지만 따로 하나 줘서 사용해도 상관 없음
        void myFunc() {
            cout << "This function is in second_space \n";
        }
        namespace third_space { //이렇게 이중으로 사용할 수 있지만 따로 하나 줘서 사용해도 상관 없음
            void myFunc() {
                cout << "This function is in third_space \n";
            }
        }
    }
}

//using namespace first_space; //가독성을 위해 이렇게 한번 더 해줌
//using namespace first_space::second_space;

int main()
{
    std::string strHello = "Hello World"; // using namespace std에 모든게 다 포함되어 있어서 헤더에 저렇게 include 해줘도 앞에 std:: 을 써줘야함
    first_space::myFunc();
    first_space::second_space::myFunc(); //중첩해서 사용할 경우 두번에 걸쳐서 myFunc을 찾아야함
    first_space::second_space::third_space::myFunc();

    return 0;
}