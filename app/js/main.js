var myApp = angular.module("myApp", []);

myApp.controller("myController", ["$scope","$http", function($scope, $http) {
    $scope.milan = "zadatak koji je trebalo uraditi za htec";
    $scope.drugariView = "table.html";

    // $http and json
    // console.log(angular.toJson($scope.drugari));
    $http.get('../data/drugari.json').then(function(drugari) {
        $scope.drugari = drugari.data;
        console.log(drugari.data);
    });
}]);

// with s.split()

// function capitalizeFirstLetter(str) {
//     return str.toLowerCase()
//               .split(' ')
//         .map(function(word) {
//             return word[0].toUpperCase() + word.substr(1);
//         })
//          .join(' ');
// }
//
// console.log(capitalizeFirstLetter("Neka dugacka recenica i ne vidi joj se kkkkkk"));

// function s.split()

function mySplit(str, separator) {
  var res = [];
  var temp = "";
  for (var i = 0; i < str.length; i++) {
       if(str[i] === separator ) {
         res.push(temp);
         temp = "";
       } else {
         temp+= str[i];
       }
  }

  if (temp !== ""){
     res.push(temp);
  }
  return res;
}
function toPascalCase(word) {
    return word[0].toUpperCase() + word.substr(1);
}

function capitalizeFirstLetter(str) {
    return mySplit(str.toLowerCase(), " ")
        .map(toPascalCase)
        .join(' ');
}

console.log(capitalizeFirstLetter("Neka dugacka recenica i ne vidi joj se krajjjjj"));
console.log(mySplit("ovo je test funkcija ", " "));


// vesna

var text = "lorem ipsum dolor sit amet consectetur adipiscing elit";

function firstLetterToUppercase(text) {
  var newText = "";
  for (var i = 0; i < text.length; i++) {
    var letter = text[i];
    if (letter === " ") {
      letter = " " + text[++i].toUpperCase();
    } else if (i === 0) {
      letter = text[i].toUpperCase();
    }
    newText += letter;
  }
  return newText;
}

console.log(firstLetterToUppercase(text))
