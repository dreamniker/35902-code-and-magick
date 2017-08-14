'use strict';

window.renderCloud = function (ctx, cloudColor, shadowColor) {
  ctx.beginPath();
  ctx.arcTo(110, 20, 620, 20, 50);
  ctx.bezierCurveTo(620, 20, 560, 190, 460, 290);
  ctx.lineTo(110, 290);
  ctx.closePath();
  ctx.fillStyle = shadowColor;
  ctx.fill();


  ctx.beginPath();
  ctx.arcTo(100, 10, 610, 10, 50);
  ctx.bezierCurveTo(610, 10, 550, 180, 450, 280);
  ctx.lineTo(100, 280);
  ctx.closePath();
  ctx.fillStyle = cloudColor;
  ctx.fill();
};

window.renderTitle = function (ctx, startX, titleColor) {
  ctx.fillStyle = titleColor;
  ctx.font = 'bold 14px PT Mono';
  ctx.fillText('Ура! Вы победили!!', startX, 40);
  ctx.fillText('Список результатов:', startX, 60);
};

window.renderHistogram = function (ctx, names, times, startX, hHeight, hWidth, hIndentX, hIndentY, yourColor, playersColor, nameColor, timeColor) {
  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var step = hHeight / max;

  for (var j = 0; j < times.length; j++) {

    (names[j] === 'Вы') ? ctx.fillStyle = yourColor : ctx.fillStyle = playersColor;

    ctx.fillRect(startX + (hWidth + hIndentX) * j, hHeight - (step * times[j]) + hIndentY, hWidth, step * times[j]);

    ctx.fillStyle = timeColor;
    ctx.fillText(Math.round(times[j]), startX + (hWidth + hIndentX) * j, hHeight - (step * times[j]) + (hIndentY - 10));

    ctx.fillStyle = nameColor;
    ctx.fillText(names[j], startX + (hWidth + hIndentX) * j, hHeight + hIndentY * 1.2);
  }

};

window.renderStatistics = function (ctx, names, times) {

  var startX = 135;

  window.renderCloud(ctx, 'rgb(255, 255, 255)', 'rgba(0, 0, 0, 0.7)');

  window.renderTitle(ctx, startX, 'rgb(117, 18, 142)');

  window.renderHistogram(ctx, names, times, startX, 150, 40, 50, 90, 'rgba(255, 0, 0, 1)', 'rgba(0, 0, 255, ' + Math.random() + ' )', 'rgb(0, 0, 255)', 'rgb(0, 0, 0)');

};
