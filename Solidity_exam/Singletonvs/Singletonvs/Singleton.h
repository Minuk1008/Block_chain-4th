#pragma once // �� ������ 1���� include �ϵ��� �Ѵ�

class CSingleton
{
private:
    CSingleton();
    ~CSingleton(); //�ı���

private:
    static CSingleton* m_pInst;

public:
    int count;
    static CSingleton* getInstace();
    static void DestroyInst();
    void HelloWorld();
};