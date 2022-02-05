#include "Box.h"

double CBox::GetVolume(void) {
	return m_length * m_breadth * m_height;
}

void CBox::SetLength(double length) {
	m_length = length;
}
void CBox::SetBreadth(double breadth) {
	m_breadth = breadth;
}
void CBox::SetHeight(double height) {
	m_height = height;
}

CBox CBox::operator+(const CBox& b) {
	CBox box;
	box.m_length = this->m_length + b.m_length;
	box.m_breadth= this->m_breadth + b.m_breadth;
	box.m_height = this->m_height + b.m_height;

	return box;
}