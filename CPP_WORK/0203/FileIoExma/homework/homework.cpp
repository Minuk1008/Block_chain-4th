#include <iostream>
#include <fstream>
#include <string>

using namespace std;


int main()

{
	ifstream in;
	in.open("C:\\Users\\MW\\Desktop\\homework.png", ios::in | ios::binary);

	in.seekg(0, ios::end);
	int length = in.tellg();
	cout << "읽어올 파일의 전체 크기:" << length << " 바이트" << endl;

	in.seekg(0, ios::beg);
	char* buf = new char[length];
	in.read(buf, length);

	in.close();

	// 읽기 끝, 복사 시작

	ofstream out;
	out.open("C:\\Users\\MW\\Desktop\\homework.png", ios::out | ios::binary);
	out.write(buf, length);

	out.close();

	cout << "파일 복사 성공" << endl;



	return 0;

}