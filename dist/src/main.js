/**
 * 타입스크립트는 자바스크립트의 문법이 100% 호환된다.
 * 자바스크립트 상위 언어
 * boolean, number, string, array, tuple, enum, unkown, any, void, null, undefined, never, object, ...
 */ // 주석테스트
function add(a, b) {
    return a + b;
}
var result = add(1, 100);
console.log(result);
// optional chaining
// const user = {
//   name: "짱구",
//   job: "developer",
// };
// if (user.company?.employees > 20) {
//   console.log("성인");
// }
function getFullName(firstName, lastName, option) {
    return "full name: ".concat(firstName, " ").concat(lastName, ", option: ").concat(option);
}
var fullName = getFullName("신", "짱구");
console.log(fullName);
