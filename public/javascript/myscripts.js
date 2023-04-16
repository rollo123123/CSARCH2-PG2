

function showDecimals() {
    document.getElementById("decimal-input").style.display = "flex";
    document.getElementById("decimal-input").style.flexDirection = "column";
    document.getElementById("decimal-input").style.justifyContent = "space-evenly";
 
  }
  
  function hideDecimals() {
    document.getElementById("decimal-input").style.display = "none";
   
  }

  function copyClipboard() {
    const divElement = document.getElementById('output');

     //Retrieve the text content of the div element
    const divValue = divElement.textContent;

    // Create a temporary textarea element to store the value
    const tempElement = document.createElement('textarea');
    tempElement.value = divValue;

     //Append the temporary element to the document body
    document.body.appendChild(tempElement);

     //Select the text content in the temporary element
    tempElement.select();

     //Copy the selected text to the clipboard
    document.execCommand('copy');

     //Remove the temporary element from the document body
    document.body.removeChild(tempElement);

    const divContent = document.getElementById("output").innerHTML;
    const blob = new Blob([divContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Result.txt";
    document.body.appendChild(link);
    link.click();

    URL.revokeObjectURL(url);


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




  


