var stepIndex = 0;
showStep(stepIndex);

// kliknięcie przycisku nawigacyjnego wywołuje funkcję wyświetlania/wygaszania z odpowiednim indeksem

function plusElems(n) {
  showStep(stepIndex += n);
}

// Funkcja wyświetlania/wygaszania

function showStep(n) {
  var i;
// ograniczenie: kroków jest tyle, ile elementów <img> klasy "ilustracja" minus jeden (pierwszy wyświetlany obrazek) 
  var steps = document.getElementsByClassName("ilustracja");
  var stepsno = steps.length-1;
  var hlsvg = document.getElementsByTagName("svg");
  var y = document.getElementsByClassName("instrukcja");
  var prog = document.getElementsByTagName("progress");
  

  if (n > stepsno) {stepIndex = 0}
  if (n < 0) {stepIndex = stepsno}

  for (i = 0; i < hlsvg.length; i++) {
    hlsvg[i].style.display = "none";
  }
  for (i = 0; i < steps.length; i++) {
    steps[i].style.display = "none";
  }
  for (i = 0; i < y.length; i++) {
    y[i].style.opacity = "0";
    if (i <= stepIndex-1) {
      y[i].style.opacity = "1";
      y[i].scrollIntoView(false);
    }
  }
// wyświetlenie właściwego obrazka
  steps[stepIndex].style.display = "block";
  hlsvg[stepIndex].style.display = "block";


// zwiększenie postępu
    prog[0].value = 100*stepIndex/stepsno;
}
function keyboardShortcut(event) {
var x = event.keyCode ;
  if (x == 85) {
    document.getElementById('link-dokumentacja').click();
  } else if (x == 73) {
    document.getElementById('id01').style.display='block';
  } else if (x == 82) {
    location.reload();
  } else if (x == 84) {
    window.history.back();
  } else if (x == 37) {
    plusElems(-1);
  } else if (x == 39) {
    plusElems(1);
  } else if (x == 88) {
    document.getElementById('id01').style.display='none';
  }
}
/* function closeModal(event) {
  var x = event.keyCode ;
   if (x == 85) {
    document.getElementById('link-dokumentacja').click();
  } else if (x == 73) {
    document.getElementById('id01').style.display='block';
  } else if (x == 82) {
    location.reload();
  } else if (x == 37) {
    plusElems(-1);
  } else if (x == 39) {
    plusElems(1);
  } else if (key == 27) {
    document.getElementById('id01').style.display='none';
  }
} */

function toggleAccordion(id) {

  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
