

const form = document.getElementById('songForm');
const list = document.getElementById('songList');
const submitBtn = document.getElementById('submitBtn');

// if not exist in localStorage get empty array else
//get json text and convert it to object json
let songs = JSON.parse(localStorage.getItem('songs')) || [];

//user click the Add button 
form.addEventListener('submit', (e) => {
    // dont submit the form to the server yet let me handle it here 
    e.preventDefault();

    // read forms data
    const title = document.getElementById('title').value;
    const url = document.getElementById('url').value;

    //crate json based on json and url title
    const song = {
        id: Date.now(),  // Unique ID
        title: title,
        url: url,
        dateAdded: Date.now()
    };


    songs.push(song);

    //TO DO SAVE  AND RERENDER 
    saveAndRender();
    form.reset();
});



function saveAndRender() {

    localStorage.setItem('songs', JSON.stringify(songs));


    renderSongs(songs);
}


function renderSongs() {
    list.innerHTML = ''; // Clear current list

    songs.forEach(song => {
        // Create table row
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${song.title}</td>
            <td><a href="${song.url}" target="_blank" class="text-info">Watch</a></td>
            <td class="text-end">
                <button class="btn btn-sm btn-warning me-2" onclick="editSong(${song.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteSong(${song.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        list.appendChild(row);
    });
}

function deleteSong(id) {
    if (confirm('Are you sure?')) {
        // Filter out the song with the matching ID
        songs = songs.filter(song => song.id !== id);
        saveAndRender();
    }
}
