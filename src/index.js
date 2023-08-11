module.exports =    function toReadable(number) {

    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    // const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '',  'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];



    if (number < 20) {
        return units[number];
    } else if (number < 100) {
        return tens[Math.trunc(number / 10)] + (number % 10 === 0 ? '': ' ' + units[number % 10]);
    } else {
        return hundreds[Math.floor(number / 100)] + (number % 100 === 0 ? '':' ' + toReadable(number % 100));
    }
}






