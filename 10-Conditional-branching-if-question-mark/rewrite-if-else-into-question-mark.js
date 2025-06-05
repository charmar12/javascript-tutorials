// Rewrite if-else using multiple ternary operators '?'.
let message = (login == 'Employee') ? 'Hello' : 
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    '';