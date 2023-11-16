const developerWords = [
    'Emerging',
    'Budding',
    'Rising',
    'Enthusiastic',
    'Aspiring',
    'Passionate',
];
var selectedWord = 0;

// change the word every 5 seconds
setInterval(changeWord, 5000);
setTimeout(changeWord, 5000);       

function changeWord() {
    selectedWord = (selectedWord + 1) % developerWords.length;
    document.getElementById('developerWord').innerHTML = developerWords[selectedWord];
    // make the word pink for a short time, then fade back to white
    document.getElementById('developerWord').style.color = '#ae2ee4';
    setTimeout(function() {
        document.getElementById('developerWord').style.color = 'white';
    }, 2000);
}