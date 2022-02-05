#include "Line.h"

CLine::CLine() {
	cout << "CLine Object is being created" << endl;
	m_strLineName = new char[16];
}

CLine::~CLine() {
	cout << "CLine Object is being deleted" << endl;
	if (m_strLineName != NULL) {
		delete m_strLineName;
	}
}

void CLine::SetLength(double len) {
	m_dLength = len;
}

double CLine::GetLength() {
	return m_dLength;
}

