function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`"I am 1 strange loop."`);
    } else {
      array.push(`"I am ${i} strange loops."`);
    }
  }
  return array;
}

function whileLoop(n) {
  while (n => 0) {
    if (n === 0) {
      return "done";
    } else {
      console.log(n);
      --n;
    }
  }
}



function maybeTrue() {
    return Math.random() >= 0.5;
  }

function doWhileLoop(arr) {
  do {
    arr.shift();
  } while(maybeTrue());
  return arr;
}

// do {
//   [loopBody];
// } while ([condition]);

// do {
//   console.log('doo-bee-doo-bee-doo')
// } while (maybeTrue());
