// var isValid = function(s) {
//     var list =[];
//     list.push(s[0])
//     var open=['(', '{', '[' ];
//     var close = [')', '}', ']'];
//     var i=1;
//     while(s[i] !== undefined){ 
//         // console.log(list)
//         // console.log(i,s.length)
//       if(s[i] === close[0] && list[list.length -1] === open[0]){
//         // console.log(s[i] === close[0] && list[list.length -1] === open[0])
//           list.pop();
//       }else if(s[i] === close[1] && list[list.length -1]  === open[1]){
//           list.pop();
//       }else if(s[i] === close[2] && list[list.length -1]  === open[2]){
//         // console.log(s[i] === close[0] && list[list.length -1] === open[0])
//           list.pop();
//       }else if( open.indexOf(s[i]) > -1){
//         // console.log(s[i] === close[0] && list[list.length -1] === open[0])
//          list.push(s[i])
//       }else{
//         console.log('test')
//           return false;
//       }
//       i++;
//     }
//     if(list.length === 0){ return true}else{return false}
//   };


//   s = "()[]{}"
console.log(0 !== null)
// // console.log(s[3])
