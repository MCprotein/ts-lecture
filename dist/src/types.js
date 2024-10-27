/**
 * interace는 객체의 타입을 지정할 수 있다.
 * 추상화: OOP의 한 개념이고,
 * 객체의 공통적인 특징을 뽑아내는 것 ->
 * 이것보다는 객체를 단순화시키는것. 내부 구현을 숨기고 겉으로 보여질 부분만 정의하는것
 */ var animal = {
    name: "흰둥이",
    age: 5
};
var human = {
    name: "짱구",
    age: 5
};
/**
 * enum: 열거형
 * 상수 몇개를 정해두고, 그거만 사용하는것.
 * 핸드폰 살려고 한다. 선택지가 갤럭시, 아이폰, 구글폰
 * if (phone === 'galaxy') {}
 * else if (phone === 'iphone') {}
 * else if (phone === 'google') {}
 */ var myPhone = "galaxy";
var phone = /*#__PURE__*/ function(phone) {
    phone["galaxy"] = "galaxy";
    phone["iphone"] = "iphone";
    phone["google"] = "google";
    return phone;
}(phone || {});
if (myPhone === "galaxy") {
    console.log("갤럭시");
} else if (myPhone === "iphone") {
    console.log("아이폰");
} else if (myPhone === "google") {
    console.log("구글폰");
}
