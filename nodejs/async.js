let posts = [
  { title: "Title 1", content: "Content 1", author: "Author 1" },
  { title: "Title 2", content: "Content 2", author: "Author 2" },
  { title: "Title 3", content: "Content 3", author: "Author 3" },
];

let newPost = {
  title: "Title 4",
  content: "Content 4",
  author: "Author 4",
};

function addPost(newPost) {
  return new Promise((resolve, reject) => {
    console.log("Post ekleniyor...");
    if (newPost) {
      posts.push(newPost);
      resolve("Post eklendi...");
    } else {
      reject("Post ekleme basarisiz");
    }
  });
}

function listPosts(data) {
  return new Promise((resolve, reject) => {
    console.log("Postlar Listeleniyor..");
    if (data) {
      console.log("Postlar Listelendi.");
      resolve(posts);
    } else {
      reject("Postlar Listelenemedi.");
    }
  });
}

async function processData() {
  try {
    const addedData = await addPost(newPost);
    console.log(addedData);
    const listedData = await listPosts(true);
    console.log(listedData);
  } catch (error) {
    console.log(error);
  }
}
processData();
