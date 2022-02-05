#include "Person.h"

int CPerson::m_nPersonCount = 0; //Initialize static member variable

CPerson::CPerson(const string& strName, int nAge) { //���� �ȿ� �ִ°� �ʱ�ȭ�� �ϱ� ���ؼ� ���� ��
	m_strName = strName;
	m_nAge = nAge;

	cout << "No. " << ++m_nPersonCount << "Created Person " << endl;
}

CPerson::~CPerson() {
	m_nPersonCount--;
	cout << "Person Count " << m_nPersonCount << endl;
}

void CPerson::ShowPersonInfomation() {
	cout << "This person's name " << m_strName << ", Age : " << m_nAge << endl;
}

int CPerson::PersonCount() { // static member function 
	return m_nPersonCount;
}