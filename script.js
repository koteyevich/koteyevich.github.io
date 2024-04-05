function playSpringAnimation(element) {
    element.classList.add('epic-ease-spring');
    // After some delay, remove the class to allow the animation to be played again on subsequent clicks
    setTimeout(function() {
        element.classList.remove('epic-ease-spring');
    }, 1500); // The same duration as your animation
}
