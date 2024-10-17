class APIManager {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async obtenerPokemones() {
    try {
      const response = await fetch(`${this.baseURL}/pokemon`);
      // console.log(response);

      if (!response.ok) {
        throw new Error("No se pudo obtener el listado de pokemones");
      }
      const data = await response.json();
      // console.log("Data en JSON", data);
      return data.results;
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      return [];
    }
  }
}

async function mostrarPokemones(apiManager) {
  const listado = await apiManager.obtenerPokemones();
  const fila = document.getElementById("row");

  if (listado.length) {
    listado.forEach((pokemon) => {
      const item = document.createElement("div");
      item.className = "column";

      const card = document.createElement("div");
      card.className = "card";

      const title = document.createElement("h3");
      title.innerHTML = pokemon.name;

      const boton = document.createElement("button");
      boton.innerHTML = "Más info";
      boton.addEventListener("click", () => handleMasInfo(pokemon.url));

      //TODO
      card.appendChild(title);
      card.appendChild(boton);
      item.appendChild(card);
      fila.appendChild(item);
    });
  }
}

//DEFINIR FUNCIÓN PARA OBTENER DETALLE DE POKEMONES
async function handleMasInfo(url) {
  //A cual URL realizar la petición?
  // Realizar la petición
  // Imprimir en consola en resultado
}

window.onload = () => {
  const apiManager = new APIManager("https://pokeapi.co/api/v2");
  //TODO llamar alguna función para obtener el listado de pokemones
  mostrarPokemones(apiManager);
};
