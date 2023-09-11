const poemList = document.getElementById('poem-list');
const fetchButton = document.getElementById('fetch-button');

// Function to fetch and display poem lines
function fetchPoemLines() {
    fetch('https://poetrydb.org/title/Ozymandias/lines.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            poemList.innerHTML = '';

            // Iterate through the poem lines and extract the text
            data[0].lines.forEach(line => {
                const listItem = document.createElement('li');
                listItem.textContent = line;
                poemList.appendChild(listItem);
            });

            // Show the poem lines
            poemList.style.display = 'block';
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Add a click event listener to the fetch button
fetchButton.addEventListener('click', fetchPoemLines);

// Hide the poem lines initially
poemList.style.display = 'none';
