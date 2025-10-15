// यह सुनिश्चित करने के लिए कि कोड केवल तभी चले जब पूरा पेज लोड हो जाए
document.addEventListener('DOMContentLoaded', function() {
    
    // index.html पर बटनों को उनकी ID से पकड़ें
    const exploreBtn = document.getElementById('explore-btn');
    const enterBtn = document.getElementById('enter-btn');
    
    // नेविगेशन फंक्शन जो यूजर को home.html पर ले जाएगा
    function navigateToHome() {
        window.location.href = 'home.html';
    }
    
    // बटनों पर इवेंट लिसनर जोड़ें
    if (exploreBtn) {
        exploreBtn.addEventListener('click', navigateToHome);
    }
    
    if (enterBtn) {
        enterBtn.addEventListener('click', navigateToHome);
    }
});