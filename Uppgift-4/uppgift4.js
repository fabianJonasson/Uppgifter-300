function searchString(string, val) {
    if(string.includes(val)) {
        console.log(`${string} includes ${val}.`);
        if(string.startsWith(val)) {
            console.log(`${string} also starts with ${val}.`);
        }
    } else console.log(`${string} does not contain ${val}.`);
}