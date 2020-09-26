const musicas = require("../models/musicas.json")

const novaListaMusicas = musicas.map(musica => {
    const novaMusica = {
        id: musica.id,
        nome: musica.name,
        amostra : musica.preview_url,
        nome_album: musica.album.name,
        imagem: musica.album.url,
        artista: musica.artists.name
    }
    return novaMusica
})

const getMusicas = (request, response) => {
    console.log(request.url) //opcional
    response.status(200).send(novaListaMusicas) //tô usando o response direto pq não preciso requerer nada do usuário nesse caso
}

const getById = (request, response) => {
    const id = request.params.id
    const musicas = novaListaMusicas.find(item => item.id == id) 

    if (!musicas) {
        response.status(404).send({message: "essa música ainda não está no Reprogramafy"})
    } else {
        response.status(200).send(musicas)
    }
}

const listaArtistas = musicas.map(artista =>{
    return {
        id: artista.artists.id,
        nome: artista.artists.name
    }
})

let listaSemRepetir = []

listaArtistas.forEach(artista => {
    const encontrei = listaSemRepetir.find(item => item.id === artista.id)
    if(!encontrei){
        listaSemRepetir.push(artista)
    } 
})

const getArtistas = (request, response) => {
    response.status(200).send(listaSemRepetir)
}

const listaMusicas = musicas.map(musica => {
    const novaMusica = {
        id: musica.id,
        nome: musica.name,
        amostra: musica.preview_url,
        nome_album: musica.album.name,
        imagem: musica.album.url,
        artista: musica.artists.name,
        duracao: musica.duration_ms
    }
    return novaMusica
})

const getArtistaById = (request, response) => {
    const id = request.params.id
    const artista = listaArtistas.find(artista => artista.id == id)
    if (artista) {

        const musicas = listaMusicas.filter(item => item.artista == artista.nome)
    
        const novoArtista = {
            id: artista.id,
            nome: artista.nome,
            musicas: musicas
        }
        response.status(200).send(novoArtista)
    } else {
        response.status(404).send("Artista não encontrada!")
    }
}


module.exports = { 
    getMusicas,
    getById,
    getArtistas,
    getArtistaById   
}