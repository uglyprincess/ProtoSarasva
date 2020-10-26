var bro = anime({
  targets: 'div.top',
  // translateX: function(el, i,l) {
  //   return el.getAttribute('data-x') + 200*(l-i+1);
  // },
  translateX: function(el, i){
      return (-200 + i*150);
  },
  translateY: 100,
  scale: function(el, i, l) {
    return 3; 
  },
  // rotate: function() { return anime.random(-5, 5); },
  borderRadius: function() { return ['50%', '10%']; },
  duration: function() { return anime.random(1200, 1800); },
  delay: function() { return anime.random(0, 400); },
  direction: 'alternate',
  loop: false,
  autoplay: false
});

var sis = anime({
  targets: 'div.bottom',
  // translateX: function(el, i,l) {
  //   return el.getAttribute('data-x') + 200*(l-i+1);
  // },
  translateX: function(el, i){
      return (-200 + i*150);
  },
  translateY: 200,
  scale: function(el, i, l) {
    return 3; 
  },
  // rotate: function() { return anime.random(-5, 5); },
  borderRadius: function() { return ['50%', '10%']; },
  duration: function() { return anime.random(1200, 1800); },
  delay: function() { return anime.random(0, 400); },
  direction: 'alternate',
  loop: false,
  autoplay: false
});

$("button").click(bro.play);
$("button").click(sis.play);

// anime({
//     targets: 'div.box',
//     translateX: function() {
//         return [{value: 200, duration: 1500}]
//     },
//     translateY: function() {
//         return [{value: 200, duration: 1500}];
//     },
//     rotate: function() {
//         return {
//             value: '1turn',
//             easing: 'easeInOutSine'
//         };
//     },
//     scale: function() {
//         return 3.5;
//     }
// })

// anime({
//     targets: 'div.box.blue',
//     translateX: [
//         {value: 200, duration: 1500},
//         // {value: 0, duration: 1500}
//     ],
//     translateY: [
//         {value: 100, duration: 1500}
//     ],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine'
//     },
//     scale: 4
// });

// anime({
//     targets: 'div.box.green',
//     translateX: [
//         {value: 450, duration: 1500},
//         // {value: 0, duration: 1500}
//     ],
//     translateY: [
//         {value: 250, duration: 1500}
//     ],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine'
//     },
//     scale: 4,
//     delay: 200
// });

// anime({
//     targets: 'div.box.red',
//     translateX: [
//         {value: 700, duration: 1500},
//         // {value: 0, duration: 1500}
//     ],
//     translateY: [
//         {value: -25, duration: 1500}
//     ],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine'
//     },
//     scale: 4,
//     delay: 400
// });

// anime({
//     targets: 'div.box.yellow',
//     translateX: [
//         {value: 950, duration: 1500},
//         // {value: 0, duration: 1500}
//     ],
//     translateY: [
//         {value: 125, duration: 1500}
//     ],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine'
//     },
//     scale: 4,
//     delay: 600
// });

//   anime({
//       translateX: 500,
//       translateY: 100,
//       targets: 'div.circle.magenta',
//       scale: 3,
//       rotate: anime.random(-360,360),
//       borderRadius: ['50%', anime.random(10, 35) + '%'],
//       duration: anime.random(1200, 1800),
//       delay: anime.random(0, 400),
//       direction: 'alternate',
//       loop: false
//   })



