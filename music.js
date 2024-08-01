document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const musicList = document.getElementById('musicList');
    const audioPlayer = document.getElementById('audioPlayer');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        searchMusic(query);
    });

    function searchMusic(query) {
        const url = `https://api.deezer.com/search?q=${encodeURIComponent(query)}&output=jsonp&callback=handleMusicSearchResults`;

        const script = document.createElement('script');
        script.src = url;
        document.body.appendChild(script);
    }

    window.handleMusicSearchResults = function(response) {
        musicList.innerHTML = '';

        response.data.forEach(track => {
            const songItem = document.createElement('div');
            songItem.classList.add('song-item');
            songItem.textContent = `${track.title} - ${track.artist.name}`;
            songItem.addEventListener('click', () => playMusic(track.preview));
            musicList.appendChild(songItem);
        });
    };

    function playMusic(url) {
        audioPlayer.src = url;
        audioPlayer.play();
    }
});
