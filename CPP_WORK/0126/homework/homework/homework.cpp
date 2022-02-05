#include <iostream>

using namespace std;

struct Fruits
{
	char fruits_Name[50];
	int fruits_Number;
	int fruits_Price;
};

void PrintFruitsInformation(Fruits* fruits1);

int main()
{

	Fruits* fruits1 = new Fruits;

	cout << "What is the fruit name to enter?" << endl;
	cin >> fruits1->fruits_Name;

	cout << "How many fruits?" << endl;
	cin >> fruits1->fruits_Number;

	cout << "What is the price per fruit?" << endl;
	cin >> fruits1->fruits_Price;
	PrintFruitsInformation(fruits1);

	delete fruits1;
}

void PrintFruitsInformation(Fruits* fruits1)
{
	cout << "Fruits Name : " << fruits1->fruits_Name << ", Number : " << fruits1->fruits_Number << ", Price per : " << fruits1->fruits_Price << "원" << endl;
}