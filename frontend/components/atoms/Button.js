import styled from 'styled-components';

const Btn = styled.button`
  padding-left: 50px;
  padding-right: 50px;
`;

const Button = ({title}) => {
  return (
    <Btn type="button" className="button is-link is-inverted is-outlined">
      {title}
    </Btn>
  )
}

export default Button;

// HTML  SCSS  JS Result
// EDIT ON
//  // Glitch Timeline Function
// var $text = document.querySelector('.btn-glitch-active'),
//     $filter = document.querySelector('.svg-sprite'),
//     $turb = $filter.querySelector('#filter feTurbulence'),
//     turbVal = { val: 0.000001 },
//     turbValX = { val: 0.000001 };

// var glitchTimeline = function() {
//     var timeline = new TimelineMax({
//         repeat: -1,
//         repeatDelay: 2,
//         paused: true,
//         onUpdate: function () {
//             $turb.setAttribute('baseFrequency', turbVal.val + ' ' + turbValX.val);
//         }
//     });

//     timeline
//         .to(turbValX, 0.1, { val: 0.5 })
//         .to(turbVal, 0.1, { val: 0.02 });
//     timeline
//         .set(turbValX, { val: 0.000001 })
//         .set(turbVal, { val: 0.000001 });
//     timeline
//         .to(turbValX, 0.2, { val: 0.4 }, 0.4)
//         .to(turbVal, 0.2, { val: 0.002 }, 0.4);
//     timeline
//         .set(turbValX, { val: 0.000001 })
//         .set(turbVal, { val: 0.000001 });

//     // console.log("duration is: " + timeline.duration());

//     return {
//         start: function() {
//             timeline.play(0);
//         },
//         stop: function() {
//             timeline.pause();
//         }
//     };
// };

// btnGlitch = new glitchTimeline();

// $('.btn-glitch')
//     .on('mouseenter', function () {
//           $(this).addClass('btn-glitch-active');
//           btnGlitch.start();
//     })
//     .on('mouseleave', function () {
//         var $this = $(this);
//         if ( $this.hasClass('btn-glitch-active') ) {
//             $this.removeClass('btn-glitch-active');
//             btnGlitch.stop();
//         }
//     });

// Resources 1×0.5×0.25× Rerun
