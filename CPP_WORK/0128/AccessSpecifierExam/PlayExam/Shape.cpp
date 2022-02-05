#include "Shape.h"

CShape::CShape() {
	m_nWidth = 0;
	m_nHeight = 0;
}

CShape::CShape(int nWidth, int nHeight) {
	m_nWidth = nWidth;
	m_nHeight = nHeight;
}

int Area() {
	cout << "Parent class Area : " << endl;
}