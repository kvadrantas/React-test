console.log('\n1 pratimas');
console.log('----------------\n');
// //1. Duotas masyvas, console.log atspausdinti masyvo ilgį
const mas1 = [12, 5, 9, 7, 5, 4];
console.log(mas1.length);
 
// //2. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// // iteracijoje atspausdinti indeksą ir jo reikšmę;
console.log('\n2 pratimas');
console.log('----------------\n');
const mas2 = [13, '785', 92, 'labas', 522, 6984];
for (let i = 0; i < mas2.length; i++) {
    console.log('Indeksas: ', i, 'Reiksme: ', mas2[i]);
}
 
// //3. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// // iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė yra lyginė (porinė)
const mas3 = [889, 52, 698, 752, 9333, 7];
console.log('\n3 pratimas');
console.log('----------------\n');
for (let i = 0; i < mas2.length; i++) {
    if (mas2[i]%2 === 0) {
        console.log('Indeksas: ', i, 'Reiksme: ', mas2[i]);
    }
}
 
// //4. Duotas masyvas, masyvą iteruoti ciklu forEach ir console.log kiekvienoje
// // iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė prasideda raide A arba a
const mas4 = ['Agurkas', 'Bananas', 'arbūzas', 'Bebras', 'Voverė', 'Ąžuolas', 'Mažas triušis'];
console.log('\n4 pratimas');
console.log('----------------\n');
mas4.forEach((element, index) => {
    if (element.slice(0, 1) === 'a' || element.slice(0, 1) === 'A') {
        console.log(element, index);
    }
});
 
// //5. Duotas stringas, suskaičiuoti kiek stringe yra raidžių z
const str1 = 'Storas zebras, bėga nuo zuulu genties nedžiotojų.';
console.log('\n5 pratimas');
console.log('----------------\n');
let strrr = str1.split(' ').join('');
strrr = strrr.split(',').join('');
strrr = strrr.split('.').join('');
console.log('Raidziu kiekis: ', strrr.length);
 
// //6. Duotas Setas, į kurį reikia pridėti reikšmes (stringus) 'Labas' ir 'Ate' ir console.log
// // atspausdinti Seto ilgį
const set1 = new Set(['Labas', 'Vakaras', 'Rytas', 'Valio']);
console.log('\n6 pratimas');
console.log('----------------\n');
set1.add('Labas');
set1.add('Ate');
console.log('Seto ilgis: ', set1.size);
 
// //7. Suprototaipinti standartinį String tipo objektą, pridedant metodą lastCharIs(), 
// // kuris grąžintų paskutinį stringo simbolį. Pademonstruoti veikimą su stringu 'Ku Ku';
// const str2 = 'Ku ku';
// // // console.log(str2.lastCharIs()) po prototaipinimo eilutė turi veikti
// console.log('\n7 pratimas');
// console.log('----------------\n');
// const stringgg = {
//     lastCharIs(str) {
//         return this.slice(-1);
//     }
// };
// console.log(str2.lastCharIs())

 
// //8. Duotas objektas, kurį reikia iteruoti, kiekvienoje iteracijoje išvedant savybę
// // ir jos reikšmę
const obj1 = { labas: 'vakaras', laba: 'diena', labs: 'ryts' };
console.log('\n8 pratimas');
console.log('----------------\n');
// for (element of obj1) {
    console.log(Object.values(obj1));
    console.log(Object.getOwnPropertyNames(obj1));
// }
 
// //9. Sukurti klasę Grybas. Klasėje sukurti savybė tipas. Iš klasės sukurti
// // 3 Grybo objektus, savybei tipas priskiriant "Baravykas", "Ūmedė" ir "Lepšis"
console.log('\n9 pratimas');
console.log('----------------\n');

class Grybas {
    constructor(tip) {
      this.tipas = tip;
    }
  }

const o1 = new Grybas('Baravykas');
const o2 = new Grybas('Ūmedė');
const o3 = new Grybas('Lepšis');

console.log(o1, o2, o3);
