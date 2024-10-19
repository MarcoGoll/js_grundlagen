// ====================================================================================================
//      DOM - Manipulation
// ====================================================================================================

// document ist das Document von dem aus unser Script geladen wird
// node ist ...
// ACHTUNG js erst am Ende des HTML Documentes lesen, sonst findet er das HTML Element nicht, da es noch nicht existiert
let title = document.getElementById('websiteTitle');
console.log("Der innerText der Node mit der ID `websiteTitle`: " + title.innerHTML);
console.log(title);