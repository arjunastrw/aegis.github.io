document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.querySelector("textarea");
    const select = document.querySelector ("select");
    const button = document.querySelector("button");

    let voices = [];

    // funtion to populate the voice select dropdown
    function populateVoicelist() {
        voices = speechSynthesis.getVoices();

        select.innerHTML = "",

        voices.forEach((voice, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = voice.name;
            select.appendChild(option);
        });
    }

    // Initialize voices when voices are changed
    speechSynthesis.onvoiceschanged = populateVoicelist;

    // handle the "Listen" button click
    button.addEventListener("click", () => {
        const selectedVoice = voices[select.value];
        const textToSpeak = textarea.value;
    

    if (textToSpeak.trim() !== "") {
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.voice = selectedVoice;
        speechSynthesis.speak(utterance);
    }
});
});