#include <iostream>
#include <set>
#include <map>
#include <string>

using namespace std;

template <typename T>
void PrintMultiSet(const multiset<T>& ms)
{
    for (const auto& ele : ms)
    {
        cout << ele << endl;
    }
}

template <typename K, typename V>
void PrintMultiMap(const multimap<K, V>& mm)
{
    for (const auto& kv : mm)
    {
        cout << kv.first << ", " << kv.second << endl;
    }
}

int main()
{
    multiset<string> ms;
    ms.insert("a");
    ms.insert("b");
    ms.insert("a");
    ms.insert("c");
    ms.insert("d");
    ms.insert("c");

    PrintMultiSet(ms);

    std::cout << "=======================================\n";

    multimap<int, string> mm;
    mm.insert(make_pair(1, "Hello World"));
    mm.insert(make_pair(1, "Good Moring C++"));
    mm.insert(make_pair(1, "Chau React"));
    mm.insert(make_pair(2, "Aha Hi Javascript"));
    mm.insert(make_pair(2, "Bye nodejs"));
    PrintMultiMap(mm);
    cout << "-------------------------\n";
    cout << mm.find(1)->second << endl;

    cout << "+++++++++++++++++++++++++++++++++++++++\n";
    auto range = mm.equal_range(1);
    for (auto itr = range.first; itr != range.second; ++itr)
    {
        cout << itr->first << " : " << itr->second << " " << endl;
    }

    return 0;
}