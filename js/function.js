//=================================================================================================
// function - ALLGEMEIN
//=================================================================================================
let discount = 50;
let price = 500;

// funktions definition (deklaration) ==> Wird einmalig gemacht
function calculatePrice() {
    console.log((price - discount) * 1.19);
}

// funktions call ==> Kann beliebig oft an unterschiedlichen Stellen aufgerufen werden
calculatePrice();

// HINWEIS: Ein Script wird allgemein einmal komplett gelesen und erst danach ausgeführt. Da es zunächst gelesen wird
//          ist die Reihenfolge der Functions-Definition (wird beim Lesen erkannt) und des Functions-Call (wird beim Ausführen aufgerufen) egal.
//          Das Funktioniert aber nur bei Funktions-definitionen. Variablen werden erst beim Ausführen angelegt und müssen daher zu Beginn
//          des Dokumentes definiert werden, bzw. vor dem verändern der Werte dieser Variablen. 