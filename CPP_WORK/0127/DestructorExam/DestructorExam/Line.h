#pragma once

#include <iostream>

using namespace std;

class CLine
{
public:
	CLine(); //��ü ������
	~CLine(); //\��ü �ı���

	void SetLength(double len);

	double GetLength(); // get�� return�� �������� void�� ���� �ȉ�

private:
	double m_dLength;
	char* m_strLineName;
};

