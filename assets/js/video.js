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

    // Highlight the active button
    highlightActiveButton(seconds);
}

function highlightActiveButton(seconds) {
    // Get all buttons
    const buttons = document.querySelectorAll('.button-group button');

    // Remove active class from all buttons
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Find the button that corresponds to the current time and add active class
    buttons.forEach(button => {
        const buttonTime = parseInt(button.getAttribute('onclick').match(/\d+/)[0]);
        if (buttonTime === seconds) {
            button.classList.add('active');
        }
    });
}

// Track video time and update buttons accordingly
function trackVideoProgress() {
    const video = document.getElementById("video");

    video.addEventListener('timeupdate', function() {
        const currentTime = Math.floor(video.currentTime);

        // Find the appropriate marker for current time
        const timePoints = Object.keys(videoMarkers).map(Number).sort((a, b) => a - b);
        let activePoint = timePoints[0];

        for (const point of timePoints) {
            if (currentTime >= point) {
                activePoint = point;
            } else {
                break;
            }
        }

        // Update info and highlight button without changing current time
        document.getElementById("infoBox").textContent = videoMarkers[activePoint].description;
        document.getElementById("heading").innerText = videoMarkers[activePoint].title;
        highlightActiveButton(activePoint);
    });
}

// Load default on page load
window.onload = function() {
    markVideo(0);
    trackVideoProgress();
};