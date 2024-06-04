// function fizzBuzz(n){
//     for(let i=1;i<=n;i++){
//         if(i%3 === 0 && i%5===0){
//             console.log("fizzbuzz")
//         }
//         else if(i%3===0){
//             console.log("fizz")
//         }
//         else if(i%5===0){
//             console.log("buzz")
//         }
//         else{
//             console.log(i)
//         }
//     }
// }

// let n = process.argv.pop();
// fizzBuzz(n)

// ----------------------------


// function fizzBuzz2(n){
//     for(let i=1;i<=n;i++){
//         let str = "";
//         if(i%3 === 0){
//             // str = str+"fizz";
//             str += "fizz";
//         }
//         if(i%5 === 0){
//             str+="buzz";
//         }
//         if(str == ""){
//             str+=i;
//         }
//         console.log(str);
//     }
// }

// let n = process.argv.pop();
// fizzBuzz2(n)


// -------------------

function fizzBuzz3(n){
    let cnt3 = 1 , cnt5 = 1;
    for(let i=1;i<=n;i++){
        let str= ""
        if(cnt3 === 3){
            str+="fizz";
            cnt3 = 0;
        }
        if(cnt5 ===5){
            str+="buzz";
            cnt5 = 0;
        }
        if(str === ""){
            str+=i
        }
        console.log(str);
        cnt3++;
        cnt5++;
    }
}

let n = process.argv.pop();
fizzBuzz3(n)