 let birthYear= prompt('Doğduğunuz yılı giriniz: ');
 let birthMonth= prompt('Doğduğunuz ayı giriniz:');
 let birthDay= prompt('Doğduğunuz günü giriniz:');
// // let birthDate= (birthYear +''+ birthMonth +''+ birthDay);

 let today= new Date();
 let totalAgeYear= today.getFullYear() - birthYear;
 let totaAgeMonth= today.getMonth() - birthMonth;
 let totaAgeDay= today.getDate() - birthDay;

 if (totaAgeDay < 0) {
   totaAgeMonth -= 1;
   totaAgeDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); 
 }

 else if (totaAgeMonth < 0) {
   totalAgeYear -= 1;
   totaAgeMonth += 12;
 }

 else {
  alert('hatalı giriş!')
 }

alert('`Yaşınız: ' + totalAgeYear + ' yıl, ' + totaAgeMonth+ ' ay, ' + totaAgeDay + ' gün');


