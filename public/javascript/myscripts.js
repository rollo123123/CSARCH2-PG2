

function showDecimals() {
    document.getElementById("decimal-input").style.display = "flex";
    document.getElementById("decimal-input").style.flexDirection = "column";
    document.getElementById("decimal-input").style.justifyContent = "space-evenly";
 
  }
  
  function hideDecimals() {
    document.getElementById("decimal-input").style.display = "none";
   
  }

  window.onload = () => {
  

    const toggle = document.getElementById("toggle");
    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        alert("Group 2 \n\nABDON, AARON LENSMER\nCHUA, EDRIC JARVIS\nLIM, HYENNE AUDREY\nVELARDE, ROLLO DENZEL");
      }
    });


    let clearButton = document.getElementById("clear");
    let myForm = document.getElementById("input-form");

    clearButton.addEventListener("click", function() {
      myForm.reset();
    });


  




    let pressed = false
    const switch_button = document.getElementById('switch')
  
 


    switch_button.addEventListener('click', () => {
    if(pressed){
    document.getElementById("title").innerHTML =   '64 Binary Input';
    document.getElementById("converthex").style.display = "none";
    document.getElementById("convertbin").style.display = "block";
     document.getElementById("all-container").style.display = "block";
     document.getElementById("all-container").style.margin = "6em auto";
     document.getElementById("Hex-input").style.display = "none";
     document.getElementById("switch").innerHTML =   'Switch to Hexadecimal';
     myForm.reset();
    }else{
      document.getElementById("title").innerHTML = '16 Hex Input';
      document.getElementById("all-container").style.display = "none";
      document.getElementById("Hex-input").style.display = "flex";
      document.getElementById("convertbin").style.display = "none";
      document.getElementById("converthex").style.display = "block";
     document.getElementById("switch").innerHTML =   'Switch to Binary';
      myForm.reset();
    }
    pressed = !pressed
   }





 )}




  


