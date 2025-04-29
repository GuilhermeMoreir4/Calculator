# Polish Notation Calculator

A web-based calculator built with HTML, CSS, and JavaScript that parses standard arithmetic expressions (in infix notation), converts them into Polish notation (prefix), and evaluates the result using a custom stack-based algorithm. The calculator also includes basic memory functions and supports operator precedence (without parentheses).
## Features

    ✅ Accepts standard (infix) expressions as input

    ✅ Converts infix expressions to Polish notation internally

    ✅ Evaluates expressions using a custom stack implementation

    ✅ Supports operator precedence (even without parentheses)

    ✅ Basic arithmetic operations: +, -, *, /

    ✅ Memory functions: store and recall

    ✅ Responsive and user-friendly interface

    ✅ Built using HTML, CSS, and vanilla JavaScript

## Limitations

    ❌ Parentheses are not supported

    ❌ No support for advanced math functions (e.g., exponents, square root, etc.)

Example

Input:     3 + 2 * 4
Converted: + 3 * 2 4
Result:    11

How It Works

    The user inputs a normal (infix) arithmetic expression.

    The calculator parses and converts the expression into prefix notation.

    A custom stack-based algorithm is used to evaluate the prefix expression.

    The result is displayed in the interface.

## Getting Started

Clone the repository and open the index.html file in your browser:

git clone https://github.com/GuilhermeMoreir4/Calculator.git
cd polish-notation-calculator
open index.html  # or just double-click it

or acess the page: https://guilhermemoreir4.github.io/Calculator/