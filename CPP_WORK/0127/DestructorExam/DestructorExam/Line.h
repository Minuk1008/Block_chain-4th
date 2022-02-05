#pragma once

#include <iostream>

using namespace std;

class CLine
{
public:
	CLine(); //객체 생성자
	~CLine(); //\객체 파괴자

	void SetLength(double len);

	double GetLength(); // get는 return을 받을꺼라서 void로 쓰면 안됌

private:
	double m_dLength;
	char* m_strLineName;
};

