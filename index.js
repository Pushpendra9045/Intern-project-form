// How stepper will progress

const progressBar = document.getElementById("progress-bar");
const progressNext = document.querySelectorAll(".progress-next");
const progressPrev = document.querySelector(".progress-prev");
const steps = document.querySelectorAll(".step");
let active = 2;
// console.log(progressNext)
for(let i=0;i<progressNext.length;i++){
  // console.log(progressNext[i])
  progressNext[i].addEventListener("click", (e) => {
    e.preventDefault();
    active++;
    console.log(active,steps.length)
    if (active > steps.length) {
      active = steps.length;
    }
    updateProgress();
  });
}

progressPrev.addEventListener("click", (e) => {
  e.preventDefault()
  active--;
  if (active < 1) {
    active = 1;
  }
  updateProgress();
});

const updateProgress = () => {
  // toggle active class on list items
  steps.forEach((step, i) => {
    if (i < active) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
  // set progress bar width
  progressBar.style.width =
    ((active - 1) / (steps.length - 1)) * 100 + "%";
  // enable disable prev and next buttons
  if (active === 1) {
    progressPrev.disabled = true;
  } else if (active === steps.length) {
    progressNext.disabled = true;
  } else {
    progressPrev.disabled = false;
    progressNext.disabled = false;
  }
};


// function to scroll in forward direction form section 
function myFunction() {
  let Logistic=document.getElementById("Logistic");
  
  Logistic.scrollIntoView(true);
  
}

function myFunction1() {
  let CourtReportings=document.getElementById("court-section")
 
  CourtReportings.scrollIntoView(true);
}


// Function to toggle the visibility of specific elements based on the provided key
function toggleRow(key) {
    // Get references to various HTML elements using their IDs
    var checkbox = document.getElementById("toggleCheckbox");
    var additionalFeatureSwitchButton = document.getElementById("additional-feature-switch-button");
    var documentManagebutton = document.getElementById("document-manage");
    var reqireVcmbutton = document.getElementById("reqire-Vcm");
    var cartServicebutton = document.getElementById("cart-service");
  
    var row4 = document.getElementById("row4-input");
    var courtReporterSwitchButton = document.getElementById("court-reporter-switch-button");
    var courtReportContainer = document.getElementById("court-report-container");
    var VcmStatusChnage = document.getElementById("vcm-status-chnage");
    var checkedVcM = document.getElementById("checeked-vcm");
    var permissionGiven = document.getElementById("permission-given");
    var confirmation = document.getElementById("confirmation");
  
    // Switch statement to determine which case/key was provided
    switch (key) {
      // Case 1: Toggle row4 based on the state of the 'toggleCheckbox'
      case 1:
        if (checkbox.checked) {
          row4.style.display = "flex"; // Show row4
        } else {
          row4.style.display = "none"; // Hide row4
        }
        break;
  
      // Case 2: Toggle 'checkedVcM' based on the state of 'reqireVcmbutton'
      case 2:
        if (reqireVcmbutton.checked) {
          checkedVcM.style.display = "flex"; // Show 'checkedVcM'
        } else {
          checkedVcM.style.display = "none"; // Hide 'checkedVcM'
        }
        break;
  
      // Case 3: Toggle 'permissionGiven' based on the state of 'documentManagebutton'
      case 3:
        if (documentManagebutton.checked) {
          permissionGiven.style.display = "flex"; // Show 'permissionGiven'
        } else {
          permissionGiven.style.display = "none"; // Hide 'permissionGiven'
        }
        break;
  
      // Case 4: Toggle 'courtReportContainer' based on the state of 'courtReporterSwitchButton'
      case 4:
        if (courtReporterSwitchButton.checked) {
          courtReportContainer.style.display = "flex"; // Show 'courtReportContainer'
        } else {
          courtReportContainer.style.display = "none"; // Hide 'courtReportContainer'
        }
        break;
  
      // Case 5: Toggle 'VcmStatusChnage' based on the state of 'additionalFeatureSwitchButton'
      case 5:
        if (additionalFeatureSwitchButton.checked) {
          VcmStatusChnage.style.display = "flex"; // Show 'VcmStatusChnage'
        } else {
          VcmStatusChnage.style.display = "none"; // Hide 'VcmStatusChnage'
        }
        break;
  
      // Case 6: Toggle 'confirmation' based on the state of 'cartServicebutton'
      case 6:
        if (cartServicebutton.checked) {
          confirmation.style.display = "flex"; // Show 'confirmation'
        } else {
          confirmation.style.display = "none"; // Hide 'confirmation'
        }
        break;
  
      // Default case: Do nothing if an unknown key is provided
      default:
        break;
    }
  }
  
  // function for finishing the form
  function Finish() {
    alert("You have registere succesfully");
  }