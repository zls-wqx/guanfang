document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('commentForm');
    const nameInput = document.getElementById('nameInput');
    const commentInput = document.getElementById('commentInput');
    const commentList = document.getElementById('commentList');

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const comment = commentInput.value.trim();

        if (name && comment) {
            const commentItem = document.createElement('div');
            commentItem.className = 'comment-item';
            commentItem.innerHTML = `<strong>${name}</strong>: <p>${comment}</p>`;
            commentList.appendChild(commentItem);

            nameInput.value = '';
            commentInput.value = '';
        }
    });
});
