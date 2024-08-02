document.addEventListener('DOMContentLoaded', function() {
    // 新闻功能
    if (document.getElementById('newsContainer')) {
        const apiKey = 'YOUR_TOUTIAO_API_KEY';
        const apiUrl = `https://api.toutiaoapi.com/news/?apikey=${apiKey}&category=news`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const newsContainer = document.getElementById('newsContainer');
                data.data.forEach(newsItem => {
                    const newsElement = document.createElement('div');
                    newsElement.classList.add('news-item');
                    newsElement.innerHTML = `
                        <h3>${newsItem.title}</h3>
                        <p>${newsItem.abstract}</p>
                        <a href="${newsItem.url}" target="_blank">阅读更多</a>
                    `;
                    newsContainer.appendChild(newsElement);
                });
            })
            .catch(error => {
                console.error('Error fetching news:', error);
            });
    }
});
