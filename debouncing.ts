let counter = 0


const debouncing = () => {
if(counter===0){
  console.log('debouncing',counter++)

}else if(counter>0){
  console.log('debouncing',counter++)

}

}

const getDebouncingInterval = (callback,time) => {
  console.log('function expression')
  let timer;
 
return function (...args){

 setTimeout(() => {
  if(timer) clearTimeout(timer);
  callback()
  console.log('nested fun,annontmous fun,currying,callback')
  console.log(args,'args')
 }, time);
}
  
  }

  const nesteddebouncingfun = getDebouncingInterval(debouncing,100)
  console.log(nesteddebouncingfun(),'nesteddebouncingfun ')
  // console.log( nesteddebouncingfun(),' nesteddebouncingfun')
   //when we store either any fun call or function in any variable , it become a function expression 