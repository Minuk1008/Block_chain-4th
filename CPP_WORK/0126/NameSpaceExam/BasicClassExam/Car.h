#pragma once
#include <string>
#include <iostream>
//헤더 파일에 include를 다 모아둔다

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