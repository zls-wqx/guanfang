  if (document.getElementById('musicList')) {
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');
        const musicList = document.getElementById('musicList');
        const audioPlayer = document.getElementById('audioPlayer');

        searchButton.addEventListener('click', () => {
            const query = searchInput.value;
            searchMusic(query);
        });

        function searchMusic(query) {
            const url = `https://api.lolimi.cn/API/yiny/?word=${encodeURIComponent(query)}&n=1`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    musicList.innerHTML = '';
                    data.data.forEach(track => {
                        const songItem = document.createElement('div');
                        songItem.classList.add('song-item');
                        songItem.textContent = `${track.title} - ${track.author}`;
                        songItem.addEventListener('click', () => playMusic(track.url));
                        musicList.appendChild(songItem);
                    });
                })
                .catch(error => {
                    console.error('Error fetching music:', error);
                });
        }

        function playMusic(url) {
            audioPlayer.src = url;
            audioPlayer.play();
        }
    }
});
