// function scuberGreetingForFeet(feet){
//   let response
//   switch(feet) {
//     case (feet <= 400):
//       response = 'This one is on me!';
//       break;
//       // return response;
//     case (feet > 2000 && feet <= 2500):
//       response = 'I will gladly take your thirty bucks.';
//       break;
//       // return response;
//     case (feet > 2500):
//       response = 'No can do.';
//       break;
//       // return response;
//   }
//   return response;
// }

function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city){
  let result;
  city === 'NYC' ? (result = 'Ok, sounds good.') : (result = 'No go.');
  return result;
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}