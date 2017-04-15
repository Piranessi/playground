#define BOOST_TEST_MODULE Tests
#include <boost/test/unit_test.hpp>
#include <iostream>
#include <stack>

/*
Provide size of a square matrix, starting point (0 < point <= size) and the sought point (0 < point <=size)

Provide a square matrix of zeros and ones.
Each digit must be separated by space.

Example:

4 1 3 // A square matrix 4x4, start point = 1, sought point = 3
0 1 0 1
0 0 0 0
0 0 0 0
0 0 1 0

The 1st point is connected with 2nd and 4th points.
The 2nd point is not connected with any points.
The 3rd point is not connected with any points.
The 4th point is connected with 3rd point.
Program will return true with provided data.
Path: 1->4->3
*/

bool TrackExist(bool **matrix, int size, int start, int end)
{
	start--;
	end--;

	std::stack <int> vertexStack;

	if (end > size && start > size)
		throw new std::exception("Provide correct input data.");

	for (auto i = 0; i < size; i++)
	{
		if (matrix[start][i] == true)
		{
			if (i == end) return true;
			vertexStack.push(i);
		}
	}

	while (!(vertexStack.empty()))
	{
		auto x = vertexStack.top();
		vertexStack.pop();

		for (auto i = 0; i < size; i++)
		{
			if (matrix[x][i] == true)
			{
				if (i == end) return true;
				vertexStack.push(i);
			}
		}
	}

	return false;
}

int main()
{
	int SIZE, start, end;
	std::cin >> SIZE >> start >> end;

	auto **matrix = new bool*[SIZE];
	for (auto i = 0; i < SIZE; ++i)
		matrix[i] = new bool[SIZE];

	for (auto i = 0; i < SIZE; i++)
		for (auto j = 0; j < SIZE; j++)
			std::cin >> matrix[i][j];

	if (TrackExist(matrix, SIZE, start, end)==1)
		std::cout << "Path exist";
	else
		std::cout << "Path does not exist";

	for (auto i = 0; i < SIZE; ++i)
		delete[] matrix[i];

	delete[] matrix;

	return 0;
}

BOOST_AUTO_TEST_CASE(trackTest)
{
	auto **matrix = new bool*[3];
	for (auto i = 0; i < 3; ++i)
		matrix[i] = new bool[3];

	matrix[0][0] = false;
	matrix[0][1] = true;
	matrix[0][2] = false;
	matrix[1][0] = false;
	matrix[1][1] = false;
	matrix[1][2] = true;
	matrix[2][0] = false;
	matrix[2][1] = false;
	matrix[2][2] = false;

	BOOST_CHECK(TrackExist(matrix, 3, 1, 3) == 1);

	for (auto i = 0; i < 3; ++i)
		delete[] matrix[i];

	delete[] matrix;
}
