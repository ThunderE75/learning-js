let day = "pizza";
let message;
let display = document.getElementById("display");

switch (day) {
    case 1:
        message = "It's Sunday!";
        break;
    case 2:
        message = "It's Monday";
        break;
    case 3:
        message = "It's Tuesday";
        break;
    case 4:
        message = "It's Wednesday";
        break;
    case 5:
        message = "It's Thursday";
        break;
    case 6:
        message = "It's Friday";
        break;
    case 7:
        message = "It's Saturday";
        break;
    default:
        message = `${day} is not a valid day.`;
        break;
}
display.textContent = message;
