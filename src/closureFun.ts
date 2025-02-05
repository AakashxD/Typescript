function runAfterIs(fn: () => number): void { 
    setTimeout(fn, 1000); 
    const x:number=fn();
    console.log("number is ",x);
  }
  
  const doSomething = (): number=> {
    console.log("Hello"); 
    return 7; 
  };
  const c :number=10;
  runAfterIs(doSomething);
   