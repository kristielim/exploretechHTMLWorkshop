let index = 0;
let catIndex = 0;
let removeCatIndex = 0;
		
function isCatSmall() {
	const heightInPixels = $('#big-cat').css('height');
	const height = parseInt(heightInPixels.slice(0, -2));
	if (height < 300) {
		return true;
	}
	return false;
}

function areCatsNotDizzy() {
	const animation = $('#box-cat').css('animation');
	if (!animation.includes('dizzy')) {
		return true;
	}
	return false;
}

const steps = [
	{
		instruction: 'Whoa! A giant cat appeared! Make its height smaller.',
		isCompleted: isCatSmall,
		failMessage: 'Cat is still too big.'
	},
	{
		instruction: `These small cats are so dizzy. 
						Help them out by changing their animation to jump.`,
		isCompleted: areCatsNotDizzy,
		failMessage: `Oops they're still dizzy.`
	}
];

function nextStep() {
	console.log('nextStep');
	index++;
	if (index >= steps.length) {
		alert('completed!');
		return;
	}
	$('#instructions').text(steps[index].instruction);
}



function spawnCat(){
	// pick next cat in cat index (mod by number of cats)
	// set position to position of black hole
	// fade in
	// spiral out

	const spawnInterval = Math.random() * 5000;
	const fadeOutInterval = 0.75 * spawnInterval;

	// add a cat to the black hole
	const catHTML = `<img id="omg-cat-${catIndex}"
						  class="omg-cat" 
						  src="https://thumbs.gfycat.com/WellmadeOddAmericanbobtail-max-1mb.gif"/>`;
	$('#black-hole').append(catHTML);

	// cat moves outward
	// $(`#omg-cat-${catIndex}`).click(function() {
	// 	console.log(`animating cat ${catIndex}`); 
	// 	$(`#omg-cat-${catIndex}`).animate({
	// 		left: '+=100px'
	// 	}, 'fast');
	// });
	// $(`#omg-cat-${catIndex}`).animate({
	// 	left: '+=1000px'
	// }, 'slow');
	$(`#omg-cat-${catIndex}`).spiral({InsideOut: 1, Easing:4, Duration: fadeOutInterval, Radius: 200});

	// fade out and remove cat when done
	$(`#omg-cat-${catIndex}`).fadeOut(fadeOutInterval, function() {
		$(`#omg-cat-${removeCatIndex}`).remove();
		removeCatIndex++;
	});

	catIndex++;

	// spawn another cat
    setTimeout(spawnCat, spawnInterval);
}

$(window).on('load', function () {
	// update instructions
	$('#instructions').text(steps[index].instruction);

	// move to next step when next button is clicked
    $('#next').click(function () {
    	let currStep = steps[index];
    	if (currStep.isCompleted()) {
    		nextStep();
    	}
    	else {
    		alert(currStep.failMessage);
    	}
    });

    spawnCat();

});