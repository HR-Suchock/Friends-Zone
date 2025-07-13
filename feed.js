auth.onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "login.html";
  } else {
    loadPosts();
  }
});

function createPost() {
  const content = document.getElementById("postContent").value.trim();
  if (content === "") {
    alert("Post can't be empty.");
    return;
  }

  const user = auth.currentUser;

  db.collection("posts").add({
    userId: user.uid,
    content: content,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    document.getElementById("postContent").value = "";
    loadPosts();
  }).catch(error => {
    alert("Error posting: " + error.message);
  });
}

function loadPosts() {
  db.collection("posts")
    .orderBy("createdAt", "desc")
    .limit(20)
    .get()
    .then(snapshot => {
      const feed = document.getElementById("feed");
      feed.innerHTML = "";
      snapshot.forEach(doc => {
        const post = doc.data();
        const postDiv = document.createElement("div");
        postDiv.className = "post";
        postDiv.innerHTML = `
          <h4>👤 ${post.userId}</h4>
          <p>${post.content}</p>
          <small>${post.createdAt?.toDate().toLocaleString() || ""}</small>
        `;
        feed.appendChild(postDiv);
      });
    });
}
