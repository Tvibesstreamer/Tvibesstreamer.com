// clock
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);
}
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}
// end clock..

// theme black or white

function myTheme()
{
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// email confirmation

// hidding char
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function myFunction3() {
  var x = document.getElementById("myDIV3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction4() {
    var x = document.getElementById("myDIV4");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function myFunction5() {
  var x = document.getElementById("myDIV5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction6() {
    var x = document.getElementById("myDIV6");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction7() {
    var x = document.getElementById("myDIV7");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  function myFunction8() {
      var x = document.getElementById("myDIV8");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
  
  function myFunction9() {
    var x = document.getElementById("myDIV9");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  function myFunction10() {
      var x = document.getElementById("myDIV10");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
  
  function myFunction11() {
    var x = document.getElementById("myDIV11");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  function myFunction12() {
      var x = document.getElementById("myDIV12");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
    function myFunction13() {
      var x = document.getElementById("myDIV13");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
  
  // ********************

  function notNow (){
    alert("Is not working for now")
  }

  // Slideshow
  // let slideIndex = 0;
  // showSlides();
  
  // function showSlides() {
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides");
  //   let dots = document.getElementsByClassName("dot");
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";  
  //   }
  //   slideIndex++;
  //   if (slideIndex > slides.length) {slideIndex = 1}    
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex-1].style.display = "block";  
  //   dots[slideIndex-1].className += " active";
  //   setTimeout(showSlides, 5000); // Change image every 5 seconds
  // }  
  /**********************************/
  
  

//Increment click button for add to cart
  var cartCounter = 0;

  function incrementCart(){
      updateDisplay(++cartCounter);
  }
  
  function reset(){
      cartCounter = 0
      updateDisplay(cartCounter);
  }
  
  function updateDisplay(Counter){
      document.getElementById("Counter").innerHTML= Counter + " Cart";
  }
  
  /**************************
   * 
   * 
   * 
   * 
   * ************************************/ 

  // pop up text for cart...


  function cartPopupMessage (){
    alert("Due to because this is a practise website this cart button won't be working. thank you for understanding !")
  }