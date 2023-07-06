/*
let datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;

function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
}
    setInterval(refreshTime, 1000);
*/

// Displaying negative or positive when number is prompted
function handlePositiveNegative(event) {
    const num = event.target.value;

    if (num > 0) {
        alert("It's POSITIVE!")
    } else {
        alert("It's NEGATIVE!")
    }
}

/* function handleBiggestNumber(event) {
    const num_1 = event.target.value
    const num_2 = event.target.value
    const num_3 = event.target.value

    if (num_1 > num_2 && num_1 > num_3) {
        alert(num_1 + " is the biggest number!");
    } else if (num_2 > num_1 && num_2 > num_3) {
        alert(num_2 + " is the biggest number!")
    } else {
        alert(num_3 + " is the biggest number!")
    }
}  */ 


// Use an IF statement to determine the greatest of three numbers
const num_1 = 20;
const num_2 = 10;
const num_3 = 69;

if (num_1 > num_2 && num_1 > num_3) {
    console.log(num_1 + " is the biggest number")
} else if (num_2 > num_1 && num_2 > num_3) {
    console.log (num_2 + " is the biggest number")
} else {
    console.log(num_3 + " is the biggest number")
}

/* Create a "Days until weekend" switch case. Given a day, 
log only X amount of days before the weekend. If the day isn't recognised,
have a default to show "Sorry we didn't recognise that day." */

function handleDaysUntilWeekend(event) {
    const day = event.target.value.toLowerCase();


    let daysLeft;
    switch(day) {
        case 'monday':
            daysLeft = "Five more days to GO!";
            break;
        case 'tuesday':
            daysLeft = "Four more days to GO!";
            break;
        case 'wednesday':
            daysLeft = "Three more days to GO!";
            break;
        case 'thursday':
            daysLeft = "Two more days to GO!";
            break;
        case 'friday':
            daysLeft = "GETTIN' SPICEY, ONE DAY TO GO!";
            break;
        case 'saturday':
        case 'sunday':
            daysLeft = "It's the WEEKEND BABYYYY!!";
            break;
        default:
            daysLeft = "Sorry, we didn't recognise that day";
            break;
    }
    alert(daysLeft);
}

/* Create a switch case for vegetable prices at a supermarket.
It should have potatoes and carrots as the SAME PRICE per KG,
but brocolli, cabbage and asparagus as different prices */

function handleVegetablePrices(event) {
    const vegetable = event.target.value

    let vegePrice;
    switch (vegetable) {
        case 'potatoes':
        case 'carrots':
            vegePrice = "£12 a kilo"
            break
        case 'broccoli':
            vegePrice = "£14 a kilo"
            break
        case 'cabbage':
            vegePrice = "£9 a kilo"
            break
        case 'asparagus':
            vegePrice = "£18 a kilo"
            break
        default:
            return;
    }

    alert(vegetable + "sells for" + vegePrice);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }