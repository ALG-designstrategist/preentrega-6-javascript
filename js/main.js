// ==========================================================
// SIMULADOR: CATÁLOGO CON FUNCIONES DE ORDEN SUPERIOR
// ==========================================================

// 1. Clase constructora (4+ propiedades)
class Videojuego {
  constructor(id, nombre, precio, stock, categoria) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.categoria = categoria;
  }
}

// 2. Base de datos con instancias de la clase
const catalogo = [
  new Videojuego(1, "Dead by Daylight", 20, 12, "Terror"),
  new Videojuego(2, "Killing Floor 2", 30, 8, "Acción"),
  new Videojuego(3, "Left 4 Dead 2", 10, 0, "Acción"),
  new Videojuego(4, "Resident Evil 4", 45, 5, "Terror"),
  new Videojuego(5, "Doom Eternal", 40, 7, "Shooter")
];

console.log("=== CATÁLOGO COMPLETO ===");
console.table(catalogo);

// 3. Interacción con el usuario mediante prompt
const opcionUsuario = prompt(
  "Selecciona una acción:\n" +
  "1 - Buscar juego por nombre puntual (find)\n" +
  "2 - Filtrar por categoría (filter)\n" +
  "3 - Ver presupuesto total del inventario (reduce)\n" +
  "4 - Generar lista formateada de precios (map)"
);

// 4. MÉTODOS DE BÚSQUEDA

// Método Búsqueda 1: .find() para capturar un objeto específico
if (opcionUsuario === "1") {
  const nombreBuscado = prompt("Ingresa el nombre del juego que buscas:");
  const juegoEncontrado = catalogo.find(
    juego => juego.nombre.toLowerCase() === (nombreBuscado || "").trim().toLowerCase()
  );

  if (juegoEncontrado) {
    console.log("🎯 Juego encontrado con .find():", juegoEncontrado);
    alert(`Juego encontrado: ${juegoEncontrado.nombre} | Precio: $${juegoEncontrado.precio} | Stock: ${juegoEncontrado.stock}`);
  } else {
    console.log("❌ No se encontró ningún juego con ese nombre.");
    alert("No se encontró el juego buscado.");
  }
}

// Método Búsqueda 2: .filter() para obtener una colección filtrada
else if (opcionUsuario === "2") {
  const categoriaBuscada = prompt("Ingresa categoría (Terror, Acción, Shooter):");
  const juegosFiltrados = catalogo.filter(
    juego => juego.categoria.toLowerCase() === (categoriaBuscada || "").trim().toLowerCase()
  );

  console.log(`📋 Resultados de la categoría "${categoriaBuscada}" con .filter():`);
  console.table(juegosFiltrados);
  alert(`Se encontraron ${juegosFiltrados.length} juegos en la categoría "${categoriaBuscada}". Revisa la consola.`);
}

// 5. MÉTODOS DE TRANSFORMACIÓN Y CÁLCULO

// Método de Cálculo: .reduce() para acumular el valor total del inventario en stock
else if (opcionUsuario === "3") {
  const valorTotalInventario = catalogo.reduce((acumulador, juego) => {
    return acumulador + (juego.precio * juego.stock);
  }, 0);

  console.log(`💰 Valor total del inventario calculado con .reduce(): $${valorTotalInventario}`);
  alert(`El valor total del inventario en stock es: $${valorTotalInventario}`);
}

// Método Transformación: .map() para transformar la información original en un formato resumido
else if (opcionUsuario === "4") {
  const listaResumen = catalogo.map(juego => {
    return `Título: ${juego.nombre.toUpperCase()} - Precio Final: $${juego.precio}`;
  });

  console.log("🏷️ Catálogo formateado con .map():", listaResumen);
  alert("Lista de precios generada en consola con .map().");
}

else {
  alert("Opción no válida o cancelada. Revisa la consola para ver las pruebas automáticas.");
}

// Ejecución general para asegurar que la consola siempre muestre los resultados
console.log("\n=== PRUEBAS AUTOMÁTICAS DE LA RÚBRICA ===");
console.log("1. find() ->", catalogo.find(j => j.id === 2));
console.log("2. filter() (Disponibles en stock) ->", catalogo.filter(j => j.stock > 0));
console.log("3. map() (Nombres en mayúsculas) ->", catalogo.map(j => j.nombre.toUpperCase()));
console.log("4. reduce() (Total stock unidades) ->", catalogo.reduce((acc, j) => acc + j.stock, 0));