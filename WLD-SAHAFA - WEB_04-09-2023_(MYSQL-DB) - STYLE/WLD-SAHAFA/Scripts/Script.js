let voices = window.speechSynthesis.getVoices();
let blinkTimeout;

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
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

function SetCounterDetails(counterDetails) {
    var index = 1;
    $.each(counterDetails, function () {
        $('#c' + index).html($(this)[0].CounterNo);
        $('#t' + index).html($(this)[0].ReceiptNo);
        index++;
    });
}
function SetLatestCounterDetails(counter) {
    if (counter == null)
        return;
    $('#latestCounter').html(counter.CounterNo);
    $('#latestTicket').html(counter.ReceiptNo);
    $(".ticketNumberBox").addClass("blink");
    CheckInterval();
}
function CheckInterval() {
    clearInterval(blinkTimeout);
    blinkTimeout = setInterval(function () {
        $(".ticketNumberBox").removeClass("blink");
        clearInterval(blinkTimeout);
    }, 5000);
}
 