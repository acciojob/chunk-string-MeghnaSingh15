function stringChop(str, size) {
	 
	let str2=""
	let arr=[]
	if(str===null)
	{
		return arr
	}
	for(let i=0;i<str.length;i++)
		{
			if(str.length<size)
			{
				return str
			}
			else if(str2.length<size)
			{
				str2+=str[i];
			}
			else 
			{
				arr.push(str2)
				str2=str[i]
			}
			
		}
	if(str.length>0)
	{
		arr.push(str2)
	}
	
	return arr
  // your code here
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));