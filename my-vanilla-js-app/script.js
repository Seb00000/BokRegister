class Bok {
    constructor(navn, utgivelsesår, SentraltTema) {
        this.navn = navn;
        this.utgivelsesår = utgivelsesår;
        this.SentraltTema = SentraltTema;
    }
    logg () {
        return `Navn/utgivelsesår/sentralttema ${this.navn} / ${this.utgivelsesår} / ${this.SentraltTema}`;
    }
    alderavbok () {
        return `${2025-this.utgivelsesår}`
    }
}
let i = 0

function RegistrerNyBok() {
    const navnPåBok = document.getElementById("navnPåBok").value;
    const utgivelsesårPåBok = document.getElementById("utgivelsesårPåBok").value;
    const sentraltTemaIBok = document.getElementById("sentraltTemaIBok").value;


    /* Opptaterere localstorage  */
    const bok = new Bok(navnPåBok, utgivelsesårPåBok, sentraltTemaIBok);
    localStorage.setItem(i, JSON.stringify(bok))


    /* legg til på display */
    console.log(localStorage.getItem("boker"))
    console.log(Object.values(bok)[0])

    let div = document.createElement("div")
        div.innerHTML=  `${Object.values(bok)[0]}, ${Object.values(bok)[1]} , ${Object.values(bok)[2]}`

    let slettKnapp = document.createElement("button")
        slettKnapp.addEventListener("click", slettElement)
        slettKnapp.innerHTML = "Slettelement"
        slettKnapp.id=i

    i++

    
    div.appendChild(slettKnapp)
    let visning = document.getElementById("visningsvindu")
    visning.appendChild(div)

}

function slettElement (event) {
    event.target.parentNode.remove()
    localStorage.removeItem(event.target.id)
}


/* Opptatere display */

/* let visningsvindu = document.getElementById("visningsvindu")
 */
/* kjør en gang på oppstart  */

/* Hente obj fra localstorage */ /* const StoredArray = JSON.parse(localStorage.getItem("bøker")) */



