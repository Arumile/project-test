let likes=0;

const like_button = document.getElementById("like_button");
const like_count = document.getElementById("like-count");

like_button.addEventListener("click", function () {
    likes += 1;
    like_count.textContent = likes;
    console.log("clicked the like button", likes);
})

//alert

const helloBtn = document.getElementById("alert-btn");
helloBtn.addEventListener("click", function () {
    likes += 1;
    alert("This website has been scanned and contains malicious activity.");
    console.log("clicked the alert button", likes);
})

//random mood select
const moods = ["happy", "sad", "angry", "jealous"];
const moodBtn = document.getElementById("moodBtn");
const moodResult  = document.getElementById("moodResult");

moodBtn.addEventListener("click", function () {
    const i = Math.floor(Math.random() * moods.length);
    alert("You're going to be:" + moods[i]);
    moodResult.textContent = moods[i];
    console.log(moods[i]);
})

// add song's - list (song title) - exception (title = "")

const songInput = getElementById("song-input");
const addBtn = getElementById("add-btn");
const songList = getElementById("song-list");

addBtn.addEventListener("click", function () {
    const title = songInput.value; 
    console.log("hi");
    if (title == "")
    {
        alert("Write a song title!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = title;
    songList.appendChild(li);

    console.log("added: " + title);
    songInput.value = "";
})