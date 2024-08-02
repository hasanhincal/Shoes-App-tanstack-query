export default (price: number, discount: number = 0) => {
  // fiyat ve indirim oranını alacak
  // indirim varsa asıl fiyattan indirim oranı kadar çıkaracak
  // indirim yoksa asıl fiyatı döndürecek
  if (discount) {
    return (price * (100 - discount)) / 100;
  } else {
    return price;
  }
};
