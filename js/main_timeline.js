$(document).ready(function() {
    var embed = document.getElementById('timeline-embed');
    embed.style.height = getComputedStyle(document.body).height;
    window.timeline = new TL.Timeline('timeline-embed', './js/timeline.json', {
        hash_bookmark: false
    });
});
