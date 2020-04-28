# Windows Classpath Bug

The program `app.js` should print `success`. It should be invoked as:

```
node --jvm --vm.cp=snakeyaml-1.26.jar app.js
```

On Linux, the program will execute and print `success`. On Windows, it will fail when trying to access the `Yaml`
class.

On Windows, the Graal `node` program does not seem to look at classpath arguments. 

