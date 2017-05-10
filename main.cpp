#include "CRUD.h"
#include <list>
#include <memory>

class A
{
public:
	virtual ~A() = default;

	virtual void DoSomething() = 0;
};
class B
	: public A
{
public:
	void DoSomething() override
	{
		std::cout << "DoSomething::B";
	}
};


int main()
{
	//std::shared_ptr<A> a = std::make_shared<B>();
	//a->DoSomething();

	CRUD sys("db.txt");
	sys.Menu();
	


}