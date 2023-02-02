document.addEventListener("DOMContentLoaded", function () {
    fetch('analogies.json').then(function (response) {
        response.json().then(function (data) {
            data.forEach(function (element) {
                document.querySelector('.liste-analogies').innerHTML += "<section id="+ element.id +" class='partie'><h2>Si j’étais "+ element.analo + ", je serais " + element.valeur + ".</h2><img src=\""+ element.img +"\" alt = '"+ element.id + "' class='illu'><article>"+ element.txt +"</article><a href=" + element.down + " class=\"slidedown\"><img class='down' src=\"images/down.png\"/></img></a></section>";
            })
        })
    })
    //fenêtre modale
    var overlay = document.getElementById("overlay");

    document.querySelector("#show-modal-btn").addEventListener("click", () => {
        overlay.style.display = "block";
    });

    document.querySelector("#close-modal-btn").addEventListener("click", () => {
        overlay.style.display = "none";
    });

//mentions légales
/*  volet déroulant  */
document.querySelector('.volet-invisible').addEventListener('click', function (click) {
    //création du déroulement
    document.querySelector('.volet-invisible').animate([{ height: '12em' }], { duration: 800 })
    setTimeout(function () {
        window.scrollTo(0, document.body.clientHeight);
    }, 2);
    //fixation du déroulement(le volet invisible devient 100% visible)
    setTimeout(function () {
        document.querySelector('.volet-invisible').classList.replace('volet-invisible', 'volet-visible')
            ;
    }, 800);
});

document.querySelector('.volet-invisible').addEventListener('click', function (click) {
    //cachée le volet
    document.querySelector('.volet-visible').animate([{ height: '3em' }], { duration: 800 })
    //fixation du déroulement(le volet visible devient 100% invisible)
    setTimeout(function () {
        document.querySelector('.volet-visible').classList.replace('volet-visible', 'volet-invisible')
            ;
    }, 800);
});

//création d'une section quand on clique sur un button 
    document.querySelector('#sub').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#vous').innerHTML += "<section class='.partie'><h2>Si j’étais " + document.querySelector("#analog").value + ", je serais " + document.querySelector("#val").value + ".</h2><img src=" + document.querySelector("#imganalogie").value + " alt='' class='illu'><article class=\"justify\"> " + document.querySelector("#raisons").value + " </article></section>";
//API
        fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=enzo.fortes&courriel=" + document.querySelector("#mail").value + "&message=Si j'étais " + document.querySelector("#analog").value + ",je serais " + document.querySelector("#val").value + 
document.querySelector("#imganalogie").value + document.querySelector("#raisons").value).then(function (response) {
            response.json().then(function (data) {
                if (data.status == "success") {
                    document.querySelector("#message").innerHTML = "Votre message a bien été reçu";
                } else {
                    document.querySelector("#message").innerHTML = "Problème : votre message n'a pas été reçu";
                }
            })
        })
    });    
})



