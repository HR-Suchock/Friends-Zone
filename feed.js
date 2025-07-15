auth.onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "login.html";
  } else {
    loadPosts();
  }
});

function createPost() {
  const content = document.getElementById("postContent").value.trim();
  if (content === "") return alert("Post cannot be empty!");

  db.collection("posts").add({
    content,
    userId: auth.currentUser.uid,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    document.getElementById("postContent").value = "";
    loadPosts();
  }).catch(e => alert("Failed to post: " + e.message));
}

function loadPosts() {
  db.collection("posts").orderBy("createdAt", "desc").limit(20).get()
    .then(snapshot => {
      const feed = document.getElementById("feed");
      feed.innerHTML = "";
      snapshot.forEach(doc => {
        const post = doc.data();
        const div = document.createElement("div");
        div.className = "post";
        div.innerHTML = `
          <p>${post.content}</p>
          <small>${post.userId.substring(0, 8)} • ${post.createdAt?.toDate().toLocaleString()}</small>
        `;
        feed.appendChild(div);
      });
    });
}

function logout() {
  auth.signOut().then(() => window.location.href = "login.html");
}
