window.onload= function (){
    let squares= document.querySelectorAll("#board div");
    for (let box=0; box<squares.length; box++) {
        squares[box].classList.add("square");
    }
}



/*let squares= document.getElementsByClassName('.square');
console.log(squares);
squares.forEach(function(elem, index) {
    elem.addEventListener('mouseover', 
function(e) {
    e.target.classList.add('active');
    });
    elem.addEventListener('mouseout', 
function(e) {
        e.target.classList.remove('active');
    });
});    
*/
