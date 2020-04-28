// We can load a JDK type
Java.type(`java.math.BigInteger`) 
// On windows, we cannot load this type. 
// On Linux, we can.
Java.type(`org.yaml.snakeyaml.Yaml`)

console.log(`success`)
