export function hello({firstname, lastname, age}: 
    {firstname: string, lastname?: string , age?: number}) 
    {
    
        console.log("Hello");
        console.log(`your first name is ${firstname}`);
        if(lastname){
            console.log(`your last name is ${lastname}`);
        }
        if(age){
            console.log(`your age is ${age}`);
        }

}