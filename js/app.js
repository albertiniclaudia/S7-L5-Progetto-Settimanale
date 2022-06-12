fetch("../users.json")
.then(function(info){
  return info.json();
}) 

.then(function(datiUtenti){
  console.log(datiUtenti[0]);
  console.log(datiUtenti[1]);
  profili(datiUtenti);
})

function profili(data){
    data.forEach(ele => {
        let container = document.querySelector('.container');
        let utente = document.createElement('div');
        let div = document.createElement('div');
        div.innerHTML = ('<img src="' + ele.profileURL 
                        + '"class="img-fluid img-thumbnail w-50"></img> <div class="border w-50"> <h5 class="nome text-center text-decoration-underline">'
                        + ele.username +
                        '</h5>'
                        + '<dl><dt class="">Nome:</dt>' + ele.firstName
                        + '<dt class="">Cognome:</dt>' + ele.lastName
                        + '<dt class="">Gender:</dt>' + ele.gender
                        + '<dt class="">E-mail:</dt>' + ele.email + '</dl></div>');      
        container.appendChild(utente);
        utente.appendChild(div);
    });
}

/* function infoUtente(users){
    users.forEach(ele => {
        let informazioni = document.createElement('.info-utenti');
        div.innerHTML = ( '<p>Username:</p>' + ele.username + ' '
                        + '<p>Gender:</p>' + ele.gender + ' '
                        + '<p>E-mail:</p>' + ele.email + ' ');
        informazioni.appendChild(div);
    });
} */

{/* <a class="btn btn-outline-warning onclick="infoUtente()">Maggiori informazioni</a></div>' */}