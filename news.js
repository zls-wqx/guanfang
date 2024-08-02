document.addEventListener('DOMContentLoaded', function() {
    // 新闻功能
    if (document.getElementById('newsContainer')) {
        fetch('https://api.currentsapi.services/v1/latest-news?apiKey=YOUR_API_KEY')
            .then(response => response.json())
            .then(data => {
                const newsContainer = document.getElementById('newsContainer');
                data.news.forEach(newsItem => {
                    const newsElement = document.createElement('div');
                    newsElement.classList.add('news-item');
                    newsElement.innerHTML = `
                        <h3>${newsItem.title}</h3>
                        <p>${newsItem.description}</p>
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
