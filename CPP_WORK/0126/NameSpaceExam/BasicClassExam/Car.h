#pragma once
#include <string>
#include <iostream>
//��� ���Ͽ� include�� �� ��Ƶд�

using namespace std;

class CCar
{
public:
	string m_strCompany;
	string m_strCarName;
	string m_strCarNo;

	void PrintCarInfomation();
	int CarSpeed(int CCar);
};