function scuberGreetingForFeet(number){
  // Write your code here!
  let statement
  if (number <= 400){
    statement = "This one is on me!";
  }
  else if (number < 2500 && number > 2000 ){
    statement = "I will gladly take your thirty bucks.";
  }
  else if (number > 2500){
    statement = "No can do.";
  }
  return statement;

}

function ternaryCheckCity(city){
  // Write your code here!
  let statement;
  city === "NYC" ? (statement = "Ok, sounds good.") : (statement = "No go.")
  return statement;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let statement;
  switch (tip){
    case 'generous':
      statement = "Thank you so much.";
      break;
    case 'not as generous':
      statement = "Thank you."
      break;
    default: 
      statement = "Bye."
  }
  return statement;
}