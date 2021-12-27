module.exports = function toReadable (number) {
    let string = number.toString(), 
units,
tens,
result;

  units = ['', 
					 'one', 
					 'two', 
					 'three', 
					 'four', 
					 'five', 
					 'six', 
					 'seven', 
					 'eight', 
					 'nine', 
					 'ten', 
					 'eleven', 
					 'twelve', 
					 'thirteen', 
					 'fourteen', 
					 'fifteen', 
					 'sixteen', 
					 'seventeen', 
					 'eighteen', 
					 'nineteen'
					];

 tens = ['', 
					'', 
					'twenty', 
					'thirty', 
					'forty', 
					'fifty', 
					'sixty', 
					'seventy', 
					'eighty', 
					'ninety'
					];

    
    if (string === '0') {
		result = 'zero';
	}
    if (number>0 && number < 20 ){
        result = units[number];
    }
    if (string.length === 2 && number > 19) {
        result = `${tens[string[0]]} ${units[string[1]]}`
    }
    if (string.length === 3 && string[1] === '0') {
        result = `${units[string[0]]} hundred ${tens[string[1]]}${units[string[2]]}`
    }

    if (string.length === 3 && string[1] !== '0') {
        result = `${units[string[0]]} hundred ${tens[string[1]]} ${units[string[2]]}`
    
    }
    if (string.length === 3 && string[1] === '1') {
     result = `${units[string[0]]} hundred ${tens[string[1]]}${units[string[1]+string[2]]}`
    
    }
      return result.trimEnd()
    };