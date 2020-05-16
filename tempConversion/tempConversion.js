const ftoc = function(fah) {
  let cel = ((fah - 32) * (5/9));
  cel = Math.round((cel + Number.EPSILON) * 10) / 10;
  return cel;

}

const ctof = function(cel) {
  let fah = (cel * (9/5) + 32);
  fah = Math.round((fah + Number.EPSILON) * 10) / 10;
  return fah;
}

module.exports = {
  ftoc,
  ctof
}
