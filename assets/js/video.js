function markVideo(seconds) {
    const video = document.getElementById("video");
    video.currentTime = seconds;

    let title = "Default title";
    let description = "Default value";

    if (videoMarkers[seconds]) {
        title = videoMarkers[seconds].title;
        description = videoMarkers[seconds].description;
    }

    document.getElementById("infoBox").textContent = description;
    document.getElementById("heading").innerText = title;
}

// Beim Laden der Seite die erste Markierung anzeigen
window.onload = function() {
    markVideo(0);
};