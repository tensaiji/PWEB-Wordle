class Dictionnaire {

tableauLen = 223434;

getWord() {
  let rnd = Math.floor(Math.random() * (this.tableauLen-1));
  
  return this.dictionnaire[rnd];
}

checkWord(word) {
	return this.dictionnaire.includes(word.toUpperCase());
	/*if (this.dictionnaire.indexOf(word)==-1) {
		return false;
	}
	return true;*/
	/*let milieu = this.tableauLen/2;
	let base = 0;
	let char_i = 0;
	let mot = this.dictionnaire[milieu];
	
	while(char_i != word.length) {
		console.log(milieu);
		console.log(mot[char_i]);
		console.log(word[char_i]);
		mot = this.dictionnaire[milieu];
		while(char_i < word.length && (mot[char_i] == word[char_i])) {
			char_i++;
		}

		if(word[char_i]>mot[char_i] && word[char_i]<mot[char_i+1]) {
			return false;
		}
		else if(word[char_i]<mot[char_i] && word[char_i]>mot[char_i-1]) {
			return false;
		}

		if (char_i == word.length) {
			return true;
		}
		else {
			if (word[char_i]<mot[char_i]) {
				console.log("ici");
				milieu = base + Math.floor(milieu/2);
			}
			else {
				base = milieu;
				milieu = base + Math.floor((this.tableauLen-base)/2);
			}
		}
		
	}
	return false;*/

}

}