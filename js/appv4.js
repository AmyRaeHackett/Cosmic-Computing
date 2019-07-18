"use strict";

// A variable to represent the selected map
var currentLevel = 0;

//for resetting position of rocket - value will change depending on level
var rocketMarginLeft;
var rocketMarginTop;

//defining the rocket coordinates
var rocketX = 150;
var rocketY = 450;

//storing original coordinates in constant variable
var rocketX1 = rocketX;
var rocketY1 = rocketY;

var map = [];

var something = -1; //using this variable to increment so that each image will have an individual id name
//also used it to give each value in the array an individual name

var algorithmLevelMoves;
var functionTwoLevelMoves;

chooseLevel();

function chooseLevel() {
    if (currentLevel === 0) {
        //level 0 map
        map = [
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];


        // map 0 selected
        // next step: insert img tags

        $('.canvas')
            .prepend('<img id="rocketman"/>')
            .prepend('<img id="planetDestination"/>');

        jQueryVariables(); //calling function that puts above img elements into variables

        //for resetting position of rocket - value will change depending on level
        rocketMarginLeft = '45.5%';
        rocketMarginTop = '55%';

        //number of moves you can make
        algorithmLevelMoves = 10;
        functionTwoLevelMoves = 4;

        //defining the rocket coordinates
        rocketX = 250;
        rocketY = 350;
        rocketX1 = rocketX;
        rocketY1 = rocketY;
        insertDOMandCSS0();
        //setTimeout(instructions, 750); //instructions
    }

    if (currentLevel === 1) {
        //level 1 map
        map = [
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 4, 0, 0, 3, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];


        // map 1 selected
        // next step: insert img tags

        $('.canvas')
            .prepend('<img id="rocketman"/>')
            .prepend('<img id="planetMetal"/>')
            .prepend('<img id="planetFire"/>')
            .prepend('<img id="planetDestination"/>')
        /*  .prepend('<img id="hint"/>') */;

        jQueryVariables(); //calling function that puts above img elements into variables

        //for resetting position of rocket - value will change depending on level
        rocketMarginLeft = '27.4%';
        rocketMarginTop = '72.75%';

        //number of moves you can make
        algorithmLevelMoves = 10;
        functionTwoLevelMoves = 4;

        //defining the rocket coordinates
        rocketX = 150;
        rocketY = 450;
        rocketX1 = rocketX;
        rocketY1 = rocketY;
        insertDOMandCSS1();
    }

    // if level 2:
    if (currentLevel === 2) {

        //level 2 map
        map = [
            [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 0, 0, 0, 6, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0]
        ];


        // map 2 selected
        // next step: insert img tags for lvl 2
        $('.canvas')/* .prepend('<img id="hint"/>') */
            .prepend('<img id="planetIce" class="planetIce_3"/>')
            .prepend('<img id="planetIce" class="planetIce_2"/>')
            .prepend('<img id="planetIce" class="planetIce_1"/>')
            .prepend('<img id="planetEarth"/>')
            .prepend('<img id="planetDestination"/>')
            .prepend('<img id="planetFire"/>')
            .prepend('<img id="planetMetal" class="planetMetal_3"/>')
            .prepend('<img id="planetMetal" class="planetMetal_2"/>')
            .prepend('<img id="planetMetal" class="planetMetal_1"/>')
            .prepend('<img id="rocketman"/>');

        jQueryVariables(); //calling function that puts above img elements into variables

        //for resetting position of rocket - value will change depending on level
        rocketMarginLeft = '36.4%';
        rocketMarginTop = '81.75%';

        //number of moves you can make
        algorithmLevelMoves = 10;
        functionTwoLevelMoves = 4;

        //defining the rocket coordinates
        rocketX = 200;
        rocketY = 500;
        rocketX1 = rocketX;
        rocketY1 = rocketY;
        insertDOMandCSS2();
    }
}

/*JQUERY VARIABLES*/
//modal
var $modalText = $("#modalText");
var $modalTitle = $("#title");
var $modalImage = $("#modalImage");
var $modalNext = $("#next");
var $point = $("#point");

//jQuery canvas elements
var $planetFire;
var $planetMetal;
var $planetDestination;
var $planetEarth;
var $rocketAnimate;
var $hint;

//putting it in a function because variables can only be assigned after the images have been created in the chooseLevel() function
function jQueryVariables() {
    $hint = $("#hint");
    $planetEarth = $("#planetEarth");
    $planetDestination = $("#planetDestination");
    $planetMetal = $("#planetMetal");
    $rocketAnimate = $("#rocketman");
    $planetFire = $("#planetFire");
}

//jQuery accessing arrows
var $right = $("#right");
var $left = $("#left");
var $up = $("#up");
var $down = $("#down");
var $functTwoSelect = $("#functiontwoselect");
var $run = $("#run");
var $stop = $("#stop");

//jQuery icons
var $mainFunctionIcon = $("#mainfunction");
var $functionTwoIcon = $("#functiontwo");

/*END OF JQUERY VARIABLES*/

//DOM accessing modal
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function insertDOMandCSS0() {
    $rocketAnimate.attr('src', 'img/playfield/spaceship_pink.png').css({
        'position': 'absolute',
        'margin-left': rocketMarginLeft,
        'margin-top': rocketMarginTop,
        'max-height': 'auto',
        'max-width': '9%',
        'z-index': '1'
    });

    $planetDestination.attr('src', 'img/playfield/planets/planet_destination.png').css({
        'position': 'absolute',
        'margin-left': '42%',
        'margin-top': '0%',
        'max-height': 'auto',
        'max-width': '15%',
        'transform': 'rotate(30deg)'
    });

}


// below function loads DOM and CSS for map 1 only
function insertDOMandCSS1() {
    // a function to load DOM and CSS elements based on map.

    $planetFire.attr('src', 'img/playfield/planets/planet_fire.png').css({
        'position': 'absolute',
        'margin-left': '27.4%',
        'margin-top': '36.5%',
        'max-height': 'auto',
        'max-width': '9%'
    });

    $planetMetal.attr('src', 'img/playfield/planets/planet_metal.png').css({
        'position': 'absolute',
        'margin-left': '54.6%',
        'margin-top': '72.75%',
        'max-height': 'auto',
        'max-width': '9%'
    });

    $planetDestination.attr('src', 'img/playfield/planets/planet_destination.png').css({
        'position': 'absolute',
        'margin-left': '42%',
        'margin-top': '0%',
        'max-height': 'auto',
        'max-width': '15%',
        'transform': 'rotate(30deg)'
    });

    $rocketAnimate.attr('src', 'img/playfield/spaceship_pink.png').css({
        'position': 'absolute',
        'margin-left': rocketMarginLeft,
        'margin-top': rocketMarginTop,
        'max-height': 'auto',
        'max-width': '9%',
        'z-index': '1'
    });

    /*     $hint.attr("src", "hint.png").css({
            'position': 'absolute',
            'margin-left': '90.5%'
        }); */
}

// Insert DOM and CSS for map 2
function insertDOMandCSS2() {
    $rocketAnimate.attr('src', 'img/playfield/spaceship_pink.png').css({
        'position': 'absolute',
        'margin-left': rocketMarginLeft,
        'margin-top': rocketMarginTop,
        'max-height': 'auto',
        'max-width': '9%',
        'z-index': '1'
    });

    $('.planetMetal_1').attr('src', 'img/playfield/planets/planet_metal.png').css({
        'position': 'absolute',
        'margin-left': '18.2%',
        'margin-top': '63.7%',
        'max-height': 'auto',
        'max-width': '9%'
    });

    $('.planetMetal_2').attr('src', 'img/playfield/planets/planet_metal.png').css({
        'position': 'absolute',
        'margin-left': '27.3%',
        'margin-top': '63.7%',
        'max-height': 'auto',
        'max-width': '9%'
    });

    $('.planetMetal_3').attr('src', 'img/playfield/planets/planet_metal.png').css({
        'position': 'absolute',
        'margin-left': '36.4%',
        'margin-top': '63.7%',
        'max-height': 'auto',
        'max-width': '9%'
    });

    $planetFire.attr('src', 'img/playfield/planets/planet_fire.png').css({
        'position': 'absolute',
        'margin-left': '27.4%',
        'margin-top': '45.55%',
        'max-height': 'auto',
        'max-width': '9%'
    });

    $planetDestination.attr('src', 'img/playfield/planets/planet_destination.png').css({
        'position': 'absolute',
        'margin-left': '60.5%',
        'margin-top': '0%',
        'max-height': 'auto',
        'max-width': '15%',
        'transform': 'rotate(30deg)'
    });

    $planetEarth.attr('src', 'img/playfield/planets/planet_earth.png').css({
        'position': 'absolute',
        'margin-left': '63.75%',
        'margin-top': '45.55%',
        'max-height': 'auto',
        'max-width': '9%'
    });

    $('.planetIce_1').attr('src', 'img/playfield/planets/planet_ice.png').css({
        'position': 'absolute',
        'margin-left': '45.6%',
        'margin-top': '27.4%',
        'max-height': 'auto',
        'max-width': '9%'
    });

    $('.planetIce_2').attr('src', 'img/playfield/planets/planet_ice.png').css({
        'position': 'absolute',
        'margin-left': '54.6%',
        'margin-top': '27.4%',
        'max-height': 'auto',
        'max-width': '9%'
    });

    $('.planetIce_3').attr('src', 'img/playfield/planets/planet_ice.png').css({
        'position': 'absolute',
        'margin-left': '63.7%',
        'margin-top': '27.4%',
        'max-height': 'auto',
        'max-width': '9%'
    });

    /*     $hint.attr("src", "hint.png").css({
            'position': 'absolute',
            'margin-left': '90.5%'
        }); */
}

// function to find rocket index (value 4 in the array).
function findRocketPosition() {
    var posArray = [];
    for (var i in map) {
        for (var j in map[i]) {
            if (map[i][j] == 4) {
                console.log("Rocket is at index [" + i + "][" + j + "]");
                posArray.push(parseInt(i), parseInt(j));
                return posArray;
            }
        }
    }
}

var rocketPosition = findRocketPosition();

//storing original index position array in const array
var originalRocketIndex = rocketPosition;

// get height and width of the map
var mapHeight = map.length;
var mapWidth = map[0].length;

//the main array/algorithm the user creates
var algorithm = [];

//the secondary array that the user creates which they can use inside the main one
var functionTwo = [];

//variables that store the array - will be changed depending on what function is clicked by the user
var arraySelect; //array
var classSelect; //array images


//canvas attributes
var tileWidth = 50;
var tileHeight = 50;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//for resetting position of rocket - value will change depending on level
// var styleLeft = "150px";
// var styleBottom = "50px";

//number of moves you can make in level
var levelMoves;

// //defining the rocket coordinates
// moved to level checker at line 35
// var rocketX = 150;
// var rocketY = 450;

//storing original coordinates in constant variable
// const rocketX1 = rocketX;
// const rocketY1 = rocketY;

// Added images to represent space, planets etc
var black = new Image;
black.src = "img/playfield/black.png";

var ice = new Image;
ice.src = "img/playfield/planets/planet_ice.png";

var fire = new Image;
fire.src = "img/playfield/planets/planet_fire.png";

var metal = new Image;
metal.src = "img/playfield/planets/planet_metal.png";

var earth = new Image;
earth.src = "img/playfield/planets/planet_earth.png";

var moon = new Image;
moon.src = "img/playfield/planets/planet_moon.png";

var lava = new Image;
lava.src = "img/playfield/planets/planet_lava.png";

// var background = new Image;
// background.src = "playfiled bg.png";

var xPosition, yPosition = 0;


//drawing the canvas
function makeGame() {
// assigning the map array to the canvas to draw a board
    for (var i in map) {
        for (var j in map[i]) {
            if (map[i][j] === 0) {
                ctx.globalAlpha = 0.1;
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(black, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 1) {
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(black, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 2) {
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(fire, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 3) {
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(metal, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 4) {
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(black, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 5) {
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(ice, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 6) {
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(earth, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 7) {
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(moon, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 8) {
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(lava, xPosition, yPosition, 50, 50);
            }

            xPosition = xPosition + 50;
        }
        yPosition = yPosition + 50;
        xPosition = 0;
    }
    yPosition = 0;
}

$(document).ready(function () {
    initialise();
    //insertDOMandCSS1();
});

function initialise() {
    $(document).ready(function () {
        setTimeout(makeGame, 10); // weird bug, 1 setTimeout doesnt work, need two? No idea why.
        setTimeout(makeGame, 100);
    });
}


//object to store the position of the rocket
var movementObject = {
    x: rocketX,
    y: rocketY
};
console.log("The current coordinates are: " + movementObject.x, movementObject.y);


/*CHECKING WHICH FUNCTION THE USER HAS CLICKED ON TO ENTER ALGORITHM (function one array or function two array)*/
$mainFunctionIcon.click(startState);

$functionTwoIcon.click(function () {
    //update variable values that will be used in movementFunction()
    arraySelect = functionTwo; //directions selected will be put into this array
    classSelect = $(".func-space"); //images put into this class
    levelMoves = functionTwoLevelMoves; //can only enter 4 moves
    $functionTwoIcon.css("color", "#F5BC6C"); //highlight
    $functionTwoIcon.css("font-weight", "bold");
    $mainFunctionIcon.css("color", "white"); //reset
    $mainFunctionIcon.css("font-weight", "") //reset 
});

//begin game with the main function already clicked
function startState() {
    arraySelect = algorithm; //directions selected will be put into this array
    classSelect = $(".algo-space"); //images put into this class
    levelMoves = algorithmLevelMoves; //can only enter 10 moves
    $mainFunctionIcon.css("color", "#F5BC6C"); //highlight
    $mainFunctionIcon.css("font-weight", "bold"); //highlight
    $functionTwoIcon.css("color", "white");
    $functionTwoIcon.css("font-weight", "");//reset */
}

/*MOVING THE ROCKET*/
function movementFunction() {
    $right.click(function () {
        //if statement so that users can only add certain number of moves in the algorithm
        if (arraySelect.length < levelMoves) {
            something++;
            $(classSelect).append('<img src="img/playfield/right.png" id = "rightAlgorithm" alt = "Right arrow" width="20%" height="20%" class="added"/>'); //drawing image
            var rightAlgorithm = $("#rightAlgorithm").attr("id", "rightAlgorithm" + something); //unique id name for each image
            var rightPush = "right" + something;
            arraySelect.push(rightPush);
            removeMove(rightAlgorithm, rightPush, arraySelect);
        }
    });

    $left.click(function () {
        if (arraySelect.length < levelMoves) {
            something++;
            $(classSelect).append('<img src="img/playfield/left.png" id = "leftAlgorithm" alt = "Left arrow" width="20%" height="20%" class="added"/>');
            var leftAlgorithm = $("#leftAlgorithm").attr("id", "leftAlgorithm" + something);
            var leftPush = "left" + something;
            arraySelect.push(leftPush);
            removeMove(leftAlgorithm, leftPush, arraySelect);

        }
    });

    $up.click(function () {
        if (arraySelect.length < levelMoves) {
            something++;
            $(classSelect).append('<img src="img/playfield/up.png" id = "upAlgorithm" alt = "Up arrow" width="20%" height="20%" class="added"/>');
            var upAlgorithm = $("#upAlgorithm").attr("id", "upAlgorithm" + something);
            var upPush = "up" + something;
            arraySelect.push(upPush);
            removeMove(upAlgorithm, upPush, arraySelect);

        }
    });

    $down.click(function () {
        if (arraySelect.length < levelMoves) {
            something++;
            $(classSelect).append('<img src="img/playfield/down.png" id = "downAlgorithm" alt = "Down arrow" width="20%" height="20%" class="added"/>');
            var downAlgorithm = $("#downAlgorithm").attr("id", "downAlgorithm" + something);
            var downPush = "down" + something;
            arraySelect.push(downPush);
            removeMove(downAlgorithm, downPush, arraySelect);

        }
    });


    $functTwoSelect.click(function () {
        if (arraySelect.length < levelMoves) {

            if (arraySelect === algorithm) {
                something++;
                $(classSelect).append('<img src="img/playfield/algo-button.png" id = "secondfunction" alt = "Function 2 image" width="20%" height="20%" class="added"/>');
                var functionTwoAlgorithm = $("#secondfunction").attr("id", "secondfunction" + something);

                /*
                for (var i in functionTwo) {
                    arraySelect.push(functionTwo[i])
                }*/

                arraySelect.push(functionTwo); //causes alert to display as soon as F2 is entered - but it
                // only happens if the winning/losing condition is inside F2, so it will at most only be 4 iterations early...setTimeout? not great though
                removeMove(functionTwoAlgorithm, functionTwo, arraySelect);
            }
        }

        //handling loops (calling F2 inside F2)
        if (arraySelect === functionTwo) {
            for (var i = 0; i <= 3; i++) {
                for (var j in functionTwo) {
                    functionTwo.push(functionTwo[j]);

                }
            }
            something++;
            $(classSelect).append('<img src="img/playfield/algo-button.png" id = "secondfunction" alt = "Function 2 image" width="20%" height="20%" />');
            var functionTwoAlgorithm = $("#secondfunction").attr("id", "secondfunction" + something);
            removeMove(functionTwoAlgorithm, functionTwo, arraySelect);
        }
    });

    console.log("The current coordinates are: " + movementObject.x, movementObject.y);
    runButton();
}


//function for removing parts of algorithm
function removeMove(image, direction, thisArray) {
    image.click(function () {

            image.remove(); //removes the image clicked
            thisArray.splice(thisArray.indexOf(direction), 1); //removes index from correct array

            var images = $(".func-space").children("img"); //accessing images within function 2 grid so that we can set the function 2 array length back to
            //however many images are in the grid (easy way to reset the array)

            //if the user removes F2 from F2
            if (thisArray === functionTwo && direction === functionTwo) {
                for (var i = 0; i <= images.length; i++) {
                    functionTwo.length = images.length - 1; //amount of images that are present
                }
            }
        }
    );
}

function clickElements() {
    $hint.click(function () {
        modal.style.display = "block";
        $modalText.text("Instructions...");
        $modalTitle.text("Hint").css("font-weight", "bold");
        $modalImage.attr("src", "");
        $modalNext.attr("src", "");
        $point.hide();
    });

    $planetFire.click(function () {
        modal.style.display = "block";
        $modalImage.attr("src", "img/playfield/planets/planet_fire.png").css("height", "5%", "width", "5%");
        $modalText.text("Fire");
        $modalTitle.text("Planet").css("font-weight", "bold");
        $modalNext.attr("src", "");
        $point.hide();
    });

    $planetMetal.click(function () {
        modal.style.display = "block";
        $modalImage.attr("src", "img/playfield/planets/planet_metal.png").css("height", "5%", "width", "5%");
        $modalText.text("Metal");
        $modalTitle.text("Planet").css("font-weight", "bold");
        $modalNext.attr("src", "");
        $point.hide();
    });

    $planetDestination.click(function () {
        modal.style.display = "block";
        $modalImage.attr("src", "img/playfield/planets/planet_destination.png").css("height", "5%", "width", "5%");
        $modalText.text("This is your destination!");
        $modalTitle.text("Planet").css("font-weight", "bold");
        $modalNext.attr("src", "");
        $point.hide();
    });

    $rocketAnimate.click(function () {
        modal.style.display = "block";
        $modalImage.attr("src", "img/playfield/planets/spaceship_pink.png").css("height", "10%", "width", "10%");
        $modalText.text("Move the rocket to its destination by using the arrow keys below.");
        $modalTitle.text("Rocket").css("font-weight", "bold");
        $modalNext.attr("src", "");
        $point.hide();
    });


    //comment out so that user can't skip the intro demo

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

//every time you hit run, the rocket will return back to its original position and go from there
function originalPos() {

    $rocketAnimate.attr("src","img/playfield/spaceship_pink.png");

    //reset animation
    //resetting the rocket to its default position
    $rocketAnimate.css({
        'margin-left': rocketMarginLeft,
        'margin-top': rocketMarginTop
    });

    //reset coordinates
    rocketX = rocketX1;
    rocketY = rocketY1;

    //reset map and rocketPosition arrays back so rocket index is at original position
    //replacing value 4 in the array with 0 to replace it
    for (var i in map) {
        for (var j in map[i]) {
            if (map[i][j] === 4) {
                map[i][j] = 0;
            }
        }
    }

    rocketPosition = originalRocketIndex;

}

var moveCounter = -1;

var stopClicked = false;

function stopAnimation() {
    stopClicked = true;

    if (stopClicked === true) {
        $rocketAnimate.stop(); //stop animating
        originalPos(); //return to original position
        SWalAlertCall = function () {
            //empty function, does nothing
        };
        $rocketAnimate.attr("src", "img/playfield/spaceship_pink.png");
        stopClicked = false;
        console.log(moveCounter);
        SWalAlertCall = oldFunction;
    }
}

function runButton() {
    $run.click(function () {

            lossAndVictoryArray = [];

            //the function will only run if the rocket is not currently animating because otherwise if the run button is hit repeatedly
            //the rocket can go off canvas
            if (!$rocketAnimate.is(':animated')) {

                originalPos();

                /*
                //rocket goes back in original position
                if (algorithm.length > 0) {
                    originalPos();
                }*/


                for (var x in algorithm) {

                    $stop.click(stopAnimation);//stop animation when stop button is clicked

                    //animating the function 2 values when called in the main algorithm, tracking loss and victory, updating rocket index
                    if (typeof algorithm[x] === "object") {

                        for (var i in algorithm[x]) {

                            $stop.click(stopAnimation); //stop animation when stop button is clicked

                            //right
                            if (algorithm[x][i].charAt(0) === "r") {
                                moveRight();
                            }

                            //left
                            if (algorithm[x][i].charAt(0) === "l") {
                                moveLeft();
                            }

                            //up
                            if (algorithm[x][i].charAt(0) === "u") {
                                moveUp();
                            }

                            //down
                            if (algorithm[x][i].charAt(0) === "d") {
                                moveDown();
                            }
                        }
                    }

                    //animating main algorithm, tracking loss and victory, updating rocket index
                    //right
                    else if (algorithm[x].charAt(0) === "r") {
                        moveRight();
                    }

                    //down
                    else if (algorithm[x].charAt(0) === "d") {
                        moveDown();
                    }

                    //left
                    else if (algorithm[x].charAt(0) === "l") {
                        moveLeft();
                    }
                    //up
                    else if (algorithm[x].charAt(0) === "u") {
                        moveUp();
                    }

                    console.log(algorithm);
                }
                moveCounter = -1;
            }
        }
    );
}

// test for sound
// var rMove = new Audio("pop.wav");// TestSound
// rMove.loop = false;// TestSound

// var rVictory = new Audio("victory.wav");// TestSound
// rVictory.loop = false;// TestSound

// var rLoss = new Audio("loss.wav");// TestSound
// rLoss.loop = false;// TestSound


var lossAndVictoryArray = [];

function moveRight() {
    if (rocketX >= canvas.width - tileWidth) {
        $rocketAnimate.animate({'margin-left': "+=0%"}, "fast");
    } else {
        $rocketAnimate.animate({'margin-left': "+=9%"}, "fast", SWalAlertCall);
        rocketX += 50;
    }

    if (rocketPosition[1] < mapWidth - 1) {
        if ((map[rocketPosition[0]][rocketPosition[1] + 1] == 2) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 3) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 5) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 6) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 7) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 8)) {
            lossAndVictoryArray.push("lose");
        } else if (map[rocketPosition[0]][rocketPosition[1] + 1] == 1) {
            lossAndVictoryArray.push("win");
        } else {
            var temp = map[rocketPosition[0]][rocketPosition[1] + 1];
            map[rocketPosition[0]][rocketPosition[1] + 1] = 4;
            map[rocketPosition[0]][rocketPosition[1]] = temp;
            rocketPosition = findRocketPosition();
            lossAndVictoryArray.push("run");
        }
    }
}


function moveDown() {
    if (rocketY >= canvas.height) {
        $rocketAnimate.animate({'margin-top': "+=0%"}, "fast");
    } else {
        $rocketAnimate.animate({'margin-top': "+=9%"}, "fast", SWalAlertCall);
        console.log(rocketY);
        rocketY += 50;
    }

    if (rocketPosition[0] < mapHeight - 1) {
        if ((map[rocketPosition[0] + 1][rocketPosition[1]] == 2) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 3) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 5) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 6) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 7) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 8)) {
            lossAndVictoryArray.push("lose");
        } else if (map[rocketPosition[0] + 1][rocketPosition[1]] == 1) {
            lossAndVictoryArray.push("win");
        } else {
            var temp = map[rocketPosition[0] + 1][rocketPosition[1]];
            map[rocketPosition[0] + 1][rocketPosition[1]] = 4;
            map[rocketPosition[0]][rocketPosition[1]] = temp;
            rocketPosition = findRocketPosition();
            lossAndVictoryArray.push("run");
        }
    }

}

function moveLeft() {
    if (rocketX <= 0) {
        //edge of canvas - do nothing
        $rocketAnimate.animate({'margin-left': "-=0%"}, "fast");
    } else {
        $rocketAnimate.animate({'margin-left': "-=9%"}, "fast", SWalAlertCall);
        rocketX -= 50;
    }


    if (rocketPosition[1] > 0) {
        if ((map[rocketPosition[0]][rocketPosition[1] - 1] == 2) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 3) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 5) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 6) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 7) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 8)) {
            lossAndVictoryArray.push("lose");
        } else if (map[rocketPosition[0]][rocketPosition[1] - 1] == 1) {
            lossAndVictoryArray.push("win");
        } else {
            var temp = map[rocketPosition[0]][rocketPosition[1] - 1];
            map[rocketPosition[0]][rocketPosition[1] - 1] = 4;
            map[rocketPosition[0]][rocketPosition[1]] = temp;
            rocketPosition = findRocketPosition();
            lossAndVictoryArray.push("run");
        }
    }
}

function moveUp() {
    if (rocketY <= tileHeight) {
        $rocketAnimate.animate({'margin-top': "-=0%"}, "fast");

    } else {
        $rocketAnimate.animate({'margin-top': "-=9%"}, "fast", SWalAlertCall);
        rocketY -= 50;
    }


    if (rocketPosition[0] > 0) {
        if ((map[rocketPosition[0] - 1][rocketPosition[1]] == 2) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 3) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 5) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 6) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 7) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 8)) {
            lossAndVictoryArray.push("lose");
        } else if (map[rocketPosition[0] - 1][rocketPosition[1]] == 1) {
            lossAndVictoryArray.push("win");
        } else {
            var temp = map[rocketPosition[0] - 1][rocketPosition[1]];
            map[rocketPosition[0] - 1][rocketPosition[1]] = 4;
            map[rocketPosition[0]][rocketPosition[1]] = temp;
            rocketPosition = findRocketPosition();
            lossAndVictoryArray.push("run");
        }
    }

}

function loadNewLevel() {
    // temporary test to change level
    $('.canvas > img').remove();
    $('.algo-space > .added').remove();
    $('.func-space > .added').remove();

    // change from level one to level two:
    if (currentLevel === 0) {
        currentLevel = 1;
    } else if (currentLevel === 1) {
        currentLevel = 2;
    } else if (currentLevel === 2) {
        currentLevel = 1;
    }

    // make new level
    chooseLevel();
    makeGame();
    // update rocket position for new map
    rocketPosition = findRocketPosition();

    //storing original index position array in const array
    originalRocketIndex = rocketPosition;

    //the main array/algorithm the user creates
    algorithm = [];

    //the secondary array that the user creates which they can use inside the main one
    functionTwo = [];

    lossAndVictoryArray = [];

    winCondition = false;

    $rocketAnimate = $("#rocketman");

    something = -1;

    movementObject = {
        x: rocketX,
        y: rocketY
    };
    console.log("The current coordinates are: " + movementObject.x, movementObject.y);

    arraySelect = [];
    moveCounter = -1;

    startState();
    clickElements();
}


var winCondition = false;

var SWalAlertCall = function () {

    moveCounter++;
    console.log("array: " + lossAndVictoryArray);
    console.log("move: " + moveCounter);

    //checking to see whether the rocket has hit a planet
    for (var i in lossAndVictoryArray) {

        if (lossAndVictoryArray[i] == "run") {

            //do nothing

        }

        if (lossAndVictoryArray[i] == "lose") {
            if (moveCounter == i) {
                // rLoss.play(); //TestSound
                $rocketAnimate.stop();
                $rocketAnimate.attr("src", "img/playfield/explosion.gif");

                /*
                Swal.fire({
            position: 'center-start',
            type: 'error',
            title: 'You Lose!',
            text: 'Your rocket has collided with a planet!'
        });
            setTimeout(location.reload.bind(location), 3000);
                 */
            }
        }

        if (lossAndVictoryArray[i] == "win") {
            // rVictory.play(); // TestSound

            if (moveCounter == i) {

                if (winCondition === false) {
                    winCondition = true; //"you won" alert only to come up once
                    Swal.fire({
                        position: 'center-start',
                        type: 'success',
                        title: 'You Win!',
                        text: 'Your rocket has escaped this sector!'
                    });
                    // setTimeout(location.reload.bind(location), 3000);
                    // temporary test to change level
                    setTimeout(loadNewLevel, 3000);
                }
            }

        }
    }
};

var oldFunction = SWalAlertCall;

// a function to save the entered algorithm
var $save = $("#save");
var savedAlgorithmTemp = [];
var savedAlgorithm = [];
var counter = 0;
$save.click(function () {
    savedAlgorithmTemp = savedAlgorithmTemp.concat(algorithm);
    savedAlgorithm[counter] = savedAlgorithmTemp;
    savedAlgorithmTemp = [];
    counter++;
    console.log(savedAlgorithmTemp, savedAlgorithm, algorithm)
});

startState();
movementFunction();
clickElements();

//demonstration at beginning of level 1
function instructions() {
    var arrowModal = false;
    var runModal = false;

    modal.style.display = "block";
    $modalImage.attr("src", "icon.png");
    $modalTitle.text("Welcome to Space Academy!").css("font-weight", "bold");
    $modalText.text("Your goal is to get the rocket to its destination by avoiding any obstacles in the way.");
    $modalNext.attr("src", "next.png").css("height", "30%", "width", "30%");
    $modalNext.click(function () {
        // modalImage.attr("src", "icon.png");
        $modalText.text("Click one of the arrows below to create a command.");
        $modalTitle.text("");
        $modalNext.attr("src", "next.png").css("height", "30%", "width", "30%");

        $point.attr("src", "point.png").css({
            "height": "20%", "width": "20%", "margin-left": "10%", "margin-top": "60%",
            "animation": "bouncearrow 1s infinite"
        });
        $modalNext.click(function () {
            modal.style.display = "none";
        });

        $right.add($left).add($up).add($down).one("click", function () {
            if (arrowModal === false) {
                arrowModal = true;
                modal.style.display = "block";
                $modalText.text("Well done. Once you click the arrows they go below into the function section. These commands will tell the rocket where to go.");
                $point.css({"transform": "rotate(-45deg)", "margin-left": "30%"});
            }
            $modalNext.click(function () {
                modal.style.display = "block";
                $point.css({"margin-left": "5%", "margin-top": "85%"});
                $modalText.text("Now, hit the play button below and see what happens!");
            })
        });


        $run.click(function () {
            setTimeout(function () {
                if (runModal === false) {
                    runModal = true;
                    modal.style.display = "block";
                    $point.css({"transform": "rotate(90deg", "margin-left": "55%", "margin-top": "10%"});
                    $modalText.text("Well done! You moved the rocket. Now, make a list of commands that moves the rocket toward the destination planet!");
                }
            }, 400);

            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };


            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            };

        })
    });
}
