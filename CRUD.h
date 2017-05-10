#pragma once
#include <vector>
#include <string>
#include <fstream>
#include <memory>
#include <iostream>

struct Contacts
{
	std::string name, surname, phoneNumber;
	int id;
};

class CRUD
{
	std::string databaseName;
	std::fstream file;

public:
	explicit CRUD(std::string databaseName);
	~CRUD();

	std::vector<Contacts> database;

	void ReadAll();
	void Save();
	void Menu();
	void Refresh(int &i);

	void Create();
	void Read(int index);
	void Update(int index);
	void Delete(int index);
};

