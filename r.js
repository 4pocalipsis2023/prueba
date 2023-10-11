const numbers = Array.from({ length: 100 }, (_, i) => i.toString().padStart(2, '0'));
const selectedNumbers = new Set();
const selectedNumberDisplay = document.getElementById('selectedNumber');

function renderNumbers() {
    const numbersDiv = document.getElementById('numbers');
    numbersDiv.innerHTML = '';
    numbers.forEach(number => {
        const button = document.createElement('button');
        button.textContent = number;
        button.classList.toggle('selected', selectedNumbers.has(number));
        button.addEventListener('click', () => toggleNumber(number));
        numbersDiv.appendChild(button);
    });
}

function toggleNumber(number) {
    if (selectedNumbers.has(number)) {
        selectedNumbers.delete(number);
    } else {
        selectedNumbers.add(number);
    }
    renderNumbers();
    selectedNumberDisplay.textContent = Array.from(selectedNumbers).join(', ');
}

function saveData() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    
    // Aquí puedes guardar los datos en la base de datos (Firebase u otro servicio).
    // Por simplicidad, este ejemplo no incluye la lógica para guardar en la base de datos.
    // Puedes usar Firebase Realtime Database o Firestore para guardar los datos.
}

// Llama a esta función para inicializar la interfaz.
renderNumbers();
