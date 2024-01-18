const sentence = "hello";

// setTimeout(() => {
//   // print the char here
//   for (const char of sentence) {
//     setTimeout(() => {
//       console.log(char);
//     }, 500)
//   }
// }, 500) 

// for (const char of sentence) {
//   setTimeout(() => {
//     console.log(char);
//   }, 500)
// }

function doScaledTimeout(i) {
  setTimeout(() => {
    for (const char of sentence) {
      console.log(char);
    };
  }, i * 5000);
}

doScaledTimeout(1)