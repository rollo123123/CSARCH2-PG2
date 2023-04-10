

function validateInput_hex(hex) {
    let errors2 = "";
    if (hex.length < 16) {
        errors2 += "Insufficient Hexadecimal Value\n";
    }

    if (errors2 !== "") {
        alert("The following errors occurred:\n" + errors2);
    }

    return true;
}

function validateInput(signBit, combiField, expoField, coefficient1, coefficient2, coefficient3 , coefficient4, coefficient5) {

    let errors = "";
    
        if (signBit.length < 1) {
        errors += "Insufficient digits at Sign Bit\n";
        }
    
        if (combiField.length < 5) {
        errors += "Insufficient digits at Combination Field\n";
        }
        
        if (expoField.length < 8) {
        errors += "Insufficient digits at Exponent Continuation\n";
        }
        
        if (coefficient1.length < 10) {
        errors += "Insufficient digits at the 1st Coefficient Continuation\n";
        }
        
        if (coefficient2.length < 10) {
        errors += "Insufficient digits at the 2nd Coefficient Continuation\n";
        }
        
        if (coefficient3.length < 10) {
        errors += "Insufficient digits at the 3rd Coefficient Continuation\n";
        }
        
        if (coefficient4.length < 10) {
        errors += "Insufficient digits at the 4th Coefficient Continuation\n";
        }
        
        if (coefficient5.length < 10) {
        errors += "Insufficient digits at the 5th Coefficient Continuation\n";
        }
    
    
    
    
    
    if (errors !== "") {
        alert("The following errors occurred:\n" + errors);
    }
        
    
    }