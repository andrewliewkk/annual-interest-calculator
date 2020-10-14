function calculate() {
    
    var initialAmt = parseFloat(document.getElementsByTagName("input")[0].value);
    var yearlyInterest = parseFloat(document.getElementsByTagName("input")[1].value);
    var myGoal = parseFloat(document.getElementsByTagName("input")[2].value);
    if (isNaN(initialAmt) && isNaN(yearlyInterest) && isNaN(myGoal)) {
        document.getElementsByTagName("td")[0].innerHTML = "0";
        document.getElementsByTagName("td")[1].innerHTML = "0.00";
    } else if (isNaN(initialAmt) || isNaN(yearlyInterest) || isNaN(myGoal)) {
        document.getElementsByTagName("td")[0].innerHTML = "-";
        document.getElementsByTagName("td")[1].innerHTML = "0.00";
    } else {
        count = 0;
        while (initialAmt < myGoal) {
            count++;
            initialAmt = initialAmt * (1 + (yearlyInterest / 100));
        }
        document.getElementsByTagName("td")[0].innerHTML = count;
        document.getElementsByTagName("td")[1].innerHTML = initialAmt.toFixed(2);
    }
    document.getElementById("table-div").style.display = "block";
}