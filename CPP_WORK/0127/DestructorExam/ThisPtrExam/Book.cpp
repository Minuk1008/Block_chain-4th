#include "Book.h"

CBook::CBook()
{
	//
}

CBook::CBook(const string& strTitle, int nTotalPage) {
	m_strTitle = strTitle;
	m_nTotalpage = nTotalPage;
	m_nCurrentPage = 0;
	SetPercent();
}

CBook::CBook(const CBook& orgBook) {
	m_strTitle = orgBook.m_strTitle;
	m_nTotalpage = orgBook.m_nTotalpage;
	m_nCurrentPage = orgBook.m_nCurrentPage;
	m_fPercent = orgBook.m_fPercent;
}

void CBook::SetPercent() {
	m_fPercent = (double)m_nCurrentPage / m_nTotalpage * 100;      //(double) : Çü º¯È¯
}

const CBook& CBook::ThickerBook(const CBook& compBook) {
	if (compBook.m_nTotalpage > this->m_nTotalpage) {
		return compBook;
	}
	else {
		return *this;
	}
}