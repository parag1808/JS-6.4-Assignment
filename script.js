function checkBrackets(str){
	var openBracketmatch = str.match(/\(/gi).length;
	var closeBracketmatch = str.match(/\)/gi).length;

	var strSpl = str.split("");
	console.log(strSpl[0]);

	if((strSpl[0] == ')') || (openBracketmatch != closeBracketmatch)){

		document.writeln("incorrect" + "<br/>");

	}else{
		
		document.writeln("correct" + "<br/>");
	}

}
