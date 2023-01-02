function shuffleCourses() {
    // Select the div element
    let div = document.querySelector("#courses");
  
    // Get the courses from the div
    let courses = Array.from(div.children);
  
    // Shuffle the courses
    courses.sort(() => Math.random() - 0.5);
  
    // Remove the courses from the div
    courses.forEach(course => div.removeChild(course));
  
    // Add the first 3 shuffled courses back to the div
    for (let i = 0; i < 3; i++) {
      div.appendChild(courses[i]);
    }
  }
  // Shuffle the courses when the page loads
  window.addEventListener("load", shuffleCourses);