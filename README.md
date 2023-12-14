# Python Basics

## Table of Contents
- [Python HOME](#python-home)
- [Python Intro](#python-intro)
- [Python Get Started](#python-get-started)
- [Python Syntax](#python-syntax)
- [Python Comments](#python-comments)
- [Python Variables](#python-variables)
- [Python Data Types](#python-data-types)
- [Python Numbers](#python-numbers)
- [Python Casting](#python-casting)
- [Python Strings](#python-strings)
- [Python Booleans](#python-booleans)
- [Python Operators](#python-operators)
- [Python Lists](#python-lists)
- [Python Tuples](#python-tuples)
- [Python Sets](#python-sets)
- [Python Dictionaries](#python-dictionaries)
- [Python If...Else](#python-ifelse)
- [Python While Loops](#python-while-loops)
- [Python For Loops](#python-for-loops)
- [Python Functions](#python-functions)
- [Python Lambda](#python-lambda)
- [Python Arrays](#python-arrays)
- [Python Classes/Objects](#python-classesobjects)
- [Python Inheritance](#python-inheritance)
- [Python Iterators](#python-iterators)
- [Python Polymorphism](#python-polymorphism)
- [Python Scope](#python-scope)
- [Python Modules](#python-modules)
- [Python Dates](#python-dates)
- [Python Math](#python-math)
- [Python JSON](#python-json)


## Python HOME 

Welcome to the world of Python! Python is a versatile programming language known for its simplicity and readability. This guide will help you get started and understand the basics.


## Python Intro

Python is an interpreted, high-level, general-purpose programming language. Let's start with a simple "Hello, PEACE!" example:

```python
print("Hello, PEACE!")
```

## Python Syntax

Python has a clean and straightforward syntax. Indentation is crucial for defining blocks of code. Here's a basic if-else statement:

```
x = 10

if x > 5:
    print("x is greater than 5")
else:
    print("x is not greater than 5")
```

## Python Comments

Comments are essential for code documentation. Use the # symbol for single-line comments and """" for multiple:

```
# This is a single-line comment

"""
This is a
multi-line comment
"""
```


## Python Variables

Variables are used to store data. Python is dynamically typed, so you don't need to declare the variable type explicitly:

```
x = 5 
y = "Hello, Python!"
```


## Python Data Types

Python supports various data types, including int, float, str, and more. Here's an example of different data types:

```
integer_number = 42
float_number = 3.14
text = "Python"
is_true = True
```


## Python Numbers

Python has built-in support for numeric data types. Here's a simple arithmetic operation:

```
a = 10
b = 5

sum_result = a + b
print("Sum:", sum_result)
```


## Python Casting

Casting allows you to convert one data type to another. Here's an example of casting from float to int:

```
float_number = 3.14
int_number = int(float_number)
print("Casted Integer:", int_number)
```


## Python Strings

Strings are sequences of characters. They can be manipulated in various ways:

```
my_string = "Hello, Python!"

# Accessing characters
first_char = my_string[0]

# Slicing
substring = my_string[7:13]

# Concatenation
new_string = my_string + " Welcome!"

# String methods
uppercase_string = my_string.upper()
```


## Python Booleans

Booleans represent truth values. They are often used in conditional statements:

```
is_true = True
is_false = False
# Logical operations
and_result = is_true and is_false
or_result = is_true or is_false
not_result = not is_true
```


## Python Operators

Python supports various operators for different operations. Here's a quick overview:

```
# Arithmetic operators
addition = 5 + 3
subtraction = 7 - 2
multiplication = 4 * 6
division = 8 / 2
```

## Python Lists

Lists are ordered and mutable sequences. Here's how you can work with lists:

```
my_list = [1, 2, 3, "Python", True]

# Accessing elements
first_element = my_list[0]

# Slicing
subset = my_list[1:4]

# List methods
my_list.append("New Element")
```


## Python Tuples

Tuples are ordered and immutable sequences:

```
my_tuple = (1, 2, "Python", True)

# Accessing elements
first_element = my_tuple[0]
```


## Python Sets

Sets are unordered collections of unique elements:

```
my_set = {1, 2, 3, 4, 5}

# Set operations
my_set.add(6)
```


## Python Dictionaries

Dictionaries are unordered key-value pairs:

```
my_dict = {"name": "John", "age": 25, "city": "New York"}

# Accessing values
name_value = my_dict["name"]

# Dictionary methods
my_dict["occupation"] = "Developer"
```

 
## Python If...Else

Conditional statements allow you to make decisions in your code:

```
x = 10

if x > 5:
    print("x is greater than 5")
else:
    print("x is not greater than 5")
```


## Python While Loops

While loops allow you to repeatedly execute a block of code while a condition is true:

```
count = 0

while count < 5:
    print(count)
    count += 1
```


## Python For Loops

For loops are used to iterate over a sequence:

```
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)
```


## Python Functions

Functions allow you to organize code into reusable blocks:

```
def greet(name):
    print("Hello, " + name + "!")

# Function call
greet("Alice")
```


## Python Lambda

Lambda functions are small, anonymous functions:

```
multiply = lambda x, y: x * y
result = multiply(3, 4)
```


## Python Arrays

Arrays are a data structure that stores values of the same data type:

```
from array import array

my_array = array("i", [1, 2, 3, 4])
```


Python Classes/Objects

Classes and objects are fundamental concepts in object-oriented programming:

```
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

# Object instantiation
my_dog = Dog("Buddy", 3)
```


## Python Inheritance

Inheritance allows a class to inherit attributes and methods from another class:

```

class Car:
    def __init__(self, brand):
        self.brand = brand

class ElectricCar(Car):
    def __init__(self, brand, battery):
        super().__init__(brand)
        self.battery = battery
```


## Python Iterators

Iterators allow you to loop through a sequence:

```
my_tuple = (1, 2, 3)

my_iterator = iter(my_tuple)

for item in my_iterator:
    print(item)
```


## Python Polymorphism

Polymorphism allows objects to be treated as instances of their parent class:

```
class Bird:
    def sound(self):
        pass

class Sparrow(Bird):
    def sound(self):
        print("Chirp chirp!")
```


## Python Scope

Scope refers to the visibility of variables. There are local and global scopes:

```
global_variable = 10

def my_function():
    local_variable = 5
```


## Python Modules

Modules allow you to organize code into separate files:

```
# Create a module named mymodule.py

def greet(name):
    print("Hello, " + name + "!")
```


## Python Dates

Working with dates and times is made easy with Python's datetime module:

```
from datetime import datetime

current_date = datetime.now()
print("Current date:", current_date)
```


## Python Math

The math module provides mathematical functions:

```
import math

square_root = math.sqrt(25)
```

## Python JSON

Python has built-in support for working with JSON data:

```
import json

# Convert a Python object to a JSON string
person = {"name": "John", "age": 30, "city": "New York"}
json_string = json.dumps(person)
```
