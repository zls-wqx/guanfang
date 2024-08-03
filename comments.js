const commentForm = document.getElementById('commentForm');
    const nameInput = document.getElementById('nameInput');
    const commentInput = document.getElementById('commentInput');
    const commentList = document.getElementById('commentList');

    function loadComments() {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        commentList.innerHTML = '';
        comments.forEach(comment => {
            const commentItem = document.createElement('div');
            commentItem.classList.add('comment-item');
            commentItem.innerHTML = `<strong>${comment.name}</strong><p>${comment.text}</p>`;
            commentList.appendChild(commentItem);
        });
    }

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = nameInput.value.trim();
        const text = commentInput.value.trim();
        if (name && text) {
            const comments = JSON.parse(localStorage.getItem('comments')) || [];
            comments.push({ name, text });
            localStorage.setItem('comments', JSON.stringify(comments));
            nameInput.value = '';
            commentInput.value = '';
            loadComments();
        }
    });

    loadComments();
});
