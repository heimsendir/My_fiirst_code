// let a = 2;
// let b = 4;
//
// a + b;
//
// console.log(a + b);


// //Первый объект
// let car = {
//  color : 'green',
//  maxSpeed : 250
// };
// console.log(typeof car);
//
// //Вывод свойства объекта
// console.log(car);
// console.log(car.color);


// let car = {
//  color : 'green',
//  maxSpeed : 250,
//  audio : {
//   brand : 'Sony',
//     speakers : 12
//  }
// };
// car.color = 'red';
//
// console.log(typeof car.audio.brand);
// console.log(car.audio);

// let car = {
// color : 'red',
//  maxSpeed : 250,
//  audio : {
//   brand : 'Sony',
//     speakers : 12
//  }
// };
//
// if(car.color == 'red') {
//  console.log('Автомобиль красный');
// } else if(car.color == 'green') {
//  console.log('Автомобиль зелёный');
// } else{
//  console.log('Цвет не определён');
// }


// let car = {
//  color : 'green',
//  maxSpeed : 250,
//  audio : {
//   brand : 'Sony',
//   speakers : 12
//  }
// };
// color_reset();
// console.log(car.color);
//
// car.color = 'green';
// console.log(car.color);
//
// function color_reset() {
//  car.color = 'red';
//  console.log(car.color);
// }
//
// color_reset();


// let car = {
//     color : 'red'
// };
//
// let car2 = {
//     color: 'green'
// };
// color_change(car);
// color_change(car2);
//
// function color_change(the_car) {
//     the_car.color = 'yellow';
// }
//
// console.log("Car: " + car.color);
// console.log("Car 2: " + car2.color);




// let car = {
//     max_speed : 240,
//     update : speed_change
// };
//
// car.update(car);
//
// function speed_change(speed) {
//     speed.max_speed = 300;
// }
//
// console.log(car.max_speed);



// function watch(message = 'Alex') {
//     return message + ' "привет"';
// }
//
// console.log(watch('Простое слово'));



// function() {
//     console.log('привет');
// }

// set_timeout(function(){
//     console.log('test');
// },3000);


// let anonym = () => console.log('you are anonymous');
//
// anonym();



// let car1 = {
//     color : 'red'
// };
//
// let car2 = {
//     color : 'green'
// };
//
// function change_color(the_car) {
//     the_car.color = 'black';
// };
//
// change_color(car1);
// change_color(car2);
//
// if (car1.color == 'red'){
//     console.log("Не удалось сменить цвет автомобиля")
// }else if(car1.color != 'red'){
//     console.log('Цвет первого автомобиля был изменён на "Черный"')
// }
//
// if (car2.color == 'green'){
//     console.log("Не удалось сменить цвет автомобиля")
// }else if(car2.color != 'green'){
//     console.log('Цвет второго автомобиля был изменён на "Черный"')
// }







// let car1 = {
//     color : 'Красный',
//     max_speed : 200,
//     audio : {
//         speakers: 10,
//         brand : 'Sony'
//     },
//     engine : 'v 1.7'
// };
//
// let car2 = {
//     color : 'Голубой',
//     max_speed : 220,
//     engine : 'v 1.9',
//     audio : {
//         speakers : 9,
//         brand: 'JBL'
//     }
// };
// all_view();
// // change_color(car1);
// // change_color(car2);
// // change_speed(car1);
// // change_speed(car2);
// // change_engine(car1);
// // change_engine(car2);
// // change_brand_audio(car1);
// // change_brand_audio(car2);
//
//
//
// if (car1.max_speed != 200){
//     console.log('Максимальная скорость первой машины была изменена');
//     view1();
// } else if (car1.color != 'Красный'){
//     console.log('Цвет первой машины был изменен');
//     view1();
// } else if (car1.engine != 'v 1.7'){
//     console.log('Движок первой машины был изменен');
//     view1();
// } else if (car1.audio.brand != "Sony"){
//     console.log('Аудиосистема первой машины была изменена');
// };
//
// if (car2.max_speed != 220){
//     console.log('Максимальная скорость второй машины была изменена');
//     view2();
// } else if (car2.color != 'Голубой'){
//     console.log('Цвет второй машины был изменен');
//     view2();
// } else if (car2.engine != 'v 1.9'){
//     console.log('Движок второй машины был изменен');
//     view2();
// } else if (car2.audio.brand != "JBL"){
//     console.log('Аудиосистема второй машины была изменена');
// };
//
//
//
// function change_color(the_car) {
//     the_car.color = 'Чёрный';
// };
//
// function change_speed(the_speed) {
//     the_speed.max_speed = 250;
// };
//
// function change_engine(the_engine) {
//     the_engine.engine = 'v 2.0';
// };
//
// function change_brand_audio(the_brand) {
//     the_brand.audio.brand = 'Beats';
// };
//
// function view1() {
//     console.log('ПЕРВАЯ МАШИНА');
//     console.log('Цвет: ' + car1.color);
//     console.log('Максимальная скорость: ' + car1.max_speed + ' км/ч');
//     console.log('Двигатель: ' + car1.engine);
//     console.log('Аудиосистема: ' + car1.audio.brand);
// };
//
// function view2() {
//     console.log('ВТОРАЯ МАШИНА');
//     console.log('Цвет: ' + car2.color);
//     console.log('Максимальная скорость: ' + car2.max_speed + ' км/ч');
//     console.log('Двигатель: ' + car2.engine);
//     console.log('Аудиосистема: ' + car2.audio.brand);
// };
//
// function all_view() {
//     console.log('ПЕРВАЯ МАШИНА');
//     console.log('Цвет: ' + car1.color);
//     console.log('Максимальная скорость: ' + car1.max_speed + ' км/ч');
//     console.log('Двигатель: ' + car1.engine);
//     console.log('Аудиосистема: ' + car1.audio.brand);
//     console.log('ВТОРАЯ МАШИНА');
//     console.log('Цвет: ' + car2.color);
//     console.log('Максимальная скорость: ' + car2.max_speed + ' км/ч');
//     console.log('Двигатель: ' + car2.engine);
//     console.log('Аудиосистема: ' + car2.audio.brand);
// };










// let car = {
//     color: 'red',
//     open(message) {
//         console.log(message);
//     }
// }
//
// car.open('Открыто');






// let car = {
//     color: 'red'
// }
//
// let array = [1, 3, 10, 63, car.color, ' привет'];
//
// console.log(array[4] + array[2] + array[5]);







// let drivers = ['Иван', 'Сергей', 'Егор'];
//
// for (let i = 0; i < drivers.length; i++){
//     console.log(drivers[i]);
//
// }




// let hater = {
//     first_name: 'Билл',
//     last_name: 'Гейтс',
//     get_name(){
//         return `${this.first_name} ${this.last_name}`;
//     }
// };
//
// console.log(hater.get_name());
//
// let hater2 = {
//     first_name: 'Дональд',
//     last_name: 'Дак',
//     get_name(){
//         return `${this.first_name} ${this.last_name}`;
//     }
// };
//
// console.log(hater2.get_name());


// class Hater {
//     constructor(first_name, last_name) {
//       this.first_name = first_name;
//       this.last_name = last_name;
//     }
//     say_name() {
//         console.log(`Наш хейтер: ${this.first_name} ${this.last_name}`);
//     }
// }
//
// let hater_1 = new Hater('Норман', 'Осборн');
// hater_1.say_name();
// let hater_2 = new Hater('Доктор', 'Дум');
// hater_2.say_name();



function Bloger(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}

Bloger.prototype.say_name = function () {
    console.log(this.first_name + ' ' + this.last_name);
}

var newBloger = new Bloger('Крекер', 'Хакеров');
newBloger.say_name();








