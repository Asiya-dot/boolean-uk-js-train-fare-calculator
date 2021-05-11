
const age =Number(prompt("How old are you"));

const Kms= Number(prompt("How far are you going? (in kms)"));
 const priceperkm=0.7;

 const juniorDiscount=0.5;

  const seniorDiscount=0.6;

const fullfare=priceperkm * kms
 let discountedFare=fullfare;
 let discountApplied="none";

 if (age < 18){
     discountedFare= fullfare * juniorDiscount;
     discountApplied="junior"
 }

 if (age > 65){
     discountedFare= fullfare * seniorDiscount;
     discountApplied ="senior"
 }

 alert(`Discount applied:${discountApplied}
 The full fare is £${fullFare}
 How would you like to pay: £${discountedFare}
 `);