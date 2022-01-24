#include <iostream>
#include <time.h>

using namespace std;

int main() {
	cout << "start" << endl;

	int iNum[9] = {};

	for (int i = 0; i < 9; i++) {
		iNum[i] = i + 1;
	}

	int iTemp, idx1, idx2;
	srand((unsigned int)time(0));
	for (int i = 0; i < 100; i++) {
		idx1 = rand() % 9;
		idx2 = rand() % 9;

		iTemp = iNum[idx1];
		iNum[idx1] = iNum[idx2];
		iNum[idx2] = iTemp;
	}

	int iStrike = 0, iBall = 0;
	int input[3] = {};
	int count = 0;

	while (true) {
		cout << "1~9 숫자 입력" << endl;
		cin >> input[0] >> input[1] >> input[2];

		if (input[0] < 1 || input[0] > 9 || input[1] < 1 || input[1] > 9 || input[2] < 1 || input[2] > 9) {
			break;
		}

		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				if (iNum[i] == input[j]) {
					if (i == j) {
						iStrike++;
					}
					else {
						iBall++;
					}
				}
			}
		}

		count++;

		if (iStrike == 3) {
			cout << count << "번 try" << endl;
			break;
		}
		else {
			cout << "Strike : " << iStrike << "\tBall : " << iBall << endl;
			iStrike = 0;
			iBall = 0;
		}
	}
	return 0;
}