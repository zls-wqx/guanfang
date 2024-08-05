document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('downloadButton');
    const videoUrlInput = document.getElementById('videoUrl');
    const messageDiv = document.getElementById('message');

    downloadButton.addEventListener('click', function() {
        const videoUrl = videoUrlInput.value.trim();

        if (!videoUrl) {
            messageDiv.textContent = '请输入视频链接。';
            messageDiv.classList.add('error');
            return;
        }

        messageDiv.textContent = '正在处理，请稍候...';
        messageDiv.classList.remove('error');

        // 替换为实际的API调用地址
        const apiUrl = `https://api.lolimi.cn/API/yiny/?word=${encodeURIComponent(videoUrl)}&n=1`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data && data[0] && data[0].url) {
                    const downloadLink = document.createElement('a');
                    downloadLink.href = data[0].url;
                    downloadLink.download = 'video.mp4';
                    downloadLink.textContent = '点击这里下载视频';
                    downloadLink.classList.add('btn');

                    messageDiv.textContent = '';
                    messageDiv.appendChild(downloadLink);
                } else {
                    messageDiv.textContent = '下载失败，请检查链接是否有效。';
                    messageDiv.classList.add('error');
                }
            })
            .catch(error => {
                messageDiv.textContent = `请求失败: ${error.message}`;
                messageDiv.classList.add('error');
            });
    });
});
