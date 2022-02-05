#pragma once

#include <iostream>

using namespace std;

class CPrint
{
public: 
	CPrint() {}; //정의해주고 아무것도 안넣어줌

	void print(int i);
	void print(double f);
	void print(char* str);
};