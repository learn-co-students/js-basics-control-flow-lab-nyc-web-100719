function scuberGreetingForFeet(value){
  // Write your code here!
  if (400 >= value) {
    return 'This one is on me!';
  }else if (value > 2000 && value < 2500){
    return 'I will gladly take your thirty bucks.';
  }else if (value > 2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === 'NYC'){
    return "Ok, sounds good.";
  }else {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === 'generous'){
    return "Thank you so much."
  }else if(tip === 'not as generous'){
    return "Thank you."
  }else if(tip === 'thanks for everything'){
    return "Bye."
  }
}