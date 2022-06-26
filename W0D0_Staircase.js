/*
This is a staircase of size n=4:
   #
  ##
 ###
####
Its base and height are both equal to n. 
It is drawn using # symbols and spaces. 
The last line is not preceded by any spaces.
The staircase is right-aligned.
Write a program that prints a staircase of size n.
*/

function staircase(n) {
    let space = " ";
    let hash = "#";
    for(let i=1; i<=n; i++) {
        console.log(space.repeat(n-i) + hash.repeat(i));
    }
}

staircase(4);
staircase(1);
staircase(20);