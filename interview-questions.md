# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer: Props in React allows for information(data and methods) from the parent component to be passed down to the child component. This is Read-Only, you cannot modify or update the props. For syntax, you would just type this.props follow by a period and then whatever the variable name is that you're taking the information from. 

  Researched answer: Props stand for properties. Props in React is used to pass data from parent component to child component. To use props, it needs to be passed as an argument, this can be done by passing it in the constructor() and super(). We can access props inside of the child component class. It can be typed: this.props.propName. 'this.props' is considered a global object meaning it stores all of a componenets props. 



2. What is a DOM event?

  Your answer: DOM Event is also known as e. DOM event occurs when the web application is interacting with a user. For example, clicking anywhere on the webpage.  

  Researched answer: When a new method of a class is created, e is passed as a parameter which allows us to look at the properties and methods that are there. 



3. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object-oriented programming uses a programming model where objects are used to represent things. Object is where there is behavior and data. Behavior is basically using functions belinging to objects called methods. Ruby is an example of being an object oriented programming language. Everything in Ruby is an object. On the other hand, theres functional programming that uses a programming model where programs are built using functions. 

  Researched answer: Object-oriented programming is based on objects. These objects contain data and code. Objects uses the keyword self or this. The most popular OOPs are class-based where objects are instances of class. Whereas, functional programming focuses more on not trying to change state and mutable data. Output of a function should be same as the inputs passed to the function.



4. What is the difference between a Float and an Integer in Ruby?

  Your answer: In Ruby, integar is a number without decimals. Whereas, floats are numbers that contain a decimal. 

  Researched answer: Integar and Floats are the most native data types to Ruby. Other types of data types of Ruby are: strings, symbols, arrays, and hashes. Integars are whole numbers that can be wither positive or negative. Floats are real numbers which could either have no decimal. or have a decimal/fraction. We have to be careful on which we use when doing math operations on them because they can change how the value will appear. For example, putting 8.0 + 8.0 = 16.0 and 8+8=16.



5. Ruby has an implicit return. What does that mean?

  Your answer: We have been working with Javascript where we would use the keyword return to return a value and stop function execution. But in Ruby, it has an implicit return where it automatically returns the value in last line of a method without using the return. And the way Ruby knows to stop executing a function is by using the keyword end.

  Researched answer: Because Ruby is known as being a simple language, the language does not use the keyword return, instead it automatically returns the value of the last line in the method. Known as implicit returns.  



## Looking Ahead: Terms for Next Week

1. Instance Variable: Instance variable is a property of an object. It is created with the constructor. Methods are functions of objects, and when connected with an instance variable will allow other instances from the same class to have those methods or actions.

2. PostgreSQL: PostgreSQL is an open sourced relational database management system. It's primary use is for data store or data warehouse for web, mobile, analytics, and geospatial applications. It supports SQL and JSON querying. 

3. Ruby on Rails: Ruby on Rails is an open source backend software used to build web applications. Rails is a full-stack framework that uses the programming language Ruby. 

4. ORM: ORM stands for Object Relational Mapping. ORM is a technique that connects the tables that are in relational database management system to objects. With using ORM, it allows for those object properties and relationships to be stored retriever without writing the normal SQL statements and less database access code. ORM, in other words, allows us to use the languages we are working with currently to query a database without having to use database query commands. 

5. Active Record: Active Record is an ORM. Active Record charts the class name to a table in a database, and the instance of the class (an object) is charted to each row.
