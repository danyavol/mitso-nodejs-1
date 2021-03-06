# Node.js Streams 


## Usage:

All *.js* files at the */src* folder can be execute via node

```
$ node task1.js
```

Each file accept 2 parameters (short alias and full name):

1.  **-i**, **--input**: an input file *(optional)*
2.  **-o**, **--output**: an output file *(optional)*

```
$ node task1.js -i "input.txt" -o "output.txt"
```

Program will take value from the input file, execute some function and save result to the output file.


If you didn't provide input file, you'll be prompted to enter value in CLI.

If you didn't provide output file, you'll see result in the console.


## task1.js:

Function takes integer **n** and returns *(a+b)^n*

### Example:

**Input:** 2

**Output:** a^2+2ab+b^2

## task2.js:

Function takes an **array of numbers** and returns **number**. Logic of this task is described in pdf file (second task, variant 6)

### Example:

**Input:** [3, 1, 2]

**Output:** 1
