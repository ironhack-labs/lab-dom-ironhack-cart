let olympicRecords = {
    athletics100Men: "Justin Gatlin",
    athleticsLongJumpMen: "Mike Powel"
}
olympicRecords.swimming200Men = "Michael Phelps";
//console.log(olympicRecords)
for(let key in olympicRecords){
    console.log(key);
}
Object.values(olympicRecords)
//console.log(Object.keys(olympicRecords));

const students = [
    { name: "Bob", age: 17 },
    { name: "Susy", age: 18 },
    { name: "Ted", age: 18 },
    { name: "Sarah", age: 20 },
    { name: "Bill", age: 19 }
];


students.push({name:"steve", age:25})
students.push({name:"Bob", age:23})
console.log(students[2].name)

const classes = [
    [
      { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
      { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
      { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
      { firstName: 'Lulu', lastName: 'Considine', age: 20 },
      { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
    ],
    [
      { firstName: 'Charlie', lastName: 'Rolfson', age: 23 },
      { firstName: 'Austin', lastName: 'Schowalter', age: 26 },
      { firstName: 'Emie', lastName: 'Franecki', age: 29 },
      { firstName: 'Okey', lastName: 'Runte', age: 18 },
      { firstName: 'Jameson', lastName: 'Jakubowski', age: 22 }
    ],
    [
      { firstName: 'Antwan', lastName: 'Marquardt', age: 22 },
      { firstName: 'Eugenia', lastName: 'Nienow', age: 23 },
      { firstName: 'Keely', lastName: 'Hagenes', age: 29 },
      { firstName: 'Jazmin', lastName: 'Aufderhar', age: 29 },
      { firstName: 'Stanley', lastName: 'Hand', age: 22 }
    ],
    [
      { firstName: 'Vincent', lastName: 'Langworth', age: 20 },
      { firstName: 'Mervin', lastName: 'Blick', age: 28 },
      { firstName: 'Damien', lastName: 'Rohan', age: 28 },
      { firstName: 'Fabian', lastName: 'Kautzer', age: 22 },
      { firstName: 'Lilliana', lastName: 'Lesch', age: 26 }
    ],
    [
      { firstName: 'Antonette', lastName: 'Stokes', age: 25 },
      { firstName: 'Alexandrine', lastName: 'DuBuque', age: 22 },
      { firstName: 'Braeden', lastName: 'Walker', age: 26 },
      { firstName: 'Derick', lastName: 'Weber', age: 22 },
      { firstName: 'Robert', lastName: 'Beatty', age: 30 }
    ]
  ];
  console.log(classes[0][0].age)



  const schoolSystem = {
    schools: [
      {
        name: "Fake School 1",
        classRooms: [
          {
            teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
            students: [
                { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
                { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
                { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
                { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
                { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
              ]
          },
          {
            teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
            students: [
              { firstName: 'Manley', lastName: 'Doyle', age: 18 },
              { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
              { firstName: 'Sid', lastName: 'Rohan', age: 30 },
              { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
              { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
            ]
          }
        ]
       },
       {
        name: "Fake School 2",
        classRooms: [
          {
            teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
            students: [
              { firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
              { firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
              { firstName: 'Mikayla', lastName: 'Braun', age: 23 },
              { firstName: 'Rickie', lastName: 'White', age: 22 },
              { firstName: 'Rose', lastName: 'Collins', age: 30 }
            ]
          },
          {
            teacher: { firstName: 'Green', lastName: 'Sauer', age: 25 },
            students: [
              { firstName: 'Melany', lastName: 'Welch', age: 25 },
              { firstName: 'Paxton', lastName: 'Corkery', age: 22 },
              { firstName: 'Nellie', lastName: 'Hauck', age: 26 },
              { firstName: 'Eunice', lastName: 'Hirthe', age: 26 },
              { firstName: 'Aylin', lastName: 'Barrows', age: 26 }
             ]
           }
         ]
       },
       {
        name: "Fake School 3",
        classRooms: [
          {
            teacher: { firstName: 'Nikko', lastName: 'Crist', age: 42 },
            students: [
              { firstName: 'Christop', lastName: 'Hahn', age: 26 },
              { firstName: 'Newell', lastName: 'Kemmer', age: 27 },
              { firstName: 'Katheryn', lastName: 'Heller', age: 26 },
              { firstName: 'Saul', lastName: 'Heathcote', age: 20 },
              { firstName: 'Maudie', lastName: 'Haley', age: 30 }
            ]
          },
          {
            teacher: { firstName: 'Nathanael', lastName: 'Hansson', age: 50 },
            students: [
              { firstName: 'Jensen', lastName: 'Reichel', age: 21 },
              { firstName: 'Lois', lastName: 'Kulas', age: 28 },
              { firstName: 'Caterina', lastName: 'Wolff', age: 28 },
              { firstName: 'Dahlia', lastName: 'Collier', age: 24 },
              { firstName: 'Linwood', lastName: 'Langosh', age: 26 }
            ]
          }
        ]
      }
    ]
  };
  console.log(schoolSystem.schools[0].classRooms[0].teacher.firstName)

  function changeFlex(e, t) {
    for (var n = document.querySelectorAll("." + e), l = document.querySelector("#" + t), r = 0; r < n.length; r++) n[r].addEventListener("change", function() {
      var e = this.value;
      l.setAttribute("class", "flex-container " + e)
    }, !1)
  }
  
  function changeItemFlex(e, t) {
    for (var n = document.querySelectorAll("." + e), l = document.querySelector("#" + t), r = 0; r < n.length; r++) n[r].addEventListener("change", function() {
      var e = this.value;
      l.setAttribute("class", "item " + e)
    }, !1)
  }
  
  function changeFlexBasis(e, t) {
    var n = isNaN(e.value) ? 0 : e.value;
    console.log("B: " + n), document.querySelector("#" + t).style.WebkitFlexBasis = n + "%", document.querySelector("#" + t).style.flexBasis = n + "%"
  }
  
  function changeFlexGrow(e, t) {
    var n = isNaN(e.value) ? 0 : e.value;
    console.log("G: " + n), document.querySelector("#" + t).style.WebkitFlexGrow = n, document.querySelector("#" + t).style.flexGrow = n
  }
  
  function changeFlexShrink(e, t) {
    var n = isNaN(e.value) ? 0 : e.value;
    console.log("S: " + n), document.querySelector("#" + t).style.WebkitFlexShrink = n, document.querySelector("#" + t).style.flexShrink = n
  }
  
  function changeFlexOrder(e, t) {
    var n = isNaN(e.value) ? 0 : e.value;
    console.log("O: " + n), document.querySelector("#" + t).style.WebkitOrder = n, document.querySelector("#" + t).style.order = n
  }
  
  function changeAll(e, t, n, l) {
    changeFlexBasis(e, l), changeFlexGrow(t, l), changeFlexShrink(n, l)
  }
  for (var items = document.querySelectorAll(".item"), i = 0; i < items.length; i++)
    if (items[i].hasAttribute("data-color")) {
      var color = items[i].getAttribute("data-color");
      items[i].style.backgroundColor = "#" + color
    }
  for (var flexO = document.querySelectorAll(".flex-order"), o = 0; o < flexO.length; o++) flexO[o].addEventListener("change", function() {
    changeFlexOrder(this, "order" + this.id)
  }, !1);
  changeFlex("flex-direction", "direction"), changeFlex("flex-wrap", "wrap"), changeFlex("flex-align-items", "align"), changeFlex("justify-content", "justify"), changeFlex("align-content", "alignContent"), changeItemFlex("align-self", "alignSelf");
  for (var flexGrow = document.querySelectorAll(".flex-grow"), i = 0; i < flexGrow.length; i++) flexGrow[i].addEventListener("change", function() {
    var e = "item" + this.id;
    changeFlexGrow(this, e)
  });
  for (var flexShrink = document.querySelectorAll(".flex-shrink"), j = 0; j < flexShrink.length; j++) flexShrink[j].addEventListener("change", function() {
    var e = "item" + this.id;
    changeFlexShrink(this, e)
  });
  var B1 = document.querySelector("#B1"),
    G1 = document.querySelector("#G1"),
    S1 = document.querySelector("#S1"),
    B2 = document.querySelector("#B2"),
    G2 = document.querySelector("#G2"),
    S2 = document.querySelector("#S2");
  B1.addEventListener("change", function() {
    changeAll(B1, G1, S1, "item1")
  }), G1.addEventListener("change", function() {
    changeAll(B1, G1, S1, "item1")
  }), S1.addEventListener("change", function() {
    changeAll(B1, G1, S1, "item1")
  }), B2.addEventListener("change", function() {
    changeAll(B2, G2, S2, "item2")
  }), G2.addEventListener("change", function() {
    changeAll(B2, G2, S2, "item2")
  }), S2.addEventListener("change", function() {
    changeAll(B2, G2, S2, "item2")
  });