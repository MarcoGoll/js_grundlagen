function init() {
    debuggerOutput('A');
    debuggerOutput('A');
    testOne();
    debuggerOutput('A');
    debuggerOutput('A');
}

function testOne() {
    debuggerOutput('B');
    debuggerOutput('B');
    testTwo();
    debuggerOutput('B');
    debuggerOutput('B');
}

function testTwo() {
    debuggerOutput('C');
    debuggerOutput('C');
    debuggerOutput('C');
}

function debuggerOutput(text) {
    let debuggerLogRef = document.getElementById('debugger_log');
    debuggerLogRef.innerHTML = text;
}
