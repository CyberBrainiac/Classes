class Chair {
  constructor(
    color,
    seatHeight,
    recliningAngle,
    backSupport = true,
    headSupport = true,
    padding = '3 inch',
    armRests = true,
    seatSize = '16 inch',
    isHeightAdjustable = false,
    isMovable = false,
  ) {
    this.color = color;
    this.seatHeight = seatHeight;
    this.recliningAngle = recliningAngle;
    this.backSupport = backSupport;
    this.headSupport = headSupport;
    this.padding = padding;
    this.armRests = armRests;
    this.seatSize = seatSize;
    this.isHeightAdjustable = isHeightAdjustable;
    this.isMovable = isMovable;
    this.type = 'Chair';
  }

  adjustableHeight() {}
  adjustAngle() {}
  moveChair() {}
}

const newChair = new Chair(
  'Blue',
  '25 inch',
  '20 deg',
  true,
  false,
  '3 inch',
  true,
  '16 inch',
  false,
  false,
);

console.dir(Chair);
console.log('Chair Object', newChair);
