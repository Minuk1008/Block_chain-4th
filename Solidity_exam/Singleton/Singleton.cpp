    #include "Singleton.h"
    #include <iostream>

    using namespace std;

    CSingleton* CSingleton::m_pInst = NULL;

    CSingleton::CSingleton()
    {

    }

    CSingleton::~CSingleton()
    {

    }

    CSingleton* CSingleton::getInstace()
    {
        if(!m_pInst) //!m_pIst 가 null 이라는 뜻
        {
            m_pInst = new CSingleton();
        }
        return m_pInst;
    }

    void CSingleton::DestroyInst()
    {
        if(!m_pInst)
        {
            return;
        }
        delete m_pInst;
        m_pInst = NULL;
    }

    void CSingleton::HelloWorld()
    {
        cout << "Hello World" << endl;
    }