//Possible name
var person, $elem, _name, first_name, vali;

//not recommend
var 이름,なまえ;

//Impossible name
var first-name; // SyntaxError: Unexcepted token -
var 1st; // SyntaxError: Invalid or unexpected token (start from number)
var this; // SyntaxError: Unexpected token this

//Not Same
var firstname;
var firstName;
var FIRSTNAME;

//Good variable
var x = 3;
var score = 100;

//Not Good variable
var d; //Not Good - Need more comment

var elapsedTimeInDays; //OK

/* Naming Convention */
//camelCase
var firstName;

//snake_case
var first_name;

//PascalCase
var FirstName;

//typeHungarianCase
var strFirstName; //type + identifier
var $elem = document.getElementById('myId'); // DOM node
var observable$ = fromEvent(document, 'click'); // RxJs

/* ususally use camelCase for variable or function */
/* PascalCase for ClassName */