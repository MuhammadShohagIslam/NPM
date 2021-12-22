/*
    *** What is NPM? ***
        => NPM is the world's largest software registry. 
        => The third party libraries in our project are managed by NPM

    *** What is Package.JSON ***
        => package.json is the heart of our project.
        => We find every details of the project here.
        => This file holds every information of the project.

    *** In the Package.json, We find Two Main Types of Dependency:
        => Dependencies
        => DevDependencies

       *** Dependencies: This is a object, where we can find our project depends on which third party package.
                or holding the third party libraries used in our application.

       *** DevDependencies: This kind of dependencies are used only  for development purpose. 
                It does no harm to the project.
        
        *** Script: The 'scripts' property is a dictionary containing script commands 
                that run at various times in the lifecycle of our pacakge.
        => The key is the lifecycle event, and the value is the command run at the point.

        *** main: The main field is a module ID that is the primary entry point to our program.

        *** name: The name is what our project is called.

        *** keywords: It is an array of strings. This helps people discover our pacakge as it's listed in npm search.

        *** Description: It's a string. This helps people discover your package, as it's listed in npm search.

        *** Author: The "author" is one person.

*/
// importing a package which is included dependencies
const chalkAnimation = require('chalkercli');

chalkAnimation.rainbow('Lorem ipsum dolor sit amet');
console.log(20);
