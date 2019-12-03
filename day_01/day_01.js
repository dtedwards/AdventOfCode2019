const fs = require('fs');

//TEST VALUES
const testValuesString = "12 14 1969 100756";
const testArray = testValuesString.split(" ").map(string => parseInt(string));

const calcFuelTest = (tests) => {
  var sum = 0;

  for (var i = 0; i < tests.length; i++) {
    var mass = tests[i];
    sum += Math.floor((mass/3) - 2);
  };

  return sum;
};

console.log("testValues: " +calcFuelTest(testArray));

//PART ONE
const modulesString1 =
"140170, 75120, 75645, 134664, 124948, 137630, 146662, 116881, 120030, 94332, " +
"50473, 59361, 128237, 84894, 51368, 128802, 57275, 129235, 113481, 66378, " +
"55842, 90548, 107696, 53603, 130458, 80306, 120820, 131313, 100303, 59224, " +
"123369, 140584, 60642, 68184, 103101, 82278, 51968, 51048, 98139, 60498, " +
"127082, 71197, 109478, 71286, 84840, 141305, 51800, 72352, 93147, 73549, " +
"122739, 62363, 58453, 59000, 63564, 63424, 51053, 120826, 123337, 130824, " +
"59053, 77983, 68977, 67126, 96051, 53024, 145647, 139343, 113236, 59396, " +
"146174, 148622, 83384, 86938, 100673, 80757, 107675, 147417, 124538, 136463, " +
"104609, 149559, 136037, 54997, 139674, 101638, 65739, 70029, 143847, 122035, " +
"66256, 78087, 105045, 108867, 99630, 127173, 139021, 139759, 134171, 104869";

const modulesArray1 = modulesString1.split(", ").map(string => parseInt(string));

const modulesString2 =
"140170 75120 75645 134664 124948 137630 146662 116881 120030 94332 50473 59361 128237 84894 51368 128802 57275 129235 113481 66378 55842 90548 107696 53603 130458 80306 120820 131313 100303 59224 123369 140584 60642 68184 103101 82278 51968 51048 98139 60498 127082 71197 109478 71286 84840 141305 51800 72352 93147 73549 122739 62363 58453 59000 63564 63424 51053 120826 123337 130824 59053 77983 68977 67126 96051 53024 145647 139343 113236 59396 146174 148622 83384 86938 100673 80757 107675 147417 124538 136463 104609 149559 136037 54997 139674 101638 65739 70029 143847 122035 66256 78087 105045 108867 99630 127173 139021 139759 134171 104869";

const modulesArray2 = modulesString2.split(" ").map(string => parseInt(string));

let masses1 = fs.readFileSync('input1.txt','utf8').split('\n');
let masses2 = fs.readFileSync('input2.txt','utf8').split('\n');

console.log("modulesArray1: " + modulesArray1.length);
console.log("modulesArray2: " + modulesArray2.length);
console.log("modulesString1: " + masses1.length);
console.log("modulesString2: " + masses2.length);


const calcFuel = (modules) => {
  var sum = 0;

  for (var i = 0; i < modules.length; i++) {
    var mass = modules[i];
    console.log(mass);
    if (mass != 0) {
      sum += Math.floor((mass/3) - 2);
    }
  };

  return sum;
};

console.log("modulesArray1: " + calcFuel(modulesArray1));

console.log("modulesArray2: " + calcFuel(modulesArray2));

console.log("input1: " + calcFuel(masses1));

console.log("input2: " +calcFuel(masses2));
