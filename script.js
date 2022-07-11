function createCardPaintgs(paintingsitens){
    const listItens = document.querySelector(".paintings__itens")
    for(let i = 0; i < paintingsitens.length; i++){
        let tagLi = document.createElement("li")

        tagLi.setAttribute("class", "paintings__itens__cards")

        let tagImg = document.createElement("img")
        tagImg.src = paintingsitens[i].foto;
        tagImg.alt = paintingsitens[i].foto;

        let tagNome = document.createElement("p")
        tagNome.innerText = paintingsitens[i].nome;

        let tagValor = document.createElement("span")
        tagValor.innerText = paintingsitens[i].preco;

        listItens.append(tagLi)
        tagLi.append(tagImg, tagNome, tagValor)
    }
}

createCardPaintgs(produtoslista)

function createCardActions(actionItens){
    const listItens = document.querySelector(".actions__itens")
    for(let i = 0; i < actionItens.length; i++){
        let tagLi= document.createElement("li");
        tagLi.setAttribute("class", "paintings__itens__cards");

        let tagImg = document.createElement("img");
        tagImg.src = actionItens[i].foto;
        tagImg.scr = actionItens[i].foto;

        tagNome = document.createElement("p");
        tagNome.innerText = actionItens[i].nome;

        tagValor = document.createElement("span");
        tagValor.innerText = actionItens[i].preco;

        listItens.append(tagLi)
        tagLi.append(tagImg, tagNome, tagValor);
    }
}

createCardActions(produtoslistaAction)
