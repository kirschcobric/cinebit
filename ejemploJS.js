var ingredientes = ['Agua', 'Almendra', 'Panela'];

function ingredientesAlm() {
    console.log(ingredientes);
}

function nuevoIngrediente(ing) {
    ingredientes.push(ing)
    ingredientesAlm();
}

function cambiarIngrediente(posicion, cambioIngrediente) {
    ingredientes[posicion] = cambioIngrediente;
    ingredientesAlm();

}

function eliminarIngrediente(posicion) {
    ingredientes.splice(posicion, 1);
    ingredientesAlm();
}