let count = 0;

function init() {
    testOne();
    debuggerOutput('Init');
    testOne();
    testTwo('testTwo');
    testOne();
}

function testOne() {
    debuggerOutput('testOne');
}

function testTwo(text) {
    debuggerOutput(text);
    testOne();
}

function debuggerOutput(text) {
    count++; // count++; ist eine verkürzte Schreibweise für ==> count = count+1;
    let debuggerLogRef = document.getElementById('debugger_log');
    debuggerLogRef.innerHTML = count + text;
}

// += ist eine verkürzte Schreibweise für ==> debuggerLogRef.innerHTML = debuggerLogRef.innerHTML + " " + text + count;

console.log("Ausgabe einer globalen Variablen aus einem anderen Script (meinName): " + meinName);

// WEITERE ÜBUNG

function anothertestOne() {
    debuggerOutput('testOne');
}