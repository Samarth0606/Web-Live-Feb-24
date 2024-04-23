// function someFun() {
//   let user = "samarth";
//   function chotu() {
//     console.log(user);
//   }
//   chotu();
// }

// someFun();

// ---------------------

//closure -> whenever a fn is returned , it is never returned alone,
// it always returns with its dependent lexical env

// function someFun() {
//   let user = "samarth";
//   function chotu() {
//     console.log(user);
//   }
//   return chotu;
// }

// let ret = someFun();
// ret();

// ---------------------
// Q:why were  closures being used?
// classes -> js mei es6 -> privatisation methods -> closures ✅

function counter() {
  let count = 0;
  function getCount() {
    console.log(count);
  }
  function increase() {
    count += 1;
  }
  function decrease() {
    count -= 1;
  }
  function reset() {
    count = 0;
  }

  return {
    getCount: getCount,
    increase: increase,
    decrease: decrease,
    reset: reset,
  };
}

let obj1 = counter();
console.log(obj1);
obj1.getCount();
obj1.increase();
obj1.increase();
obj1.getCount();
obj1.decrease();
obj1.getCount();
obj1.reset();
obj1.getCount();

//privatised
// getCount();
// console.log(count);
