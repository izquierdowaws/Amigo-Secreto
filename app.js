document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('amigo');
    const nameList = document.getElementById('listaAmigos');
    const result = document.getElementById('resultado');

    const names = [];

    // Add Name Functionality
    window.agregarAmigo = function() {
        const name = nameInput.value.trim();

        if (name === '') {
            alert('Por favor, ingresa un nombre válido.');
            return;
        }

        names.push(name);
        updateNameList();
        nameInput.value = '';
    };

    // Update Name List Functionality
    function updateNameList() {
        nameList.innerHTML = '';
        names.forEach((name, index) => {
            const listItem = document.createElement('li');

            const nameSpan = document.createElement('span');
            nameSpan.textContent = name;
            nameSpan.style.marginRight = '10px';

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Eliminar';
            removeButton.className = 'remove-button';
            removeButton.onclick = () => eliminarAmigo(index);

            listItem.appendChild(nameSpan);
            listItem.appendChild(removeButton);
            nameList.appendChild(listItem);
        });
    }

    // Remove Name Functionality
    window.eliminarAmigo = function(index) {
        names.splice(index, 1);
        updateNameList();
    };

    // Draw Secret Friend Functionality
    window.sortearAmigo = function() {
        if (names.length === 0) {
            alert('La lista está vacía. Por favor, adiciona al menos un nombre.');
            return;
        }

        const randomIndex = Math.floor(Math.random() * names.length);
        const secretFriend = names[randomIndex];

        // Clear the list and display the result
        nameList.innerHTML = '';
        result.innerHTML = `<li>El amigo secreto es: <strong>${secretFriend}</strong></li>`;
    };
});
