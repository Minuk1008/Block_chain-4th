#pragma once // 이 파일이 1번만 include 하도록 한다

class CSingleton
{
private:
    CSingleton();
    ~CSingleton(); //파괴자

private:
    static CSingleton* m_pInst;

public:
    int count;
    static CSingleton* getInstace();
    static void DestroyInst();
    void HelloWorld();
};