/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/
module( "Sam's Function Tests" );
test( "String reverse", 3,  function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    // Make sure the result from the stringreverse function is valid

    //create some variables for easy testing plug and play
    var originalString = 'Subscribers rock'
    var reverse = reverseString(originalString);
    equal( reverseString( originalString ), reverse, 'Expected ' + reverse +' as the result, the result was: ' + reverseString(originalString) );
    //use a simple string to test and not variables, just to make sure
    equal(reverseString('aabbcc'), 'ccbbaa', 'Expected ccbbaa as the result, the result was: ' + reverseString('aabbcc'));
});

test( "Smallest Value", 3,  function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    // Make sure the result from the findMinValue function is valid
    var args = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
    var smallArgs = Math.min(...args);
    equal( findMinValue(args), smallArgs, 'Expected ' + smallArgs +  ' as the result, the result was: ' + findMinValue(args) );
    equal( findMinValue([1, 2, 3, 4, 5]), 1, 'Expected 1 as the result, the result was: ' + findMinValue([1, 2, 3, 4, 5]) );

    
});

test( "Distinct Values", 3, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    // Make sure the result from the findDistinctValues function is valid
    var args = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
    deepEqual( findDistinctValues(args), [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity], 'Expected 3,5,7,20,0.18,1,1.1,12, Infinity as the result, the result was: ' + findDistinctValues(args) );
    deepEqual( findDistinctValues([1, 1, 2, 3, 4, 5]), [1 ,2, 3, 4, 5], 'Expected 1,2,3,4,5 as the result, the result was: ' + findDistinctValues([1, 1, 2, 3, 4, 5]) );

    
});

test( "FizzBuzz", 3,  function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' ); 

    deepEqual( doFizzBuzz(30), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz"], 'Expected 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,FizzBuzz as the result, the result was: ' + doFizzBuzz(30) );
    deepEqual( doFizzBuzz(15), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"], 'Expected 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz as the result, the result was: ' + doFizzBuzz(15) );

    
});

test( "Fruit Array", 2,  function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 

    var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
    var fruitsToRemove = ['pear', 'banana'];

    deepEqual( removeFruits(fruits, fruitsToRemove), ["apple", "orange", "kiwi", "plum", "strawberry"], 'Expected as the result: apple,orange,kiwi,plum,strawberry the result was: ' + removeFruits(fruits, fruitsToRemove) );
    //deepEqual( removeFruits(15), , 'Expected as the result, the result was: ' + removeFruits(15) );

    
});

test( "Push Array", 4,  function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 

    // check the function with two arrays
    deepEqual( pushOntoArray([1, 2, 3, 4, 5], [7, 8, 9]), [1, 2, 3, 4, 5, 7, 8, 9], 'Expected as the result: 1,2,3,4,5,7,8,9 the result was: ' + pushOntoArray([1, 2, 3, 4, 5], [7, 8, 9]));
    // check the functions with an integer
    deepEqual( pushOntoArray([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 6], 'Expected as the result: 1,2,3,4,5,6 the result was: ' + pushOntoArray([1, 2, 3, 4, 5], 6));
    // check the function with another type of value, let's say a string!
    deepEqual( pushOntoArray([1, 2, 3, 4, 5], 'delicioius pie'), [1, 2, 3, 4, 5, 'delicioius pie'], 'Expected as the result: 1,2,3,4,5,delicioius pie the result was: ' + pushOntoArray([1, 2, 3, 4, 5], 'delicioius pie'));
    
});

test( "Comma Split String", 3,  function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' ); 

    // check the functions...function
    var thisString = "Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.";
    
    deepEqual( splitListStrUsingComma(thisString), ["Given a string", " sourceStr", " write some code that will split this string using comma as your delimiter", " and producing an empty array if the string is empty."]);
    deepEqual(splitListStrUsingComma(" "), [], "An empty string converts to an empty array");

});

test( "Sum from Arguments", 4,  function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 

    ok( sum(3, 5), 8);
    ok( sum(5, 5, 10), 20);
    equal( sum(3,5,7,20,0), 35, 'expecting result of 35, actual result is '+ sum(3,5,7,20,0) );

});

test( "Whitespace", 3,  function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' ); 

    ok( isOnlyWhitespace("   "));
    equal( isOnlyWhitespace("this is stuff"), false, 'This test is false, but that makes it true. Hmmmm.');

});

test( "Closure Example", 2,  function() {
    // Verify the method exists
    equal( typeof helloName, 'function', 'Must contain a helloName function' ); 
    var sam = helloName("Sam");

    equal( sam("Sneddon"), "Sam Sneddon", 'expecting result of Sam Sneddon, actual result is ' + sam("Sneddon") );
    
});

test( "List Array 5", 2,  function() {
    // Verify the method exists
    equal( typeof addItemstoList, 'function', 'Must contain an addItemstoList function' );
    var bazText = $("#baz").html().trim();
    equal(bazText, "<ul id=\"list1\"><li>dog</li><li>cat</li><li>mouse</li><li>1</li><li>3</li></ul>", "expecting an unordered list, actual result is ul" );

});

test( "Click and Link", 2,  function() {
    // Verify the method exists
    equal( typeof clickAndLink, 'function', 'Must contain an clickAndLink function' );
    var fooBarText = $("#foobar").html().trim();
    console.log(fooBarText)
    equal(fooBarText , "<ul><li><input type=\"checkbox\"></li><li><input type=\"checkbox\"></li><li><input type=\"checkbox\"></li><li><input type=\"checkbox\"></li><li><input type=\"checkbox\"></li><li><input type=\"checkbox\"></li><li><input type=\"checkbox\"></li></ul><a href=\"#\">Check all boxes </a><a href=\"#\">Uncheck all boxes</a>");

});
