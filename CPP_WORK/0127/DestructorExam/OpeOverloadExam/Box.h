#pragma once
#include <iostream>

using namespace std;

class CBox
{
public:
	CBox() { m_length = 0.0f; m_breadth = 0.0f; m_height = 0.0f; };
	~CBox() {};

	double GetVolume(void); //명시적으로 얘는 인자가 없다고 표현
	void SetLength(double length);
	void SetBreadth(double breadth);
	void SetHeight(double height);
	CBox operator+(const CBox&);

private:
	double m_length; // private에는 멤버가 관련 있나보다
	double m_breadth;
	double m_height;
};

