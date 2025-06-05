let login = prompt("Who's there?");

if (login === "Admin"){
    
    let password = prompt('Password?');
   
    if (password === "TheMaster"){
      alert( 'Welcome!' );
    } else if (password === "" || password === null) {
      alert ( 'Cancelled.' );
    } else {
      alert('Wrong password.');
    }

} else if (login === "" || login === null) {
  alert('Cancelled.');
} else {
  alert( "I don't know you." );
}