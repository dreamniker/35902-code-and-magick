'use strict';

var renderCloud = function (ctx, cloudColor, shadowColor) {
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

var renderTitle = function (ctx, startX, titleColor) {
  ctx.fillStyle = titleColor;
  ctx.font = 'bold 14px PT Mono';
  ctx.fillText('Ура! Вы победили!!', startX, 40);
  ctx.fillText('Список результатов:', startX, 60);
};

var renderHistogram = function (ctx, names, times, startX, hHeight, hWidth, hIndentX, hIndentY) {
  var max = -1;
  var YOUR_COLOR = 'rgba(255, 0, 0, 1)';
  var PLAYERS_COLOR = 'rgba(0, 0, 255, ' + Math.random() + ' )';
  var NAME_COLOR = 'rgb(0, 0, 255)';
  var TIME_COLOR = 'rgb(0, 0, 0)';

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    max = Math.max(time, max);
  }

  var step = hHeight / max;

  for (var j = 0; j < times.length; j++) {

    ctx.fillStyle = ((names[j] === 'Вы') ? YOUR_COLOR : PLAYERS_COLOR);

    ctx.fillRect(startX + (hWidth + hIndentX) * j, hHeight - (step * times[j]) + hIndentY, hWidth, step * times[j]);

    ctx.fillStyle = TIME_COLOR;
    ctx.fillText(Math.round(times[j]), startX + (hWidth + hIndentX) * j, hHeight - (step * times[j]) + (hIndentY - 10));

    ctx.fillStyle = NAME_COLOR;
    ctx.fillText(names[j], startX + (hWidth + hIndentX) * j, hHeight + hIndentY * 1.2);
  }

};

window.renderStatistics = function (ctx, names, times) {

  var startX = 135;

  renderCloud(ctx, 'rgb(255, 255, 255)', 'rgba(0, 0, 0, 0.7)');

  renderTitle(ctx, startX, 'rgb(117, 18, 142)');

  renderHistogram(ctx, names, times, startX, 150, 40, 50, 90);

};
