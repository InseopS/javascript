let animal = {
    isAlive: true
}

function Rabbit(name) {
    this.name = name
}

let rabbit1 = new Rabbit('black')

Rabbit.prototype = animal

let rabbit2 = new Rabbit('white')

const users = [animal, rabbit1, rabbit1.__proto__.constructor, rabbit2, rabbit2.__proto__.constructor, Rabbit.prototype.constructor, animal.__proto__.constructor, Rabbit.prototype];

//This generator doesn't garantee uniqueness, but looks way more memoryish than a incremental counter
//if you use this code for real, do incremental or something else unique!
function* generator() {
  while (true) {
    const random = Math.random()
      .toString(16)
      .slice(2, 10);
    yield `0x${random}`;
  }
}

const preload = (knowObjects, refs, generate) => (reference = false) => {
  if (reference) {
    return refs;
  } else {
    return object => {
      let address;
      if (knowObjects.has(object)) {
        address = knowObjects.get(object);
      } else {
        address = generate.next().value;
        knowObjects.set(object, address);
        refs[address] = object;
      }
      return address;
    };
  }
};

const setup = preload(new Map(), {}, generator());
const findRef = setup(false);

const array = users.map(u => findRef(u));
console.log(array)

////////

const refs = setup(true);
console.log(refs)