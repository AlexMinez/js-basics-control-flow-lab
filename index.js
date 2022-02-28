function scuberGreetingForFeet(scuberGreetingForFeet){  
  if (scuberGreetingForFeet <=400) {
  return 'This one is on me!';
 } else if (scuberGreetingForFeet <= 2001){
  return 'I will gladly take your thirty bucks.';
} else if (scuberGreetingForFeet >=2501){
   return 'No can do.';
}
}
function ternaryCheckCity(ternaryCheckCity){
  return ternaryCheckCity === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}
function switchOnCharmFromTip(switchOnCharmFromTip){
  switch(switchOnCharmFromTip){
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default: 'thanks for everything'
      return 'Bye.'
      break;    
  }
}