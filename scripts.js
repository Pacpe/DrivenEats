let prt;
let bbd;
let sobr;



function pratosborda(elemento) {
    prt = elemento.innerHTML;

    const selecionar = document.querySelector(".selecionado");

    if (selecionar !== null) {
        selecionar.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");

    if (prt && bbd && sobr) {
        document.querySelector(".rodape").classList.add("verde");
    }    
}


function bebidasborda(elemento2) {
    bbd = elemento2.innerHTML;

    const selecionar = document.querySelector(".bebidas").querySelector(".selecionado");

    if (selecionar !== null) {
        selecionar.classList.remove("selecionado");
    }

    elemento2.classList.add("selecionado");

    if (prt && bbd && sobr) {
        document.querySelector(".rodape").classList.add("verde");
    }
}

function sobremesasborda(elemento3) {
    sobr = elemento3.innerHTML;

    const selecionar = document.querySelector(".sobremesas").querySelector(".selecionado");
    
    if (selecionar !== null) {
        selecionar.classList.remove("selecionado");
    }

    elemento3.classList.add("selecionado");

    if (prt && bbd && sobr) {
        document.querySelector(".rodape").classList.add("verde");
    }    
}






