let voices = window.speechSynthesis.getVoices();
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    console.log(voices);
};
function speechEnglish(text) {
    let voices = window.speechSynthesis.getVoices();
    let speech = new SpeechSynthesisUtterance();
    speech.voice = voices[0];
    speech.lang = "en";
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;
    speech.text = text;
    window.speechSynthesis.speak(speech);
}
function speechArabic(text) {
    // Create a new SpeechSynthesisUtterance object
    let speech = new SpeechSynthesisUtterance();

    // Set the voice (this might need adjustment based on available voices)
    speech.voice = voices[1];
    console.log(voices);
    // Set the language to Arabic
    speech.lang = "ar-SA";

    // Adjust speech rate (speed of speech)
    speech.rate = 1;

    // Adjust speech pitch (tone of voice)
    speech.pitch = 1;

    // Adjust speech volume
    speech.volume = 1;

    // Set the text that needs to be spoken
    speech.text = text;

    // Trigger the speech synthesis
    window.speechSynthesis.speak(speech);
}

setInterval(function () {
    document.getElementById("current-time").textContent = moment().format('dddd DD MMMM YYYY, h:mm A');
}, 1000);

document.addEventListener('DOMContentLoaded', function () {
    var mediaPlayer = document.getElementById('videoPlayer');
    var imagePlayer = document.getElementById('imagePlayer');

    var videoFiles = [
        'V1.mp4', // Add video filenames here
        'V2.mp4',
        // Add more video filenames here
    ];

    var imageFiles = [
        'P1.jpg', // Add photo filenames here
        'P2.jpg',
        // Add more photo filenames here
    ];

    var currentIndex = 0;
    var currentMediaType = '';

    function loadNextMedia() {
        if (currentMediaType === 'video') {
            mediaPlayer.style.display = 'none';
            imagePlayer.style.display = 'block';
            imagePlayer.src = 'photos/' + imageFiles[currentIndex % imageFiles.length];
            currentMediaType = 'image';
        } else {
            imagePlayer.style.display = 'none';
            mediaPlayer.style.display = 'block';
            mediaPlayer.src = 'videos/' + videoFiles[currentIndex % videoFiles.length];
            mediaPlayer.type = 'video/mp4';
            mediaPlayer.load();
            mediaPlayer.play();
            currentMediaType = 'video';
        }

        currentIndex++;
    }

    mediaPlayer.addEventListener('ended', function () {
        loadNextMedia();
    });

    loadNextMedia(); // Load and play the first media
});