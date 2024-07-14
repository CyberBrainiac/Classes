export class Chair {
  static backSupport = true;
  static armRests = true;

  constructor(
    color,
    seatHeight,
    recliningAngle,
    headSupport = true,
    padding = '3 inch',
    seatSize = '16 inch',
    isHeightAdjustable = false,
    isMovable = false
  ) {
    this.type = 'Chair';
    this.color = color;
    this.seatHeight = seatHeight;
    this.recliningAngle = recliningAngle;
    this.headSupport = headSupport;
    this.padding = padding;
    this.seatSize = seatSize;
    this.isHeightAdjustable = isHeightAdjustable;
    this.isMovable = isMovable;
  }

  static logObjectProps() {
    console.dir(this);
  }

  adjustableHeight() {}
  adjustAngle() {}
  moveChair() {}
}

// console.dir(Chair);
// console.log('Chair Object', newChair);
