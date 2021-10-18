"use strict";

function PositiveNegativeTester(event) {
  var testValue = event.target.value;
  if (testValue > 0) alert(testValue + " number is positive");else alert(testValue + " number is negative");
}

function DaysUntilWeekend(event) {
  switch (event.target.value) {
    case "monday":
      alert("5 days left");
      break;

    case "tuesday":
      alert("4 days left");
      break;

    case "wednesday":
      alert("3 days left");
      break;

    case "monday":
      alert("2 days left");
      break;

    case "thursday":
      alert("1 days left");
      break;

    case "friday":
      alert("tomorrow");
      break;

    case "saturday":
      alert("Weekend!");
      break;

    case "sunday":
      alert("Weekend!");
      break;

    default:
      break;
  }
}
//# sourceMappingURL=script.dev.js.map
