let points = 0;
let level = 1;

const scanBtn = document.getElementById("scanBtn");
const cameraInput = document.getElementById("cameraInput");

scanBtn.addEventListener("click", () => {
  // Trigger the camera
  cameraInput.click();
});

// When an image is captured
cameraInput.addEventListener("change", () => {
  if (cameraInput.files.length > 0) {
    points += 10; // Add points when user scans
    document.getElementById("points").innerText = points;

    if (points % 50 === 0) {
      level++;
      alert("🎉 Congratulations! You reached Level " + level);
    }
    document.getElementById("level").innerText = level;
  }
});
