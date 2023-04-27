var IsToggle = true;

function ToggleGradient() {

    IsToggle = IsToggle==true? false : true;
    /*console.log(IsToggle)*/
     
    let gradient = document.getElementById("gradient");

    if (IsToggle) {
        gradient.style.background = 'linear-gradient(90deg, rgba(158,183,240,1) 0%, rgba(197,210,241,1) 100%)';
        
    }
    else {
        gradient.style.background = 'rgb(158,183,240)';
    }
    
 }
 