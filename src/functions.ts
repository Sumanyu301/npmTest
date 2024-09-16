import { helloProps } from "./types";
export function hello({firstname, lastname, age}: 
    helloProps) 
    {
    
        console.log("Hello");
        console.log(`your first name is ${firstname}`);
        if(lastname){
            console.log(`your last name is ${lastname}`);
        }
        if(age){
            console.log(`your age is ${age}`);
        }
        console.log("Nice cock");

}