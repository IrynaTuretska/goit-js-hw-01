const credits = 23580;
const droidPrice = 3000;
const droidQty = prompt("Сколько дроидов Вы желаете купить?");
let message;
let totalPrice;
let creditBalance;

if (droidQty === null) {
  message = "Отменено пользователем!";
  console.log(message);

} else {
  totalPrice = droidPrice * Number(droidQty);
 
    if (totalPrice > credits) {
    message = "Недостаточно средств на счету!";
  
    } else {
    creditBalance = credits - totalPrice;
    message = `Вы купили ${droidQty} дроидов, на счету осталось ${creditBalance} кредитов.`;
  
    }
  console.log(message);
}