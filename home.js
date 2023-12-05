const developerWords = [
    'Emerging',
    'Budding',
    'Rising',
    'Enthusiastic',
    'Aspiring',
    'Passionate',
];
let selectedWord = 0;

// change the word every 5 seconds
setInterval(changeWord, 5000);
setTimeout(changeWord, 5000);       

function changeWord() {
    selectedWord = (selectedWord + 1) % developerWords.length;
    document.getElementById('developerWord').innerHTML = developerWords[selectedWord];
    // make the word pink for a short time, then fade back to white
    document.getElementById('developerWord').style.color = '#ae2ee4';
    setTimeout(function() {
        if (document.documentElement.getAttribute('data-theme') == 'dark') {
            document.getElementById('developerWord').style.color = 'white';
        } else {
            
        document.getElementById('developerWord').style.color = 'black';
        }
    }, 2000);
}

// wait until page loads before running
window.onload = function() {
    
    const toggleSwitch = document.querySelector('.theme-switch-wrapper input[type="checkbox"]');
    document.documentElement.setAttribute('data-theme', 'dark');

    // toggles the theme based on the checkbox
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.getElementById('banner-image').src = 'assets/profile-banner.jpg';
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            document.getElementById('banner-image').src = 'assets/profile-banner-light.jpg';
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
}