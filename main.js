// conditionals oppgave

const userName = "Tom";
const userAge = 18;

let userIsAdmin = true;
let userIsLoggedIn = false;
let userIsBlocked = false;

let goToPage = "";

/*
Lag en conditional som sjekker om userName eksisterer, at brukeren er over 18, og at user ikke er blocked.
Hvis en eller flere av disse ikke oppfylles, skal du console.log() en feilmelding.
Hvis alle kriterier er oppfylt, sett variabelen goToPage til "/home", og endre userIsLoggedIn til true.
Hvis brukeren er admin, endre variabelen goToPage til "/admin" istedenfor "/home".

 
console.log(goToPage) til slutt for å se at bruker har blitt sendt til rett side.

endre på verdiene i variablene for å se at din conditional kan håndtere alle cases
*/

if (userName && userAge > 17 && userIsBlocked === false)

{    
    if (userIsAdmin)
    {
         goToPage = "/admin"
         userIsLoggedIn = true
      } else {
         goToPage = "/home"
         userIsLoggedIn = true
      } 
      
      }  else {
         console.log("Access Denied")
    }


console.log(goToPage)

/*  const userName = "";
    const userAge = 18;

    let userIsAdmin = false;
    let userIsLoggedIn = false;
    let userIsBlocked = false;

    let goToPage = "";
*/