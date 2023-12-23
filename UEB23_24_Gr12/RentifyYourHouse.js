var canvas = document.getElementById("katrori");
  var ctx = canvas.getContext("2d");

  // Set line properties
  ctx.lineWidth = 2;
  ctx.strokeStyle =  "#002B5B"; // Blue color
  


  // Draw the first horizontal line
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(350, 50);
  ctx.stroke();

  // Draw the second horizontal line parallel to the first one
  ctx.beginPath();
  ctx.moveTo(50, 100);
  ctx.lineTo(350, 100);
  ctx.stroke();