var quantidade = document.getElementById('quantidade');
quantidade.addEventListener("keyup", () => {
    pegaPokemon(quantidade.value);
});
pegaPokemon(20);

function pegaPokemon(quantidade) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=' + quantidade)
    .then(response => response.json())
    .then(allpokemon => {

        var pokemons = [];

        allpokemon.results.map((val) => {
            

            fetch(val.url)
            .then(response => response.json())
            .then(pokemonSingle => {
                pokemons.push({nome:val.name, img:pokemonSingle.sprites.front_default}); 

                if (pokemons.length == Number(quantidade)) {

                    var pokemoboxes = document.querySelector('.pokemon-boxes');
                    pokemoboxes.innerHTML = '';

                    pokemons.map(function(val){
                        pokemoboxes.innerHTML += `
                        <div class="pokemon-box">
                            <img src="${val.img}" alt="${val.nome}">
                            <h3>${val.nome}</h3>
                        </div>
                        `
                    })

                }
            })


        })

        pokemons.map((val) => {
            console.log(val.nome);

        })

    })
    
}