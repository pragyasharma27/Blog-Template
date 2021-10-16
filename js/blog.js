console.log("Welcome to blogging app.");
showBlog();
let validTitle = false;
let validTxt = false;

// If user adds a blog, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (e) => {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let blog = localStorage.getItem("blog");
    if (blog == null) {
        blogObj = [];
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    blogObj.push(myObj);
    localStorage.setItem("blog", JSON.stringify(blogObj));
    addTxt.value = "";
    addTitle.value = "";
    // console.log(blogObj);
    showBlog();
});

// Function to show elements from local storage 
function showBlog() {
    let blog = localStorage.getItem("blog");
    if (blog == null) {
        blogObj = [];
    } else {
        blogObj = JSON.parse(blog);
    }
    let html = "";
    blogObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text"> ${element.text}</p>
                        <button id="${index}"onclick="deleteBlog(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
    });
    let blogElm = document.getElementById("blog");
    if (blogObj.length != 0) {
        blogElm.innerHTML = html;
    }
    else {
        blogElm.innerHTML = `Nothing to show! Use "Add" section above to add blog.`;
    }
}

// Function to delete a blog 
function deleteBlog(index) {
    console.log("I am deleting index", index);

    let blog = localStorage.getItem("blog");
    if (blog == null) {
        blogObj = [];
    } else {
        blogObj = JSON.parse(blog);
    }

    blogObj.splice(index, 1);
    localStorage.setItem("blog", JSON.stringify(blogObj));
    showBlog();
}








