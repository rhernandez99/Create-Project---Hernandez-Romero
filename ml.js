function displayStory (a, b, c, story) {
    var a = document.getElementById(textboxA).value;
    var b = document.getElementById(textboxB).value;
    var c = document.getElementById(textboxC).value;
    var story = "My" + a + "friend," + b + ", is a professional" + c + "star.";
    document.getElementById(story).innerHTML = storyText;
}
