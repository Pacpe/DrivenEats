let prt;
let bbd;
let sobr;
let alimento;
let alimento2;
let alimento3;
let dinheiro;
let dinheiro2;
let dinheiro3;



function pratosborda(elemento, food, money) {
    prt = elemento.innerHTML;
    
    const selecionar = document.querySelector(".pratos").querySelector(".selecionado");

    if (selecionar !== null) {
        selecionar.classList.remove("selecionado");        
    }

    elemento.classList.add("selecionado");
    
    alimento = food;
    dinheiro = money;    
    

    if (prt && bbd && sobr) {
        document.querySelector(".esperadeselecao").classList.add("verde");
    }    
}


function bebidasborda(elemento2, food2, money2) {
    bbd = elemento2.innerHTML;

    const selecionar = document.querySelector(".bebidas").querySelector(".selecionado");

    if (selecionar !== null) {
        selecionar.classList.remove("selecionado");
    }

    elemento2.classList.add("selecionado");

    alimento2 = food2;
    dinheiro2 = money2;   

    if (prt && bbd && sobr) {
        document.querySelector(".esperadeselecao").classList.add("verde");
    }
}

function sobremesasborda(elemento3, food3, money3) {
    sobr = elemento3.innerHTML;
    
    const selecionar = document.querySelector(".sobremesas").querySelector(".selecionado");

    if (selecionar !== null) {
        selecionar.classList.remove("selecionado");
    }

    elemento3.classList.add("selecionado");

    alimento3 = food3;
    dinheiro3 = money3;  

    if (prt && bbd && sobr) {
        document.querySelector(".esperadeselecao").classList.add("verde");
        document.querySelector(".botaofinal").innerHTML = `Fechar pedido`;
        
    }    
}

function whatsapp() {
    let ValorTotal = dinheiro + dinheiro2 + dinheiro3;    
    let texto = (`Olá, gostaria de fazer o pedido:
    - Prato: ${alimento}
    - Bebida: ${alimento2}
    - Sobremesa: ${alimento3}
    Total: R$ ${ValorTotal.toFixed(2)}`);   
    let frase = encodeURIComponent(texto);
    window.location.href = (`https://wa.me/?text=${frase}`);    
}


