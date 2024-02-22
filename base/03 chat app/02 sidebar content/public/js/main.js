const users = [
	{image: 'https://github.com/190101101/monster-icons/blob/main/alien%20(1).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/alien.png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/bored%20(1).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/bored.png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/cthulhu%20(1).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/cthulhu.png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/cyclops%20(1).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/cyclops%20(2).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/cyclops%20(3).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/cyclops%20(4).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/cyclops.png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/dragon%20(1).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/dragon.png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/evil.png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/excited%20(1).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/excited.png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/eye.png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/frankenstein.png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/grumpy.png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/happy%20(1).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/happy.png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/laughing.png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(0).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(0.1).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(1).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(10).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(11).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(12).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(13).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(14).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(15).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(16).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(17).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(18).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(19).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(2).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(20).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(21).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(22).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(23).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(24).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(25).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(26).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(27).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(28).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(29).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(3).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(30).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(31).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(32).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(33).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(34).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(35).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(36).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(37).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(39).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(4).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(40).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(41).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(42).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(43).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(44).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(45).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(46).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(47).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(48).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(49).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(5).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(50).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(51).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(52).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(53).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(54).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(55).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(56).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(57).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(58).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(59).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(6).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(60).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(61).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(62).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(63).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(64).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(65).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(66).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(67).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(7).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(8).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster%20(9).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/monster.png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/octopus.png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/ogre.png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/orc%20(1).png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/orc.png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/sad.png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/santelmo.png?raw=true'},
	{image: 'https://github.com/190101101/monster-icons/blob/main/zombie.png?raw=true'},
];

const userList = document.querySelector('.user-list');

for(let i = 0; i < 30; i++){
	
	const bgLine = i % 2 == 0 && 'bg-main-light-grey';
	
	userList.innerHTML += `
	<div class="flex justify-between ${bgLine} mb-1 w-[100%] group">
		<div class="flex items-start justify-center basis-[20%] opacity-50">
			<img class="h-8 w-8" src="${users[i].image}">
		</div>
		<!--  -->
		<div class="basis-[80%] flex flex-col font-consolas font-bold">
		<div class="flex justify-between items-center">
			<div class="text-main-dark-green opacity-50">user ${i}</div>
			<div class="w-2 h-2 mr-1 bg-main-orange rounded-full"></div>
		</div>
		</div>
	</div>
	`
}
