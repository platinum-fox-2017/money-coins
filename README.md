# Money Coins

1. initialize an array that holds all the possible change available
2. initialize an empty array that will hold the ouput

3. set a (for) loop that iterates over the possible change available.
    3.a set another (while) loop such that if money is greater than change at corresponding index:
        3.a.1 will push the change at corresponding index to the empty array
        3.a.2 will diminish the amount of money to the amount of change at the corresponding index
    end (while) loop
end (for) loop

4. return array 'output' (from step 2)
