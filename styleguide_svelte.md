# 1 Introduction
This document serves as the definition of group 6's coding standards for source code in the svelte JavaScript framework. A svelte file is described as *in style* if it only adheres to the rules herein.
# 2 Source files
## 2.1 File name
File names must start with an uppercase letter, be otherwise all lowercase and may include underscores ( _ ) or dashes. They must use the file extension .svelte .
## 2.2 File encoding
Source files must be encoded in UTF-8.
## 2.3 Special characters
### 2.3.1 Whitespace characters
The ASCII horizontal space character (0x20) is the only whitespace character that appears in a source file. Therefor
1. All other whitespace characters in strings are escaped, and
2. Tab characters are not used for indentation.
### 2.3.2 Special escape sequences
For any character that has a special escape sequence (e.g. \', \", \\) that sequence is used rather than the corresponding numeric escape (e.g. \x0a, \u000a, or \u{a}).
# 3 Source file structure
All new source files consist of the following, **in order**:
1. License information, if present
2. The files script implementation,
3. The files main implementation, 
4. The files style implementation.

Exactly one blank line separates each section.
## 3.1 License information
If license or copyright information belongs in a file, it belongs here.
## 3.2 Script implementation
### 3.2.1 module imports
Import statements must not be line wrapped and are therefore an exception to the 80-column limit.

svelte files must use the *import* statement to import ES module files.

    import './module.js';
    import * as module from '../module/module.js';
    import {module} from './module.js';
### 3.2.2 svelte component imports
Import statements must not be line wrapped and are therefore an exception to the 80-column limit.

To import another svelte component  the *import* statement must be used.

    import Nested from './components/Nested.svelte';
### 3.2.3 JavaScript implementation
The implementation follows after all dependencies are declared.

This may consist of module-local declarations (constants, variables, classes, etc.), as well as any exported symbols.
### 3.2.4 JavaScript formatting
#### 3.2.4.1 Braces
Braces are required for all control structures, even if the body only contains only a single statement. The first statement of a non-empty block must begin on its own line. 
#### 3.2.4.2 Indentation
Each time a new block or block-like construct is opened the indent increases by four spaces. When the block ends, the indent is returned to the previous level. The indent level applies to both code and comments.
#### 3.2.4.3 Statements
Each statement is followed by a line-break. 
##### 3.2.4.3.1 Semicolons
Every statement must be terminated with a semicolon. Relying on automatic insertion is forbidden.
##### 3.2.4.3.2 Column limit
JavaScript code has a colum limit of 80 characters. Except as noted below, any line that would exceed this limit must be line-wrapped, als explained in 3.2.4.3.3 Line-wrapping

Exceptions:
1. ES module or svelte-component import and export statements.
2. Lines where obeying the column limit is not possible or would hinder discoverability. Examples include:
    1. A long URL which should be clickable in source.
    2. A shell command intended to be copied-and-pasted.
    3. A long string literal which may need to be copied or searched for wholly (e.g. a long file path).
##### 3.2.4.3.3 Line-wrapping
The prime directive of line-wrapping is: prefer to break at a higher syntactic level. 

    currentEstimate =
    calc(currentEstimate + x * currentEstimate) /
        2.0;

Operators are wrapped as follows:

1. When a line is broken at an operator the break comes after the symbol. (Note that this is not the same practice used in Google style for Java.)
    1. This does not apply to the "dot" (.), which is not actually an operator.
2. A method or constructor name stays attached to the open parenthesis ( ( ) that follows it.
3. A comma (,) stays attached to the token that precedes it.

When line-wrapping, each line after the first is indented at least +4 spaces from the original line.
#### 3.2.4.4 Whitespace
A single blank line appears:
1. Between consecutive methods in a class or object literal
    1. Exception: A blank line between two consecutive properties definitions in an object literal is optional. Such blank lines are used as needed to create logical groupings of fields.
2. Within method bodies, sparingly to create logical groupings of statements. Blank lines at the start or end of a function body are not allowed.
3. Optionally before the first or after the last method in a class or object literal (neither encouraged nor discouraged).
4. As required by other sections of this document.

Multiple consecutive blank lines are permitted, but never required.
#### 3.2.4.5 Comments
Block comments are indented at the same level as the surrounding code. They may be in /\* ... \*/ or //-style. For multi-line /\* ... \*/ comments, subsequent lines must start with * aligned with the * on the previous line, to make comments obvious with no extra context.
    
    /*
     * This is
    * okay.
    */ 

    // And so
    // is this.

    /* This is fine, too. */
### 3.2.5 Language features
JavaScript includes many dubious (and even dangerous) features. This section delineates which features may or may not be used, and any additional constraints on their use.
#### 3.2.5.1 Local variables
Declare all local variables with either *const* or *let*. The *var* keyword must not be used.

Every local variable declaration declares only one variable: declarations such as *let a = 1, b = 2;* are not used.

Local variables are not habitually declared at the start of their containing block or block-like construct. Instead, local variables are declared close to the point they are first used (within reason), to minimize their scope.

#### 3.2.5.2 Array literals
Include a trailing comma whenever there is a line break between the final element and the closing bracket.

Do not use the variadic Array constructor. The constructor is error-prone if arguments are added or removed. Use a literal instead.

Do not define or use non-numeric properties on an array (other than length). Use a Map (or Object) instead.
#### 3.2.5.3 Object literals
Include a trailing comma whenever there is a line break between the final property and the closing brace.

While Object does not have the same problems as Array, it is still disallowed for consistency. Use an object literal ({} or {a: 0, b: 1, c: 2}) instead.

Do not mix quoted and unquoted keys.

Computed property names (e.g., {['key' + foo()]: 42}) are allowed, and are considered dict-style (quoted) keys (i.e., must not be mixed with non-quoted keys) unless the computed property is a symbol (e.g., [Symbol.iterator]). Enum values may also be used for computed keys, but should not be mixed with non-enum keys in the same literal.

Methods can be defined on object literals using the method shorthand ({method() {… }}) in place of a colon immediately followed by a function or arrow function literal.

    return {
        stuff: 'candy',
        method() {
            return this.stuff;  // Returns 'candy'
        },
    };

Shorthand properties are allowed on object literals.

    const foo = 1;
    const bar = 2;
    const obj = {
        foo,
        bar,
        method() { return this.foo + this.bar; },
    };
    assertEquals(3, obj.method());
#### 3.2.5.4 Classes
Constructors are optional. Subclass constructors must call super() before setting any fields or otherwise accessing this. Interfaces should declare non-method properties in the constructor.

Set all of a concrete object’s fields (i.e. all properties other than methods) in the constructor. Annotate fields that are never reassigned with @const (these need not be deeply immutable). Annotate non-public fields with the proper visibility annotation (@private, @protected, @package), and end all @private fields' names with an underscore. Fields are never set on a concrete class' prototype.

Computed properties may only be used in classes when the property is a symbol. Dict-style properties (that is, quoted or computed non-symbol keys, as defined in 5.3.3 Do not mix quoted and unquoted keys) are not allowed. A [Symbol.iterator] method should be defined for any classes that are logically iterable. Beyond this, Symbol should be used sparingly.

Where it does not interfere with readability, prefer module-local functions over private static methods.

Static methods should only be called on the base class itself. Static methods should not be called on variables containing a dynamic instance that may be either the constructor or a subclass constructor, and must not be called directly on a subclass that doesn’t define the method itself.

Do not use JavaScript getter and setter properties. They are potentially surprising and difficult to reason about, and have limited support in the compiler. Provide ordinary methods instead.

Exception: there are situations where defining a getter or setter is unavoidable (e.g. data binding frameworks such as Angular and Polymer, or for compatibility with external APIs that cannot be adjusted). In these cases only, getters and setters may be used with caution, provided they are defined with the get and set shorthand method keywords or Object.defineProperties (not Object.defineProperty, which interferes with property renaming). Getters must not change observable state.

#### 3.2.5.5 Functions
Top-level functions may be defined directly on the exports object, or else declared locally and optionally exported. 

Functions may contain nested function definitions. If it is useful to give the function a name, it should be assigned to a local const.

Arrow functions provide a concise function syntax and simplify scoping this for nested functions. Prefer arrow functions over the function keyword, particularly for nested functions.

Prefer arrow functions over other this scoping approaches such as f.bind(this), and const self = this. Arrow functions are particularly useful for calling into callbacks as they permit explicitly specifying which parameters to pass to the callback whereas binding will blindly pass along all parameters.

The left-hand side of the arrow contains zero or more parameters. Parentheses around the parameters are optional if there is only a single non-destructured parameter. When parentheses are used, inline parameter types may be specified.

The right-hand side of the arrow contains the body of the function. By default the body is a block statement (zero or more statements surrounded by curly braces). The body may also be an implicitly returned single expression if either: the program logic requires returning a value, or the void operator precedes a single function or method call (using void ensures undefined is returned, prevents leaking values, and communicates intent). The single expression form is preferred if it improves readability (e.g., for short or simple expressions).

Function parameters and return types should usually be documented with JSDoc annotations. 

#### 3.2.5.6 Number literals
Numbers may be specified in decimal, hex, octal, or binary. Use exactly 0x, 0o, and 0b prefixes, with lowercase letters, for hex, octal, and binary, respectively. Never include a leading zero unless it is immediately followed by x, o, or b.

#### 3.2.5.7 Control structures
##### 3.2.5.7.1 For loops
With ES6, the language now has three different kinds of for loops. All may be used, though for-of loops should be preferred when possible.
##### 3.2.5.7.2 Switch statements
Within a switch block, each statement group either terminates abruptly (with a break, return or thrown exception), or is marked with a comment to indicate that execution will or might continue into the next statement group. 

Each switch statement includes a default statement group, even if it contains no code. The default statement group must be last.
##### 3.2.5.7.3 this
Only use this in class constructors and methods, in arrow functions defined within class constructors and methods, or in functions that have an explicit @this declared in the immediately-enclosing function’s JSDoc.

Never use this to refer to the global object, the context of an eval, the target of an event, or unnecessarily call()ed or apply()ed functions.
### 3.2.6 Naming
Identifiers use only ASCII letters and digits, and, in a small number of cases noted below, underscores and very rarely (when required by frameworks like Angular) dollar signs.

Give as descriptive a name as possible, within reason. Do not worry about saving horizontal space as it is far more important to make your code immediately understandable by a new reader. Do not use abbreviations that are ambiguous or unfamiliar to readers outside your project, and do not abbreviate by deleting letters within a word.
#### 3.2.6.1 Package names
Package names are all lowerCamelCase, snake_case or a combination of the two.
#### 3.2.6.2 Class names
Class, interface, record, and typedef names are written in UpperCamelCase.
#### 3.2.6.3 Method names
Method names are written in lowerCamelCase, snake_case or a combination of the two.
#### 3.2.6.4 Enum names
Enum names are written in UpperCamelCase.
#### 3.2.6.5 Constant names
Constant names use CONSTANT_CASE, lowerCamelCase, snake_case or a combination of the two.
#### 3.2.6.6 Non-constant field names
Non-constant field names are written in lowerCamelCase, snake_case or a combination of the two.
#### 3.2.6.7 Parameter names
Parameter names are written in lowerCamelCase, snake_case or a combination of the two.
#### 3.2.6.8 Local variable names
Local variable names are written in lowerCamelCase, snake_case or a combination of the two.

## 3.3 Main tag implementation
### 3.3.1 HTML Style Rules
#### 3.3.1.1 Document type
Use HTML5.

HTML5 syntax is preferred for all HTML documents: <!DOCTYPE html>.

Although fine with HTML, do not close void elements, i.e. write <br>, not <br />.
#### 3.3.1.2 HTML Validity
Use valid HTML where possible.

Use valid HTML code unless that is not possible due to otherwise unattainable performance goals regarding file size.

Use tools such as the [W3C HTML validator](https://validator.w3.org/nu/) to test.

Using valid HTML is a measurable baseline quality attribute that contributes to learning about technical requirements and constraints, and that ensures proper HTML usage.

    <!-- Recommended -->
    <!DOCTYPE html>
    <meta charset="utf-8">
    <title>Test</title>
    <article>This is only a test.</article>
    
    <!-- Not recommended -->
    <title>Test</title>
    <article>This is only a test.

#### 3.3.1.3 Semantics
Use HTML according to its purpose.

Use elements for what they have been created for. For example, use heading elements for headings, p elements for paragraphs, a elements for anchors, etc.
#### 3.3.1.4 type attributes
Omit type attributes for style sheets and scripts.

Do not use type attributes for style sheets (unless not using CSS) and scripts (unless not using JavaScript).

Specifying type attributes in these contexts is not necessary as HTML5 implies text/css and text/javascript as defaults. This can be safely done even for older browsers.
### 3.3.2 HTML Formatting Rules
#### 3.3.2.1 General Formatting
Use a new line for every block, list or table element, and indent every such child element by 4 spaces.

Independent of the styling of an element, put every block, list, or table element on a new line.

Also, indent them if they are child elements of a block, list, or table element.
#### 3.3.2.2 HTML Line-Wrapping
Break long lines (optional).

While there is no column limit recommendation for HTML, you may consider wrapping long lines if it significantly improves readability.

When line-wrapping, each continuation line should be indented at least 4 additional spaces from the original line.
#### 3.3.2.3 HTML Quotation Marks
When quoting attributes values, use double quotation marks.

Use double ("") rather than single quotation marks ('') around attribute values.

## 3.4 Style implementation
### 3.4.1 CSS Style Rules
#### 3.4.1.1 CSS Validity
Use valid CSS where possible.

Unless dealing with CSS validator bugs or requiring proprietary syntax, use valid CSS code.

Use tools such as the [W3C CSS validator](https://jigsaw.w3.org/css-validator/) to test.
#### 3.4.1.2 ID and Class naming
Use meaningful or generic ID and class names.

Instead of presentational or cryptic names, always use ID and class names that reflect the purpose of the element in question, or that are otherwise generic.

Names that are specific and reflect the purpose of the element should be preferred as these are most understandable and the least likely to change.

Generic names are simply a fallback for elements that have no particular or no meaning different from their siblings. They are typically needed as “helpers.”

Using functional or generic names reduces the probability of unnecessary document or template changes.
#### 3.4.1.3 ID and Class Name Style
Use ID and class names that are as short as possible but as long as necessary.

Try to convey what an ID or class is about while being as brief as possible.

Using ID and class names this way contributes to acceptable levels of understandability and code efficiency.
#### 3.4.1.4 Shorthand Properties
Use shorthand properties where possible.

CSS offers a variety of [shorthand](https://www.w3.org/TR/CSS21/about.html#shorthand) properties (like font) that should be used whenever possible, even in cases where only one value is explicitly set.

Using shorthand properties is useful for code efficiency and understandability.
#### 3.4.1.5 0 and Units
Omit unit specification after "0" values, unless required.

Always use [relative units](https://www.w3schools.com/cssref/css_units.asp), unless it is not possible otherwise.
#### 3.4.1.6 Leading 0s
Omit leading "0"s in values.

Do not put 0s in front of values or lengths between -1 and 1.
#### 3.4.1.7 Hexadecimal Notation
Use 3 character hexadecimal notation where possible.

For color values that permit it, 3 character hexadecimal notation is shorter and more succinct.
#### 3.4.1.8 ID and Class Name Delimiters
Separate words in ID and class names by a hyphen.

Do not concatenate words and abbreviations in selectors by any characters (including none at all) other than hyphens, in order to improve understanding and scannability.
### 3.4.2 CSS Formatting Rules
#### 3.4.2.1 Declaration Order
Alphabetize declarations in order to achieve consistent code in a way that is easy to remember and maintain.

Ignore vendor-specific prefixes for sorting purposes. However, multiple vendor-specific prefixes for a certain CSS property should be kept sorted (e.g. -moz prefix comes before -webkit).
#### 3.4.2.2 Block Content Indentation
Indent all block content (4 spaces), that is rules within rules as well as declarations, so to reflect hierarchy and improve understanding.
#### 3.4.2.3 Declaration Stops
Use a semicolon after every declaration.
#### 3.4.2.4 Property Name Stops
Use a space after a property name’s colon.
#### 3.4.2.5 Declaration Block Separation
Use a space between the last selector and the declaration block.
#### 3.4.2.6 Selector and Declaration Separation
Separate selectors and declarations by new lines.
#### 3.4.2.7 Rule Separation
Separate rules by new lines.
#### 3.4.2.8 CSS Quotation Marks
Use single ('') rather than double ("") quotation marks for attribute selectors and property values.

Do not use quotation marks in URI values (url()).