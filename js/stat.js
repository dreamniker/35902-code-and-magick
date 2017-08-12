'use strict';

window.renderStatistics = function (ctx, names, times) {
  var cloudColor = 'rgb(255, 255, 255)';
  var shadowColor = 'rgba(0, 0, 0, 0.7)';
  var titleColor = 'rgb(117, 18, 142)';

  var startX = 135;

  ctx.beginPath();
  ctx.arcTo(110,20,620,20,50);
  ctx.bezierCurveTo(620,20,560,190,460,290);
  ctx.lineTo(110,290);
  ctx.closePath();
  ctx.fillStyle = shadowColor;
  ctx.fill();


  ctx.beginPath();
  ctx.arcTo(100,10,610,10,50);
  ctx.bezierCurveTo(610,10,550,180,450,280);
  ctx.lineTo(100,280);
  ctx.closePath();
  ctx.fillStyle = cloudColor;
  ctx.fill();


  ctx.fillStyle = titleColor;
  ctx.font = 'bold 14px PT Mono';
  ctx.fillText('Ура! Вы победили!!', startX, 40);
  ctx.fillText('Список результатов:', startX, 60);


  // get the worst time

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var histogramWidth = 40;
  var histogramIndentX = 50;
  var histogramIndentY = 90;
  var step = histogramHeight / max;

  // histogram colors
  var yourColor = 'rgba(255, 0, 0, 1)';
  var playersColor = 'rgba(0, 0, 255, ' + Math.random() +' )';
  var nameColor = 'rgb(0, 0, 255)';
  var timeColor = 'rgb(0, 0, 0)';

  for (var i = 0; i < times.length; i++) {

    if (names[i] == 'Вы') {
      ctx.fillStyle = yourColor;
    } else {
      ctx.fillStyle = playersColor;
    }

    ctx.fillRect(startX + (histogramWidth + histogramIndentX) * i, histogramHeight - (step * times[i]) + histogramIndentY, histogramWidth, step * times[i]);

    ctx.fillStyle = timeColor;
    ctx.fillText(Math.round(times[i]), startX + (histogramWidth + histogramIndentX) * i,  histogramHeight - (step * times[i]) + (histogramIndentY - 10) );

    ctx.fillStyle = nameColor;
    ctx.fillText(names[i], startX + (histogramWidth + histogramIndentX) * i, histogramHeight  +  histogramIndentY * 1.2);

  }

}
