// ====================================================================================================
//      DOM - Manipulation
// ====================================================================================================


// document ist das Document von dem aus unser Script geladen wird
// node ist ...
// ACHTUNG js erst am Ende des HTML Documentes lesen, sonst findet er das HTML Element nicht, da es noch nicht existiert
let title = document.getElementById('websiteTitle');
console.log("Der innerText der Node mit der ID `websiteTitle`: " + title.innerText);
console.dir(title);

// Titel ändern
title.innerHTML = "Neuer Titel"


// .innerHTML
document.getElementById('test_div').innerText = '<h2>Ich bin eine h2</h2>'; // <h2>Ich bin eine h2</h2>
document.getElementById('test_div').innerHTML = '<h2>Ich bin eine h2</h2>'; // Ich bin eine h2







// =======================================================
//      DOM - Manipulation - .classList.add
// =======================================================
title.classList.add("h1class");


// =======================================================
//      DOM - Manipulation - .classList.toogle
// =======================================================
function toggleDisplayNoneByID(id) {
    document.getElementById(id).classList.toggle("d_none");
}





// =======================================================
//      DOM - Manipulation - .setAttribute() & value
// =======================================================
let myDragDiv = document.getElementById('dragDrop');
myDragDiv.style.width = "200px";
myDragDiv.style.height = "200px";
myDragDiv.style.backgroundColor = "tomato";
myDragDiv.style.cursor = "pointer";
myDragDiv.setAttribute("draggable", "true");