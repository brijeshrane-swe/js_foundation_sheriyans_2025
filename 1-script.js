const counter = {
  count: 0,
};

function checkSanity() {
  if (counter.count <= 0) {
    counter.count = 0;
  }

  if (counter.count >= 20) {
    counter.count = 20;
  }
}

function increment() {
  counter.count += 1;
  checkSanity();
  console.log(`Count: ${counter.count}`);
}

function decrement() {
  counter.count -= 1;
  checkSanity();
  console.log(`Count: ${counter.count}`);
}
