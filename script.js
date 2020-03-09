
function myFunction() {
    var random = Math.floor(Math.random() * 4);
    switch (random) {
        case 1:
            document.body.style.backgroundColor =  "blue";
            break;
         case 2:
            document.body.style.backgroundColor =  "red";
            break;
    
        default:
            document.body.style.backgroundColor =  "green";
            break;
    }
    

}