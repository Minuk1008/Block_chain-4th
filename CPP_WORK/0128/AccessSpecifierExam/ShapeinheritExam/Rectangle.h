#pragma once
#include <iostream>
#include "Shape.h"

using namespace std;

class CRectangle :
    public CShape
{
public:
    int GetArea();
};

