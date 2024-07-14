export const parent = {
  name: 'parent',
  showName() {
    return this.name;
  },
};

const child = {
  name: 'child',
  askMoney() {
    const investor = super.showName.call(parent);
    return `give me money ${investor}`;
  },
};

Object.setPrototypeOf(child, parent);

// console.log(child);
// console.log(child.askMoney());
