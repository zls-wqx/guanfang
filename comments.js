if (document.getElementById('commentList')) {
        const nameInput = document.getElementById('nameInput');
        const commentInput = document.getElementById('commentInput');
        const submitComment = document.getElementById('submitComment');
        const commentList = document.getElementById('commentList');

        submitComment.addEventListener('click', () => {
            const name = nameInput.value.trim();
            const comment = commentInput.value.trim();
            if (name && comment) {
                addComment(name, comment);
                nameInput.value = '';
                commentInput.value = '';
            } else {
                alert('请填写您的名字和评论');
            }
        });

        function addComment(name, comment) {
            const commentItem = document.createElement('div');
            commentItem.classList.add('comment-item');
            commentItem.innerHTML = `<strong>${name}:</strong> ${comment}`;
            commentList.appendChild(commentItem);
        }
    }
});
