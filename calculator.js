function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function calculateResult() {
    try {
        let currentDisplay = document.getElementById('display').value;
        
        // Handle power operations (^)
        if (currentDisplay.includes('^')) {
            currentDisplay = currentDisplay.replace(/\^/g, '**');
        }

        // Evaluate the expression
        let result = eval(currentDisplay);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
