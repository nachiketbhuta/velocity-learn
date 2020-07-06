---
title: Jumping Frog Problem
date: 2020-07-06T09:18:40.472Z
author: Nachiket Bhuta
description: "Problem Link : https://atcoder.jp/contests/dp/tasks/dp_a"
---
There are $N$ stones, numbered $1,2,…,N$. For each $i (1 \leq i \leq N)$, the height of stone $i$ is $h_i$.

There is a frog who is initially on Stone 1. He will repeat the following action some number of times to reach Stone $N$ :

- If the frog is currently on Stone $i$, jump to Stone $i+1$ or Stone $i+2$. Here, a cost of $|h_i - h_j|$ is incurred, where $j$ is the stone to land on.

Find the minimum possible total cost incurred before the frog reaches Stone $N$.

#### Constraints

- All values in input are integers.
- $2 \leq N \leq 10^5$
- $1 \leq h_i \leq 10^4$

### Approach

1. We will use the Top-Down Approach of Dynamic Programming and solve this problem using Recursion and Memoization.
2. We will start jumping from the $1st$ stone.
3. Let memo[i] be the minimum total cost to reach $i\th$ stone.
4. Calculate the cost for jumping to next stone i.e $i+1$ stone and recursively doing it for next stone until the last stone and lets say this value as $A$.
5. Calculate the cost for jumping to next to next stone i.e $i+2$ stone and recursively doing it for next stone until the last stone and lets say this value as $B$.
6. Now, calculate the minimum cost = $min(A, B)$ and store it in memoization table at memo[i].

### Implementation

```cpp
#include <bits/stdc++.h>

using namespace std;

// Maximum stones as per problem
const int N = 1e5;

int n, stones[N];

// Memoization table
int memo[N];

int jumps(int ind) {

    // If we are last stone, then the answer will be 0.
    if (ind == (n - 1))
        return 0;

    // Checking the boundary condition
    if (ind >= n)
        return INT_MAX;

    /*  
        Since we stored the minimum cost for a stone,
        now we will use the stored cost
        We are initializing the table to -1,
        if the value stored is not -1,
        then we have calculated the minimum cost
        So just return that cost
    */
    if (memo[ind] != -1)
        return memo[ind];

    // Calculate the cost for jumping to next stone (ind + 1) and recursively doing it for next stone
    int oneJump = abs(stones[ind] - stones[ind+1]) + jumps(ind+1);


    // Initializing the twoJumps because there can be a case in which there can be only one stone.
    int twoJumps = INT_MAX;

    // Checking if there are more than 2 stones
    if (ind + 2 < n) {

        // Calculate the cost for jumping to next to next stone (ind + 2)
        // and recursively doing it for next to next stone
        twoJumps = abs(stones[ind] - stones[ind+2]) + jumps(ind+2);
    }

    // Storing the minimum cost in the memoization table
    // and returning the minimum cost
    return memo[ind] = min(oneJump, twoJumps);
}


int main()
{

    // Initializing the memoization table with -1
    memset(memo, -1, sizeof(memo));

    int n;
    cin >> n;
    for (int i = 0; i < n; ++i)
    {
        cin >> stones[i];
    }

    // We will start from first stone
    cout << jumps(0) << endl;

    return 0;
}
```
