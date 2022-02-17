module.exports = function toReadable (number) {
    let phrase = 'wrong range';
    
    const underTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    const firstRank = number % 10; // units
    const secondRank = Math.trunc((number % 100) /10); // tens
    const thirdRank = Math.trunc(number / 100); // hundrets

    const getThird = (num) => (num != 0) ? `${underTwenty[num]} hundred` : '';

    const getSecond = (num) => (num >= 2) ? ` ${tens[num-2]}` : '';

    const getFirst = (numTwo, numOne) => {
      if (numTwo == 1) {
          return ` ${underTwenty[numTwo*10 + numOne]}`;
      } else if ((numOne > 0)) {
          return ` ${underTwenty[numOne]}`;
      } else return '';
    };
       
    if (number === 0){
        phrase = 'zero';
    } else if ((number > 0) && ( number < 1000)) {
        phrase = getThird(thirdRank) + getSecond(secondRank) + getFirst(secondRank, firstRank);
    }; 

    return phrase.trim();
}
