var eventType = prompt("How fancy is this shindig?", "Formal / Semi-Formal / Casual");
var tempFahr = prompt("By the way, what's the temperature outside?", "Degrees in Farenheit");
var clothing;
var outfit;

if (eventType === "Formal") {
  clothing = "suit";
  }
  else if (eventType === "Semi-Formal") {
    clothing = "polo";
  }
  else if (eventType === "Casual") {
    clothing = "something comfy";
  }

if (tempFahr > 70) {
  outfit = "no jacket.";
  }
  else if (tempFahr < 54) {
     outfit = "a coat.";
  }
  else if (tempFahr > 54-70) {
     outfit = "a jacket.";
  }

var results = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a " + clothing  +  " and "  +  outfit;

console.log(results);

