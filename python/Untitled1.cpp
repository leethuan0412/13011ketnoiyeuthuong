#include <iostream>
using namespace std;
int main()
{

long int tong,a,b,sodaonguoc=0;
cout << "Nhap so a,b  : " << endl;
cin>>a>>b;
tong=a+b;

do
{
sodaonguoc=sodaonguoc*10;
int digit=tong%10;
sodaonguoc+=digit;
tong/=10;
}
while(tong);
cout << "tong 2 so la " << a+b << endl;
cout << "So  dao nguoc la " << sodaonguoc<< endl;
return 0;
}
