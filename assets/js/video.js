function markVideo(seconds) {
    const video = document.getElementById("video");
    video.currentTime = seconds;

    // set defaults
    let title = "Default title";
    let description = "Default value";

    // Update description if the current time matches a marker
    if (videoMarkers[seconds]) {
        title = videoMarkers[seconds].title;
        description = videoMarkers[seconds].description;
    }

    document.getElementById("infoBox").textContent = description;
    document.getElementById("heading").innerText = title;
}

// Load default on page load
window.onload = function() {
    markVideo(0);
};