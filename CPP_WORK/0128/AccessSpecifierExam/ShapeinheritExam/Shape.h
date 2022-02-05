#pragma once
#include <iostream>

using namespace std;

#ifndef __SHAPE_H__
#define __SHAPE_H__

class CShape
{
public:
	CShape();

	//pure virtual function providing interface framwork (순수 가상 함수)
	virtual int GetArea() = 0;

	void SetHeight(int nHeight);
	void SetWidth(int nWidth);

protected:
	int m_width;
	int m_height;
};
#endif // !__SHAPE_H__
