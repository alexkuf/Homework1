let overallPrise = 0;
function addpretzels() {
    overallPrise = overallPrise + 3;
}
function addbread() {
    overallPrise = overallPrise + 5;
}
function addcupcake() {
    overallPrise = overallPrise + 2;
}
function adddessert() {
    overallPrise = overallPrise + 4;
}
function showOverallPrice() {
    if (overallPrise > 30) {
        overallPrise = overallPrise * 0.9;
    }
    alert("מחיר שלהעגלה הוא: " + overallPrise);
}