#include "Car.h"

void CCar::PrintCarInfomation() {
	cout << "Car Company Name : " << m_strCompany << endl;
	cout << "Car Name : " << m_strCarName << endl;
	cout << "Car No : " << m_strCarNo << endl;
}

int CCar::CarSpeed(int maxSpeed) {
	return maxSpeed;
}