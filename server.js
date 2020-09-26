const app = require('./src/app')

const PORT = 5001

app.listen(PORT, function(){
    console.log(`Nosso app está rodando na porta ${PORT}`);
})


/* const musicas = [{
    "id": 1,
    "name": "Evidências",
    "duration_ms": 279280,
    "preview_url": "https://p.scdn.co/mp3-preview/3e4f45a788d7ecb0e87a32bf57119cd8124c8710?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
    "album": {
      "id": 154,
      "name": "Do Tamanho Do Nosso Amor",
      "release_date": "2013-01-01",
      "total_tracks": 14,
      "url": "https://i.scdn.co/image/ab67616d00001e0252b5ab856085fe47ccec3cce"
    },
    "artists": {
      "id": "7gfkYbxpguEc9bm6m8TpAr",
      "name": "Chitãozinho & Xororó"
    }
}]

//console.log(musicas)
listaNovaMusica = [];

for (let i = 0; i < musicas.length; i++){
    //atribundo a musica que eu vou percorrer a variavel musica
    let musica = musicas[i];
    //criando o novo objeto com as chaves que eu vou precisar e pegando os dados da musica que eu tô percorrendo
    const novaMusica = {
        id: musica.id,
        nome: musica.name,
        amostra : musica.preview_url,
        nome_album: musica.album.name,
        imagem: musica.album.url,
        artista: musica.artists.name
    }
    //colocarndo a nova musica na lista noova musica
    //console.log(novaMusica)
    //listaNovaMusica.push(novaMusica)
}

//console.log(listaNovaMusica)

//map cria novo array, uma nova lista

const lista = musicas.map(itemMusica => {
    const novaMusica = {
        id: itemMusica.id,
        nome: itemMusica.name,
        amostra : itemMusica.preview_url,
        nome_album: itemMusica.album.name,
        imagem: itemMusica.album.url,
        artista: itemMusica.artists.name
    }

    return itemMusica
})

console.log(lista) */


/* const musicas = [{
    "id": 1,
    "name": "Evidências",
    "duration_ms": 279280,
    "preview_url": "https://p.scdn.co/mp3-preview/3e4f45a788d7ecb0e87a32bf57119cd8124c8710?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
    "album": {
        "id": 154,
        "name": "Do Tamanho Do Nosso Amor",
        "release_date": "2013-01-01",
        "total_tracks": 14,
        "url": "https://i.scdn.co/image/ab67616d00001e0252b5ab856085fe47ccec3cce"
    },
    "artists": {
        "id": "7gfkYbxpguEc9bm6m8TpAr",
        "name": "Chitãozinho & Xororó"
    }
}]

// console.log(musicas);
let listaNovaMusica = [];

for(let i = 0; i < musicas.length; i++){
    let musica = musicas[i];

    const novaMusica = {
        id: musica.id,
        nome: musica.name,
        amostra: musica.preview_url,
        nome_album: musica.album.name,
        imagem: musica.album.url,
        artista: musica.artists.name
    }

    listaNovaMusica.push(novaMusica)
}
// console.log(listaNovaMusica)

//map cria novo array, uma nova lista

const lista = musicas.map(musica => {
    
    const novaMusica = {
        id: musica.id,
        nome: musica.name,
        amostra: musica.preview_url,
        nome_album: musica.album.name,
        imagem: musica.album.url,
        artista: musica.artists.name
    }

    return novaMusica
})

console.log(lista) */