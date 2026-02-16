# Complete Python Guide for Absolute Beginners

> **Welcome!** This guide is designed for people who have never programmed before. We'll start from the very basics and build up your skills step by step.

---

## Table of Contents

1. [What is Python?](#what-is-python)
2. [Setting Up Python](#setting-up-python)
3. [Your First Program](#your-first-program)
4. [Understanding Python Syntax](#understanding-python-syntax)
5. [Comments - Taking Notes in Code](#comments)
6. [Variables - Storing Information](#variables)
7. [Data Types - Different Kinds of Information](#data-types)
8. [Working with Numbers](#working-with-numbers)
9. [Type Conversion (Casting)](#type-conversion)
10. [Working with Text (Strings)](#working-with-strings)
11. [True or False (Booleans)](#booleans)
12. [Operators - Doing Math and Comparisons](#operators)
13. [Lists - Storing Multiple Items](#lists)
14. [Tuples - Lists That Don't Change](#tuples)
15. [Sets - Unique Collections](#sets)
16. [Dictionaries - Storing Pairs of Information](#dictionaries)
17. [Making Decisions (If/Else)](#making-decisions)
18. [While Loops - Repeating Until Done](#while-loops)
19. [For Loops - Repeating for Each Item](#for-loops)
20. [Functions - Reusable Code Blocks](#functions)
21. [Lambda Functions - Quick One-Line Functions](#lambda-functions)
22. [Arrays - Special Lists](#arrays)
23. [Classes and Objects - Creating Your Own Types](#classes-and-objects)
24. [Inheritance - Building on Existing Classes](#inheritance)
25. [Iterators - Custom Looping](#iterators)
26. [Polymorphism - One Interface, Many Forms](#polymorphism)
27. [Scope - Where Variables Live](#scope)
28. [Modules - Organizing Code in Files](#modules)
29. [Working with Dates and Times](#dates-and-times)
30. [Math Operations](#math-operations)
31. [Working with JSON Data](#json-data)
32. [Next Steps](#next-steps)

---

## What is Python?

**Python** is a programming language that's designed to be easy to read and write. Think of it as a way to give instructions to your computer in a language that's almost like English.

### Why Learn Python?

- **Easy to learn**: Python reads almost like English
- **Powerful**: Used by companies like Google, Netflix, and NASA
- **Versatile**: Build websites, analyze data, create games, automate tasks, and more
- **Great community**: Millions of helpful programmers worldwide

---

## Setting Up Python

### Step 1: Download Python
1. Go to [python.org](https://python.org)
2. Download the latest version (3.11 or newer)
3. **Important**: During installation, check "Add Python to PATH"

### Step 2: Verify Installation
Open your terminal/command prompt and type:
```bash
python --version
```
You should see something like `Python 3.11.0`

### Step 3: Choose a Code Editor
Beginners should start with one of these:
- **IDLE** (comes with Python - good for learning)
- **VS Code** (popular and powerful)
- **PyCharm Community Edition** (great for larger projects)

---

## Your First Program

Let's write the traditional first program that every programmer writes:

```python
print("Hello, World!")
```

**What does this do?**
- `print()` is a **function** that displays text on the screen
- `"Hello, World!"` is the text (called a **string**) we want to display
- When you run this program, you'll see: `Hello, World!`

**Try it yourself:**
1. Open your code editor
2. Type the code above
3. Save the file as `hello.py`
4. Run it!

---

## Understanding Python Syntax

**Syntax** means the rules of how to write code. Python is special because it uses **indentation** (spaces) to organize code.

### Indentation Matters!

```python
# Correct - this works
if 5 > 3:
    print("Five is greater than three")

# Wrong - this will cause an error
if 5 > 3:
print("Five is greater than three")  # Error! No indentation
```

**Rules to remember:**
- Use 4 spaces for each level of indentation (most editors do this automatically with Tab)
- Code at the same level must have the same indentation
- Python is **case-sensitive**: `Print` is different from `print`

---

## Comments

Comments are notes in your code that Python ignores. They help you (and others) understand what your code does.

### Single-Line Comments

```python
# This is a comment - Python ignores this line
print("Hello!")  # You can also put comments at the end of lines

# Use comments to explain WHY you're doing something
# Calculate the total price including tax
total = price * 1.08
```

### Multi-Line Comments

```python
"""
This is a multi-line comment.
You can write several lines here.
Useful for longer explanations.
"""

'''
You can also use single quotes
for multi-line comments.
Both work the same way.
'''
```

**Best practice**: Comment the "why", not the "what". Your code shows *what* it does; comments explain *why*.

---

## Variables

Variables are like labeled boxes where you store information. You can put data in them, change the data, and use it later.

### Creating Variables

```python
# Just write: variable_name = value
age = 25
name = "Sarah"
height = 5.9
is_student = True
```

**No declaration needed!** Unlike some languages, you don't need to say what type of data you're storing. Python figures it out.

### Variable Naming Rules

```python
# ✅ Good variable names
user_age = 30
first_name = "John"
total_price = 99.99
is_valid = True

# ❌ Bad variable names (these cause errors or are confusing)
2cool = "error"      # Can't start with a number
my-var = 5           # Can't use hyphens
class = "error"      # Can't use Python keywords
```

**Naming conventions:**
- Use lowercase with underscores: `my_variable`
- Use descriptive names: `student_count` not `sc`
- Constants (values that don't change) use UPPERCASE: `MAX_SPEED = 100`

### Changing Variables

```python
score = 10
print(score)  # Output: 10

score = 20    # Changed!
print(score)  # Output: 20

score = score + 5  # Add 5 to current value
print(score)  # Output: 25
```

### Multiple Assignments

```python
# Assign multiple variables at once
x, y, z = 1, 2, 3

# Assign the same value to multiple variables
a = b = c = 0
```

---

## Data Types

Data types are different categories of information. Just like in real life, different types of information need to be handled differently.

### Basic Data Types

```python
# Integer (whole numbers)
age = 25
year = 2024
temperature = -5

# Float (decimal numbers)
price = 19.99
height = 5.9
temperature = 98.6

# String (text)
name = "Alice"
message = 'Hello, World!'
address = """123 Main Street
Apartment 4B"""

# Boolean (True or False)
is_student = True
has_license = False
is_raining = True
```

### Checking Data Types

```python
age = 25
print(type(age))  # Output: <class 'int'>

price = 19.99
print(type(price))  # Output: <class 'float'>

name = "Alice"
print(type(name))  # Output: <class 'str'>
```

### Why Data Types Matter

```python
# Numbers can be added mathematically
5 + 3          # Result: 8

# Strings are joined (concatenated)
"5" + "3"      # Result: "53"

# Be careful mixing types!
age = 25
print("I am " + str(age) + " years old")  # Convert number to string first
```

---

## Working with Numbers

Python can do all the math you need!

### Basic Arithmetic

```python
# Addition
total = 10 + 5      # Result: 15

# Subtraction
difference = 20 - 8  # Result: 12

# Multiplication
product = 4 * 7      # Result: 28

# Division (always gives a decimal)
quotient = 15 / 3    # Result: 5.0

# Integer Division (no decimals)
result = 17 // 5     # Result: 3

# Modulus (remainder)
remainder = 17 % 5   # Result: 2

# Exponentiation (power)
squared = 5 ** 2     # Result: 25 (5 squared)
cubed = 2 ** 3       # Result: 8 (2 cubed)
```

### Order of Operations

Python follows PEMDAS (just like math class):

```python
result = 2 + 3 * 4       # Result: 14 (multiplication first)
result = (2 + 3) * 4     # Result: 20 (parentheses first)
```

### Useful Number Operations

```python
# Absolute value
distance = abs(-10)      # Result: 10

# Rounding
price = round(19.678, 2) # Result: 19.68 (2 decimal places)

# Maximum and minimum
highest = max(5, 12, 3, 9)  # Result: 12
lowest = min(5, 12, 3, 9)   # Result: 3
```

### Compound Assignment Operators

```python
score = 10
score += 5   # Same as: score = score + 5  (Result: 15)
score -= 3   # Same as: score = score - 3  (Result: 12)
score *= 2   # Same as: score = score * 2  (Result: 24)
score /= 4   # Same as: score = score / 4  (Result: 6.0)
```

---

## Type Conversion

Sometimes you need to convert data from one type to another.

### Converting to Integer

```python
# String to integer
age_text = "25"
age_number = int(age_text)
print(age_number + 5)  # Result: 30

# Float to integer (removes decimal part)
price = 19.99
whole_price = int(price)
print(whole_price)  # Result: 19
```

### Converting to Float

```python
# String to float
price_text = "19.99"
price = float(price_text)

# Integer to float
number = 42
decimal_number = float(number)  # Result: 42.0
```

### Converting to String

```python
# Integer to string
age = 25
age_text = str(age)
message = "I am " + age_text + " years old"

# Float to string
price = 19.99
price_text = str(price)
```

### Common Conversion Errors

```python
# This will cause an error - can't convert text to number
number = int("hello")  # ❌ ValueError

# This works - the string contains a valid number
number = int("42")     # ✅ Result: 42
```

---

## Working with Strings

Strings are text. They're one of the most used data types in programming.

### Creating Strings

```python
# Single quotes
name = 'Alice'

# Double quotes (more common)
message = "Hello, World!"

# Triple quotes (for multiple lines)
story = """Once upon a time,
in a land far away,
there lived a programmer."""
```

### String Operations

```python
# Concatenation (joining strings)
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name  # Result: "John Doe"

# Repetition
laugh = "Ha" * 3  # Result: "HaHaHa"

# Length
text = "Hello"
length = len(text)  # Result: 5
```

### Accessing Characters

```python
text = "Python"

# Access by index (starts at 0!)
first = text[0]   # Result: "P"
second = text[1]  # Result: "y"
last = text[-1]   # Result: "n" (negative counts from end)

# Slicing (getting a portion)
portion = text[0:3]   # Result: "Pyt" (from index 0 to 3, not including 3)
portion = text[2:]    # Result: "thon" (from index 2 to end)
portion = text[:4]    # Result: "Pyth" (from start to index 4)
```

### Useful String Methods

```python
text = "Hello, World!"

# Convert to uppercase
upper = text.upper()  # Result: "HELLO, WORLD!"

# Convert to lowercase
lower = text.lower()  # Result: "hello, world!"

# Replace text
new_text = text.replace("World", "Python")  # Result: "Hello, Python!"

# Split into a list
words = text.split(", ")  # Result: ["Hello", "World!"]

# Remove whitespace from ends
messy = "  hello  "
clean = messy.strip()  # Result: "hello"

# Check if string starts/ends with something
starts = text.startswith("Hello")  # Result: True
ends = text.endswith("!")          # Result: True

# Find position of text
position = text.find("World")  # Result: 7
```

### String Formatting

```python
# F-strings (modern and preferred method)
name = "Alice"
age = 25
message = f"My name is {name} and I am {age} years old."
# Result: "My name is Alice and I am 25 years old."

# You can even do calculations inside!
price = 19.99
message = f"The total with tax is ${price * 1.08:.2f}"
# Result: "The total with tax is $21.59"

# Old way (format method)
message = "My name is {} and I am {} years old.".format(name, age)
```

---

## Booleans

Booleans represent truth values: `True` or `False`. They're essential for making decisions in code.

### Boolean Values

```python
is_student = True
has_license = False
is_raining = True

# Note: Capital T and F are required!
```

### Comparison Operators (Create Booleans)

```python
# Equal to
5 == 5    # Result: True
5 == 3    # Result: False

# Not equal to
5 != 3    # Result: True

# Greater than
10 > 5    # Result: True

# Less than
3 < 8     # Result: True

# Greater than or equal to
5 >= 5    # Result: True

# Less than or equal to
4 <= 3    # Result: False
```

### Logical Operators

```python
# AND (both must be True)
True and True    # Result: True
True and False   # Result: False

# OR (at least one must be True)
True or False    # Result: True
False or False   # Result: False

# NOT (reverses the boolean)
not True         # Result: False
not False        # Result: True

# Practical example
age = 25
has_id = True
can_enter = age >= 21 and has_id  # Result: True
```

### Truthiness in Python

```python
# These values are considered False:
# - False
# - None
# - 0
# - Empty string: ""
# - Empty list: []
# - Empty dictionary: {}

# Everything else is considered True

if "hello":
    print("Non-empty strings are True!")

if 0:
    print("This won't print - 0 is False")
```

---

## Operators

Operators are symbols that perform operations on values.

### Arithmetic Operators (covered earlier)

```python
+   # Addition
-   # Subtraction
*   # Multiplication
/   # Division
//  # Integer division
%   # Modulus (remainder)
**  # Exponentiation
```

### Comparison Operators (covered earlier)

```python
==  # Equal to
!=  # Not equal to
>   # Greater than
<   # Less than
>=  # Greater than or equal to
<=  # Less than or equal to
```

### Logical Operators (covered earlier)

```python
and  # Both must be True
or   # At least one must be True
not  # Reverse the boolean
```

### Membership Operators

```python
# in - checks if value exists in a sequence
fruits = ["apple", "banana", "cherry"]
print("apple" in fruits)  # Result: True
print("grape" in fruits)  # Result: False

# not in - checks if value doesn't exist
print("grape" not in fruits)  # Result: True
```

### Identity Operators

```python
# is - checks if two variables refer to the same object
x = [1, 2, 3]
y = [1, 2, 3]
z = x

print(x is z)  # Result: True (same object)
print(x is y)  # Result: False (different objects, even though values are same)

# is not
print(x is not y)  # Result: True
```

---

## Lists

Lists are ordered collections that can hold multiple items. They're one of the most useful data structures in Python.

### Creating Lists

```python
# Empty list
my_list = []

# List with items
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]  # Lists can hold different types!
```

### Accessing List Items

```python
fruits = ["apple", "banana", "cherry", "date"]

# Access by index (starts at 0)
first = fruits[0]   # Result: "apple"
second = fruits[1]  # Result: "banana"

# Negative indexing (from the end)
last = fruits[-1]   # Result: "date"
second_last = fruits[-2]  # Result: "cherry"

# Slicing
some_fruits = fruits[1:3]  # Result: ["banana", "cherry"]
first_two = fruits[:2]     # Result: ["apple", "banana"]
last_two = fruits[-2:]     # Result: ["cherry", "date"]
```

### Modifying Lists

```python
fruits = ["apple", "banana", "cherry"]

# Change an item
fruits[1] = "blueberry"
print(fruits)  # Result: ["apple", "blueberry", "cherry"]

# Add item to end
fruits.append("date")
print(fruits)  # Result: ["apple", "blueberry", "cherry", "date"]

# Insert at specific position
fruits.insert(1, "apricot")
print(fruits)  # Result: ["apple", "apricot", "blueberry", "cherry", "date"]

# Remove specific item
fruits.remove("cherry")
print(fruits)  # Result: ["apple", "apricot", "blueberry", "date"]

# Remove by index
del fruits[0]
print(fruits)  # Result: ["apricot", "blueberry", "date"]

# Remove and return last item
last_item = fruits.pop()
print(last_item)  # Result: "date"
print(fruits)     # Result: ["apricot", "blueberry"]

# Clear all items
fruits.clear()
print(fruits)  # Result: []
```

### List Operations

```python
# Length
fruits = ["apple", "banana", "cherry"]
count = len(fruits)  # Result: 3

# Combine lists
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2  # Result: [1, 2, 3, 4, 5, 6]

# Repeat lists
repeated = [0] * 5  # Result: [0, 0, 0, 0, 0]

# Check if item exists
fruits = ["apple", "banana", "cherry"]
has_apple = "apple" in fruits  # Result: True

# Count occurrences
numbers = [1, 2, 2, 3, 2, 4]
count_twos = numbers.count(2)  # Result: 3

# Find index of item
position = fruits.index("banana")  # Result: 1

# Sort list
numbers = [3, 1, 4, 1, 5, 9, 2]
numbers.sort()
print(numbers)  # Result: [1, 1, 2, 3, 4, 5, 9]

# Reverse list
numbers.reverse()
print(numbers)  # Result: [9, 5, 4, 3, 2, 1, 1]
```

### List Comprehensions (Advanced but useful!)

```python
# Create a list in one line
squares = [x**2 for x in range(5)]
# Result: [0, 1, 4, 9, 16]

# With condition
even_numbers = [x for x in range(10) if x % 2 == 0]
# Result: [0, 2, 4, 6, 8]
```

---

## Tuples

Tuples are like lists, but they **cannot be changed** after creation (immutable).

### Creating Tuples

```python
# Empty tuple
my_tuple = ()

# Tuple with items
coordinates = (10, 20)
rgb_color = (255, 0, 128)
person = ("Alice", 25, "Engineer")

# Single item tuple (note the comma!)
single = (42,)  # Without comma, it's just a number
```

### Accessing Tuple Items

```python
person = ("Alice", 25, "Engineer")

# Same as lists
name = person[0]   # Result: "Alice"
age = person[1]    # Result: 25
last = person[-1]  # Result: "Engineer"

# Slicing works too
info = person[1:]  # Result: (25, "Engineer")
```

### Why Use Tuples?

```python
# 1. Protect data from accidental changes
coordinates = (10, 20)
# coordinates[0] = 15  # ❌ Error! Tuples can't be modified

# 2. Slightly faster than lists
# 3. Can be used as dictionary keys (lists can't)

# Unpacking tuples
person = ("Alice", 25, "Engineer")
name, age, job = person
print(name)  # Result: "Alice"
print(age)   # Result: 25
```

---

## Sets

Sets are unordered collections of **unique** items. No duplicates allowed!

### Creating Sets

```python
# Empty set (must use set(), not {})
my_set = set()

# Set with items
fruits = {"apple", "banana", "cherry"}
numbers = {1, 2, 3, 4, 5}

# From a list (removes duplicates!)
numbers_list = [1, 2, 2, 3, 3, 3, 4]
unique_numbers = set(numbers_list)  # Result: {1, 2, 3, 4}
```

### Set Operations

```python
fruits = {"apple", "banana", "cherry"}

# Add item
fruits.add("date")

# Remove item
fruits.remove("banana")  # Error if item doesn't exist
fruits.discard("grape")  # No error if item doesn't exist

# Check membership
has_apple = "apple" in fruits  # Result: True

# Length
count = len(fruits)
```

### Set Mathematics

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# Union (all items from both)
combined = set1 | set2  # Result: {1, 2, 3, 4, 5, 6}

# Intersection (items in both)
common = set1 & set2  # Result: {3, 4}

# Difference (items in first but not second)
difference = set1 - set2  # Result: {1, 2}

# Symmetric difference (items in either, but not both)
sym_diff = set1 ^ set2  # Result: {1, 2, 5, 6}
```

---

## Dictionaries

Dictionaries store **key-value pairs**. Think of them like a real dictionary: you look up a word (key) to find its definition (value).

### Creating Dictionaries

```python
# Empty dictionary
my_dict = {}

# Dictionary with items
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Keys can be strings, numbers, or tuples
scores = {
    "math": 95,
    "english": 87,
    "science": 92
}
```

### Accessing Dictionary Values

```python
person = {"name": "Alice", "age": 25, "city": "New York"}

# Access by key
name = person["name"]  # Result: "Alice"

# Safer access (returns None if key doesn't exist)
country = person.get("country")  # Result: None
country = person.get("country", "USA")  # Result: "USA" (default value)
```

### Modifying Dictionaries

```python
person = {"name": "Alice", "age": 25}

# Add new key-value pair
person["city"] = "New York"

# Modify existing value
person["age"] = 26

# Remove key-value pair
del person["city"]

# Remove and return value
age = person.pop("age")

# Clear all items
person.clear()
```

### Dictionary Operations

```python
person = {"name": "Alice", "age": 25, "city": "New York"}

# Get all keys
keys = person.keys()  # Result: dict_keys(['name', 'age', 'city'])

# Get all values
values = person.values()  # Result: dict_values(['Alice', 25, 'New York'])

# Get all key-value pairs
items = person.items()  # Result: dict_items([('name', 'Alice'), ('age', 25), ('city', 'New York')])

# Check if key exists
has_name = "name" in person  # Result: True

# Length
count = len(person)  # Result: 3

# Copy dictionary
person_copy = person.copy()
```

### Looping Through Dictionaries

```python
person = {"name": "Alice", "age": 25, "city": "New York"}

# Loop through keys
for key in person:
    print(key)

# Loop through values
for value in person.values():
    print(value)

# Loop through key-value pairs
for key, value in person.items():
    print(f"{key}: {value}")
```

---

## Making Decisions

If statements let your program make choices based on conditions.

### Basic If Statement

```python
age = 18

if age >= 18:
    print("You are an adult")
```

### If-Else Statement

```python
age = 15

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")
```

### If-Elif-Else Statement

```python
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
elif score >= 60:
    print("Grade: D")
else:
    print("Grade: F")
```

### Multiple Conditions

```python
age = 25
has_license = True

# Using 'and'
if age >= 18 and has_license:
    print("You can drive")

# Using 'or'
is_weekend = True
is_holiday = False

if is_weekend or is_holiday:
    print("You can relax!")

# Combining conditions
temperature = 75
is_sunny = True

if temperature > 70 and is_sunny:
    print("Perfect day for the beach!")
elif temperature > 70:
    print("Warm day, but maybe cloudy")
else:
    print("Better stay inside")
```

### Nested If Statements

```python
age = 20
has_ticket = True

if age >= 18:
    if has_ticket:
        print("Welcome to the concert!")
    else:
        print("You need a ticket")
else:
    print("You're too young")
```

### Ternary Operator (One-Line If-Else)

```python
age = 20
status = "adult" if age >= 18 else "minor"
print(status)  # Result: "adult"

# Same as:
# if age >= 18:
#     status = "adult"
# else:
#     status = "minor"
```

---

## While Loops

While loops repeat code as long as a condition is True.

### Basic While Loop

```python
count = 0

while count < 5:
    print(count)
    count += 1

# Output:
# 0
# 1
# 2
# 3
# 4
```

### While Loop with User Input

```python
password = ""

while password != "python123":
    password = input("Enter password: ")

print("Access granted!")
```

### Break Statement (Exit Loop Early)

```python
count = 0

while True:  # Infinite loop!
    print(count)
    count += 1
    
    if count >= 5:
        break  # Exit the loop
```

### Continue Statement (Skip to Next Iteration)

```python
count = 0

while count < 10:
    count += 1
    
    if count % 2 == 0:
        continue  # Skip even numbers
    
    print(count)  # Only odd numbers printed
```

### While-Else

```python
count = 0

while count < 3:
    print(count)
    count += 1
else:
    print("Loop completed normally")

# The else block runs when the loop completes normally
# (not when broken with 'break')
```

---

## For Loops

For loops iterate over sequences (lists, strings, ranges, etc.).

### Basic For Loop

```python
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)

# Output:
# apple
# banana
# cherry
```

### Looping Through Strings

```python
name = "Python"

for letter in name:
    print(letter)

# Output:
# P
# y
# t
# h
# o
# n
```

### Using range()

```python
# range(stop) - from 0 to stop-1
for i in range(5):
    print(i)  # Output: 0, 1, 2, 3, 4

# range(start, stop)
for i in range(2, 6):
    print(i)  # Output: 2, 3, 4, 5

# range(start, stop, step)
for i in range(0, 10, 2):
    print(i)  # Output: 0, 2, 4, 6, 8
```

### For Loop with Index

```python
fruits = ["apple", "banana", "cherry"]

# Using enumerate() to get both index and value
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# Output:
# 0: apple
# 1: banana
# 2: cherry
```

### Nested For Loops

```python
# Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i * j}")
    print()  # Empty line after each row
```

### For Loop with Break and Continue

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Break example
for num in numbers:
    if num == 5:
        break
    print(num)  # Output: 1, 2, 3, 4

# Continue example
for num in numbers:
    if num % 2 == 0:
        continue  # Skip even numbers
    print(num)  # Output: 1, 3, 5, 7, 9
```

---

## Functions

Functions are reusable blocks of code that perform specific tasks.

### Creating Functions

```python
# Basic function
def greet():
    print("Hello, World!")

# Call the function
greet()  # Output: Hello, World!
```

### Functions with Parameters

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # Output: Hello, Alice!
greet("Bob")    # Output: Hello, Bob!

# Multiple parameters
def add(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")

add(5, 3)  # Output: 5 + 3 = 8
```

### Return Values

```python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # Output: 8

# Use the result directly
total = add(10, 20) + add(5, 15)
print(total)  # Output: 50
```

### Default Parameters

```python
def greet(name="Guest"):
    print(f"Hello, {name}!")

greet()         # Output: Hello, Guest!
greet("Alice")  # Output: Hello, Alice!

def power(number, exponent=2):
    return number ** exponent

print(power(5))     # Output: 25 (5 squared)
print(power(5, 3))  # Output: 125 (5 cubed)
```

### Keyword Arguments

```python
def describe_person(name, age, city):
    print(f"{name} is {age} years old and lives in {city}")

# Call with keyword arguments (order doesn't matter)
describe_person(age=25, name="Alice", city="New York")
describe_person(name="Bob", city="Boston", age=30)
```

### Arbitrary Arguments (*args)

```python
def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_all(1, 2, 3))        # Output: 6
print(sum_all(1, 2, 3, 4, 5))  # Output: 15
```

### Arbitrary Keyword Arguments (**kwargs)

```python
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="New York")
# Output:
# name: Alice
# age: 25
# city: New York
```

### Docstrings (Function Documentation)

```python
def calculate_area(width, height):
    """
    Calculate the area of a rectangle.
    
    Parameters:
    width (float): The width of the rectangle
    height (float): The height of the rectangle
    
    Returns:
    float: The area of the rectangle
    """
    return width * height

# Access the docstring
print(calculate_area.__doc__)
```

---

## Lambda Functions

Lambda functions are small, anonymous functions written in one line.

### Basic Lambda

```python
# Regular function
def add(a, b):
    return a + b

# Lambda equivalent
add = lambda a, b: a + b

print(add(5, 3))  # Output: 8
```

### Lambda with One Parameter

```python
square = lambda x: x ** 2
print(square(5))  # Output: 25

double = lambda x: x * 2
print(double(10))  # Output: 20
```

### Using Lambda with Built-in Functions

```python
# With map() - apply function to all items
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # Output: [1, 4, 9, 16, 25]

# With filter() - keep items that meet condition
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # Output: [2, 4, 6, 8, 10]

# With sorted() - custom sorting
students = [
    {"name": "Alice", "grade": 85},
    {"name": "Bob", "grade": 92},
    {"name": "Charlie", "grade": 78}
]
sorted_students = sorted(students, key=lambda x: x["grade"])
print(sorted_students)
```

### When to Use Lambda

```python
# ✅ Good: Simple, one-time use
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))

# ❌ Bad: Complex logic (use regular function instead)
# calculate = lambda x, y: (x + y) * 2 if x > 0 else (x - y) * 2

# ✅ Better: Use regular function for complex logic
def calculate(x, y):
    if x > 0:
        return (x + y) * 2
    else:
        return (x - y) * 2
```

---

## Arrays

Arrays are similar to lists but are optimized for numerical data. They require all elements to be of the same type.

### Creating Arrays

```python
from array import array

# Create an integer array
# 'i' means signed integer
numbers = array('i', [1, 2, 3, 4, 5])

# Create a float array
# 'f' means float
decimals = array('f', [1.5, 2.7, 3.9])
```

### Common Type Codes

```python
# 'b' - signed char (1 byte)
# 'i' - signed int (2 bytes)
# 'l' - signed long (4 bytes)
# 'f' - float (4 bytes)
# 'd' - double (8 bytes)
```

### Array Operations

```python
from array import array

numbers = array('i', [1, 2, 3, 4, 5])

# Access elements (same as lists)
first = numbers[0]

# Add element
numbers.append(6)

# Remove element
numbers.remove(3)

# Length
length = len(numbers)
```

### When to Use Arrays vs Lists

```python
# Use LISTS when:
# - You need different data types
# - You need flexibility

# Use ARRAYS when:
# - All elements are the same type
# - Working with large amounts of numerical data
# - Memory efficiency is important

# For scientific computing, use NumPy arrays instead!
```

---

## Classes and Objects

Classes are blueprints for creating objects. Objects are instances of classes.

### Creating a Class

```python
class Dog:
    # Constructor (runs when object is created)
    def __init__(self, name, age):
        self.name = name  # Attribute
        self.age = age    # Attribute
    
    # Method (function inside a class)
    def bark(self):
        print(f"{self.name} says Woof!")
    
    def birthday(self):
        self.age += 1
        print(f"{self.name} is now {self.age} years old!")
```

### Creating Objects

```python
# Create Dog objects
my_dog = Dog("Buddy", 3)
your_dog = Dog("Max", 5)

# Access attributes
print(my_dog.name)  # Output: Buddy
print(my_dog.age)   # Output: 3

# Call methods
my_dog.bark()       # Output: Buddy says Woof!
my_dog.birthday()   # Output: Buddy is now 4 years old!
```

### Class Variables vs Instance Variables

```python
class Dog:
    # Class variable (shared by all instances)
    species = "Canis familiaris"
    
    def __init__(self, name, age):
        # Instance variables (unique to each instance)
        self.name = name
        self.age = age

dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)

# Both dogs share the same species
print(dog1.species)  # Output: Canis familiaris
print(dog2.species)  # Output: Canis familiaris

# But have different names
print(dog1.name)  # Output: Buddy
print(dog2.name)  # Output: Max
```

### Real-World Example

```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited ${amount}. New balance: ${self.balance}")
    
    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient funds!")
        else:
            self.balance -= amount
            print(f"Withdrew ${amount}. New balance: ${self.balance}")
    
    def get_balance(self):
        print(f"{self.owner}'s balance: ${self.balance}")

# Create account
account = BankAccount("Alice", 1000)

# Use the account
account.deposit(500)    # Output: Deposited $500. New balance: $1500
account.withdraw(200)   # Output: Withdrew $200. New balance: $1300
account.get_balance()   # Output: Alice's balance: $1300
```

---

## Inheritance

Inheritance allows a class to inherit attributes and methods from another class.

### Basic Inheritance

```python
# Parent class (base class)
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        print(f"{self.name} makes a sound")

# Child class (derived class)
class Dog(Animal):
    def speak(self):
        print(f"{self.name} barks")

class Cat(Animal):
    def speak(self):
        print(f"{self.name} meows")

# Create objects
dog = Dog("Buddy")
cat = Cat("Whiskers")

dog.speak()  # Output: Buddy barks
cat.speak()  # Output: Whiskers meows
```

### Using super()

```python
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def info(self):
        print(f"{self.name} is a {self.species}")

class Dog(Animal):
    def __init__(self, name, breed):
        # Call parent constructor
        super().__init__(name, "Dog")
        self.breed = breed
    
    def info(self):
        super().info()  # Call parent method
        print(f"Breed: {self.breed}")

dog = Dog("Buddy", "Golden Retriever")
dog.info()
# Output:
# Buddy is a Dog
# Breed: Golden Retriever
```

### Multiple Inheritance

```python
class Flyer:
    def fly(self):
        print("Flying high!")

class Swimmer:
    def swim(self):
        print("Swimming in water!")

class Duck(Flyer, Swimmer):
    def quack(self):
        print("Quack quack!")

duck = Duck()
duck.fly()    # Output: Flying high!
duck.swim()   # Output: Swimming in water!
duck.quack()  # Output: Quack quack!
```

---

## Iterators

Iterators are objects that can be iterated upon (looped through).

### Understanding Iterators

```python
# Lists, tuples, strings are all iterable
my_list = [1, 2, 3]

# Get an iterator
my_iter = iter(my_list)

# Get next item
print(next(my_iter))  # Output: 1
print(next(my_iter))  # Output: 2
print(next(my_iter))  # Output: 3
# print(next(my_iter))  # Would raise StopIteration error
```

### Creating Custom Iterators

```python
class Counter:
    def __init__(self, start, end):
        self.current = start
        self.end = end
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current > self.end:
            raise StopIteration
        else:
            num = self.current
            self.current += 1
            return num

# Use the custom iterator
counter = Counter(1, 5)
for num in counter:
    print(num)
# Output: 1, 2, 3, 4, 5
```

### Generators (Easier Way to Create Iterators)

```python
def countdown(start):
    while start > 0:
        yield start  # 'yield' makes it a generator
        start -= 1

# Use the generator
for num in countdown(5):
    print(num)
# Output: 5, 4, 3, 2, 1

# Generator expressions (like list comprehensions)
squares = (x**2 for x in range(5))
for square in squares:
    print(square)
# Output: 0, 1, 4, 9, 16
```

---

## Polymorphism

Polymorphism means "many forms" - the same method name can do different things in different classes.

### Method Overriding

```python
class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14 * self.radius ** 2

# Same method name, different behavior
shapes = [Rectangle(10, 5), Circle(7)]

for shape in shapes:
    print(f"Area: {shape.area()}")
# Output:
# Area: 50
# Area: 153.86
```

### Duck Typing

```python
# "If it walks like a duck and quacks like a duck, it's a duck"

class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

class Robot:
    def speak(self):
        return "Beep boop!"

# Function that works with any object that has a speak() method
def make_it_speak(thing):
    print(thing.speak())

# Works with all of them!
make_it_speak(Dog())    # Output: Woof!
make_it_speak(Cat())    # Output: Meow!
make_it_speak(Robot())  # Output: Beep boop!
```

---

## Scope

Scope determines where variables can be accessed in your code.

### Local Scope

```python
def my_function():
    x = 10  # Local variable
    print(x)

my_function()  # Output: 10
# print(x)     # Error! x doesn't exist outside the function
```

### Global Scope

```python
x = 10  # Global variable

def my_function():
    print(x)  # Can access global variable

my_function()  # Output: 10
print(x)       # Output: 10
```

### Modifying Global Variables

```python
x = 10

def my_function():
    global x  # Declare that we want to modify the global x
    x = 20

print(x)        # Output: 10
my_function()
print(x)        # Output: 20
```

### Nested Scope

```python
def outer():
    x = "outer"
    
    def inner():
        x = "inner"
        print("Inner:", x)
    
    inner()
    print("Outer:", x)

outer()
# Output:
# Inner: inner
# Outer: outer
```

### LEGB Rule

Python looks for variables in this order:
1. **L**ocal - Inside the current function
2. **E**nclosing - In parent functions
3. **G**lobal - At the top level of the module
4. **B**uilt-in - Python's built-in names

```python
x = "global"

def outer():
    x = "enclosing"
    
    def inner():
        x = "local"
        print(x)  # Finds "local" first
    
    inner()
    print(x)  # Finds "enclosing"

outer()
print(x)  # Finds "global"
```

---

## Modules

Modules are Python files containing functions, classes, and variables that you can use in other programs.

### Importing Modules

```python
# Import entire module
import math
print(math.sqrt(16))  # Output: 4.0

# Import specific function
from math import sqrt
print(sqrt(16))  # Output: 4.0

# Import with alias
import math as m
print(m.pi)  # Output: 3.141592653589793

# Import everything (not recommended)
from math import *
print(pi)  # Works, but can cause naming conflicts
```

### Creating Your Own Module

```python
# Save this as mymodule.py
def greet(name):
    return f"Hello, {name}!"

def add(a, b):
    return a + b

PI = 3.14159
```

```python
# In another file, use your module
import mymodule

print(mymodule.greet("Alice"))  # Output: Hello, Alice!
print(mymodule.add(5, 3))       # Output: 8
print(mymodule.PI)              # Output: 3.14159
```

### Useful Built-in Modules

```python
# random - Generate random numbers
import random
number = random.randint(1, 10)  # Random number between 1 and 10
choice = random.choice(["apple", "banana", "cherry"])

# datetime - Work with dates and times
from datetime import datetime
now = datetime.now()
print(now)

# os - Interact with operating system
import os
current_directory = os.getcwd()  # Get current working directory

# json - Work with JSON data
import json
data = {"name": "Alice", "age": 25}
json_string = json.dumps(data)
```

---

## Dates and Times

Python's `datetime` module makes working with dates and times easy.

### Getting Current Date and Time

```python
from datetime import datetime

# Current date and time
now = datetime.now()
print(now)  # Output: 2024-02-16 14:30:45.123456

# Just the date
today = datetime.now().date()
print(today)  # Output: 2024-02-16

# Just the time
current_time = datetime.now().time()
print(current_time)  # Output: 14:30:45.123456
```

### Creating Specific Dates

```python
from datetime import datetime, date

# Create a specific date
birthday = date(1990, 5, 15)
print(birthday)  # Output: 1990-05-15

# Create a specific datetime
event = datetime(2024, 12, 25, 10, 30, 0)
print(event)  # Output: 2024-12-25 10:30:00
```

### Formatting Dates

```python
from datetime import datetime

now = datetime.now()

# Format as string
formatted = now.strftime("%Y-%m-%d %H:%M:%S")
print(formatted)  # Output: 2024-02-16 14:30:45

# Common format codes:
# %Y - Year (4 digits)
# %m - Month (01-12)
# %d - Day (01-31)
# %H - Hour (00-23)
# %M - Minute (00-59)
# %S - Second (00-59)
# %A - Weekday name
# %B - Month name

readable = now.strftime("%A, %B %d, %Y")
print(readable)  # Output: Friday, February 16, 2024
```

### Date Arithmetic

```python
from datetime import datetime, timedelta

now = datetime.now()

# Add days
future = now + timedelta(days=7)
print(future)  # 7 days from now

# Subtract time
past = now - timedelta(hours=3)
print(past)  # 3 hours ago

# Calculate difference between dates
birthday = datetime(1990, 5, 15)
age_delta = now - birthday
days_old = age_delta.days
years_old = days_old // 365
print(f"You are approximately {years_old} years old")
```

---

## Math Operations

Python's `math` module provides mathematical functions.

### Basic Math Functions

```python
import math

# Square root
print(math.sqrt(16))  # Output: 4.0

# Power
print(math.pow(2, 3))  # Output: 8.0

# Absolute value (also available as abs())
print(math.fabs(-5))  # Output: 5.0

# Rounding
print(math.ceil(4.2))   # Output: 5 (round up)
print(math.floor(4.8))  # Output: 4 (round down)

# Factorial
print(math.factorial(5))  # Output: 120 (5! = 5*4*3*2*1)
```

### Trigonometry

```python
import math

# Trigonometric functions (use radians)
print(math.sin(math.pi / 2))  # Output: 1.0
print(math.cos(0))            # Output: 1.0
print(math.tan(math.pi / 4))  # Output: 0.9999...

# Convert degrees to radians
degrees = 90
radians = math.radians(degrees)
print(math.sin(radians))  # Output: 1.0
```

### Constants

```python
import math

# Pi
print(math.pi)  # Output: 3.141592653589793

# Euler's number
print(math.e)   # Output: 2.718281828459045

# Infinity
print(math.inf)    # Output: inf
print(-math.inf)   # Output: -inf
```

### Logarithms

```python
import math

# Natural logarithm (base e)
print(math.log(math.e))  # Output: 1.0

# Logarithm base 10
print(math.log10(100))  # Output: 2.0

# Logarithm with custom base
print(math.log(8, 2))  # Output: 3.0 (2^3 = 8)
```

---

## JSON Data

JSON (JavaScript Object Notation) is a popular data format. Python makes it easy to work with.

### Converting Python to JSON

```python
import json

# Python dictionary
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York",
    "hobbies": ["reading", "coding", "hiking"]
}

# Convert to JSON string
json_string = json.dumps(person)
print(json_string)
# Output: {"name": "Alice", "age": 25, "city": "New York", "hobbies": ["reading", "coding", "hiking"]}

# Pretty print JSON
pretty_json = json.dumps(person, indent=4)
print(pretty_json)
# Output:
# {
#     "name": "Alice",
#     "age": 25,
#     "city": "New York",
#     "hobbies": [
#         "reading",
#         "coding",
#         "hiking"
#     ]
# }
```

### Converting JSON to Python

```python
import json

# JSON string
json_string = '{"name": "Bob", "age": 30, "city": "Boston"}'

# Convert to Python dictionary
person = json.loads(json_string)
print(person["name"])  # Output: Bob
print(type(person))    # Output: <class 'dict'>
```

### Reading/Writing JSON Files

```python
import json

# Writing to a JSON file
data = {
    "users": [
        {"name": "Alice", "age": 25},
        {"name": "Bob", "age": 30}
    ]
}

with open("data.json", "w") as file:
    json.dump(data, file, indent=4)

# Reading from a JSON file
with open("data.json", "r") as file:
    loaded_data = json.load(file)
    print(loaded_data)
```

### Data Type Conversion

```python
# Python to JSON type mapping:
# dict → object
# list, tuple → array
# str → string
# int, float → number
# True → true
# False → false
# None → null
```

---

## Next Steps

Congratulations! You've learned the fundamentals of Python. Here's what to explore next:

### 1. Practice, Practice, Practice!
- Build small projects (calculator, to-do list, quiz game)
- Solve coding challenges on:
  - [LeetCode](https://leetcode.com)
  - [HackerRank](https://hackerrank.com)
  - [CodeWars](https://codewars.com)

### 2. Learn More Advanced Topics
- **File handling**: Read and write files
- **Exception handling**: Handle errors gracefully
- **Regular expressions**: Pattern matching in text
- **Decorators**: Modify function behavior
- **Context managers**: Manage resources efficiently
- **Async programming**: Handle concurrent operations

### 3. Explore Libraries
- **Web Development**: Django, Flask
- **Data Science**: NumPy, Pandas, Matplotlib
- **Machine Learning**: scikit-learn, TensorFlow
- **Automation**: Selenium, BeautifulSoup
- **Game Development**: Pygame

### 4. Build Real Projects
- Web scraper
- Personal blog
- Data visualization dashboard
- Automation scripts
- Simple game
- REST API

### 5. Resources for Continued Learning
- **Documentation**: [python.org/docs](https://docs.python.org)
- **Free Courses**: 
  - Python for Everybody (Coursera)
  - freeCodeCamp Python tutorials (YouTube)
- **Books**:
  - "Automate the Boring Stuff with Python"
  - "Python Crash Course"
  - "Fluent Python"

### 6. Join the Community
- Stack Overflow
- Reddit (r/learnpython, r/Python)
- Python Discord servers
- Local Python meetups

---

## Quick Reference Card

### Basic Syntax
```python
# Variables
x = 10
name = "Alice"

# Print
print("Hello")

# Input
name = input("Enter name: ")

# Comments
# Single line
"""Multi
line"""
```

### Data Types
```python
int: 42
float: 3.14
str: "text"
bool: True/False
list: [1, 2, 3]
tuple: (1, 2, 3)
set: {1, 2, 3}
dict: {"key": "value"}
```

### Operators
```python
+ - * / // % **  # Arithmetic
== != > < >= <=  # Comparison
and or not       # Logical
in, not in       # Membership
```

### Control Flow
```python
if condition:
    pass
elif condition:
    pass
else:
    pass

while condition:
    pass

for item in iterable:
    pass
```

### Functions
```python
def function_name(param):
    return value

lambda x: x * 2
```

### Common Methods
```python
# String
.upper() .lower() .strip() .split() .replace()

# List
.append() .remove() .pop() .sort() .reverse()

# Dict
.keys() .values() .items() .get()
```

---

