#include "Singleton.h"

int main(int arc, char** argv)
{
    CSingleton* ps1;

    ps1 = CSingleton::getInstace();

    ps1->HelloWorld();
    CSingleton::getInstace()->HelloWorld();

    // ps1->DestroyInst();
    // or
    CSingleton::DestroyInst();

    return 0;
}