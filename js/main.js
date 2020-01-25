// this is a self-invoking anonymous function
//also called an IIFE
//also called a module

(() => {
   //print('some message');
   console.log("SVG Icon was clicked");

   //find the button element on the page by its ID with Javascript
   let theButtom = document.querySelector("#myButtom"),
       allSVGs = document.querySelectorAll(".svg");

   //log the id of the svg to the console when a user hovers on it
  function logSVG(){
    console.log(this.id);
  }

    // loop through the collection and apply our event handling to each element
    allSVGs.forEach(item => item.addEventListener('click', logSVG));
    //document.querySelector('h1').textContent = "Hello there from console";
})();
