const sentence = "hello";

// setTimeout(() => {
//   // print the char here
//   for (const char of sentence) {
//     setTimeout(() => {
//       console.log(char);
//     }, 500)
//   }
// }, 500) 

for (const char of sentence) {
  setTimeout(() => {
    console.log(char);
  }, 500)
}