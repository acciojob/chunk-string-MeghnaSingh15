function stringChop(str, size) {
	let arr = [];
    for (let i = 0; i < str.length; i += parseInt(size)) {
        arr.push(str.slice(i, i + parseInt(size)));
    }
    return arr;
}


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
