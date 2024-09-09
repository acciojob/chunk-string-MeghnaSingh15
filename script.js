// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
describe('My Test', () => {
  it('should work', () => {
    cy.visit(baseUrl, { 
      onBeforeLoad(win) { 
        // Stub your functions here 
        cy.stub(win, "prompt").onFirstCall().returns('some string').onSecondCall().returns(5); 
      } 
    }); 

    // Rest of your test code here
	function stringChop(str, size) {
		
		let arr = [];
	    for (let i = 0; i < str.length; i += parseInt(size)) {
	        arr.push(str.slice(i, i + parseInt(size)));
    }
    return arr;
}

    cy.on("window:alert", str => { 
      expect(str.toString()).to.equal([].toString()); 
    }); 
  });
});