const u = new Map();
//<string, { name: string; age: number }>

u.set("2", { name: "John", age: 23 });
u.set("3", { name: "John", age: 23 });

const res = u.get("3"); // Now TypeScript knows res has { name: string; age: number }
console.log(res?.name); // Safe access
