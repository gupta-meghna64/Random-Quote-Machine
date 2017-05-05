var quotes = [
		'We are all in the gutter, but some of us are looking at the stars. - Oscar Wilde',
		'Be who you are and say what you feel, because those who mind don\'t matter and those who matter don\'t mind. - Dr. Seuss',
		'This too, shall pass. - Anonymous',
		'Keep your eyes on the stars and your feet on the ground. - Theodore Roosevelt',
		'The only person you should try to be better than is the person you were yesterday. - Anonymous',
		'Never be bullied into silence. Never allow yourself to be made a victim. Accept no one\'s definition of your life; define yourself. - Harvey Fierstein',
		'You never know what worse luck you bad luck has saved you from. - Anonymous',
		'No one can make you feel inferior without your consent. - Roosevelt',
		'There isn\'t a way things should be. There\'s just what happens, and what we do. - Terry Pratchet',
		'Love means never having to say you\'re sorry.',
		'They may take our lives, but they\'ll never take our freedom!',
		'They call me Mister Tibbs!',
		'When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.',
		'You complete me.',
		'You make me want to be a better man.',
		'As if!',
		'Just when I thought I was out, they pull me back in.',
		'Nobody\'s perfect.',
		'I don\'t want to survive. I want to live.',
		'I guess it comes down to a simple choice, really. Get busy living or get busy dying.',
		'Remember Red, hope is a good thing, maybe the best of things, and no good thing ever dies.',
		'They say it has no memory. That\'s where I want to live the rest of my life. A warm place with no memory.',
		'Love is like the wind, you can\'t see it but you can feel it.',
		'Without suffering, there\'d be no compassion.',
		'I dont think that we\'re meant to understand it all the time. I think that sometimes we just have to have faith.'
]
var b;
function randomQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	b = quotes[randomNumber];
	// console.log(a);
	document.getElementById('displayQuote').innerHTML = quotes[randomNumber];
	//document.getElementById('a').innerHTML = a;
}

function tweetquote() {
	window.open('http://twitter.com/intent/tweet?text=' + b);
	//document.getElementById('a').innerHTML = 'http://twitter.com/intent/tweet?text=' + a;
}