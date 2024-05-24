// function printData()
// {
//     console.log("Data");
//     let a=25;
// }
// printData();
// conso.log(a);
// function sum(a,b)
// {
//     console.log(a+b);
// }
// function nthChar(s,i)
// {
//     return s.charAt(i-1);
// }
// var result=nthChar("Prasad",3);
// console.log(result);
// console.log(nthChar);
/*
Operators
1-Arithmatic operators
2-Logical
3-Relational
4-Unary
5-Assignment
6-Conditional / Ternary
*/

/*
    control statements or decision making statement s will decide control flow based on a condition.

    









*/

/*


// Q1. Area of Triangle:-
function area(a,b,c)
{
    var s=(a+b+c)/2;
    var area=Math.sqrt(s*(s-a)*(s-b)*(s-c))
    return area;
}
console.log("Area is: "+area(5,6,7))
*/


/*
Array: collection of items.
eg: ["raj",true,5]
always elements store with uniques values called indexes. array indexes starts with 0 until length-1.
array is non-primitive data type.
1- primitive stores single values where as non-primitive can store multiple values.
2- primitive compares the values, non-primitive compares address.
3- promitives are immutable, non-primitive are mutable.
push
pop
unshift
shift
splice
slice
sort
reverse
join


foreach
map
filter

reduce

every
some
find
findIndex


*/
/*
console.log("arrays")
let arr=[2,5,8,9,6,7,3]
console.log(arr.length)
console.log(arr.push(5),arr)
console.log(arr.splice(3,1,5,6,7,8),arr)
*/

// let arr=[1,2,3,4,5,]
// function print(arr)
// {
    // for(let i=0;i<arr.length;i++)
    //     {
    //         console.log(arr[i]);
    //     }

    // for(let x of arr)
    //     {
    //         console.log(x)
    //     }

    // for(let x in arr)
    //     {
    //         console.log(arr[x])
    //     }

    // arr.forEach(function(x) {
    //     console.log(x)
    // });

    

// }
// print(arr)
/*
let arr=["raj","ravi"].map(function(x)
{
    return x.split("").reverse().join("")
})
console.log(arr)

let str=["raj dixit","Deepak Rawat","Avanis dixit"].filter(function(x)
{
    return x.endsWith("dixit")
})
console.log(str)
*/


/*
remove duplicates in an array
[2,3,5,2,6,3]
res-> [2,3,5,6]


*/
/*
let arr=[2,3,5,2,6,3]
*/

/*
DOM:-

Everything you write in HTML and CSS is stored as a model in document object.
Document object stores html, css in tree structure called DOM-tree.

1. Selection:
    How to select elemens from DOM?

    document.getElementsByTagName('tagName'):Selects all elements of similar tagnames.
    document.getElementsByClassName(): Selects all elements with same class name.These two makes htmlcollection array.
    document.getElementById(): Select an element based on id.
    document.querySelector(): Select the first element satisfies the query
    document.querySelectorAll(): select all elements satisfies the query.
    
2. Manipulation:
    How to change values in DOM?

    innerText: used to grab the text inside the element but it also checks CSS. eg: in visibility hidden, element cannot be read by innerText.
    textContent: used to grab the text inside the element
    innerHTML: innerHTML reads the code and updates.

    value: value is to get the value in input box.

3. Creation:
    How to create an element?

    document.createElement(elements)
    element.append(elements)

*/

/*
Events:

event propagation: events will get trigger by default from innermost to outermost. This propagation is called as bubbling.

you can make this process reverse , this is called as capturing.

event delegation is a design pattern which makes logic works for parent instead of individual child items.


*/
/*
setInterval(function(){



},1000)

JS is synchronous and single threaded language
*/


