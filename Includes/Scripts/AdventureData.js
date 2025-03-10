// START OF SCRIPT
commands = {
	"clr": (args) => {
		t.clear();
	},
	"kill": (args) => {
		print(`What would you like to kill?`);
		if (variables["licence to kill revoked"]) {
			if (!args || !args[0]) {
				print(`Since your licence was revoked, you don't feel like you deserve to kill things :(`);
			} else if (args[0] == '.*') {
				print(`Since your licence was revoked, you don't feel like you deserve to kill things :(`);
			}
		}
		else {
			if (!args || !args[0]) {
				print(`What would you like to kill?`);
			} else if (args[0] == '.*') {
				if ((variables["keeps trying to kill the unkillable..."] >= 7 || -variables["keeps trying to kill the unkillable..."] >= 7)) {
					print(`I give up, you're too murderous for this game.`);
					endGame(273)
				}
				else {
					if ((variables["keeps trying to kill the unkillable..."] >= 5 || -variables["keeps trying to kill the unkillable..."] >= 5)) {
						print(`gosh darn it! Stop trying to kill things that aren't killable!`);
						variables["keeps trying to kill the unkillable..."] = (variables["keeps trying to kill the unkillable..."] ? variables["keeps trying to kill the unkillable..."] + 1 : 1)
					}
					else {
						if (variables["keeps trying to kill the unkillable..."]) {
							print(`You can't kill that. Darn it!`);
							variables["keeps trying to kill the unkillable..."] = (variables["keeps trying to kill the unkillable..."] ? variables["keeps trying to kill the unkillable..."] + 1 : 1)
						}
						else {
							print(`You can't kill that. Darn it!`);
							variables["keeps trying to kill the unkillable..."] = -1
						}
					}
				}
			}
		}
	},
	"Headquarters": (args) => {
		if (variables["licence to kill"]) {
			print(`You go to headquarters.`);
			goTo("Headquarters");
		}
		else {
			print(`?`);
		}
	},
	"(counting|c)": (args) => {
		if ((variables["thing"] >= 15 || -variables["thing"] >= 15)) {
			print(`yay you can count to 15!`);
			variables["thing"] = (variables["thing"] ? variables["thing"] + 1 : 1)
			endGame(15)
		}
		else {
			print(`count to fifteen!`);
			variables["thing"] = (variables["thing"] ? variables["thing"] + 1 : 1)
		}
	},
	"h": (args) => {
		print(`Commands:

move (north|east|south|west|up|down)
look
look [item]
get [item]
use [item]
meow at [item]
inv
help
clear
hint-> hopefully very helpful for if you don't know what to do, the hint is a specific list of possible commands that changes depending on where you are in the game`);
	},
	"i": (args) => {
		displayInventory();
	},
	"l": (args) => {
		if (!args || !args[0]) {
			print(`You aren't entirely sure where you are`);
		} else if (args[0] == 'i') {
			displayInventory();
		}
	},
	"m": (args) => {
		if (!args || !args[0]) {
			print(`Where do you want to go?`);
		} else if (args[0] == 'n') {
			print(`You can't go that way`);
		} else if (args[0] == 'e') {
			print(`You can't go that way`);
		} else if (args[0] == 's') {
			print(`You can't go that way`);
		} else if (args[0] == 'w') {
			print(`You can't go that way`);
		} else if (args[0] == 'd') {
			print(`You go to hell`);
			goTo("hell");
		} else if (args[0] == 'u') {
			print(`You have ascended to Leprechaun Heaven! There are leprechauns frolicking.`);
			goTo("heaven");
		}
	},
	"g": (args) => {
		if (!args || !args[0]) {
			print(`What do you want to get?`);
		} else if (args[0] == '.*') {
			print(`You can't get that`);
		}
	},
	"meow": (args) => {
		if (!args || !args[0]) {
			print(`What do you want to meow at?`);
		} else if (args[0] == '.*') {
			print(`It doesn't respond :(`);
		}
	},
	"u": (args) => {
		if (!args || !args[0]) {
			print(`What do you want to use?`);
		} else if (args[0] == '.*') {
			print(`You can't do that`);
		}
	},
	"secret": (args) => {
		if ((variables["secrety secrets"] >= 3 || -variables["secrety secrets"] >= 3)) {
			print(`*whispers* My secret is that I've always dreamed of being a seahorse.`);
			endGame(799)
		}
		else {
			if (variables["secrety secrets"]) {
				print(`Do you really think something's going to happen?`);
				variables["secrety secrets"] = (variables["secrety secrets"] ? variables["secrety secrets"] + 1 : 1)
			}
			else {
				print(`Really?`);
				variables["secrety secrets"] = -1
			}
		}
	},
	"mock": (args) => {
		if ((variables["warning"] >= 5 || -variables["warning"] >= 5)) {
			print(`That's it! I will not tolerate this anymore! >:(`);
			endGame(9)
		}
		else {
			variables["warning"] = (variables["warning"] ? variables["warning"] + 1 : 1)
			print(`Don't mock me :(`);
		}
	},
};



locations = {
	kitchen: {
		name: "kitchen",
		commands: {
			"l": (args) => {
				if (!args || !args[0]) {
					t.clear();
					print("[image]Includes/Images/kitchen.jpeg");
					print(`You're in the kitchen, it gets pretty loud here sometimes, but the sun is shining through the window and is very warm.
N: The dining room
S: There's a door leading outside
- The sun is shining onto the floor`);
				} else if (args[0] == 'sun') {
					print(`The sun looks very warm and inviting`);
				}
			},
			"u": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'sun') {
					print("[image]Includes/Images/ChichienSun.jpeg");
					print(`You sit in the sun. It's very warm and nice. Just as you start to relax, the dishwasher turns on and you freak out and run to the dining room.`);
					goTo("dining_room");
				}
			},
			"hint": (args) => {
				print(`This room isn't too complicated. Here are all your possible commands in this room:

look
move (north|south|up|down)
inv
help
clear
hint`);
			},
		},
		connections: {
			"s": () => {
				if (variables["food"] && variables["water"] && variables["rest"]) {
					print(`You are ready. You wander over and meow at Baba until he lets you outside`);
					goTo("outside");
				}
				else {
					print(`You're not ready to go outside yet, you need to be well fed, have a drink, and rest first`);
				}
			},
			"n": () => {
				print(`You go into the dining room`);
				goTo("dining_room");
			},
		},
	},
	outside: {
		name: "outside",
		commands: {
			"hint": (args) => {
				print(`Important: available options change based on what you've done here, AKA doing things unlocks other things. If you type hint again after doing something, you may see different commands available. Alright, here they are: 

look
move (north|south|west|up|down)
catnip
squirrel
garden
bear
chickens
climb
kill squirrel
portal
inv
clear
help
hint
`);
			},
			"catnip": (args) => {
				if (!variables["catnip tiiime"]++) {
					print(`You go to the garden and come across some catnip. It smells amazing! You roll around in it and eat some of it, thoroughly enjoying yourself. After a while, you realize that in your...inebriated state... you'd accidentally lifted the house off the ground with your telekinetic powers! Oops. You blink, restoring it back to how it was.`);
				}
				else {
					print(`You go back to the catnip in the garden and roll around in it and eat some. You are careful to not lose control of your powers.`);
				}
			},
			"squirrel": (args) => {
				if (!variables["squirrel msg"]++) {
					print(`Frolicking about in the forest, you come across a squirrel! This is your chance to contribute to the family. Nathan will love it! You bolt after it, but it climbs a tree quickly. You contemplate following, but you don't really want to get stuck up there...`);
				}
				else {
					if (!variables["fast squirrel msg"]++) {
						print(`The squirrel looks pretty fast, do you want to chase it?`);
					}
					else {
						if (!variables["squirrel killy times"]++) {
							print(`You sprint after the squirrel. It's pretty speedy, but you're speedier! You kill the squirrel and you're now excited to put it on Nathan's pillow!`);
							variables["kill point S"] = (variables["kill point S"] ? variables["kill point S"] + 1 : 1)
						}
						else {
							print(`You kill another squirrel!`);
							variables["squirrel"] = (variables["squirrel"] ? variables["squirrel"] + 1 : 1)
						}
					}
				}
			},
			"kill": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'squirrel') {
					if (variables["licence to kill revoked"]) {
						print(`Killing things doesn't feel so fun anymore...`);
					}
					else {
						if (!variables["squirrel killing time :)"]++) {
							print(`You find a squirrel and kill it! You can put this on Nathan's pillow!`);
							variables["squirrel"] = (variables["squirrel"] ? variables["squirrel"] + 1 : 1)
						}
						else {
							print(`You kill another squirrel.`);
							variables["squirrel"] = (variables["squirrel"] ? variables["squirrel"] + 1 : 1)
						}
					}
				}
			},
			"climb": (args) => {
				print(`You hurtle straight up the tree, giving no thought to the consequences. Once you're up there, you realize that you can't get back down. You wait there until Baba comes looking for you and brings you back inside (you are now in the kitchen).`);
				goTo("kitchen");
			},
			"l": (args) => {
				if (!args || !args[0]) {
					t.clear();
					print(`It's a pretty nice day! Not cold enough to form the terrible wet white fluff, but not too hot that shade is required. You survey the landscape of infinite litterbox, and decide that the garden is an excellent spot. You notice the cages of chickens and think about going to see them. You can also feel the call of the bear from the front of the house. Perhaps if you look around a little, you'll find a squirrel to chase, or even better, some catnip!
N: You can go back inside
S: You can go on an adventure into the forest.
W: To the west, there's just the patio. Pretty boring.`);
				} else if (args[0] == 'forest') {
					print(`The forest is fun to play in, you like chasing leaves`);
				}
			},
			"garden": (args) => {
				print(`You head over to the garden and look at the plants.`);
			},
			"fight": (args) => {
				if (variables["started talking to the goose"]) {
					print(`As you approach, you realize that geese are somewhat more intimidating than you remember. Good thing you're not a normal cat! You use your telekinetic powers to lift the goose off the ground. Honking in surprise, the goose seems to be calling for help.

A few seconds later, you start to notice the ground shaking slightly. This concerns you, since several of your littermates died in an earthquake. Your telekinetic powers were the only reason you and the rest of your littermates didn't die that day...

To your utter bewilderment, an enormous goose appears, thundering through the forest toward you. You drop the now-miniscule-seeming goose onto the patio (it is offended and honks at you) and gasp at the gigantic bird. It stands about tall enough to reach the top of the roof on the house. You wonder to yourself how it keeps itself hidden, and seemingly in response to your question, it shape-shifts into a catlike figure. 

"Hello". The creature says to you.

"Um...hello..." You reply cautiously, very aware that it is not a wise idea to get on the bad side of this creature. You may have nine lives, but you've used up a fair number of those (you have a complicated past set of lives)...

"I'm going to have to ask you to not bother my geese." The creature states. You nod furiously in response, eager to get out of this without injury. "You see, the geese are special to me, and the fact that you would try to kill or at least injure one of them...it just breaks my heart" It continues. 

You are now thoroughly terrified. You should never have tried to leave the house!

"I agree, you should have stayed inside. Stay away from my children." It replies. What is this creature? You wonder to yourself. "They call me Mr. Goose" The creature answers. "stop calling me an 'it,' I use he/him pronouns." The goose snaps.

"Alright" It concedes. "I will allow you to leave, since I can read your mind and I am reasonably sure that you will never harm one of my little geese again."

"Oh, and I almost forgot." Mr. Goose adds. "I can't let you tell everyone that I exist!" The goose-cat waves a paw and transforms back into his goose form. You wonder what exactly what he means. "I can't let you tell everyone that I exist" Perhaps if you try to tell Lulu or Mumu anything you saw, you won't be able to! Or maybe it'll give you amnesia! No, that can't be it, you can still remember what just happened. I suppose next time you interact with one of the other cats, you'll have to make sure that you can talk about Mr. Goose. 

Shaken by the whole experience, you have two choices ahead of you. Choose peace, choose violence, or bow down and worship Mr. Goose? (You could also run off and chase squirrels or find some catnip as well.)`);
					goTo("MrGoose");
				}
				else {
					print(`Fight what?`);
				}
			},
			"portal": (args) => {
				if (variables["kill point B"] || variables["kill point M"] || variables["kill point N"] || variables["kill point Aliyah"] || variables["kill point Em"] || variables["kill point R"] || variables["kill point Maia"] || variables["kill point A"] || variables["kill point Claire"] || variables["kill point Ev"] || variables["kill point W"] || variables["kill point S"] || variables["kill point WP"] || variables["kill point Beaver"] || variables["kill point L"]) {
					print(`You wander through the forest to find a swirly blue circle. You trod toward it curiously to find that it's not solid! As you paw at it, your paw goes right through it and vanishes! You hop in, hoping that it won't kill you.

You find yourself in a strange room...`);
					variables["Grebel"] = -1
					variables["recently arrived"] = -1
					goTo("hallway3");
				}
				else {
					print(`You wander through the forest to find a swirly blue circle. You trod toward it curiously to find that it's not solid! As you paw at it, your paw goes right through it and vanishes! You hop in, hoping that it won't kill you.

You find yourself in a room...`);
					goTo("PacifistHeadquarters");
				}
			},
			"(bear|front)": (args) => {
				print(`You decide to follow the call of the bear to the front of the house. As you pad over, you can feel its pull grow stronger. As you approach The Bear, you wonder how you knew that it was a bear that was calling you.

You bow and succumb to The Bear's power.`);
				endGame(53472)
			},
			"(chicken|chickens)": (args) => {
				if (!variables["fed the chickens kale"]++) {
					print(`You head over to the chicken coop and watch them wander around for a little. You remember that the chickens like to eat kale, which your humans grow in their garden. You go fetch it and feed it to the chickens (placing it into their coop with telekinesis).`);
					variables["kale"] = (variables["kale"] ? variables["kale"] + 1 : 1)
				}
				else {
					print(`You feed the chickens some more kale.`);
					variables["kale"] = (variables["kale"] ? variables["kale"] + 1 : 1)
				}
			},
		},
		connections: {
			"n": () => {
				print(`After some waiting around, you convince Baba to let you back in.`);
				goTo("kitchen");
			},
			"s": () => {
				print(`You journey off into the forest, and after having a good time chasing some squirrels, you realize you actually have zero idea where you are.                         You sit down and meow until nighttime... when the wild turkey attacks.`);
				endGame(1)
			},
			"w": () => {
				print(`You look to the west and see the patio. Trotting off in that direction, you realize that there is a goose sitting on the tile! Geese are big birds... what should you do? 

As you are thinking this, the goose seems to notice you. It honks at you. Is that a challenge? You think to yourself. 

Do you want to fight the goose, venture into the forest, or turn tail and run back into the house? 

respond "fight", "south" (for outdoor adventure time), or "north" (run back inside).`);
				variables["started talking to the goose"] = -1
			},
		},
	},
	MrGoose: {
		name: "MrGoose",
		commands: {
			"hint": (args) => {
				print(`Confused, huh? Alright, here are the available commands: 

look
move (north|south|up|down)
catnip
squirrel
climb
kill squirrel
worship
violence
peace
inv
clear
help
hint
`);
			},
			"l": (args) => {
				t.clear();
				print(`Mr. Goose looms above you. Choose peace, choose violence, or do you worship Mr. Goose?`);
			},
			"catnip": (args) => {
				print(`You wander around the forest until you come across a familiar-looking plant. It smells amazing! You roll around in it and eat some of it, thoroughly enjoying yourself. After a while, you realize that in your...inebriated state... you'd accidentally lifted the house off the ground with your telekinetic powers! Oops. You blink, restoring it back to how it was.`);
				goTo("outside");
			},
			"squirrel": (args) => {
				print(`Frolicking about in the forest, you come across a squirrel! This is your chance to contribute to the family. Meow and Baba will love it! You bolt after it, but it climbs a tree quickly. You contemplate following, but you don't really want to get stuck up there...`);
				goTo("outside");
			},
			"kill": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'squirrel') {
					if (variables["licence to kill revoked"]) {
						print(`Killing things doesn't feel so fun anymore...`);
					}
					else {
						print(`You find a squirrel and kill it! You can put this on Nathan's pillow!`);
						variables["squirrel"] = (variables["squirrel"] ? variables["squirrel"] + 1 : 1)
					}
				} else if (args[0] == 'goose') {
					print(`Mr. Goose laughs at your feeble attempt at fighting. He banishes you to hell.`);
					goTo("hell");
				}
			},
			"worship": (args) => {
				print(`You have been put in your place by Mr. Goose, and you now realize that you should not have tried to fight him in the first place. As you look up at the great bird, you recognize that he is all-powerful and while there is not much you can control in life, it is a certainty that Mr. Goose is great. Perhaps that is all that is truly important. Reading your mind, the all-powerful Mr. Goose seems to smile at you.

"Would you like to join my goose cult?" Mr. Goose offers.

You are taken aback, but it sounds like a pretty good suggestion. There's nothing interesting happening back in your house, time for an adventure.

You join a group of geese and walk off into the forest. You look back at the house to find that Baba is looking out the window, shocked to see a house-height goose walking off into the forest with his cat. You laugh to yourself. No one will believe him when he explains how he lost the cat. 

You're very excited about your new goose friends!`);
				endGame(6)
			},
			"violence": (args) => {
				print(`Shaking off everything Mr. Goose has said, you lunge at him. If you're fast enough, maybe you'll get him, you think to yourself.

It seems you were wrong. Where are you? You see leprechauns frolicking...(respond "Where am I?")`);
				goTo("heaven");
			},
			"peace": (args) => {
				print(`You meekly tread back inside...

You're shaking slightly as you walk inside. Mumu sees you as she passes by and asks what's wrong. You start to say you just met an enormous goose named Mr. Goose, but the words won't make their way out of your mouth. 

"Nothing..." You reply. 
She shrugs and moves on.`);
				goTo("kitchen");
			},
		},
		connections: {
			"n": () => {
				print(`You run away, back to the kitchen doorway. You meow at the door until Baba lets you back in. He's not sure why you look so shaken...`);
				goTo("kitchen");
			},
			"s": () => {
				print(`You journey off into the forest, and after having a good time chasing some squirrels, you realize you actually have zero idea where you are.                         You sit down and meow until nighttime... when the wild turkey attacks.`);
				endGame(1)
			},
		},
	},
	dining_room: {
		name: "dining_room",
		commands: {
			"hint": (args) => {
				if (variables["lucky hath deleted water"]) {
					print(`Alrighty, here are your possible commands: 

look
look at food
move (north|south|west|up|down)
get food
get water
inv
help
clear
hint`);
				}
				else {
					print(`Alrighty, here are your possible commands: 

look
look at water
look at food
move (north|south|west|up|down)
get food
get water
inv
help
clear
hint`);
				}
			},
			"l": (args) => {
				if (variables["lucky hath deleted water"]) {
					if (!args || !args[0]) {
						t.clear();
						print("[image]Includes/Images/DiningRoomNoWater.jpeg");
						print(`You're in the dining room, where the food and water bowls normally are, but there's no water. You like to sneak up on Lulu when she's eating, but she isn't here right now.
N: The entryway
S: The kitchen
W: The office
D: The basement
- There's food here
- THERE'S NO WATER`);
					} else if (args[0] == 'water') {
						print(`There is no water >:(`);
					} else if (args[0] == 'food') {
						print(`The food looks tasty`);
					}
				}
				else {
					if (!args || !args[0]) {
						t.clear();
						print("[image]Includes/Images/DiningRoom.jpeg");
						print(`You're in the dining room, where the food and water bowls are. You like to sneak up on Lulu when she's eating, but she isn't here right now.
N: The entryway
S: The kitchen
W: The office
D: The basement
- There's food here
- There's water here`);
					} else if (args[0] == 'water') {
						print(`This water is not good enough for chichien`);
					} else if (args[0] == 'food') {
						print(`The food looks tasty`);
					}
				}
			},
			"g": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'food') {
					print(`You eat some of the food, you're not as hungry anymore`);
					variables["food"] = (variables["food"] ? variables["food"] + 1 : 1)
				} else if (args[0] == 'water') {
					if (variables["lucky hath deleted water"]) {
						print(`Water?`);
					}
					else {
						if ((variables["they tried to make me drink gross water"] >= 5 || -variables["they tried to make me drink gross water"] >= 5)) {
							print(`If you're going to be like that, I'll just make it so the water isn't there anymore! (look around)`);
							variables["lucky hath deleted water"] = -1
							variables["they tried to make me drink gross water"] = 0
						}
						else {
							if (variables["they tried to make me drink gross water"]) {
								print(`Stop trying to make me drink it, it's gross!!!`);
								variables["they tried to make me drink gross water"] = (variables["they tried to make me drink gross water"] ? variables["they tried to make me drink gross water"] + 1 : 1)
							}
							else {
								print(`The water here is gross, you don't want to drink it. Your water has to be *sophisticated*`);
								variables["they tried to make me drink gross water"] = -1
							}
						}
					}
				}
			},
			"food": (args) => {
				print(`You eat some of the food, you're not as hungry anymore`);
				variables["food"] = (variables["food"] ? variables["food"] + 1 : 1)
			},
			"water": (args) => {
				if (variables["lucky hath deleted water"]) {
					print(`Water?`);
				}
				else {
					if ((variables["they tried to make me drink gross water"] >= 5 || -variables["they tried to make me drink gross water"] >= 5)) {
						print(`If you're going to be like that, I'll just make it so the water isn't there anymore! (look around)`);
						variables["lucky hath deleted water"] = -1
						variables["they tried to make me drink gross water"] = 0
					}
					else {
						if (variables["they tried to make me drink gross water"]) {
							print(`Stop trying to make me drink it, it's gross!!!`);
							variables["they tried to make me drink gross water"] = (variables["they tried to make me drink gross water"] ? variables["they tried to make me drink gross water"] + 1 : 1)
						}
						else {
							print(`The water here is gross, you don't want to drink it. Your water has to be *sophisticated*`);
							variables["they tried to make me drink gross water"] = -1
						}
					}
				}
			},
			"hell": (args) => {
				if (variables["lucky hath deleted water"]) {
					if (!variables["hell bowl lol"]++) {
						print(`You carefully pad up to where your water bowl used to be. There's a dark red circle instead of the bowl. AS you approach, the circle grows and swallows you! Where are you?`);
						goTo("hell");
					}
					else {
						print(`You enter hell using the dark red water bowl portal.`);
						goTo("hell");
					}
				}
				else {
					print(`Huh?`);
				}
			},
		},
		connections: {
			"s": () => {
				print(`You wander into the kitchen`);
				goTo("kitchen");
			},
			"n": () => {
				print(`You go to the entryway`);
				goTo("entryway");
			},
			"w": () => {
				print(`You go to the office`);
				goTo("office");
			},
			"d": () => {
				print(`You venture down the stairs.`);
				goTo("basement");
			},
		},
	},
	office: {
		name: "office",
		commands: {
			"hint": (args) => {
				if (variables["chose kill Baba"]) {
					print(`Here ya go, here are the possible commands: 

revive
look
look at Baba
meow at Baba
move (north|east|up|down)
kill Baba
watch (unlocked once you meow at Baba)
inv
help
clear
hint`);
				}
				else {
					print(`Here ya go, here are the possible commands (IMPORTANT NOTE: some actions in the room unlock others, so they are not shown here if they have not been unlocked): 

look
look at Baba
meow at Baba
move (north|east|up|down)
kill Baba
watch (unlocked once you meow at Baba)
inv
help
clear
hint`);
				}
			},
			"l": (args) => {
				if (variables["chose kill Baba"]) {
					if (!args || !args[0]) {
						t.clear();
						print("[image]Includes/Images/OfficeBabaDead.jpeg");
						print(`You're in the office, Baba is dead.
N: Living room
E: Dining room
- Baba is dead`);
					} else if (args[0] == 'baba') {
						print(`Baba lying dead as the blinking lights play on his laptop. Type "watch" to look at it.`);
						variables["want to watch computer??"] = -1
					}
				}
				else {
					if (variables["revived Baba"]) {
						if (!args || !args[0]) {
							t.clear();
							print("[image]Includes/Images/Office.jpeg");
							print(`You're in the office. Baba is alive now, just working on his laptop.
N: Living room
E: Dining room
- Baba is here`);
						} else if (args[0] == 'baba') {
							print(`Baba is watching the blinking lights on the laptop. Type "watch" to look at it.`);
							variables["want to watch computer??"] = -1
						}
					}
					else {
						if (!args || !args[0]) {
							t.clear();
							print("[image]Includes/Images/Office.jpeg");
							print(`You're in the office, Baba is here working on his laptop. You like Baba, Baba gives nice pets.
N: Living room
E: Dining room
- Baba is here`);
						} else if (args[0] == 'baba') {
							print(`Baba is watching the blinking lights on the laptop. Type "watch" to look at it.`);
							variables["want to watch computer??"] = -1
						}
					}
				}
			},
			"meow": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'Baba') {
					if (variables["chose kill Baba"]) {
						print(`You meow at his dead body. No response. ("revive" if you want)`);
					}
					else {
						print(`You meow at Baba, he turns around and makes weird baby noises at you and picks you up. You can see his computer, type 'watch' to look at it.`);
						variables["want to watch computer??"] = -1
					}
				}
			},
			"kill": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'Baba') {
					if (variables["licence to kill revoked"]) {
						print(`Killing things doesn't feel so fun anymore...`);
					}
					else {
						if (variables["chose kill Baba"]) {
							print(`You can't re-kill him, he's still dead! You can revive him if you want, though. (command is "revive")`);
						}
						else {
							print(`You approach Baba from behind, slowly stalking up. You leap up to scratch the back of his head with the intent to kill. 

As your claws sink into his flesh, he yelps in pain. As he dies, you wonder if you should revive him. ("yes" or "no")`);
							variables["Baba life/death question"] = -1
							variables["kill point B"] = (variables["kill point B"] ? variables["kill point B"] + 1 : 1)
							goTo("DecisionRoom");
						}
					}
				}
			},
			"u": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'baba') {
					if (variables["chose kill Baba"]) {
						print(`You can't hop up on a dead body, although you do want to watch the blinking lights...(type "watch" to watch)`);
						variables["want to watch computer??"] = -1
					}
					else {
						print(`You jump up and sit on Baba's lap. You can see his computer, type 'watch' to look at it.`);
						variables["want to watch computer??"] = -1
					}
				}
			},
			"watch": (args) => {
				if (variables["want to watch computer??"]) {
					print(`The more you watch, the more enthralled you become. Pictures are moving around the screen! It's very entertaining for a cat. You lose your mind to this hypnotic state.`);
					endGame(2)
				}
				else {
					print(`watch...what?`);
				}
			},
			"revive": (args) => {
				if (variables["chose kill Baba"]) {
					if (!args || !args[0]) {
						print(`You casually rewind time. You watch the blood un-pool itself back into Baba as he comes alive again.`);
						variables["chose kill Baba"] = 0
						variables["revived Baba"] = -1
						variables["chose to revive someone"] = -1
					} else if (args[0] == 'Baba') {
						print(`You casually rewind time. You watch the blood un-pool itself back into Baba as he comes alive again.`);
						variables["chose kill Baba"] = 0
						variables["revived Baba"] = -1
						variables["chose to revive someone"] = -1
					}
				}
				else {
					print(`Huh? Revive?`);
				}
			},
		},
		connections: {
			"n": () => {
				print(`You go over to the living room`);
				goTo("living_room");
			},
			"e": () => {
				print(`You go to the dining room`);
				goTo("dining_room");
			},
		},
	},
	living_room: {
		name: "living_room",
		commands: {
			"hint": (args) => {
				if (variables["chose kill Mumu"]) {
					print(`Command list time! (for now): 

revive
look
look at Mumu
meow at Mumu
kill Mumu
get water
look at water
break glass
break window< (NOTE: this is a way to get outside without fulfilling your food/water/rest requirements! Shhh!)br>                    move (north|east|south|up|down)
play chess
inv
help
clear
hint`);
				}
				else {
					print(`Command list time! (for now): 

look
Mumu
meow at Mumu
kill Mumu
get water
look at water
break glass
break window< (NOTE: this is a way to get outside without fulfilling your food/water/rest requirements! Shhh!)br>                    move (north|east|south|up|down)
play chess
inv
help
clear
hint`);
				}
			},
			"l": (args) => {
				if (variables["chose kill Mumu"]) {
					if (!args || !args[0]) {
						t.clear();
						print("[image]Includes/Images/LivingRoomMumuDead.jpeg");
						print(`You are in the living room, one of your favorites! Mumu is lying dead in her cat bed. There's an empty glass on the table. There's also a chess board!
N: The window
E: Entryway
S: The office
- Mumu is dead
- There's an empty glass on the table.`);
					} else if (args[0] == 'mumu') {
						print(`You walk over to Mumu to admire your handiwork. You nod approvingly to yourself, but you do feel a little guilt. You can revive her by typing "revive" if you want.`);
					}
				}
				else {
					if (!args || !args[0]) {
						t.clear();
						print("[image]Includes/Images/LivingRoom.jpeg");
						print(`You are in the living room, one of your favorites! Mumu is sleeping in her cat bed. There's an empty glass on the table. There's also a chess board!
N: The window
E: Entryway
S: The office
- Mumu is here
- There's an empty glass on the table.`);
					} else if (args[0] == 'mumu') {
						print(`Mumu looks sad`);
					}
				}
			},
			"chess": (args) => {
				if (variables["won chess game!"]) {
					print("[image]Includes/Images/ChessProLucky.JPEG");
					print(`You play chess against yourself and win again!`);
					variables["won chess game!"] = (variables["won chess game!"] ? variables["won chess game!"] + 1 : 1)
				}
				else {
					print("[image]Includes/Images/ChessProLucky.JPEG");
					print(`You use your telekinetic powers to play chess against yourself. Shockingly, you won!`);
					variables["won chess game!"] = (variables["won chess game!"] ? variables["won chess game!"] + 1 : 1)
				}
			},
			"meow": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'mumu') {
					if (variables["chose kill Mumu"]) {
						print(`You meow at her dead body. Shockingly, there is no response. If you feel remorseful, you can "revive" her.`);
					}
					else {
						print(`You meow at Mumu, she replies:

"My meow meow's gone awayyy
I'll now be sad throughout the day!
There's just nothing else to say!
Meow meow's goneeee, meow meow's goneeeee!"`);
					}
				}
			},
			"break": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'water') {
					if (variables["broken before"]) {
						print(`You decide to break the glass again. As you watch the glass shatter on the ground, you wait for the leprechaun to show up again to rewind time. It doesn't show up. You sigh. You have to do *everything* around here! You rewind time yourself to fix the glass.`);
					}
					else {
						print(`Your paw strikes the glass surface and you watch the glass fall to the ground slowly. You feel a sense of power emerge as it shatters across the ground. You step in the glass shards. Good thing you're invincible to injury. A normal cat would have been cut by the glass! 

Suddenly, a leprechaun pops out of nowhere and rewinds time for you. Good thing it's fixed now - Meow would probably be pretty mad at you. Oh well, it was fun while it lasted. You contemplate doing it again.`);
						variables["broken before"] = -1
					}
				} else if (args[0] == 'window') {
					print(`You can practically taste the forest air on your tongue. Perhaps you can catch a mouse and bring it back for the family! You leap out that window!`);
					goTo("outside");
				}
			},
			"kill": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'Mumu') {
					if (variables["licence to kill revoked"]) {
						print(`Killing things doesn't feel so fun anymore...`);
					}
					else {
						if (variables["chose kill Mumu"]) {
							print(`You can't kill her again, she's already dead! You can choose to revive her, though...(command is "revive")`);
						}
						else {
							print(`You approach Mumu in an attempt to try out a quick pick-up line: 

"I'm not high on catnip, I'm just intoxicated by you"
*you raise your eyebrows suggestively*

She doesn't seem to like the pick-up line. You revert back to your original plan. You put your paw up to her face and suddenly unsheathe your claws into her neck. She bleeds to death.

Standing over her body, you start to regret killing her. Maybe you shouldn't have done it. Revive her? ("yes" or "no")`);
							variables["kill point M"] = (variables["kill point M"] ? variables["kill point M"] + 1 : 1)
							variables["Mumu life/death question"] = -1
							goTo("DecisionRoom");
						}
					}
				}
			},
			"g": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'water') {
					print(`The glass is empty, so you can't drink from it.`);
				}
			},
			"revive": (args) => {
				if (variables["chose kill Mumu"]) {
					print(`As you look at Mumu's dead body, you start to cry in regret, and as your tears fall onto her, she starts to wake up. Your tears have healed her! They also seem to have had an amnesic effect: she doesn't remember you killing her! It's probably a good idea to leave now...`);
					variables["chose kill Mumu"] = 0
					variables["revived Mumu"] = -1
					variables["chose to revive someone"] = -1
				}
				else {
					print(`Revive who? What?`);
				}
			},
		},
		connections: {
			"e": () => {
				print(`You go to the entryway`);
				goTo("entryway");
			},
			"s": () => {
				print(`You gallop as fast as you possibly can to the office. Very fun`);
				goTo("office");
			},
			"n": () => {
				print(`You look out the window and chatter at some birds. You know you can't catch them, but it's fun to watch anyways. You think about breaking the window to catch them...`);
			},
		},
	},
	entryway: {
		name: "entryway",
		commands: {
			"hint": (args) => {
				print(`This room isn't very complicated at all, but here's the list: 

look
move (north|east|south|west|up|down)
inv
help
clear
hint`);
			},
			"l": (args) => {
				if (variables["lulu"]) {
					t.clear();
					print("[image]Includes/Images/Entryway.jpeg");
					print(`You're in the entryway. It's pretty dirty. The door leads outside.
N: Outside
E: Hallway
S: Dining room
W: Living room`);
				}
				else {
					t.clear();
					print("[image]Includes/Images/Entryway.jpeg");
					print(`You're in the entryway. It's pretty dirty. The door leads outside. You see the dreaded Lulu at the end of the hall, she trots into emily's room
N: Outside
E: Hallway
S: Dining room
W: Living room`);
					variables["lulu"] = -1
				}
			},
		},
		connections: {
			"n": () => {
				if (variables["food"] && variables["water"] && variables["rest"]) {
					print(`You are ready. You are excited. You are so excited. You bound over and meow at Baba until he lets you outside. As soon as you're out you bolt for the forest and climb up a tree.
You climb and you climb until you can't climb anymore. You look down. You're so high! You feel accomplished.


You can't get down.`);
					endGame(3)
				}
				else {
					print(`You're not ready to go outside yet, you need to be well fed, have a drink, and rest first`);
				}
			},
			"s": () => {
				print(`You go into the dining room`);
				goTo("dining_room");
			},
			"w": () => {
				print(`You see a yellow ball, and bat it into the living room. You lose it again after 0.01ms`);
				goTo("living_room");
			},
			"e": () => {
				print(`You go down the hallway a little bit.`);
				goTo("hallway1");
			},
		},
	},
	hallway1: {
		name: "hallway1",
		commands: {
			"hint": (args) => {
				print(`There's not a lot to do here, but here's a little trick: if you go a bit further east down the hall, and you decide to kill Lulu from the hall, you strike her first and it ends in a draw. If you try to enter Emily's room, where she is, she attacks you first and you die.: 

look
move (east|south|west|up|down)
inv
help
clear
hint`);
			},
			"l": (args) => {
				t.clear();
				print("[image]Includes/Images/Hallway1.jpeg");
				print(`You are in the middle of the hallway, James' door is closed.
E: Hallway
S: Bathroom
W: Entryway`);
			},
		},
		connections: {
			"e": () => {
				print(`You continue down the hallway`);
				goTo("hallway2");
			},
			"s": () => {
				print(`You journey into the bathroom`);
				goTo("bathroom");
			},
			"w": () => {
				print(`You go to the entryway`);
				goTo("entryway");
			},
		},
	},
	hallway2: {
		name: "hallway2",
		commands: {
			"hint": (args) => {
				print(`Lulu's pretty much the only interesting thing going on here, although you can also enter the master bedroom from here (south): 

look
look at Lulu
kill Lulu (NOTE: it's better to try to kill Lulu from here than by entering Emily's room)
move (north|south|west|up|down)
inv
help
clear
hint`);
			},
			"l": (args) => {
				if (!args || !args[0]) {
					t.clear();
					print("[image]Includes/Images/Hallway2.jpeg");
					print(`You are at the end of the hallway, Emily's door is next to you, and you see Lulu's ugly face peering at you from on top of the bed
N: Emily's room
S: Meow's room
W: Hallway`);
				} else if (args[0] == 'lulu') {
					print(`You don't like Lulu very much, probably best to keep your distance`);
				}
			},
			"kill": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'Lulu') {
					if (variables["licence to kill revoked"]) {
						print(`Killing things doesn't feel so fun anymore...(and you probably can't kill her anyway :( )`);
					}
					else {
						print(`She seems to be glaring at you in a way that makes you think that she'd kill you first if given the chance. Not this time! 

You charge into the room and leap onto the bed, surprising her. She fights back viciously, and it ends in a draw. 

You walk away with minor wounds and you think to yourself that maybe you made a questionable decision. Oh well. Perhaps you're glad that she didn't die.`);
					}
				}
			},
		},
		connections: {
			"n": () => {
				print(`You enter Emily's room... very cautiously... and then out of nowhere Lulu leaps off the bed and attacks you. You're too nice to hurt even a monster like her, so you succumb to your fate...`);
				endGame(4)
			},
			"s": () => {
				print(`You enter the master bedroom`);
				goTo("meow_room");
			},
			"w": () => {
				print(`You go down the hallway`);
				goTo("hallway1");
			},
		},
	},
	bathroom: {
		name: "bathroom",
		commands: {
			"hint": (args) => {
				print(`This room isn't very complicated at all, but here's the list: 

look
look at water
get water
move (north|east|up|down)
inv
help
clear
hint`);
			},
			"l": (args) => {
				if (!args || !args[0]) {
					t.clear();
					print(`You are in the bathroom. You can see the large, white bowl in the corner.
N: The hallway
E: Meow's bedroom
- There's a toilet here`);
				} else if (args[0] == 'water') {
					print(`Mmmm, toilet water. Get some water?`);
				}
			},
			"g": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'water') {
					print(`You jump up on the toilet and have a good long drink. You feel very refreshed! Best water in the house.`);
					variables["water"] = (variables["water"] ? variables["water"] + 1 : 1)
				}
			},
		},
		connections: {
			"n": () => {
				print(`You go to the hallway`);
				goTo("hallway1");
			},
			"e": () => {
				print(`You go into Meow's room`);
				goTo("meow_room");
			},
		},
	},
	meow_room: {
		name: "meow_room",
		commands: {
			"hint": (args) => {
				print(`Not much going on, but here's the list of what you can do here: 

look
look at bed
use bed
move (north|west|up|down)
inv
help
clear
hint`);
			},
			"l": (args) => {
				if (!args || !args[0]) {
					t.clear();
					print(`You are in Meow's room, she has lots of blankets. You see your sleeping bag nest in the corner of the room.
N: Hallway
W: The bathroom
- Your sleeping bag nest is here`);
				} else if (args[0] == 'bed') {
					print(`It's very cozy and warm`);
				}
			},
			"u": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'bed') {
					print(`You curl up in your bed and take a nap. You dream that Lulu got trapped outside and you never saw her again. Ah what a good dream, you feel much more rested now!`);
					variables["rest,"] = (variables["rest,"] ? variables["rest,"] + 1 : 1)
				}
			},
		},
		connections: {
			"n": () => {
				print(`You go to the hallway`);
				goTo("hallway2");
			},
			"w": () => {
				print(`You go to the bathroom`);
				goTo("bathroom");
			},
		},
	},
	basement: {
		name: "basement",
		commands: {
			"h": (args) => {
				print(`Commands for the basement:

look
blanket
laundry
Nathan
door / leave
upstairs
inv
help
clear
hint`);
			},
			"hint": (args) => {
				print(`Here's what you can do: 

look
blanket
laundry
Nathan (Nathan's room is where you really should take the hint if you're not finding the thing)
door / leave (NOTE: you'll need water, food, and rest to leave through the door)
upstairs
inv
help
clear
hint`);
			},
			"l": (args) => {
				t.clear();
				print("[image]Includes/Images/Basement.jpeg");
				print(`You are in the basement! There's a blanket that you like to sit on, there's the laundry, and there's Nathan's room.`);
			},
			"blanket": (args) => {
				print(`You pad over to the blanket that you like to sit on. Mmm, comfortable.`);
				variables["rest"] = 1
			},
			"laundry": (args) => {
				print(`You curl up in a pile of clothes. Ah...`);
				variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
			},
			"(Nathan|room)": (args) => {
				print(`You head over to Nathan's room.`);
				goTo("nathan1");
			},
			"(door|leave|escape|e)": (args) => {
				if (variables["food"]) {
					if (variables["water"]) {
						if (variables["rest"]) {
							print(`You are ready. You wander over and meow at Baba until he lets you outside`);
							goTo("outside");
						}
						else {
							print(`You're not ready to go outside yet, you need to be well fed, have a drink, and rest first`);
						}
					}
					else {
						print(`You're not ready to go outside yet, you need to be well fed, have a drink, and rest first`);
					}
				}
				else {
					print(`You're not ready to go outside yet, you need to be well fed, have a drink, and rest first`);
				}
			},
			"upstairs": (args) => {
				print("[image]Includes/Images/DiningRoom.jpeg");
				print(`You go upstairs.`);
				goTo("dining_room");
			},
		},
	},
	nathan1: {
		name: "nathan1",
		commands: {
			"hint": (args) => {
				print(`This room isn't very complicated at all, but here's the list: 

look
cat bed
chair
break window
bed
offer squirrel (if you have one - otherwise, you can get one by going outside)
under bed (!!!IMPORTANT INTERACTION!!!)
inv
help
clear
hint`);
			},
			"l": (args) => {
				if (variables["Grebel"]) {
					t.clear();
					print("[image]Includes/Images/NathanRoomPortal.jpeg");
					print(`You're back in Nathan's room! Your cat bed is here, there's a chair you like to sit on, and Nathan's bed looks pretty comfortable, too. There's also a window that you can look out of! You can also go back to Nathan's new room by typing "portal." 

Leave the room by typing "basement"`);
				}
				else {
					t.clear();
					print("[image]Includes/Images/NathanRoom1.jpeg");
					print(`You are in Nathan's room! Your cat bed is here, there's a chair you like to sit on, and Nathan's bed looks pretty comfortable, too. There's also a window that you can look out of!

Leave the room by typing "basement"`);
				}
			},
			"(basement|b)": (args) => {
				print("[image]Includes/Images/Basement.jpeg");
				print(`You leave Nathan's room and return to the basement.`);
				goTo("basement");
			},
			"cat": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'bed') {
					print(`You curl up on the cat bed and fall asleep.`);
					variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
				}
			},
			"chair": (args) => {
				print(`You sit on the chair in Nathan's room and look out the window. The birds and squirrels look pretty tasty out there! You could go outside once you have rested and eaten (or you could break the window now!).`);
				variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
			},
			"break": (args) => {
				if (!args || !args[0]) {
					print(`You leap from the chair into the window, shattering it completely. You're an essentially invincible kitten, so you don't get injured by the glass. Yay, you're outside!`);
					goTo("outside");
				} else if (args[0] == 'window') {
					print(`You leap from the chair into the window, shattering it completely. You're an essentially invincible kitten, so you don't get injured by the glass. Yay, you're outside!`);
					goTo("outside");
				}
			},
			"bed": (args) => {
				if (variables["went on bed already, it's rabbit hole time"]) {
					if (variables["Grebel"]) {
						print(`You crawl under Nathan's bed and make your way to the portal. You go through and end up in Nathan's new room.`);
						goTo("nathan2");
					}
					else {
						print(`You've already been on top of the bed, so you crawl under Nathan's bed. You like to be here, it's safe and comfortable, maybe not as comfortable as the actual bed, but -

You suddenly notice a blue shimmery circle-like shape appear on the ground, no larger than one of your paws. Curious, you creep closer to it. The circle grows rapidly and swallows you! Where are you? ("look")`);
						variables["Grebel"] = -1
						variables["recently arrived"] = -1
						goTo("nathan2");
					}
				}
				else {
					print(`You curl up on Nathan's bed. Mmm, comfortable. You wonder if under the bed is any more comfortable?`);
					variables["went on bed already, it's rabbit hole time"] = -1
				}
			},
			"(offer|give|squirrel)": (args) => {
				if (variables["squirrel"]) {
					if (variables["chose kill Nathan"]) {
						print(`You lay the squirrel on the pillow proudly. Nathan will love it! Or at least he would have loved it, if you hadn't killed him...You could go to his new room, revive him, and offer the squirrel...`);
					}
					else {
						print(`You lay the squirrel on the pillow proudly. Nathan will love it! Hmm, he won't see it here...maybe go through the portal first...
You pick up the squirrel again`);
					}
				}
				else {
					print(`You have to kill a squirrel to give it to him...`);
				}
			},
			"portal": (args) => {
				if (variables["Grebel"]) {
					print(`You crawl under Nathan's bed and make your way to the portal. You go through and end up in Nathan's new room.`);
					goTo("nathan2");
				}
				else {
					print(`You crawl under Nathan's bed. You like to be here, it's safe and comfortable, maybe not as comfortable as the actual bed, but -

You suddenly notice a blue shimmery circle-like shape appear on the ground, no larger than one of your paws. Curious, you creep closer to it. The circle grows rapidly and swallows you! Where are you? ("look")`);
					variables["Grebel"] = -1
					variables["recently arrived"] = -1
					goTo("nathan2");
				}
			},
		},
	},
	nathan2: {
		name: "nathan2",
		commands: {
			"hint": (args) => {
				if (variables["weed"]) {
					if (variables["chose kill Nathan"]) {
						print(`Here, list: 

Revive Nathan
look
Nathan
kill Nathan
offer squirrel (if you have one - if not, you can get one by catching one while outside at home)
home / portal / box / closet 
hallway / leave 
deliver weed
inv
help
clear
hint`);
					}
					else {
						print(`Alright, here's list: 

look
Nathan
kill Nathan
offer squirrel (if you have one - if not, you can get one by catching one while outside at home)
home / portal / box / closet 
hallway / leave 
deliver weed
inv
help
clear
hint`);
					}
				}
				else {
					if (variables["chose kill Nathan"]) {
						print(`Here, have a list of all commands:

revive Nathan 
look
Nathan
offer squirrel (if you have one - if not, you can get one by catching one while outside)
home / portal / box / closet 
hallway / leave 
inv
help
clear
hint`);
					}
					else {
						print(`Here, have list of all commands: 

look
Nathan
offer squirrel (if you have one - if not, you can get one by catching one while outside)
home / portal / box / closet 
hallway / leave 
inv
help
clear
hint`);
					}
				}
			},
			"l": (args) => {
				if (variables["chose kill Nathan"]) {
					t.clear();
					print("[image]Includes/Images/DeadNathan.jpeg");
					print(`You're in Nathan's room as he lies dead on the floor. To go back to your house, type "home", or go to the hallway by typing "leave".`);
				}
				else {
					if (variables["recently arrived"]) {
						if (variables["went into portal 2"]) {
							t.clear();
							print("[image]Includes/Images/Nathan2.jpeg");
							print(`You come out of the blue shimmery circle and find yourself in the middle of a room where Nathan is at a desk working on his computer. 

You read his screen (you learned to read two lives ago, in Italy) and find that he is not doing work, he is coding a game. "Lucky's Cat Adventures" You read. You laugh to yourself. It couldn't possibly be as exciting as your actual life. He hasn't noticed you yet. 

Type "portal" to go through the closet portal, returning to your house, or "hallway" to leave the room.`);
							variables["recently arrived"] = 0
							variables["Grebel"] = -1
						}
						else {
							if (variables["went into portal 2"]) {
								t.clear();
								print(`You look around to see that you're in Nathan's room! You can hop through the closet portal to get home by typing "home," or go to the hallway by typing "leave."`);
								print("[image]Includes/Images/Nathan2.jpeg");
								variables["recently arrived"] = 0
								variables["Grebel"] = -1
							}
							else {
								t.clear();
								print("[image]Includes/Images/Nathan2.jpeg");
								print(`You're in Nathan's room. To go back to your house, you can type "home", or you can go to the hallway by typing "leave".`);
							}
						}
					}
					else {
						t.clear();
						print("[image]Includes/Images/Nathan2.jpeg");
						print(`You're in Nathan's room. To go back to your house, you can type "home", or you can go to the hallway by typing "leave".`);
					}
				}
			},
			"(Bullet Journal|BJ)": (args) => {
				if (variables["chose kill Nathan"]) {
					print(`?`);
				}
				else {
					print(`Nathan opens up a notepad-type file on his computer and starts writing in bullet points. You recognize this as being similar to the BJ he often enjoyed while at home. He did love writing in that Bullet Journal.`);
				}
			},
			"Nathan": (args) => {
				if (variables["chose kill Nathan"]) {
					print("[image]Includes/Images/DeadNathan.jpeg");
					print(`You admire Nathan as he lies dead on the floor. You do love a successful kill. ("revive Nathan" if you've grown a conscience)`);
				}
				else {
					print("[image]Includes/Images/NathanPhoto.JPG");
					print(`"Hello!" You mew at Nathan. He jumps. 

"Lucky?" he exclaims. He picks you up and hugs you. "I don't know how you're here...perhaps you're just a figment of my imagination, a sign that I'm up too late..." You glance at the clock and realize that time has passed since you last looked outside, it's now about 5 AM. You decide that you want to have time to yourself to wander around the building, so you rewind time so that he hasn't noticed you yet. It's now about 11:30 PM. You think about leaving the room.`);
				}
			},
			"kill": (args) => {
				if (!args || !args[0]) {
					print(`What would you like to kill?`);
				} else if (args[0] == 'Nathan') {
					if (variables["chose kill Nathan"]) {
						print(`Really? Trying to kill the same person twice? If you can't keep track of who you've killed, maybe the murder game isn't for you.`);
					}
					else {
						if (variables["licence to kill revoked"]) {
							print(`Killing things doesn't feel so fun anymore...`);
						}
						else {
							print("[image]Includes/Images/DeadNathan.jpeg");
							print(`Creeping up behind Nathan, you lunge at him, plunging your claws into him. As he bleeds out onto the carpet, you start to perhaps regret your actions. Should you revive him? ("Yes" or "no")`);
							variables["Nathan life/death question"] = -1
							variables["kill point N"] = (variables["kill point N"] ? variables["kill point N"] + 1 : 1)
							goTo("DecisionRoom");
						}
					}
				}
			},
			"(deliver|give)": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'weed') {
					if (variables["chose kill Nathan"]) {
						print(`Nathan is dead, but you decide to put the weed in his room anyway.`);
						variables["weed"] = -1
					}
					else {
						print(`You go to Nathan's room and give him the weed.`);
						variables["weed"] = -1
					}
				}
			},
			"(home|portal|box|closet)": (args) => {
				print(`You leap back through the portal and appear at home!`);
				variables["Grebel"] = -1
				goTo("nathan1");
			},
			"(offer|give|squirrel)": (args) => {
				if (variables["squirrel"]) {
					if (variables["chose kill Nathan"]) {
						print(`You lay the squirrel on his pillow proudly (the lower bed; he has them in a bunk bed position but you can't get up the ladder). Nathan would love it! He is lying dead on the floor. 

(You are still in Nathan's room)`);
						variables["squirrel"] = 0
					}
					else {
						if (variables["kill point N"]) {
							print(`You lay the squirrel on his pillow proudly (the lower bed; he has them in a bunk bed position but you can't get up the ladder). Nathan will love it! He is there, but hasn't noticed you yet. You recall killing him before reviving him...Ah, you do enjoy fantasizing about murder.`);
							variables["squirrel"] = 0
						}
						else {
							print(`You lay the squirrel on his pillow proudly (the lower bed; he has them in a bunk bed position but you can't get up the ladder). Nathan will love it! He is there, but hasn't noticed you yet.`);
							variables["squirrel"] = 0
						}
					}
				}
				else {
					print(`You have to kill a squirrel in order to put it on the pillow...`);
				}
			},
			"revive": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'Nathan') {
					if (variables["chose kill Nathan"]) {
						print(`Fine, fine, you revive Nathan using your magical healing tears. *rolls eyes*`);
						variables["chose kill Nathan"] = 0
						variables["revived Nathan"] = -1
						variables["chose to revive someone"] = -1
					}
					else {
						print(`?`);
					}
				}
			},
			"(hallway3|hallway|leave)": (args) => {
				print(`You trot out into the hallway, looking around. It's dark, perhaps because it's past 11 PM.`);
				goTo("hallway3");
			},
		},
	},
	hallway3: {
		name: "hallway3",
		commands: {
			"upstairs": (args) => {
				print(`You are now in the upstairs hallway (you can still get to anyone in the building from here).`);
			},
			"(hallway|leave)": (args) => {
				print(`You are in the hallway (look around).`);
			},
			"foyer": (args) => {
				print(`You're downstairs in the foyer. You can still get to everyone in the building from here.

You see a garden outside. Want to check it out? ("garden")`);
			},
			"andrew": (args) => {
				print(`The name seems vaguely familiar...try Andy, Dandrewlion, or Werdna`);
			},
			"h": (args) => {
				t.clear();
				print(`North-east-south-west commands are now useless, but you can still move up/down 
Type "look" to see the floor plan
Type any name to see that person
move (up|down)
inv
help
hint
clear`);
			},
			"hint": (args) => {
				print(`Take a look at these commands and see if you've gotten to everything

Any name you see on the floor plan (ex. "Reu", "Maia", "Aliyah")
"song" + "extended verses"
"Cloak Claire"
"cage"
"bother Andy" (separate interaction from "Andy")
"trumpet duet"
"kill Andy/ kill Maia/ kill Aliyah/ kill Reu/ kill Nathan/ kill Treacys/ kill Jake"
"hard hat"
"banana"
"chocolate milk"
"weed"
"follow" (after talking to Aliyah)
"play basketball"
"garden"`);
			},
			"l": (args) => {
				if (variables["licence to kill"] || variables["licence to kill revoked"]) {
					if (variables["weed"]) {
						print("[image]Includes/Images/Hallway3Weed.jpeg");
						print(`Hall-wandering time! Who do you want to visit?`);
					}
					else {
						print("[image]Includes/Images/Hallway3Weed.jpeg");
						print(`Hall-wandering time! Who do you want to visit? Might I suggest visiting Maia for weed?

("weed")`);
					}
				}
				else {
					if (variables["chose kill Aliyah"] && variables["chose kill Maia"] && variables["chose kill Reu"] && variables["chose kill Nathan"] && variables["chose kill Aliyah"] && variables["chose kill Andrew"] && variables["chose kill B"]) {
						if (variables["has been to Emily's house before"]) {
							t.clear();
							print("[image]Includes/Images/Hallway3EveryoneDead.jpeg");
							print(`You've killed everyone here who can be killed...There are still possible interactions, but for the most part this is where you'd decide to move on (unless you want to revive people, which you'd do by typing "revive" followed by a name, for example: "revive Andrew").`);
						}
						else {
							t.clear();
							print("[image]Includes/Images/Hallway3EveryoneDead.jpeg");
							print(`You've killed everyone here who can be killed...There are still possible interactions, but for the most part this is where you'd decide to move on (unless you want to revive people, which you'd do by typing "revive" followed by a name). 

Maybe check out the garden! ("garden")`);
						}
					}
					else {
						print("[image]Includes/Images/Hallway3NoWeed.jpeg");
						print(`Hall-wandering time! Who do you want to visit?`);
					}
				}
			},
			"song": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'Werdna') {
					if (!args || !args[1]) {
					} else if (args[1] == 'Dandrewlion') {
						if (!args || !args[2]) {
						} else if (args[2] == 'Andy') {
							if (variables["chose kill Nathan"]) {
								print(`A ghost starts running down the hall, and you realize that it's Nathan! He is singing, and you listen to the words:


"My... sweet... Werdna...
My... sweetheart
If you believe in the power of friendship
Nothing can keep us apart...

But that's just not good enough for me!
Without Werdna I cannot be
for if you would not have me then I'll... be

a robot for my Werdna!
Just for Werdna I will be a robot
But one small issue is that I may overheat
Just because, my Werdna is so hot.

My Werdna is too hot for me
But if not a robot, what else can I be?

Werdna! Dandrewlion. Andy. For you I'm trying
Whatever name you go by doesn't matter.
I will call you mine.

Werdna, you're beautiful.

I could be, some chocolate milk
Nothing quite as sweet.
An added bonus would be,
that Werdna's lips, I would meet...

But while chocolate milk is finite
My love for Werdna is unending
Because Werdna is my one true love,
no one else is even contending

Werdna! Dandrewlion. Andy. For you I'm trying
Whatever name you go by doesn't matter.
I will call you mine.

Werdna, Werdna I love you

I could be, a chin-up bar
To make my Wernda stronk
The problem is, is Werdna's weight
My Werdna is too chomnk. 

Werdna! Dandrewlion. Andy. For you I'm trying
Whatever name you go by doesn't matter.
I will call you mine.

Werdna, Werdna won't you love me.

I could be, a mirror.
diverting Werdna's gaze.
For then I'd spend, my final days
Looking at his wonderful face

Werdna! Dandrewlion. Andy. For you I'm trying
Whatever name you go by doesn't matter.
I will call you mine.

Werdna, won't you call me yours"


Having reached the end of the song, the ghost disappears..

Nathan's ghost pops back in to inform you that there are a few extended verses, if you want to hear them.`);
								variables["heard the main part of the song already bc I don't want spoilers >:("] = -1
							}
							else {
								print(`Suddenly, you see Nathan running down the dark hall, singing. You listen to the words:

"My... sweet... Werdna...
My... sweetheart
If you believe in the power of friendship
Nothing can keep us apart...

But that's just not good enough for me!
Without Werdna I cannot be
for if you would not have me then I'll... be

a robot for my Werdna!
Just for Werdna I will be a robot
But one small issue is that I may overheat
Just because, my Werdna is so hot.

My Werdna is too hot for me
But if not a robot, what else can I be?

Werdna! Dandrewlion. Andy. For you I'm trying
Whatever name you go by doesn't matter.
I will call you mine.

Werdna, you're beautiful.

I could be, some chocolate milk
Nothing quite as sweet.
An added bonus would be,
that Werdna's lips, I would meet...

But while chocolate milk is finite
My love for Werdna is unending
Because Werdna is my one true love,
no one else is even contending

Werdna! Dandrewlion. Andy. For you I'm trying
Whatever name you go by doesn't matter.
I will call you mine.

Werdna, Werdna I love you

I could be, a chin-up bar
To make my Wernda stronk
The problem is, is Werdna's weight
My Werdna is too chomnk. 

Werdna! Dandrewlion. Andy. For you I'm trying
Whatever name you go by doesn't matter.
I will call you mine.

Werdna, Werdna won't you love me.

I could be, a mirror.
diverting Werdna's gaze.
For then I'd spend, my final days
Looking at his wonderful face

Werdna! Dandrewlion. Andy. For you I'm trying
Whatever name you go by doesn't matter.
I will call you mine.

Werdna, won't you call me yours"


Baffled, you watch as he returns to his room as though nothing happened.

Nathan pops back out and informs you that there are a few extended verses, if you want to hear them.`);
								variables["heard the main part of the song already bc I don't want spoilers >:("] = -1
							}
						}
					}
				}
			},
			"(extended|more|hear|listen)": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'verses') {
					if (variables["heard the main part of the song already bc I don't want spoilers >:("]) {
						if (variables["chose kill Nathan"]) {
							print(`The ghost materializes and begins to sing, a spotlight falling onto him (where the spotlight came from, you have no idea...):


"I could be, a flip flop.
Wherever Werdna goes.
And I would work, for hours
spreading Werdna's toes.

I could be, stripper socks,
Fantastic, that's for sure
And I would be transparent
Like I wish the rest of his clothes were.

I could be, a towel.
I'd dry him off with power
And for some extra zesty
He'd bring me to his shower."

Nathan's ghost bows to you and disappears into thin air. You are left standing in the hallway.`);
						}
						else {
							print(`Huh?`);
						}
					}
				}
			},
			"Reu": (args) => {
				if (variables["chose kill Reu"]) {
					if (variables["Name Phyllis"]) {
						print(`You walk into the room of the tall human who you had killed. The human still lies on the couch. You say hello to Phyllis. Phyllis does not respond. You return to the hallway. ("revive Reu" if you want)`);
					}
					else {
						print(`You walk into the room of the tall human who you had killed. The human still lies dead on the couch. You spin for a bit on the spinning chair and then return to the hall ("revive Reu" if you want)`);
					}
				}
				else {
					if (variables["revived Reu"]) {
						if (variables["Name Phyllis"]) {
							print(`You pad into Phyllis' room and greet it. It does not respond. You see the tall human behind its desk. It looks a little confused. Humans are confused sometimes when they're killed and revived, they lose time and it confuses them.`);
						}
						else {
							print(`You pad into the room of the tall human that you'd revived. The human smiles at you, somewhat confused. It doesn't remember you, but it's confused in general because of the loss of time that comes with being killed and revived. Oh well. You curl up on the couch and fall asleep. A while later, you return to the hallway.
,br>                                You are now in the hallway.`);
							variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
						}
					}
					else {
						if (variables["Name Phyllis"]) {
							print("[image]Includes/Images/Phyllis.JPG");
							print(`You pad into the room of the tall human that you have seen before. It smiles at you. 

"Well hello again!" The human says. 

You meow at Phyllis. It does not respond.

You take another nap on the human's couch, and return to the hallway a few hours later.`);
							variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
						}
						else {
							print(`You scratch at one of the doors, which is slightly open. A tall human crosses the room and looks at you in confusion. "Well hello" It says to you. You pad into the room and see a stuffed blueish blob seated on the couch. "That's Phyllis" The human explains to you. You curl up on the couch next to Phyllis and fall asleep. A few hours later, you awaken and leave the room. The tall human watches you leave, confused and unsure of what to do about this random cat wandering the building. You laugh to yourself.`);
							print("[image]Includes/Images/Phyllis.JPG");
							variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
							variables["Name Phyllis"] = -1
						}
					}
				}
			},
			"(Treacys|Treacy|Claire|Jackie|Jackie Claire|Claire Jackie)": (args) => {
				if (variables["Name Claire"]) {
					print(`You wander down the hall, through a lounge area and down the hall some more. You see one room in particular that has two name signs on either side of the door. "Jackie" one reads, and the other "Claire". The door is closed, so you rewind time slowly until it's open, it's now probably 10 PM. You pad into their room, surprising them. "Where did this cat come from?!" The shorter-haired one (who you recognize as Claire) said to the other. The other human shrugs, mystified "This cat looks an awful lot like Nathan's cat Lucky, from the pictures I've seen" Claire remarks. The other nods, looking at you closely. A pair of female humans walk by and plead with Claire to put on a cloak. Claire refuses. 

You decide that you're bored of this, and you skip ahead in time to where you had been before (and erase their memories, of course). You are now standing at their closed door at a time past 11:30 PM`);
				}
				else {
					print(`You wander down the hall, through a lounge area and down the hall some more. You see one room in particular that has two name signs on either side of the door. "Jackie" one reads, and the other "Claire". The door is closed, so you rewind time slowly until it's open, it's now probably 10 PM. You pad into their room, surprising them. "Where did this cat come from?!" The shorter-haired one said to the other. The other human shrugs, mystified "This cat looks an awful lot like Nathan's cat Lucky, from the pictures I've seen" One of them remarks. The other nods, looking at you closely. A pair of female humans come by and plead with the short-haired female to put on a cloak. The human refuses. 

You decide that you're bored of this, and you skip ahead in time to where you were (and erase their memories, of course). You are now standing at their closed door at a time past 11:30 PM`);
				}
			},
			"Cloak": (args) => {
				if (!args || !args[0]) {
					print("[image]Includes/Images/CloakClaire.JPG");
					print(`You wander along to the only room with two people in it. Trotting in, you pad around the room. The short-haired one notices you and watches as you paw open the partially open closet door. The human walks up as you admire the blue cloak hanging in the closet. Taking it out of the closet, the human puts it on. You watch the cloak billow behind the human as it runs around the halls. A human comes out from one of the rooms and exclaims: 

"Look! It's Cloak Claire!" 

"Cloak Clarence", another human corrects them. The cloaked human, who you now know to be Claire, glares at the two humans. "Don't call me Clarence!" Claire shoots back. The humans return to their rooms and Claire puts the cloak back in its place. You are now in the hallway.`);
					variables["Name Claire"] = -1
				} else if (args[0] == 'Claire') {
					print("[image]Includes/Images/CloakClaire.JPG");
					print(`You wander along to the only room with two people in it. Trotting in, you pad around the room. The short-haired one notices you and watches as you paw open the partially open closet door. The human walks up as you admire the blue cloak hanging in the closet. Taking it out of the closet, the human puts it on. You watch the cloak billow behind the human as it runs around the halls. A human comes out from one of the rooms and exclaims: 

"Look! It's Cloak Claire!" 

"Cloak Clarence", another human corrects them. The cloaked human, who you now know to be Claire, glares at the two humans. "Don't call me Clarence!" Claire shoots back. The humans return to their rooms and Claire puts the cloak back in its place. You are now in the hallway.`);
					variables["Name Claire"] = -1
				}
			},
			"Maia": (args) => {
				if (variables["chose kill Maia"]) {
					if (variables["chose kill Nathan"]) {
						print(`You go into the room of someone you had killed. You see the body on the floor, still holding the crossbow that it had tried to use to defend itself. You laugh to yourself. Going over to the plants by the window, you sniff them. Why would the human grow a plant that smelled of skunk? You decide to take a sample to bring to Nathan to see what he makes of it, but remember that he is dead. You decide to take it anyway. maybe you'll revive him so he can take it, or you can just keep it...

You return to the hallway. ("revive Nathan" and then "deliver weed" to give to Nathan, or "revive Maia" if you suddenly have a conscience)`);
						variables["weed"] = (variables["weed"] ? variables["weed"] + 1 : 1)
					}
					else {
						print(`You go into the room of someone you had killed. You see the body on the floor, still holding the crossbow that it had tried to use to defend itself. You laugh to yourself. Going over to the plants by the window, you sniff them. Why would the human grow a plant that smelled of skunk? You decide to take a sample to bring to Nathan to see what he makes of it. You return to the hallway. ("deliver weed" to give to Nathan, "revive Maia" if you suddenly have a conscience)`);
						variables["weed"] = (variables["weed"] ? variables["weed"] + 1 : 1)
					}
				}
				else {
					if (variables["revived Maia"]) {
						if (variables["weed"]) {
							print(`You wander down the hall, past a lounge-type room, and further down the hall. Near the far end of the hall, you see an open door on the right side. You enter to see a female human looking around in confusion. You remember killing and reviving the human. 

Wandering in, you hop up on its lap. It seems surprised. "A cat?" It exclaims at you. "Why not a dog?" It sighs. It pets you a few times. You notice that there's still weed in the room. 

Later, you leave the room and return to the hallway. You can type "weed" to get more weed.`);
						}
						else {
							print(`You wander down the hall, past a lounge-type room, and further down the hall. Near the far end of the hall, you see an open door on the right side. You enter to see a female human looking around in confusion. You remember killing and reviving the human. 

Wandering in, you hop up on its lap. It seems surprised. "A cat?" It exclaims at you. "Why not a dog?" It sighs. It pets you a few times. You see a few plants near the window, including one that that smells vaguely of skunk. Hmm. You notice some dried plants on the desk, and the human is wrapping them up in sort of cylindrical shapes. Humans mystify you. You leave after a while.`);
						}
					}
					else {
						print(`You wander down the hall, past a lounge-type room, and further down the hall. Near the far end of the hall, you see an open door on the right side. You enter to see a female human working at its desk. You wander in and hop up on its lap. It seems surprised. "A cat?" It exclaims at you. "Why not a dog?" It sighs. It pets you a few times. You see a few plants near the window, including one that that smells vaguely of skunk. Hmm. You notice some dried plants on the desk, and the human is wrapping them up in sort of cylindrical shapes. Humans mystify you. You leave after a while.`);
					}
				}
			},
			"Aliyah": (args) => {
				if (variables["chose kill Aliyah"]) {
					print(`You enter the room of a human that you'd killed before. You feel a little guilty, since the human had been so happy to see you. You take note of an open closet door with a portal shimmering from inside. You wonder if you should go in...("go" or just "leave")`);
					variables["the gift of knowledge"] = -1
				}
				else {
					if (variables["revived Aliyah"]) {
						print(`You go back to the room of one of the humans you'd killed and revived. The human is seated at it's desk and it looks confused. You trot in and meow at it. It looks up at you and smiles. You feel a pang of guilt. All the human had wanted was to pet you. You pad in and the human stands. 

"Look at what I have!" The human says to you, opening the door to the closet. You peer in to find that there's a swirling blue portal!

"Want to come?" The human asks.

(respond with "follow" to accept or "hallway" to return to the hallway. You can choose to "follow" later if you want.)`);
						variables["the gift of knowledge"] = -1
					}
					else {
						print(`You wander down the hall, past a lounge-type room, and further down the hall. Near the far end of the hall, you see an open door on the left side. You enter to see a female human working at its desk. You wander in and hop up on its lap. It seems excited, and starts to pet you. 

You fall asleep. A while later, you wake up and see that the human is going into a closet. She comes out a bit later. You go back to the hallway. ("follow" into the closet or "hallway" to just keep hall-wandering)`);
						variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
						variables["the gift of knowledge"] = -1
					}
				}
			},
			"(Andy|Dandrewlion|Werdna)": (args) => {
				if (variables["chose kill Andrew"]) {
					if (variables["Name Andrew"]) {
						print(`You head to Andrew's room. You see him lying on the ground and you admire your handiwork. You can't believe that you'd found the human to be intimidating before. You take a nap on the couch (of course) and then return to the hallway. ("revive Dandrewlion" if you want)`);
						variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
					}
					else {
						print(`You head to the room of one of your victims and admire your handiwork. You can't believe that you'd found the human to be intimidating before. You take a nap on the couch (of course) and then return to the hallway. ("revive Werdna" if you want)`);
						variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
					}
				}
				else {
					if (variables["revived Andrew"]) {
						if (variables["Name Andrew"]) {
							if (variables["Andrew's not like other girls"]) {
								print(`You return to Andrew's room to see how the human is doing. It is still staring at itself in the mirror, dazed. You return to the hallway.`);
							}
							else {
								print(`You pad down the hall to Andrew's room. You walk in to see the human seating in its chair, staring at itself in the mirror, confused. It touches the places where its wounds used to be. You suppose that it's experiencing some trace memories. You meow at Andrew and it jumps, turning in your direction. You walk up to the human and sit at its feet, meowing. It reaches down to pet you but flinches briefly. It shakes its head and pets you.

You note to yourself that most humans don't have such strong trace memories. What makes Andrew different? You're not sure, but all you know is that Andrew 'isn't like other girls,' a phrase you'd heard Nathan say once. You leave the room without taking a nap on Andrew's couch, which is a first for you.`);
								variables["Andrew's not like other girls"] = -1
							}
						}
						else {
							if (variables["Andrew's not like other girls"]) {
								print(`You return to the tall but no-longer-intimidating human's room to see how the human is doing. It is still staring at itself in the mirror, dazed. You return to the hallway.`);
							}
							else {
								print(`You pad down the hall to the tall and not-so-intimidating human's room. You walk in to see the human seating in its chair, staring at itself in the mirror, confused. It touches the places where its wounds used to be. You suppose that it's experiencing some trace memories. You meow at the human and it jumps, turning in your direction. You walk up to the human and sit at its feet, meowing. It reaches down to pet you but flinches briefly. It shakes its head, trying to put it aside, and pets you.

You note to yourself that most humans don't have such strong trace memories. What makes this one different? You're not sure, but all you know is that it 'isn't like other girls,' a phrase you'd heard Nathan say once. You leave the room without taking a nap on the couch, which is a first for you.`);
								variables["Andrew's not like other girls"] = -1
							}
						}
					}
					else {
						if (variables["Name Andrew"]) {
							if (variables["banana"]) {
								print("[image]Includes/Images/AndrewIgnore.JPG");
								print(`You wander down a flight of stairs and eventually come across an open door that you decide to enter. Andrew is seated at a desk. 

You hear the human grumble something about being out of bananas. You smile to yourself as you remember stepping over Andrew's dead body to take it earlier. 

In between the desk and the bed is a contraption of metal poles and wood, which you can only assume is a defense-type of machine to prevent intruders from approaching. You can see a mirror on the closet behind Andrew. You note that the desk has a bed suspended above it and that the bottom of the bed has a cage-like appearance.

You meow at the human, but it is wearing a contraption over its ears that seems to be obstructing its hearing. You walk in anyway and curl up on its couch for a while. Although Andrew pays no attention to you, you do somewhat enjoy its presence for some reason. A while later, you leave to go back to hall-wandering.`);
								variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
							}
							else {
								print("[image]Includes/Images/AndrewIgnore.JPG");
								print(`You wander down a flight of stairs and eventually come across an open door that you decide to enter. Andrew is seated at a desk. In between the desk and the bed is a contraption of metal poles and wood, which you can only assume is a defense-type of machine to prevent intruders from approaching. You can see a mirror on the closet behind Andrew. There is also a banana sitting on a shelf next to the desk. You note that the desk has a bed suspended above it and that the bottom of the bed has a cage-like appearance.

You meow at the human, but it is wearing a contraption over its ears that seems to be obstructing its hearing. You walk in anyway and curl up on its couch for a while. Although Andrew pays no attention to you, you do somewhat enjoy its presence for some reason. A while later, you leave to go back to hall-wandering.`);
								variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
							}
						}
						else {
							if (variables["banana"]) {
								print("[image]Includes/Images/AndrewIgnore.JPG");
								print(`You wander down a flight of stairs and eventually come across an open door that you decide to enter. There is a fairly tall-looking and somewhat intimidating-looking male human sitting at a desk. 

You hear the human grumble something about being out of bananas. You smile to yourself as you remember stepping over Andrew's dead body to take it earlier. 

You can see a mirror on the closet behind it. You note that the desk has a bed suspended above it and that the bottom of the bed has a cage-like appearance. 

In between the desk and the bed next to it is a messy contraption of metal poles and wood, which you can only assume is a defense-type of machine to prevent intruders from approaching. You meow at the human, but it is wearing a contraption over its ears that seems to be obstructing its hearing. You walk in anyway and curl up on its couch for a while. Although the human pays no attention to you, you do somewhat enjoy his presence for some reason. You notice a yellow hard hat hanging on his bedpost and you think about stealing it. A while later, you leave to go back to hall-wandering.`);
								variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
							}
							else {
								print("[image]Includes/Images/AndrewIgnore.JPG");
								print(`You wander down a flight of stairs and eventually come across an open door that you decide to enter. There is a fairly tall-looking and somewhat intimidating-looking male human sitting at a desk. You can see a mirror on the closet behind it. There is also a banana sitting on a shelf next to the desk. You note that the desk has a bed suspended above it and that the bottom of the bed has a cage-like appearance. 

In between the desk and the bed next to it is a messy contraption of metal poles and wood, which you can only assume is a defense-type of machine to prevent intruders from approaching. You meow at the human, but it is wearing a contraption over its ears that seems to be obstructing its hearing. You walk in anyway and curl up on its couch for a while. Although the human pays no attention to you, you do somewhat enjoy his presence for some reason. You notice a yellow hard hat hanging on his bedpost and you think about stealing it. A while later, you leave to go back to hall-wandering.`);
								variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
							}
						}
					}
				}
			},
			"cage": (args) => {
				if (variables["chose kill Andrew"]) {
					print(`Andrew is dead, "revive Andy" to see what the "cage" command does.`);
				}
				else {
					if (variables["Name Andrew"]) {
						print("[image]Includes/Images/CagedAndrew.JPG");
						print(`You see Andrew trapped in a cage!`);
					}
					else {
						print("[image]Includes/Images/CagedAndrew.JPG");
						print(`You see a human trapped in a cage!`);
					}
				}
			},
			"Bother": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == '(Dandrewlion|Andy|Werdna)') {
					if (variables["chose kill Andrew"]) {
						print(`You can't really bother a dead body...`);
					}
					else {
						if (variables["Name Andrew"]) {
							print(`You decide that you want Andrew to pay attention to you. Trotting up to its room, you come up to it and paw at its leg. Andrew looks down and is very surprised to see you. You decide to hop up on its lap and settle in. The human seems unsure of what to do, but ultimately accepts it, and pets you. The metal pole defense contraption will protect you both now. You fall asleep.`);
						}
						else {
							print(`You decide that you want the tall and intimidating human to pay attention to you. Trotting up to its room, you come up to him and paw at its leg. The human looks down and is very surprised to see you. 

"Looks like Nathan's cat.." It remarks. 

You decide to hop up on its lap and settle in. The human seems unsure of what to do, but ultimately accepts it. The metal pole defense contraption will protect you both now. You fall asleep.`);
							variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
						}
					}
				}
			},
			"(Trumpet|Emily|Andrew)": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == '(duet|time|Andrew|Emily)') {
					if (variables["chose kill Nathan"] || variables["chose kill Andrew"] || variables["chose kill Emily"]) {
						print(`Unfortunately, the show has been cancelled, as you've killed one or more of the performers >:(`);
					}
					else {
						if (variables["Name Andrew"]) {
							print(`As you pad down the hall towards Andrew's room, you decide to fast-forward the time for fun. You stop fast-forwarding when you see Andrew coming out of its room. It is holding a strange brass-coloured object. The human notices your inquiring look. 

"A trumpet." Andrew explains to you. 

Andrew carries the trumpet down the hall and out the door as you follow curiously. It is now mid-afternoon, so it is fairly bright outside. Waiting just outside is an enormous grand piano (which you recognize because your family has a piano at home). The situation seems to be getting stranger by the second. 

As Andrew approaches the piano, you notice a female human approaching from the opposite direction. The human is also carrying a trumpet

"Hello, Emily" Andrew says to the human. 

"Hello." Emily replies.

Without another word, the two humans raise the trumpets to their mouths and begin to play, each of them playing their trumpets one-handed. With the other hand, they begin to play piano. You look on, mystified, as the two begin a duet.

As though the whole arrangement couldn't get any stranger, Nathan suddenly steps out of the building and starts to sing:                                            "My... sweet... Werdna...
My... sweetheart
If you believe in the power of friendship
Nothing can keep us apart...

But that's just not good enough for me!
Without Werdna I cannot be
for if you would not have me then I'll... be

a robot for my Werdna!
Just for Werdna I will be a robot
But one small issue is that I may overheat
Just because, my Werdna is so hot.

My Werdna is too hot for me
But if not a robot, what else can I be?

Werdna! Dandrewlion. Andy. For you I'm trying
Whatever name you go by doesn't matter.
I will call you mine.

Werdna, you're beautiful.

I could be, some chocolate milk
Nothing quite as sweet.
An added bonus would be,
that Werdna's lips, I would meet...

But while chocolate milk is finite
My love for Werdna is unending
Because Werdna is my one true love,
no one else is even contending

Werdna! Dandrewlion. Andy. For you I'm trying
Whatever name you go by doesn't matter.
I will call you mine.

Werdna, Werdna I love you

I could be, a chin-up bar
To make my Wernda stronk
The problem is, is Werdna's weight
My Werdna is too chomnk. 

Werdna! Dandrewlion. Andy. For you I'm trying
Whatever name you go by doesn't matter.
I will call you mine.

Werdna, Werdna won't you love me.

I could be, a mirror.
diverting Werdna's gaze.
For then I'd spend, my final days
Looking at his wonderful face

Werdna! Dandrewlion. Andy. For you I'm trying
Whatever name you go by doesn't matter.
I will call you mine.

Werdna, won't you call me yours"                                            

As Nathan finishes the last note, a single tear falls from his eye. Andrew and Nathan return inside, and Emily heads off, presumably toward its house. You wonder if you can find out where the human lives. You enter the building by following Andrew and Nathan, leaving the piano outside by itself.

After you re-enter the building, you look back to find that the piano has vanished, and it is now 11:30 PM. You are thoroughly confused.`);
							variables["Name Emily"] = -1
						}
						else {
							print(`As you pad down the hall towards the tall human's room, you decide to fast-forward the time for fun. You stop fast-forwarding when you see it coming out of its room. The human is holding a strange brass-coloured object. The human notices your inquiring look. 

"A trumpet." The human explains to you. 

It carries the trumpet down the hall and out the door as you follow curiously. It is now mid-afternoon, so it is fairly bright outside. Waiting just outside is an enormous grand piano (which you recognize because your family has a piano at home). The situation seems to be getting stranger by the second. 

As the male human approaches the piano, you notice a female human approaching as well, from another direction. This human is also carrying a trumpet.

"Hello, Emily" The male human says to the female. 

"Hello." Emily replies.

Without another word, the two humans raise the trumpets to their mouths and begin to play, each of them playing their trumpets one-handed. With the other hand, they begin to play piano. You look on, mystified, as the two begin a duet.

As though the whole arrangement couldn't get any stranger, Nathan suddenly steps out of the building and starts to sing:                                    "My... sweet... Werdna...
My... sweetheart
If you believe in the power of friendship
Nothing can keep us apart...

But that's just not good enough for me!
Without Werdna I cannot be
for if you would not have me then I'll... be

a robot for my Werdna!
Just for Werdna I will be a robot
But one small issue is that I may overheat
Just because, my Werdna is so hot.

My Werdna is too hot for me
But if not a robot, what else can I be?

Werdna! Dandrewlion. Andy. For you I'm trying
Whatever name you go by doesn't matter.
I will call you mine.

Werdna, you're beautiful.

I could be, some chocolate milk
Nothing quite as sweet.
An added bonus would be,
that Werdna's lips, I would meet...

But while chocolate milk is finite
My love for Werdna is unending
Because Werdna is my one true love,
no one else is even contending

Werdna! Dandrewlion. Andy. For you I'm trying
Whatever name you go by doesn't matter.
I will call you mine.

Werdna, Werdna I love you

I could be, a chin-up bar
To make my Wernda stronk
The problem is, is Werdna's weight
My Werdna is too chomnk. 

Werdna! Dandrewlion. Andy. For you I'm trying
Whatever name you go by doesn't matter.
I will call you mine.

Werdna, Werdna won't you love me.

I could be, a mirror.
diverting Werdna's gaze.
For then I'd spend, my final days
Looking at his wonderful face

Werdna! Dandrewlion. Andy. For you I'm trying
Whatever name you go by doesn't matter.
I will call you mine.

Werdna, won't you call me yours."

As Nathan finishes the last note, a single tear falls from his eye. Nathan and the other human return inside, and Emily heads off, presumably toward its house. You wonder if you can find out where Emily lives. You enter the building by following Nathan and the other human inside, leaving the piano outside by itself.

After you re-enter the building, you look back to find that the piano has vanished, and it is now 11:30 PM. You are thoroughly confused.`);
							variables["Name Emily"] = -1
						}
					}
				}
			},
			"kill": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == '(all|everyone)') {
					if (variables["chose kill Reu"] && variables["chose kill Maia"] && variables["chose kill Nathan"] && variables["chose kill Andrew"] && variables["chose kill Aliyah"]) {
						print(`You've killed everyone you can here. Try the garden if you haven't already, or explore around to see if you're missing anything.`);
					}
					else {
						if (variables["kill point Em"]) {
							print(`You go around and kill who's alive here. You can revive them individually or by typing "revive everyone" 

Now what?`);
							variables["chose kill Reu"] = -1
							variables["chose kill Maia"] = -1
							variables["chose kill Nathan"] = -1
							variables["chose kill Andrew"] = -1
							variables["chose kill Aliyah"] = -1
							variables["kill point R"] = (variables["kill point R"] ? variables["kill point R"] + 1 : 1)
							variables["kill point Maia"] = (variables["kill point Maia"] ? variables["kill point Maia"] + 1 : 1)
							variables["kill point N"] = (variables["kill point N"] ? variables["kill point N"] + 1 : 1)
							variables["kill point A"] = (variables["kill point A"] ? variables["kill point A"] + 1 : 1)
							variables["kill point Aliyah"] = (variables["kill point Aliyah"] ? variables["kill point Aliyah"] + 1 : 1)
							variables["revived Reu"] = 0
							variables["revived Maia"] = 0
							variables["revived Nathan"] = 0
							variables["revived Andrew"] = 0
							variables["revived Aliyah"] = 0
						}
						else {
							print(`You go around and kill everyone who's alive in the building. You can revive them individually or by typing "revive everyone"

You can head to the garden now, maybe you'll find a surprise there.

(try "garden")`);
							variables["chose kill Reu"] = -1
							variables["chose kill Maia"] = -1
							variables["chose kill Nathan"] = -1
							variables["chose kill Andrew"] = -1
							variables["chose kill Aliyah"] = -1
							variables["kill point R"] = (variables["kill point R"] ? variables["kill point R"] + 1 : 1)
							variables["kill point Maia"] = (variables["kill point Maia"] ? variables["kill point Maia"] + 1 : 1)
							variables["kill point N"] = (variables["kill point N"] ? variables["kill point N"] + 1 : 1)
							variables["kill point A"] = (variables["kill point A"] ? variables["kill point A"] + 1 : 1)
							variables["kill point Aliyah"] = (variables["kill point Aliyah"] ? variables["kill point Aliyah"] + 1 : 1)
							variables["revived Reu"] = 0
							variables["revived Maia"] = 0
							variables["revived Nathan"] = 0
							variables["revived Andrew"] = 0
							variables["revived Aliyah"] = 0
						}
					}
				} else if (args[0] == '(Andy|Dandrewlion|Werdna|Andrew)') {
					if (variables["chose kill Andrew"]) {
						print(`Uh...you've already killed this one...`);
					}
					else {
						if (variables["licence to kill revoked"]) {
							print(`Killing things doesn't feel so fun anymore...`);
						}
						else {
							if (variables["Name Andrew"]) {
								print(`You lunge at Andrew. The human yelps, startled. You could have chosen friendship, but instead you knock Andrew over with the impact of your leap (the element of surprise and your telekinetic powers may have helped knock him down as well). Your claws are driven into its flesh as the two of you hit the ground. 

"Not so intimidating anymore!" You think to yourself. 

As Andrew bleeds out, you look back up at the metal pole contraption. It didn't seem to have been helpful in keeping intruders such as yourself away. You feel a bit tired, so you curl up on the human's chest and fall asleep for a little while. You are asleep for a while, and then you awaken and realize that you should rewind time to heal the human, so you don't get in trouble. Hm. Revive? ("yes" or "no")`);
								variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
								variables["kill point A"] = (variables["kill point A"] ? variables["kill point A"] + 1 : 1)
								variables["Andrew life/death question"] = -1
								goTo("DecisionRoom");
							}
							else {
								print(`You lunge at the tall, intimidating human. It yelps, startled. You could have chosen friendship, but instead you knock the human over with the impact of your leap (the element of surprise and your telekinetic powers may have helped knock it down as well). Your claws are driven into the human's flesh as the two of you hit the ground. "Not so intimidating anymore!" You think to yourself. As it bleeds out, you look back up at its metal pole contraption. It didn't seem to have been helpful in keeping intruders away. Hm. 

Now you have to decide. Revive? ("yes" or "no")`);
								variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
								variables["kill point A"] = (variables["kill point A"] ? variables["kill point A"] + 1 : 1)
								variables["Andrew life/death question"] = -1
								goTo("DecisionRoom");
							}
						}
					}
				} else if (args[0] == 'Maia') {
					if (variables["chose kill Maia"]) {
						print(`You've already killed this human. It lies on the ground, still holding the crossbow. You return to the hallway.`);
					}
					else {
						if (variables["licence to kill revoked"]) {
							print(`Killing things doesn't feel so fun anymore...`);
						}
						else {
							print(`You lunge at the female human, but it pulls out a weapon that you recognize as a crossbow (you had died from being shot by one in a previous life). It won't get you this time. You rewind time a few seconds, to before the human has pulled it out. Your claws sink into the human's skin. You enjoy feeling its heartbeat slow and then stop under your paws. Now, do you revive the human? ("yes" or "no")`);
							variables["kill point Maia"] = (variables["kill point Maia"] ? variables["kill point Maia"] + 1 : 1)
							variables["Maia life/death question"] = -1
							goTo("DecisionRoom");
						}
					}
				} else if (args[0] == 'Aliyah') {
					if (variables["chose kill Aliyah"]) {
						print(`You've killed this one already, keep up!`);
					}
					else {
						if (variables["licence to kill revoked"]) {
							print(`Killing things doesn't feel so fun anymore...`);
						}
						else {
							print(`You enter the room of a female human. It reaches out to pet you, but you scratch its paw. It recoils in shock.

You kill the human. It's a weak human, so it doesn't put up much of a fight. You watch the life drain from its eyes as it looks at you in betrayal. You feel a slight pang of guilt. All the human wanted was to pet you. Revive? ("yes" or "no")`);
							variables["kill point Aliyah"] = (variables["kill point Aliyah"] ? variables["kill point Aliyah"] + 1 : 1)
							variables["Aliyah life/death question"] = -1
							goTo("DecisionRoom");
						}
					}
				} else if (args[0] == 'Reu') {
					if (variables["chose kill Reu"]) {
						print(`Uh...you can't kill someone who's still dead. Try "revive Reu" first if you want to kill him again.`);
					}
					else {
						if (variables["licence to kill revoked"]) {
							print(`Killing things doesn't feel so fun anymore...`);
						}
						else {
							if (variables["Name Phyllis"]) {
								print(`You re-enter the room of a tall human. It looks up from its desk at you and smiles. 

"Well, hello again!" It starts to say. You run at the human and leap, sinking your claws into its throat. It stands and attempts to remove you from its throat, but you're determined. The human collapses on its couch after some struggle. 

Once the life has left its eyes, you survey the room. You see a seal on the couch and you remember that its name is Phyllis. You pad over to Phyllis and meow at it. It does not respond.

You hop onto the chair that it had been sitting on before you had entered, and you note that it is a spinning chair. You spin yourself in the chair excitedly for a while. 

Now you have to decide: will you revive the human? ("yes" or "no")`);
								variables["kill point R"] = (variables["kill point R"] ? variables["kill point R"] + 1 : 1)
								variables["Reu life/death question"] = -1
								goTo("DecisionRoom");
							}
							else {
								print(`You enter the room of a tall human. It looks up from its desk at you and smiles. 

"Well, hello!" It starts to say. You run at the human and leap, sinking your claws into its throat. It stands and attempts to remove you from its throat, but you're determined. The human collapses on its couch after some struggle. 

Once the life has left its eyes, you survey the room. You hop onto the chair that the human had been sitting on before you had entered, and you note that it is a spinning chair. You spin yourself in the chair excitedly for a while. 

Now you have to decide: will you revive the human? ("yes" or "no")`);
								variables["kill point R"] = (variables["kill point R"] ? variables["kill point R"] + 1 : 1)
								variables["Reu life/death question"] = -1
								goTo("DecisionRoom");
							}
						}
					}
				} else if (args[0] == 'Nathan') {
					if (variables["chose kill Nathan"]) {
						print(`Really? Trying to kill the same person twice? If you can't keep track of who you've killed, maybe the murder game isn't for you.`);
					}
					else {
						if (variables["licence to kill revoked"]) {
							print(`Killing things doesn't feel so fun anymore...`);
						}
						else {
							print(`Padding into Nathan's room from the hall, you lunge at Nathan, plunging your claws into him. As he bleeds out onto the carpet, you start to perhaps regret your actions. Should you revive him? ("Yes" or "no")`);
							variables["Nathan life/death question"] = -1
							variables["kill point N"] = (variables["kill point N"] ? variables["kill point N"] + 1 : 1)
							goTo("DecisionRoom");
						}
					}
				} else if (args[0] == '(Treacys|treacy|Jackie Claire|Claire Jackie)') {
					if (variables["licence to kill revoked"]) {
						print(`Killing things doesn't feel so fun anymore...`);
					}
					else {
						if (variables["Treacy killer"]) {
							print(`Lucky reluctantly goes to kill the Treacys. After slaughtering both of them, she dies shortly after due to sheer grief and sadness. Why did you make her do this? What kind of cruel overlord are you?

You should take some time to think about what you've done. Maybe go back to a more wholesome time in your youth.`);
							variables["kill point Claire"] = (variables["kill point Claire"] ? variables["kill point Claire"] + 1 : 1)
							variables["kill point Jackie"] = (variables["kill point Jackie"] ? variables["kill point Jackie"] + 1 : 1)
							endGame(540)
						}
						else {
							print(`>:( Why would you want to kill the Treacys?? You can try again if you *want* but that makes you a mean person...`);
							variables["Treacy killer"] = -1
						}
					}
				} else if (args[0] == 'Claire') {
					if (variables["licence to kill revoked"]) {
						print(`Killing things doesn't feel so fun anymore...`);
					}
					else {
						if (variables["Treacy killer"]) {
							print(`Lucky reluctantly goes to kill Claire. After the slaughter, she dies shortly after due to sheer grief and sadness. Why did you make her do this? What kind of cruel overlord are you?

You should take some time to think about what you've done. Maybe go back to a more wholesome time in your youth.`);
							variables["kill point Claire"] = (variables["kill point Claire"] ? variables["kill point Claire"] + 1 : 1)
							endGame(540)
						}
						else {
							print(`>:( Why would you want to kill Claire?? You can try again if you *want* but that makes you a mean person...`);
							variables["Treacy killer"] = -1
						}
					}
				} else if (args[0] == 'Jackie') {
					if (variables["licence to kill revoked"]) {
						print(`Killing things doesn't feel so fun anymore...`);
					}
					else {
						if (variables["Treacy killer"]) {
							print(`Lucky reluctantly goes to kill Jackie. After the slaughter, she dies shortly after due to sheer grief and sadness. Why did you make her do this? What kind of cruel overlord are you?

You should take some time to think about what you've done. Maybe go back to a more wholesome time in your youth.`);
							variables["kill point Jackie"] = (variables["kill point Jackie"] ? variables["kill point Jackie"] + 1 : 1)
							endGame(540)
						}
						else {
							print(`>:( Why would you want to kill Jackie?? You can try again if you *want* but that makes you a mean person...`);
							variables["Treacy killer"] = -1
						}
					}
				} else if (args[0] == 'Jake') {
					if (variables["licence to kill revoked"]) {
						print(`Killing things doesn't feel so fun anymore...`);
					}
					else {
						if (variables["Jake killer"]) {
							print(`Lucky reluctantly goes to kill Jake., solely doing it because you asked her to. After slaughtering the human, she dies shortly after due to sheer grief and sadness. Why did you make her do this? What kind of cruel overlord are you? You should take some time to think about what you've done. Maybe go back to a more wholesome time in your youth. Take a nap, even.`);
							variables["kill point Jake"] = (variables["kill point Jake"] ? variables["kill point Jake"] + 1 : 1)
							endGame(541)
						}
						else {
							print(`>:( Why would you want to kill jake?? You can try again if you *want* but that makes you a mean person...`);
							variables["Jake killer"] = -1
						}
					}
				}
			},
			"(chocolate|dining)": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == '(milk|hall)') {
					if (variables["chose kill Andrew"]) {
						if (variables["Name Andrew"]) {
							print(`You trot up to Andrew's room to see the human, and then you remember that you'd killed it. "revive Andy" to get chocolate milk together.`);
						}
						else {
							print(`You go to see the tall, intimidating human, and then you remember that you'd killed it already. Hm. Maybe you should try to "revive Werdna" to see how this interaction would be different...`);
						}
					}
					else {
						if (variables["Name Andrew"]) {
							print("[image]Includes/Images/AndrewDiningHall.JPG");
							print("[image]Includes/Images/LuckyDrinking.png");
							print(`You go to see the human (whose name you now know to be Andrew). As you walk up, it's leaving the room. It seems surprised to see you. 

"Oh hi..." Andrew says to you. "I'm just kind of craving some sugar and possibly a banana, so I'm headed to the dining hall to get some chocolate milk. Want to come?" 

You nod and follow the human. You pad down the hallway after it. 

Andrew watches you as you walk together. 

"Are you Nathan's cat?" It asks you. "Why am I talking to a cat..." It mutters to itself. You nod in response to its question. It ignores your nod. You roll your eyes. 

You arrive at the dining hall. It pours itself a glass of chocolate milk and grabs a banana. Realizing that cats can't have chocolate, Andrew sets down a glass of water for you. You do like drinking water out of glasses, but you usually do it when your family leaves cups unattended. It's less satisfying when you're not being mischievous, but you drink it anyway. After the two of your finish your drinks, you return to the hallway and the human returns to its room.`);
							variables["water"] = (variables["water"] ? variables["water"] + 1 : 1)
						}
						else {
							print("[image]Includes/Images/AndrewDiningHall.JPG");
							print("[image]Includes/Images/LuckyDrinking.png");
							print(`You go to see the tall, intimidating human. As you walk up, it's leaving the room. It seems surprised to see you. 

"Oh hi..." It says to you. "I'm just kind of craving some sugar and possibly a banana, so I'm headed to the dining hall to get some chocolate milk. Want to come?" 

You nod and follow the human. You pad down the hallway after it. 

The human watches you as you walk together. 

"Are you Nathan's cat?" It asks you. "Why am I talking to a cat..." It mutters to itself. You nod in response to its question. It ignores your nod. You roll your eyes. 

You arrive at the dining hall. It pours itself a glass of chocolate milk and grabs a banana. Realizing that cats can't have chocolate, the human sets down a glass of water for you. You do like drinking water out of glasses, but you usually do it when your family leaves cups unattended. It's less satisfying when you're not being mischievous, but you drink it anyway. After the two of your finish your drinks, you return to the hallway and the human returns to its room.`);
							variables["water"] = (variables["water"] ? variables["water"] + 1 : 1)
						}
					}
				}
			},
			"hard": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'hat') {
					if (variables["chose kill Andrew"]) {
						print(`You don't really want to take the hard hat...what fun is there in taking things from the dead? The best part of taking the hard hat would be to mess with the human...`);
					}
					else {
						print(`You go to see the tall intimidating human. You dart in, jump onto its bed, and take the yellow hard hat hanging on its bedpost. The human notices you leaving with the hat and doesn't know what to do. You run around the building as the human follows you. As you run through the fourth floor, a human comes out a room. It laughs and says 

"A cat's taken your hard hat? How did that happen, Andrew?" 

"Shut up" The tall human replies. You run back downstairs, and you're faster than it is, so you make it to Andrew's room first. You leave the hat on the bedpost and leave the room.`);
						variables["Name Andrew"] = -1
					}
				}
			},
			"mirror": (args) => {
				if (variables["revived Andrew"]) {
					if (variables["Name Andrew"]) {
						print(`You pad over to Andrew's room and walk in. It is staring confusedly in the mirror. You look in the mirror at yourself, and admire the cat in the mirror. You return to the hallway.`);
					}
					else {
						print(`You pad over to the tall and not-so-intimidating human's room and walk in. It is staring confusedly in the mirror. You look in the mirror at yourself, and admire the cat in the mirror. You return to the hallway.`);
					}
				}
				else {
					if (variables["chose kill Andrew"]) {
						print(`You go to one of your victims' rooms and step over its body to get to the mirror. You stare at it for a while, entranced by the ability of the cat in the mirror to copy your every move. You try to make sudden movements to trick it, but it follows perfectly. 

You eventually go back to the hallway.`);
					}
					else {
						if (variables["Name Andrew"]) {
							print(`Andrew turns around in its seat to look at itself in the mirror. After admiring its appearance for several minutes, it goes back to work.`);
						}
						else {
							print(`The human turns around in its seat to look at itself in the mirror. After admiring its appearance for several minutes, it goes back to work.`);
						}
					}
				}
			},
			"banana": (args) => {
				if (variables["chose kill Andrew"]) {
					print(`You go to one of your victims' rooms and get a banana from a shelf.`);
					variables["banana"] = (variables["banana"] ? variables["banana"] + 1 : 1)
					variables["food"] = (variables["food"] ? variables["food"] + 1 : 1)
				}
				else {
					if (variables["Name Andrew"]) {
						print("[image]Includes/Images/AndrewBanana.PNG");
						print(`Andrew eats a banana. You notice another one on the human's shelf and contemplate stealing the banana.`);
					}
					else {
						print("[image]Includes/Images/AndrewBanana.PNG");
						print(`The human eats a banana. You notice another one on the human's shelf and contemplate stealing the banana.`);
					}
				}
			},
			"steal": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'banana') {
					if (variables["chose kill Andrew"]) {
						print(`You sneak into one of your victims' rooms and take a banana.`);
						variables["banana"] = (variables["banana"] ? variables["banana"] + 1 : 1)
					}
					else {
						print(`You sneak into the human's room and take a banana. The human doesn't notice.`);
						variables["banana"] = (variables["banana"] ? variables["banana"] + 1 : 1)
					}
				} else if (args[0] == 'hard') {
					if (!args || !args[1]) {
					} else if (args[1] == 'hat') {
						if (variables["chose kill Andrew"]) {
							print(`You don't really want to take the hard hat...what fun is there in taking things from the dead? The best part of taking the hard hat would be to mess with the human...`);
						}
						else {
							print(`You go to see the tall intimidating human. You dart in, jump onto its bed, and take the yellow hard hat hanging on its bedpost. The human notices you leaving with the hat and doesn't know what to do. You run around the building as the human follows you. As you run through the fourth floor, a human comes out a room. It laughs and says 

"A cat's taken your hard hat? How did that happen, Andrew?" 

"Shut up" The tall human replies. You run back downstairs, and you're faster than it is, so you make it to Andrew's room first. You leave the hat on the bedpost and leave the room.`);
							variables["Name Andrew"] = -1
						}
					}
				}
			},
			"weed": (args) => {
				if (variables["chose kill Maia"]) {
					if (variables["chose kill Nathan"]) {
						print(`You go into the room of one of the humans that you had killed. It still lies dead on the floor. You step over its body to get some of the plant from the window. Perhaps Nathan will know what to do with it - hmm, you've killed Nathan... I suppose you'll have to revive him if you want to deliver the weed. You take it and return to the hallway. ("revive Nathan" and then "deliver weed" to give to Nathan, also "revive Maia" if you want that)`);
						variables["weed"] = (variables["weed"] ? variables["weed"] + 1 : 1)
					}
					else {
						print(`You go into the room of one of the humans that you had killed. It still lies dead on the floor. You step over its body to get some of the plant from the window. Perhaps Nathan will know what to do with it. You return to the hallway. ("deliver weed" to give to Nathan, "revive Maia" if you want that)`);
						variables["weed"] = (variables["weed"] ? variables["weed"] + 1 : 1)
					}
				}
				else {
					if (variables["chose kill Nathan"]) {
						print(`You walk up to one of the female humans in its room. The human turns around, not pleased to see you. You get the impression that it doesn't like cats. You decide to play nice and you sit at its feet. You notice that the human has some kind of plant in its hands. You tilt your head at it inquiringly. The human notices you looking at the plant. 

"It's weed, it's like the human equivalent of catnip." The human explains. You nod. You do enjoy catnip.

"Weed probably isn't good for cats, but if you want, you can keep me company as I go deliver it to Nathan's room. I deal weed out of his window." It says.

Realizing that Nathan is dead, which means that there is no one for the human to deliver it to, you decide to take the weed. You can revive Nathan if you want, or just hold on to the weed. ("revive Nathan" and then "deliver weed" to give to Nathan)`);
						variables["weed"] = (variables["weed"] ? variables["weed"] + 1 : 1)
					}
					else {
						print(`You walk up to one of the female humans in its room. The human turns around, not pleased to see you. You get the impression that it doesn't like cats. You decide to play nice and you sit at its feet. You notice that the human has some kind of plant in its hands. You tilt your head at it inquiringly. The human notices you looking at the plant. 

"It's weed, it's like the human equivalent of catnip." The human explains. You nod. You do enjoy catnip.

"Weed probably isn't good for cats, but if you want, you can keep me company as I go deliver it to Nathan's room. I deal weed out of his window." It says.

You grab the leaves from the human as it's about to leave and you decide to deliver the weed to Nathan. ("deliver weed" to give to Nathan)`);
						variables["weed"] = (variables["weed"] ? variables["weed"] + 1 : 1)
					}
				}
			},
			"(deliver|give)": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'weed') {
					if (variables["chose kill Nathan"]) {
						print(`Nathan is dead, but you decide to put the weed in his room anyway.`);
						variables["weed"] = -1
					}
					else {
						print(`You go to Nathan's room and give him the weed.`);
						variables["weed"] = -1
					}
				}
			},
			"Jake": (args) => {
				print(`You wander down a flight of stairs and eventually come across an open door that you decide to enter. You see what appears to be a fairly tall male human who has dark curly hair. You walk into the room and curl up on its lap. It seems surprised but accepts it. It asks you if you like watching sports. You do like watching the players run around on the screen, but you have no idea what's happening in the game. You nod at the human. it seems surprised, but seems to then write it off as its imagination. "Humans" You scoff to yourself. 

You fall asleep as the two of you watch sports together. Later, the human gets up to go to bed, and you return to the hallway.`);
				variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
			},
			"play": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'basketball') {
					print(`You sit at a door and move forward in time until a tall, male human with dark curly hair comes and opens it. The human is carrying an orange ball with black lines on it. It doesn't notice you immediately as you follow it out the door. You follow the human down the path until it stops at a gravelly flat rectangular area. There is a pole a flat rounded rectangle perched on the top of the pole, along with a net. The human notices you at last, and smiles at you. It bounces the ball on the ground and throws it at the top of the pole. You tilt your head at the pole structure, unsure what the objective of the game is. Perhaps the human is trying to destroy the pole? The human cheers as the ball passes through the net. You are thoroughly baffled. Does the human not realize that the pole has not been knocked over and that the ball has escaped the net? What could the objective be? The human sets the ball down in front of you, and you decide to copy its actions. Using your telekinesis, you lift the ball carefully, carrying it toward the hoop and letting it fall directly into the net. The human looks shocked. You repeat this a few more times, then decide that you want to go back to hall-wandering, so you rewind time slowly, following him back inside. It is now 11:30 PM and you are in the hallway.`);
					variables["won basketball game!"] = (variables["won basketball game!"] ? variables["won basketball game!"] + 1 : 1)
				}
			},
			"Nathan": (args) => {
				print(`You head over to Nathan's room.`);
				goTo("nathan2");
			},
			"Headquarters": (args) => {
				if (variables["licence to kill revoked"]) {
					print(`Your licence to kill was revoked, remember?`);
				}
				else {
					if (variables["licence to kill"]) {
						print(`You are transported back to Headquarters`);
						goTo("Headquarters");
					}
					else {
						print(`What's Headquarters?`);
					}
				}
			},
			"(Emily|garden)": (args) => {
				if (variables["has been to Emily's house before"]) {
					print(`You go through the garden portal.`);
					goTo("Emily");
				}
				else {
					print(`You go to a door that leads outside, and you skip time until someone has opened it. You slip out behind them, unnoticed. You find the garden, and you explore a little. As you're sniffing a bean plant, you blink and realize that the scene has changed. You see the now-familiar blue shimmery circle next to you.

If you want to return, you can always go back to the garden through the portal. 

(type "garden" to return)`);
					variables["has been to Emily's house before"] = -1
					goTo("Emily");
				}
			},
			"(Follow|go)": (args) => {
				if (variables["the gift of knowledge"]) {
					print(`You go into the mysterious closet. Where are you?`);
					goTo("AliyahRoom2");
				}
				else {
					print(`Huh?`);
				}
			},
			"revive": (args) => {
				if (!args || !args[0]) {
					print(`Revive who?`);
				} else if (args[0] == '(all|everyone)') {
					print(`You go around and revive everyone you'd killed in this building.`);
					variables["chose kill Reu"] = 0
					variables["chose kill Maia"] = 0
					variables["chose kill Nathan"] = 0
					variables["chose kill Andrew"] = 0
					variables["chose kill Aliyah"] = 0
					variables["revived Reu"] = -1
					variables["revived Maia"] = -1
					variables["revived Nathan"] = -1
					variables["revived Emily"] = -1
					variables["revived Andrew"] = -1
					variables["revived Aliyah"] = -1
					variables["chose to revive someone"] = -1
				} else if (args[0] == 'Reu') {
					if (variables["chose kill Reu"]) {
						print(`Alright, fine. You decide to revive the tall human, using the power of your healing tears so as to not delete any events you might have done in between killing and reviving the human. You return to the hallway.`);
						variables["chose kill Reu"] = 0
						variables["revived Reu"] = -1
						variables["chose to revive someone"] = -1
					}
					else {
						print(`Revive? The tall human is still alive!`);
					}
				} else if (args[0] == 'Maia') {
					if (variables["chose kill Maia"]) {
						print(`You decide to revive Maia because you're boring and you don't like living on the edge.`);
						variables["chose kill Maia"] = 0
						variables["revived Maia"] = -1
						variables["chose to revive someone"] = -1
					}
					else {
						print(`You can't revive someone who's still alive...`);
					}
				} else if (args[0] == 'Nathan') {
					if (variables["chose kill Nathan"]) {
						print(`You decide to revive Nathan because you're boring and you don't like living on the edge.`);
						variables["chose kill Nathan"] = 0
						variables["revived Nathan"] = -1
						variables["chose to revive someone"] = -1
					}
					else {
						print(`You can't revive someone who's still alive...`);
					}
				} else if (args[0] == 'Emily') {
					if (variables["chose kill Emily"]) {
						print(`*sigh* fine.`);
						variables["chose kill Emily"] = 0
						variables["revived Emily"] = -1
						variables["chose to revive someone"] = -1
					}
					else {
						print(`You can't revive someone who's still alive...`);
					}
				} else if (args[0] == '(Andy|Dandrewlion|Werdna)') {
					if (variables["chose kill Andrew"]) {
						print(`Fine, fine.`);
						variables["chose kill Andrew"] = 0
						variables["revived Andrew"] = -1
						variables["chose to revive someone"] = -1
					}
					else {
						print(`You can't kill someone who's still alive.`);
					}
				} else if (args[0] == 'Andrew') {
					print(`Hmm. I don't know who Andrew is. Maybe try reviving Andy, Werdna, or Dandrewlion?`);
				} else if (args[0] == 'Aliyah') {
					if (variables["chose kill Aliyah"]) {
						print(`You decide to revive the human (good choice) using your amnesic healing tears. When you're finished, the human sees you and reaches out to pet you. You comply, hopping up onto the human's lap, feeling somewhat guilty for killing the human in the first place. You fall asleep.

Later, you return to the hall.`);
						variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
						variables["chose kill Aliyah"] = 0
						variables["revived Aliyah"] = -1
						variables["chose to revive someone"] = -1
					}
					else {
						print(`You can't revive someone who's still alive...`);
					}
				}
			},
		},
	},
	Emily: {
		name: "Emily",
		commands: {
			"if": (args) => {
				if (!args || !args[0]) {
					// UNDEFINED_KEY 'cond';
				} else if (args[0] == 'hint') {
					if (variables["chose kill Eevee"]) {
						print(`Here are all your possible commands for Emily's room:

revive Emily
revive Eevee
look (what you see changes depending on whether or not you've seen Eevee)
bean
Emily
Eevee/cat
kill Emily
kill Eevee
portal
inv
clear
help
hint
`);
					}
					else {
						print(`Here are all your possible commands for Emily's room:

revive Emily
look (what you see changes depending on whether or not you've seen Eevee)
bean
Emily
Eevee/cat
kill Emily
kill Eevee
portal
inv
clear
help
hint
`);
					}
				} else if (args[0] == 'l') {
					if (variables["Name Eevee"]) {
						if (variables["chose kill Eevee"]) {
							if (variables["Name Emily"]) {
								if (!args || !args[1]) {
									t.clear();
									print("[image]Includes/Images/DeadEmily.jpeg");
									print("[image]Includes/Images/Emily.jpeg");
									print(`You see a bunch of bean plants in front of a window. They're in some odd pots that look like they could be teapots. Eevee is lying dead on the floor. 

Also, Emily lies dead on the floor as its ghost wanders around gleefully. It seems to enjoy being a ghost.`);
								} else if (args[1] == 'bean') {
									print("[image]Includes/Images/BabyHeartBeans.jpeg");
									print("[image]Includes/Images/HeartBean.jpeg");
									print(`You admire the bean plants. You rewind time and fast-forward again, watching them grow up over time.`);
								}
							}
							else {
								if (!args || !args[1]) {
									t.clear();
									print("[image]Includes/Images/Emily.jpeg");
									print(`You see a bunch of bean plants in front of a window. They're in some odd pots that look like they could be teapots. 

Eevee is lying dead on the floor. 

Also, a human dead body lies on the floor as its ghost wanders around gleefully.`);
								} else if (args[1] == 'bean') {
									print("[image]Includes/Images/BabyHeartBeans.jpeg");
									print("[image]Includes/Images/HeartBean.jpeg");
									print(`You admire the bean plants. You rewind time and fast-forward again, watching them grow up over time.`);
								}
							}
						}
						else {
							if (variables["Name Emily"]) {
								if (!args || !args[1]) {
									t.clear();
									print("[image]Includes/Images/DeadEmily.jpeg");
									print("[image]Includes/Images/Emily.jpeg");
									print(`You see a bunch of bean plants in front of a window. They're in some odd pots that look like they could be teapots. Eevee is in the room with you, looking outside. 

Also, Emily lies dead on the floor as its ghost wanders around gleefully. It seems to enjoy being a ghost.`);
								} else if (args[1] == 'bean') {
									print("[image]Includes/Images/BabyHeartBeans.jpeg");
									print("[image]Includes/Images/HeartBean2.jpeg");
									print(`You admire the bean plants. You rewind time and fast-forward again, watching them grow up over time.`);
								}
							}
							else {
								if (!args || !args[1]) {
									t.clear();
									print("[image]Includes/Images/HeartBean2.jpeg");
									print("[image]Includes/Images/Emily.jpeg");
									print(`You see a bunch of bean plants in front of a window. They're in some odd pots that look like they could be teapots. Eevee is in the room with you, looking outside. 

Also, a dead body lies on the floor as its ghost wanders around gleefully.`);
								} else if (args[1] == 'bean') {
									print("[image]Includes/Images/BabyHeartBeans.jpeg");
									print("[image]Includes/Images/HeartBean.jpeg");
									print(`You admire the bean plants. You rewind time and fast-forward again, watching them grow up over time.`);
								}
							}
						}
					}
					else {
						if (variables["Name Emily"]) {
							if (!args || !args[1]) {
								t.clear();
								print("[image]Includes/Images/Emily.jpeg");
								print(`You see a bunch of bean plants and a few flowers in front of a window. They're in some odd pots, they look like they might be teapots. Interesting. You wonder who lives here. You can smell a cat! Perhaps a new friend? Also, Emily lies dead on the floor, its ghost wandering the room gleefully. It seems to enjoy being a ghost.`);
							} else if (args[1] == 'bean') {
								print("[image]Includes/Images/BabyHeartBeans.jpeg");
								print("[image]Includes/Images/HeartBean.jpeg");
								print(`You admire the bean plants. You rewind time and fast-forward again, watching them grow up over time.`);
							}
						}
						else {
							if (variables["chose kill Eevee"]) {
								if (!args || !args[1]) {
									t.clear();
									print("[image]Includes/Images/Emily.jpeg");
									print(`You see a bunch of bean plants and a few flowers in front of a window. They're in some odd pots, they look like they might be teapots. Interesting. A cat lies dead on the floor. Also, a dead body lies on the floor, its ghost wandering the room gleefully. It seems to enjoy being a ghost.`);
								} else if (args[1] == 'bean') {
									print("[image]Includes/Images/BabyHeartBeans.jpeg");
									print("[image]Includes/Images/HeartBean.jpeg");
									print(`You admire the bean plants. You rewind time and fast-forward again, watching them grow up over time.`);
								}
							}
							else {
								if (!args || !args[1]) {
									t.clear();
									print("[image]Includes/Images/Emily.jpeg");
									print(`You see a bunch of bean plants and a few flowers in front of a window. They're in some odd pots, they look like they might be teapots. Interesting. You wonder who lives here. You can smell a cat! Perhaps a new friend? Also, a dead body lies on the floor, its ghost wandering the room gleefully. It seems to enjoy being a ghost.`);
								} else if (args[1] == 'bean') {
									print("[image]Includes/Images/BabyHeartBeans.jpeg");
									print("[image]Includes/Images/HeartBean.jpeg");
									print(`You admire the bean plants. You rewind time and fast-forward again, watching them grow up over time.`);
								}
							}
						}
					}
				} else if (args[0] == 'bean') {
					print("[image]Includes/Images/BabyHeartBeans.jpeg");
					print("[image]Includes/Images/HeartBean.jpeg");
					print(`You admire the bean plants. You rewind time and fast-forward again, watching them grow up over time.`);
				} else if (args[0] == 'Emily') {
					if (variables["Name Emily"]) {
						print(`You trot over to where Emily lies on the floor. You admire your handiwork. (If you feel guilty, type "revive Emily")`);
					}
					else {
						print(`Trotting over to where the human lies on the floor, you admire your handiwork. (If you feel guilty, type "revive Emily")`);
					}
				} else if (args[0] == '(Eevee|cat)') {
					if (variables["chose kill Eevee"]) {
						print(`You look at the dead body of the fluffy cat. You are proud that you managed to take her down, it was quite a fight! It was lucky that you were experienced enough to kill her, or you might not have been able to do it! (If you're feeling guilty, you can "revive Eevee"`);
					}
					else {
						print("[image]Includes/Images/Eevee.jpeg");
						print(`A large light-coloured fluffy cat enters the room. 

"Hello!" You say to her. 

"This is my house!" She hisses at you. You take a step back and try to appear as non-threatening as possible. "I've arrived here using a portal, I'm just planning on wandering around for a bit and then returning to where I came from" You explain. 

Eevee notices the body of the human on the floor and looks at you in shock. "Did you...kill her?" She asks you. "Yep!" You reply. The cat doesn't seem to know what to say to that.

"So anyway,as I was saying" you continue, "I came here using a portal!"                            

"A portal?" She asks. 

"Yes, it's a blue shimmery circle that allows me to travel through space." You add. 

She seems skeptical, so you lead her to the circle. 

"I see nothing" She scoffs. You blink in confusion. It's right there, in plain sight! You think to yourself...You decide to take a quick trip to the other building and back, to prove it. When you come back, the cat seems shocked. 

"You just vanished into thin air!" She exclaims. You smile. 

"That's only one of the things I can do." You lift the bean plants off the table telekinetically to demonstrate. You realize that you don't even know this cat's name. "What's your name?" You ask her. "Eevee" She responds.`);
						variables["Name Eevee"] = -1
					}
				} else if (args[0] == 'kill') {
					if (!args || !args[1]) {
					} else if (args[1] == 'Emily') {
						if (variables["licence to kill revoked"]) {
							print(`Killing things doesn't feel so fun anymore...`);
						}
						else {
							print(`I hate to break it to you, but you've already killed this one...`);
						}
					} else if (args[1] == 'Eevee') {
						if (variables["chose kill Eevee"]) {
							print(`You chose to keep her dead, you can't kill her again (unless you revive her- "revive Eevee")`);
						}
						else {
							if (variables["licence to kill revoked"]) {
								print(`Killing things doesn't feel so fun anymore...`);
							}
							else {
								if (variables["kill point N"] && variables["kill point A"] && variables["kill point Maia"] && variables["kill point M"] && variables["kill point Em"] && variables["kill point Aliyah"] && variables["kill point R"] && variables["kill point B"]) {
									print(`You decide to kill Eevee. You unsheathe your claws into her throat. She is surprised but fights back. Unfortunately for her, you are well-experienced. You have killed many before her. Baba, Mumu, Nathan, a few of his friends...

She gets a few scratches in before she ultimately succumbs to you. You feel powerful. Now comes the question: should you revive her? ("Yes" or "no")`);
									variables["Eevee life/death question"] = -1
									variables["Name Eevee"] = -1
									variables["kill point Ev"] = (variables["kill point Ev"] ? variables["kill point Ev"] + 1 : 1)
									goTo("DecisionRoom");
								}
								else {
									print(`You lunge at the fluffy cat, but unfortunately, she is too powerful for you. You manage to get a scratch or two in, but you ultimately are forced to run off and escape to the hallway through the portal. You rewind time for good measure, just so she won't remember the exchange. Phew. Perhaps you need a bit more experience before you can kill her.

You are now in the hallway of the building Nathan's living in.`);
									goTo("hallway3");
								}
							}
						}
					}
				} else if (args[0] == '(garden|Grebel|portal|leave)') {
					print(`You head back to the garden through the portal and walk up to outside Nathan's room. You're in the hallway.`);
					goTo("hallway3");
				} else if (args[0] == 'revive') {
					if (!args || !args[1]) {
					} else if (args[1] == 'Emily') {
						if (variables["Name Emily"]) {
							print(`Emily's ghost glares at you as you approach. It knows what's about to happen, and it likes being a ghost! You rewind time, making it so she never died.`);
							variables["chose kill Emily"] = 0
							variables["revived Emily"] = -1
							variables["chose to revive someone"] = -1
						}
						else {
							print(`The human's ghost glares at you as you approach, knowing that you are about to revive it. It likes being a ghost! You ignore its disapproval and rewind time to let the human live again.`);
							variables["chose kill Emily"] = 0
							variables["revived Emily"] = -1
							variables["chose to revive someone"] = -1
						}
					} else if (args[1] == 'Eevee') {
						if (variables["chose kill Eevee"]) {
							print(`You sigh and rewind time to allow Eevee to live. You do hate having to deal with consequences for your actions, you suppose.`);
							variables["chose kill Eevee"] = 0
							variables["revived Eevee"] = -1
							variables["chose to revive someone"] = -1
						}
						else {
							print(`Huh?`);
						}
					}
				}
			},
			"else": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'hint') {
					if (variables["chose kill Eevee"]) {
						print(`Here are all your possible commands for Emily's room:

revive Eevee
look (what you see changes)
bean
Emily
Eevee/cat
kill Emily
kill Eevee
portal
inv
clear
help
hint
`);
					}
					else {
						print(`Here are all your possible commands for Emily's room:

look (what you see changes)
bean
Emily
Eevee/cat
kill Emily
kill Eevee
portal
inv
clear
help
hint
`);
					}
				} else if (args[0] == 'l') {
					if (variables["Name Eevee"]) {
						if (variables["chose kill Eevee"]) {
							t.clear();
							print("[image]Includes/Images/Emily.jpeg");
							print(`You see a bunch of bean plants in front of a window. They're in some odd pots that look like they could be teapots. Eevee lies dead.`);
						}
						else {
							t.clear();
							print("[image]Includes/Images/HeartBean2.jpeg");
							print("[image]Includes/Images/Emily.jpeg");
							print(`You see a bunch of bean plants in front of a window. They're in some odd pots that look like they could be teapots. Eevee is in the room with you, looking outside.`);
						}
					}
					else {
						if (variables["chose kill Eevee"]) {
							t.clear();
							print("[image]Includes/Images/Emily.jpeg");
							print(`You see a bunch of bean plants and a few flowers in front of a window. They're in some odd pots, they look like they might be teapots. Interesting. You wonder who lives here. You can smell a cat! Perhaps a new friend?`);
						}
						else {
							t.clear();
							print("[image]Includes/Images/Emily.jpeg");
							print(`You see a bunch of bean plants and a few flowers in front of a window. They're in some odd pots, they look like they might be teapots. Interesting. You wonder who lives here. You can smell a cat! Perhaps a new friend?`);
						}
					}
				} else if (args[0] == 'bean') {
					print("[image]Includes/Images/BabyHeartBeans.jpeg");
					print("[image]Includes/Images/HeartBean.jpeg");
					print(`You admire the bean plants. You rewind time and fast-forward again, seeing them grow up.`);
				} else if (args[0] == 'Emily') {
					if (variables["Name Emily"]) {
						if (variables["chose kill Eevee"]) {
							print(`As you admire the wonderfully growing beans, Emily walks into the room. Ah, it seems that you have managed to find the human's house! Emily seems surprised to see you.

"Lucky?" It asks you. You roll your eyes. "Yes?" You meow back at it. Emily seems unsure what it should say next. Emily suddenly realizes that Eevee lying dead on the floor, and it looks at you in shock! You decide that it's time to revive Eevee, so you rewind time to undo it. If you still want to kill her, be more careful this time!`);
							variables["chose kill Eevee"] = 0
						}
						else {
							print(`As you admire the wonderfully growing beans, Emily walks into the room. Ah, it seems that you have managed to find the human's house! Emily seems surprised to see you.

"Lucky?" It asks you. You roll your eyes. "Yes?" You meow back at it. Emily seems unsure what it should say next. You turn your attention back to the beans. 

"Those are icicle water heart beans." Emily explains to you. You stare at the human. It had just strung a bunch of random words together and pretended that it was an explanation. Turning your attention to the beans, you ignore the human. Emily laughs to itself as it leaves the room.`);
						}
					}
					else {
						if (variables["chose kill Eevee"]) {
							print(`As you admire the wonderfully growing beans, a human walks into the room. It seems surprised to see you.

"Lucky?" It asks you. You roll your eyes. "Yes?" You meow back at it. It seems unsure what it should say next. Then, the human suddenly realizes that Eevee is lying dead on the floor, and it looks at you in shock! You decide that it's time to revive Eevee, so you rewind time to undo it. If you still want to kill her, be more careful this time!`);
							variables["chose kill Eevee"] = 0
						}
						else {
							print(`As you're looking at the wonderfully growing beans, a female human walks into the room. It seems surprised to see you.

"Lucky?" It asks you. You roll your eyes "Yes?" You meow back at it. How does it know your name? You wonder. You turn your attention back to the beans. 

"Those are icicle water heart beans." the human explains to you. You stare at the human. Really, 'icicle water heart beans'? It seems like the human had just strung a bunch of random words together and pretended that it was an explanation. "My name is Emily" It adds. Turning your attention to the beans, you ignore the human. It laughs to itself as it leaves the room.`);
							variables["Name Emily"] = -1
						}
					}
				} else if (args[0] == '(Eevee|cat)') {
					if (variables["chose kill Eevee"]) {
						print(`You look at the dead body of the fluffy cat. You are proud that you managed to take her down, it was quite a fight! It was lucky that you were experienced enough to kill her, or you might not have been able to do it! (If you're feeling guilty, you can "revive Eevee."`);
					}
					else {
						print("[image]Includes/Images/Eevee.jpeg");
						print(`A large light-coloured fluffy cat enters the room. 

"Hello!" You say to her. 

"This is my house!" She hisses at you. You take a step back and try to appear as non-threatening as possible. "I've arrived here using a portal, I'm just planning on wandering around for a bit and then returning to where I came from" You explain. 

"A portal?" She asks. 

"Yes, it's a blue shimmery circle that allows me to travel through space." You add. 

She seems skeptical, so you lead her to the circle. 

"I see nothing" She scoffs. You blink in confusion. It's right there, in plain sight! You think to yourself...You decide to take a quick trip to the other building and back, to prove it. When you come back, the cat seems shocked. 

"You just vanished into thin air!" She exclaims. You smile. 

"That's only one of the things I can do." You lift the bean plants off the table telekinetically to demonstrate. You realize that you don't even know this cat's name. "What's your name?" You ask her. "Eevee" She responds.`);
						variables["Name Eevee"] = -1
					}
				} else if (args[0] == 'kill') {
					if (!args || !args[1]) {
					} else if (args[1] == 'Emily') {
						if (variables["licence to kill revoked"]) {
							print(`Killing things doesn't feel so fun anymore...`);
						}
						else {
							print(`The human walks into the room and you decide to kill it. Lunging for its throat, you sink your claws in. The human is knocked down by the force, and fights it a little, but ultimately accepts its fate. Now, do you rewind time to revive her or not? ("yes" or "no")`);
							variables["kill point Em"] = (variables["kill point Em"] ? variables["kill point Em"] + 1 : 1)
							variables["Emily life/death question"] = -1
							goTo("DecisionRoom");
						}
					} else if (args[1] == 'Eevee') {
						if (variables["chose kill Eevee"]) {
							print(`You chose to keep her dead, you can't kill her again (unless you revive her- "revive Eevee")`);
						}
						else {
							if (variables["licence to kill revoked"]) {
								print(`Killing things doesn't feel so fun anymore...`);
							}
							else {
								if (variables["kill point N"] && variables["kill point A"] && variables["kill point Maia"] && variables["kill point M"] && variables["kill point Em"] && variables["kill point Aliyah"] && variables["kill point R"] && variables["kill point B"]) {
									print(`You decide to kill Eevee. You unsheathe your claws into her throat. She is surprised but fights back. Unfortunately for her, you are well-experienced. You have killed many before her. Baba, Mumu, Nathan, a few of his friends...

She gets a few scratches in before she ultimately succumbs to you. You feel powerful. Now comes the question: should you revive her? ("Yes" or "no")`);
									variables["Eevee life/death question"] = -1
									variables["Name Eevee"] = -1
									variables["kill point Ev"] = (variables["kill point Ev"] ? variables["kill point Ev"] + 1 : 1)
									goTo("DecisionRoom");
								}
								else {
									print(`You lunge at the fluffy cat, but unfortunately, she is too powerful for you. You manage to get a scratch or two in, but you ultimately are forced to run off and escape to the hallway through the portal. You rewind time for good measure, just so she won't remember the exchange. Phew. Perhaps you need a bit more experience before you can kill her.

You are now in the hallway of the building Nathan's living in.`);
									goTo("hallway3");
								}
							}
						}
					}
				} else if (args[0] == '(garden|Grebel|portal)') {
					print(`You head back to the garden through the portal and walk up to outside Nathan's room. You're in the hallway.`);
					goTo("hallway3");
				} else if (args[0] == 'revive') {
					if (!args || !args[1]) {
						print(`revive??`);
					} else if (args[1] == 'Eevee') {
						if (variables["chose kill Eevee"]) {
							print(`You sigh and rewind time to allow Eevee to live. You do hate having to deal with consequences for your actions, you suppose.`);
							variables["chose kill Eevee"] = 0
							variables["revived Eevee"] = -1
							variables["chose to revive someone"] = -1
						}
						else {
							print(`revive??`);
						}
					}
				}
			},
		},
	},
	Headquarters: {
		name: "Headquarters",
		commands: {
			"hint": (args) => {
				if (variables["has mission"]) {
					print(`Alrighty Agent Lucky, here are all the possible commands:

look (tells you what mission(s) are available)
move (up|down)                    Accept
Decline
Nathan / hallway (you can still come back to Headquarters by typing "Headquarters" from the hallway)
inv
clear
help
hint
`);
				}
				else {
					print(`Alrighty Agent Lucky, here are all the possible commands (NOTE: More actions will be unlocked when you do one of these actions, so check the hints again after you do something if you're still lost):

look (tells you what mission(s) are available)
move (up|down)                    Nathan / hallway (you can still come back to Headquarters by typing "Headquarters" from the hallway)
inv
clear
help
hint
`);
				}
			},
			"l": (args) => {
				if (variables["Save the cats mission - completed"]) {
					t.clear();
					print(`You are in Assassin's Headquarters! You currently have no missions, but check back later! 
Your completed/assigned missions appear in your inventory along with their status.`);
				}
				else {
					if (variables["weed mission - completed"]) {
						if (variables["befriend"]) {
							t.clear();
							print(`You are in Assassin's Headquarters! 

You currently have one available mission:

Due to the self-restraint you showed on your weed mission (which actually allowed us to gather more intel than if you had killed them), your next mission is also not an assassination. You will be gathering intel on a group of individuals who are suspected to be illegally trafficking exotic cat species (such as caracals, lynxes, and servals). You may even be able to free some of them. 

(respond "Accept" to accept, or just return to the hallway outside Nathan's room by typing "Nathan")

Your completed/assigned missions appear in your inventory.`);
							variables["Save the cats mission"] = (variables["Save the cats mission"] ? variables["Save the cats mission"] + 1 : 1)
							variables["has mission"] = -1
						}
						else {
							t.clear();
							print(`You are in Assassin's Headquarters! 

You currently have one available mission:

Due to the ease at which you killed everyone while on the weed mission, you are being given an assassination! Your goal is to kill this person as quickly as possible and while not drawing attention, if possible. You'll get more information if you accept the mission. 

(respond "Accept" to accept, or just return to the hallway outside Nathan's room by typing "Nathan")

Your completed/assigned missions appear in your inventory.`);
							variables["Assassination mission"] = (variables["Assassination mission"] ? variables["Assassination mission"] + 1 : 1)
							variables["has mission"] = -1
						}
					}
					else {
						if (variables["weed"]) {
							t.clear();
							print(`You are in Assassin's Headquarters! 

You currently have one available quest:

Your mission is to go undercover on the streets and help send high-up drug dealers to jail. 

(respond "Accept" to accept, or just return to the hallway outside Nathan's room by typing "Nathan")

Your completed/assigned missions appear in your inventory along with their status.`);
							variables["weed mission"] = (variables["weed mission"] ? variables["weed mission"] + 1 : 1)
							variables["has mission"] = -1
						}
						else {
							if (variables["Wonder Pets mission - completed"]) {
								t.clear();
								print(`You are in Assassin's Headquarters! You currently have no missions, but check back later!
Your completed/in progress missions appear in your inventory. You can return to the hallway outside Nathan's room by typing "Nathan" Perhaps there are still things you can do to unlock a mission (try talking to Maia and see if that leads you anywhere)!`);
							}
							else {
								t.clear();
								print(`You are in Assassin's Headquarters! 

You currently have one available quest:

Your mission is to join a team of other secret agents, filling in for a sick agent. You will be on a mission to save someone. You will receive further details when you arrive, but just know that it's not an assassination if that's what you wanted.

(respond "Accept" to accept, or just return to the hallway outside Nathan's room by typing "Nathan")

Your completed/assigned missions appear in your inventory along with their status.`);
								variables["Wonder Pets mission"] = (variables["Wonder Pets mission"] ? variables["Wonder Pets mission"] + 1 : 1)
								variables["has mission"] = -1
							}
						}
					}
				}
			},
			"Decline": (args) => {
				if (variables["has mission"]) {
					print(`How dare you pick an option that wasn't given! It was simple! "Nathan" or "accept", how hard is it? That's it! I quit! No more game for you!`);
					endGame(100)
				}
				else {
					if ((variables["declined a mission that doesn't even *exist*!"] >= 5 || -variables["declined a mission that doesn't even *exist*!"] >= 5)) {
						print(`I've had enough of this! Why can't you just play the game normally?? Who just spams certain commands??`);
						endGame(101)
					}
					else {
						if (variables["declined a mission that doesn't even *exist*!"]) {
							print(`And you've declined the nonexistent mission for a second time...I see...`);
							variables["declined a mission that doesn't even *exist*!"] = (variables["declined a mission that doesn't even *exist*!"] ? variables["declined a mission that doesn't even *exist*!"] + 1 : 1)
						}
						else {
							print(`Huh? What are you declining? You don't even have a mission...`);
							variables["declined a mission that doesn't even *exist*!"] = -1
						}
					}
				}
			},
			"Accept": (args) => {
				if (variables["north Aliyah"]) {
					print(`You go into the room again and get beamed into the assassination mission destination again. Maybe this time you should actually try completing the mission instead of wandering everywhere? You do have a job here...`);
					goTo("Assassin");
				}
				else {
					if (variables["Assassination mission"]) {
						print(`You have accepted the mission!  

You are not led to a plane, as you normally are, you are led to a strange room with a television next to a peculiar machine, a cylindrical chamber. It is the height of a human (it's probably originally designed for humans), so there's plenty of space.                                                        You learn that you are being hired to assassinate a popular children's TV show character. You're not familiar with him (you're a cat, you don't really watch children's TV shows) and you aren't informed of why they want to kill him, but they reassure you that he is dangerous and must be killed for the safety of the country. They hand you a drawing of who you're supposed to kill, and you set it down and decide to look at it later (remember to look at it, later you can type "drawing" to look at it).

You step inside the chamber. The machine turns on and a circular panel below your feet starts to glow blue. It's reminiscent of the portals you've been through, but not exactly the same. The slight glow turns into a bright beam of light that envelops you, and you close your eyes tightly to avoid bright spots in your vision. You open your eyes once the brightness fades, looking down at the ground first to avoid light. As you do, you notice suddenly that you are wearing scuba gear. As you look around, you have to blink a few times before you can believe your eyes.`);
						goTo("Assassin");
					}
					else {
						if (variables["Save the cats mission"]) {
							print(`You have accepted the mission! You travel to an unknown location via private plane (luckily you have the plane to yourself) and you are further briefed on the specifics of the mission on the way over. 

You land after several hours of flying. Stretching your legs, you step out of the plane. Look around to get your bearings.`);
							goTo("SaveCats");
						}
						else {
							if (variables["weed mission"]) {
								print(`You are transported via private plane to Spain. Unfortunately, you do not have the plane to yourself. Some other secret agent that they call "007" also had a different mission in the same city. You think he's obnoxious, but you do both have a "licence to kill," as they say. When you land, you are instructed to behave like a normal cat and make your way to a particular location, where a huge deal is going down involving a hybrid drug, a cross between meth and cocaine. When you arrive, you look around (respond "look")`);
								goTo("Spain");
							}
							else {
								if (variables["Wonder Pets mission"]) {
									print(`You have accepted the mission!

You are taken outside to a hangar, where you see planes and cars. You wait for them to direct you to one, but they seem to be waiting for something.

A door opens from outside and an odd contraption that looks as though it's a child's toy flies through it and lands in front of you. You blink in confusion.

The agents motion at you to enter, so you do. What kind of mission is this?

You arrive at a building. Look around.`);
									goTo("WonderPetSchoolhouse");
								}
								else {
									print(`Hold on, what are you accepting? You don't have a mission...Look around first, or if no missions are being offered, return to Nathan's new house by typing "Nathan". It's possible that there's something you can do there to qualify you for a mission.`);
								}
							}
						}
					}
				}
			},
			"(Grebel|Nathan|hallway|return)": (args) => {
				print(`You return to the hallway outside Nathan's room. To get back to Headquarters, you can kill another leprechaun, or type "Headquarters." You could kill people or get weed, or from here you can find Eevee though that weird garden portal.`);
				goTo("hallway3");
			},
		},
	},
	Spain: {
		name: "Spain",
		commands: {
			"hint": (args) => {
				if (variables["north Spain"]) {
					print(`Agent Lucky, here are your possible options at this moment on this mission:

look
move (north|east|up|down)
intel / befriend (NEW)
kill squirrel (NEW)
eat squirrel
kill
return / Headquarters (leaves mission unfinished, but you can re-accept)
inv
clear
help
hint
`);
				}
				else {
					print(`Agent Lucky, here are your possible options at this moment on this mission (NOTE that some actions unlock other actions, so this list only shows what you currently have unlocked (changes as you go)):

look
move (north|east|up|down)
eat squirrel
kill
return / Headquarters (leaves mission unfinished, but you can re-accept)
inv
clear
help
hint
`);
				}
			},
			"l": (args) => {
				t.clear();
				print(`You are on the streets.

N: You are supposed to head north to get to where you are supposed to be.
E: You see a squirrel disappearing around the corner! You probably have time to chase it (you have the power to rewind time, so really you have all the time in the world)!

When your mission is complete, enter "Headquarters" to return.`);
			},
			"(intel|befriend)": (args) => {
				if (variables["north Spain"]) {
					print(`You pad up to the group, meowing at them. They pet you, and you enjoy their company. 
All you have to do is hang around until they reveal enough incriminating information. You have undetectable cameras placed in your eyes as contact lenses, constantly streaming to Headquarters. You get a lot of video evidence over the course of a couple days (including their big drug bust) and you even come along when they go to meet someone higher-up! When you eventually return, your work pays off, and you have unlocked another mission! You are now back at Headquarters. Look around to get details on the mission.`);
					variables["weed mission"] = 0
					variables["weed mission - completed"] = 1
					variables["befriend"] = -1
					goTo("Headquarters");
				}
				else {
					print(`*sigh* please look around and do things before saying random commands out of order.`);
				}
			},
			"kill": (args) => {
				if (!args || !args[0]) {
					if (variables["north Spain"]) {
						print(`You innocently trot up to the small group, and at the last second before one of their hands touches you, you leap onto it. Using the element of surprise (and your extensive experience), you kill everyone in sight. This time, you actually have a licence to kill. You don't have to rewind time. Huh. 

You make sure that they're all dead, and you go to the meet-up location. You lead everyone to the place where they were, and they congratulate you on a job well done. Mission complete! You are now in Headquarters, you can look around to see if you have a mission!`);
						variables["weed mission"] = 0
						variables["weed mission - completed"] = 1
						variables["kill point W"] = (variables["kill point W"] ? variables["kill point W"] + 1 : 1)
						goTo("Headquarters");
					}
					else {
						if (variables["squirrel serial killer"]) {
							print(`Another squirrel? Alright...

You hunt around until you find one, snapping its neck quickly. This is good practice for your career as an assassin.`);
							variables["squirrel"] = (variables["squirrel"] ? variables["squirrel"] + 1 : 1)
							variables["kill point S"] = (variables["kill point S"] ? variables["kill point S"] + 1 : 1)
						}
						else {
							if (variables["squirrel"]) {
								print(`You rewind time to kill the squirrel. You chase it and snap its neck. This is one kill that you don't have to rewind. Mm. You wish you could go back and put the squirrel on Meow's pillow. Maybe after this quest you will.`);
								variables["kill point S"] = (variables["kill point S"] ? variables["kill point S"] + 1 : 1)
								variables["squirrel"] = 1
								variables["squirrel serial killer"] = -1
							}
							else {
								print(`What do you want to kill? Maybe look around again to see where you can go?`);
							}
						}
					}
				} else if (args[0] == 'squirrel') {
					print(`You rewind time to kill the squirrel. You chase it and snap its neck. This is one kill that you don't have to rewind. Mm. You wish you could go back and put the squirrel on Nathan's pillow. Maybe after this quest you will.`);
					variables["kill point S"] = (variables["kill point S"] ? variables["kill point S"] + 1 : 1)
					variables["squirrel"] = 0
				}
			},
			"eat": (args) => {
				if (!args || !args[0]) {
					if (variables["kill point S"]) {
						print(`You eat the squirrel. Tasty. The only problem is that now you can't put it on Meow's pillow. Well, you could always go rewind time and re-kill this one. You stop and think for a second. Is this an unlimited food source?`);
						variables["food"] = (variables["food"] ? variables["food"] + 1 : 1)
						variables["squirrel"] = 0
					}
					else {
						print(`You can't eat. Try killing a squirrel first!`);
					}
				} else if (args[0] == 'squirrel') {
					if (variables["kill point S"]) {
						print(`You eat the squirrel. Tasty. The only problem is that now you can't put it on Meow's pillow. Well, you could always go rewind time and re-kill this one. You stop and think for a second. Is this an unlimited food source?`);
						variables["food"] = (variables["food"] ? variables["food"] + 1 : 1)
						variables["squirrel"] = 0
					}
					else {
						print(`You can't do that. Try killing a squirrel first!`);
					}
				}
			},
			"(Return|Headquarters)": (args) => {
				print(`You return to Headquarters. You can come back to Spain by typing "Accept" again if you haven't completed the mission yet.`);
				goTo("Headquarters");
			},
		},
		connections: {
			"n": () => {
				print(`You trot off down the road, having been briefed on the layout of the streets beforehand. You arrive at the place. You see a few tall humans, two male and one female. They see you and beckon encouragingly. "They like cats..." You note to yourself. You now have two paths: gather intel by befriending them, or kill them all and report back? (You could also take a quick side trip to get that squirrel by going east).

"kill" or "befriend"?`);
				variables["north Spain"] = -1
			},
			"e": () => {
				print(`You chase the squirrel down the block! You don't end up catching it, but you find it to be good exercise, which you needed now that you're a secret agent! Unfortunately, this mission is not an assassination mission, but you think it'll still be fun. You do have the power to rewind time, so maybe you can just kill the humans and undo it! You could even do that with the squirrel as well...you love not having consequences for your actions!`);
				variables["squirrel"] = -1
			},
		},
	},
	Assassin: {
		name: "Assassin",
		commands: {
			"hint": (args) => {
				if (variables["north Aliyah"]) {
					if (variables["who to kill first?"]) {
						if (variables["got asked question"]) {
							print(`Agent Lucky, here are all possible commands at this point (changes as you progress):

Yes
No
look
drawing
inv
clear
help
hint
`);
						}
						else {
							print(`Agent Lucky, here are all possible commands at this point (changes as you progress):

look
move (up|down)
kill Spongebob
kill Sandy
drawing
inv
clear
help
hint
`);
						}
					}
					else {
						print(`Agent Lucky, here are all possible commands at this point (changes as you progress):

Revive Aliyah

look
follow
move (south|up|down)
drawing
inv
clear
help
hint`);
					}
				}
				else {
					if (variables["who to kill first?"]) {
						if (variables["got asked question"]) {
							print(`Agent Lucky, here are all possible commands at this point (changes as you progress):

Yes
No
look
move (up|down)
drawing
inv
clear
help
hint
`);
						}
						else {
							print(`Agent Lucky, here are all possible commands at this point (changes as you progress):

look
move (up|down)
kill Spongebob
kill Sandy
drawing
inv
clear
help
hint
`);
						}
					}
					else {
						print(`Agent Lucky, here are all possible commands at this point (changes as you progress):

Revive Aliyah

look
move (north|south|up|down)
drawing
inv
clear
help
hint
`);
					}
				}
			},
			"l": (args) => {
				if (variables["looked already"]) {
					if (!args || !args[0]) {
						t.clear();
						print(`You've got two paths: 

S: You are supposed to head south to get to your target.
N: North is the opposite of south and so that's the direction you would go to waste time.`);
					} else if (args[0] == 'drawing') {
						print("[image]https://pyxis.nymag.com/v1/imgs/7aa/21a/c1de2c521f1519c6933fcf0d08e0a26fef-27-spongebob-squarepants.rsquare.w700.JPG");
						print(`You look at the drawing.`);
					}
				}
				else {
					if (!args || !args[0]) {
						t.clear();
						print(`You look at your surroundings to find that you have materialized in the middle of the ocean floor. Not only that, but everything looks a little weird. It looks like a simplified, cartoonish version of reality, almost as though someone had drawn it. It takes a minute or two for you to get used to how everything looks.                                                As per usual, you see two main courses of action:

S: You are supposed to head south to get to your target.
N: North is the opposite of south and so that's the direction you would go to waste time.`);
						variables["looked already"] = (variables["looked already"] ? variables["looked already"] + 1 : 1)
					} else if (args[0] == 'drawing') {
						print("[image]https://pyxis.nymag.com/v1/imgs/7aa/21a/c1de2c521f1519c6933fcf0d08e0a26fef-27-spongebob-squarepants.rsquare.w700.JPG");
						print(`You look at the drawing.`);
					}
				}
			},
			"kill": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'Aliyah') {
					if (variables["chose kill Aliyah"]) {
						print(`You...can't kill a ghost...

If you *really* want to kill the human, you can "revive Aliyah" and then "kill Aliyah"`);
					}
					else {
						if (variables["north Aliyah"]) {
							print(`You decide to kill Aliyah (again). As she bleeds out, you step over her body toward the portal. You leave her dead there. When you come back, you'll be where you started when you were beamed in. 

You come out of the portal into a room. Where are you? Try looking around

(You can come back to where you were beamed in by typing "Assassination" or you can go back to headquarters with "Headquarters." `);
							variables["chose kill Aliyah"] = -1
							variables["kill point Aliyah"] = (variables["kill point Aliyah"] ? variables["kill point Aliyah"] + 1 : 1)
							goTo("AliyahRoom2");
						}
						else {
							print(`Aliyah's not even here right now! Where did you get that idea from??`);
						}
					}
				} else if (args[0] == '(him|Spongebob)') {
					if (variables["who to kill first?"]) {
						if (variables["kill point Sandy"]) {
							print(`You make your way to Spongebob's pineapple. You see through his window that he is sitting on a chair in his living room. You paw at his door.

Answering the door, he smiles asks you your name. 

"My name is Lucky." You answer. He welcomes you inside, offering to cook you a Krabby Patty. You have no idea what that is, but you nod anyway. The two of you start to chat as he starts to cook on the stove, and you start thinking of ways to kill him. You are about to pounce on him when you suddenly remember that sponges regenerate when they are cut apart. If you cut him in half, there will just be two living sponges!

New plan. If you beam him to Headquarters, he will suffocate when out of water. It should take no more than a few minutes to die. Now you just have to get him to come with you to a specific meeting point so you can be beamed out...

"Do you want to be best friends??" Spongebob says excitedly to you. You are taken aback. You'd only been here for maybe five minutes. Do you want to be friends?("yes" or "no")`);
							variables["got asked question"] = -1
							variables["question interrupted by cops"] = -1
						}
						else {
							print(`You wait for a bit, wandering around the town. At almost six, you head to a nearby restaurant called the "Krusty Krab," which you know to be Spongebob's place of work. As he walks out of the restaurant and down the road toward his house, you just so happen to be strolling along right next to him. 

"Hello!" He says to you. You are taken aback by his friendliness. "Hello." You respond, deciding to try to win his trust. You suddenly recall that sponges regenerate when they are cut apart, so if you try to cut him apart, both halves will live! Alright, new plan. You will get him to come to the meeting point, and you will both be transported back to Headquarters, where he will suffocate due to lack of water. 

"Do you want to be best friends??" Spongebob says excitedly to you, interrupting your rather murderous train of thought. You are taken aback. You'd only been walking together for maybe five minutes. You think about it for a bit, genuinely. What if Headquarters was wrong? He seems like such a friendly person - or rather, sponge. What if you just stayed here permanently? I mean, in the future if you found him to be dangerous, you could probably kill him at that point, right?

Do you want to be friends?("yes" or "no")`);
							variables["got asked question"] = -1
							variables["question uninterrupted"] = undefined
							variables["kill point Spongebob"] = (variables["kill point Spongebob"] ? variables["kill point Spongebob"] + 1 : 1)
						}
					}
					else {
						print(`Maybe you should look around and move places before you jump to killing things...`);
					}
				} else if (args[0] == '(Sandy|her)') {
					if (variables["who to kill first?"]) {
						if (variables["kill point Sandy"]) {
							print(`You've already killed Sandy! Go get Spongebob already!`);
						}
						else {
							print(`The thought of that tasty squirrel is just too much. 

"Where could I find this "Sandy Cheeks"?" You ask Patrick. "I think we'd be good friends." You add. 

"She lives in a glass dome with a tree and grass in it, it's not too far from here." Patrick points. 

You thank Patrick and follow his instructions to get to her house. You knock on the door of the glass dome. Sandy lets you into the air lock, and the water then drains out. You take off your suit, freeing your paws. 

"What brings you to my dome?" Sandy inquires. You waste no time leaping at her, unsheathing your claws in midair. She screams, and you hope that it's not loud enough for townspeople to hear. After killing her, you recall that the dome is fully transparent. 

As you leave to complete your mission, you pass by someone who seems to be going to see Sandy Cheeks. You speed up. You'd better hurry before they discover that she's dead!

Now it's Spongebob's turn! 

(type "kill Spongebob")`);
							variables["squirrel"] = (variables["squirrel"] ? variables["squirrel"] + 1 : 1)
						}
					}
					else {
						print(`Kill Sandy? Who's Sandy?`);
					}
				}
			},
			"follow": (args) => {
				if (variables["north Aliyah"]) {
					print(`You follow Aliyah into the shimmery portal. When you get to the other side, she laughs to herself. 

"Silly me! I've forgotten something at Grebel!" She goes into a different portal. You are left alone.

Where are you?`);
					variables["accepted already"] = -1
					goTo("AliyahRoom2");
				}
				else {
					print(`Follow who? Maybe you should look around some more before randomly trying to follow people around.`);
				}
			},
			"drawing": (args) => {
				print("[image]https://pyxis.nymag.com/v1/imgs/7aa/21a/c1de2c521f1519c6933fcf0d08e0a26fef-27-spongebob-squarepants.rsquare.w700.JPG");
				print(`You look at the drawing.`);
			},
			"Yes": (args) => {
				if (variables["question uninterrupted"]) {
					print(`Spongebob looks at you eagerly, waiting for your answer. You smile. 

"Alright." You agree. You decide not to kill him.

You, Spongebob, and Patrick become very close friends, and you live together happily forever. And by "forever" I mean about a month. A month in, Headquarters sends another assassin in who kills you, Spongebob, and Patrick. As you're bleeding out after being fatally injured, you admit to Spongebob that you had initially been sent there to kill him, and that this assassin was just here to finish the job.`);
					endGame(8)
				}
				else {
					if (variables["question interrupted by cops"]) {
						print(`You say yes, but as you're answering, a few cops burst into the pineapple house (that sea star must have tipped them off as to your location!) and arrest you for the murder of Sandy Cheeks. Spongebob looks at you in horror as you are marched away. 

You spend the night in jail, and in the morning you escape using your telekinesis to pick the lock. You go to the meeting place and get beamed out of wherever you are. You materialize back in Headquarters, and you look at the TV next to the chamber to see some fish cops running up to the spot that you had just dematerialized from. It's hard for you to wrap your head around the concept that you had been inside a TV show.

You have failed your mission, and Headquarters doesn't take to failures well. You are fired from your job and your licence to kill is revoked. 

You are sad, and because of your failure, you no longer want to kill. It just doesn't feel as thrilling anymore.

You are now back at your house, in the kitchen.`);
						variables["Assassination mission"] = 0
						variables["Assassination mission - FAILED"] = 1
						variables["licence to kill"] = 0
						variables["licence to kill revoked"] = -1
						goTo("kitchen");
					}
					else {
						print(`What? What are you saying "yes" to?`);
					}
				}
			},
			"No": (args) => {
				if (variables["question uninterrupted"]) {
					print(`"Yes, I think we'll be great friends." You say. 

"Want to walk with me to that side of town?" You ask him, pointing in the general direction of the meeting point.

"Sure!" He replies, beaming. He follows you straight there, and you stop at the spot (which looks like any other part of the ocean floor) and press a button on your space suit. 

"Why have we stopped randomly?" He inquires, looking at the button you just pressed. 

"I just wanted to see what this button did!" You respond. The beam of light swallows the two of you, and after a few seconds, you appear back in Headquarters. Spongebob immediately starts to suffocate. 

"But...I thought you wanted to be friends..." He manages to say with his last bit of air. 

You feel a little bad, he didn't seem like he was a dangerous individual at all...

You glance at the TV next to the chamber to see a cartoon show. In it, a few fish are standing upright around an empty space. You recognize them as the townspeople of the town where Spongebob had lived. "Where did they go?" The fish are saying to one another.

You have completed your mission! You are now in Headquarters. Look around!`);
					variables["Assassination mission"] = 0
					variables["Assassination mission - completed"] = 1
					goTo("Headquarters");
				}
				else {
					if (variables["question interrupted by cops"]) {
						print(`You ignore his question, and you start looking around for ways to get him out of the house and toward the meeting point by force. You spot a back door out of the pineapple. 

"Want to go for a walk with me? I wanted to explore that side of town" You ask him, pointing toward the back door. He nods, and the two of you go out the door. As you are walking off, nearing the meeting point, you see some officers approaching Spongebob's house, and they see you as you walk away! You quickly drag Spongebob along more quickly, and upon arriving at the meeting point, you hurriedly press a button on your suit that causes you to start dematerializing. 

"Hey, you! Stop! You are a key suspect in the murder of Sandy Cheeks!" An officer says as she approaches. Spongebob looks to you in sheer horror. 

The blue light overtakes both of you, and you appear back at Headquarters. Spongebob starts to suffocate upon arriving, and you watch as he dies. Your scuba suit vanishes as quickly as it had appeared. Mission accomplished!

You are now in Headquarters!`);
						variables["Assassination mission"] = 0
						variables["Assassination mission - completed"] = 1
						goTo("Headquarters");
					}
					else {
						print(`What? What are you saying "no" to?`);
					}
				}
			},
			"revive": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'Aliyah') {
					print(`You decide to revive a human that you'd killed. What was the point of that?

Maybe you should see if anything is happening to the north or south? (remember that south is where your mission is)`);
				}
			},
		},
		connections: {
			"n": () => {
				if (variables["who to kill first?"]) {
					print(`Um...why would you be going north?? You have an assassination to do! Get on task!`);
				}
				else {
					if (variables["accepted already"]) {
						print(`You've already been north, you've seen all the interesting things there are to see! Just go south and complete the mission already! You really do love to procrastinate!`);
					}
					else {
						if (variables["rejected"]) {
							print(`Nothing's really happening to the north...you wish that you'd taken up Aliyah on her offer...`);
						}
						else {
							if (variables["chose kill Aliyah"]) {
								print(`You head north. You do like to waste time. Why did you choose north? You hadn't even seen anything interesting in that direction...

As you stalk off, looking around for something to do, you see a figure disappear around a corner. You narrow your eyes. As you turn the corner, intent on figuring out what the human is up to, you realize that you know this one already! This is the ghost of someone you'd killed before!

As you get closer, the ghost turns and smiles at you. 

"My name is Aliyah and my pronouns are she/her." She informs you. You register this fact, but you are also in shock at the fact that she's here. Really, this is where her ghost chooses to wander? In some weird underwater town?

"Want to come with me?" Aliyah offers, gesturing at a blue shimmery portal that had started to open in front of her. 

(respond "follow" to go with her, respond "south" to head on your way to the mission. Note: You will be able to come back here and finish the mission if you want.)`);
								variables["north Aliyah"] = -1
							}
							else {
								if (variables["Name Aliyah"]) {
									if (variables["north Aliyah"]) {
										print(`Aliyah is waiting for your answer as she stands in front of the portal...`);
									}
									else {
										print(`You head north. You do like to waste time. Why did you choose north? You hadn't even seen anything interesting in that direction...

As you stalk off, looking around for something to do, you see a figure disappear around a corner. You narrow your eyes. As you turn the corner, intent on figuring out what the human is up to, you realize that you know this one already! This is Aliyah! You've killed this one before (and rewound time to undo it, of course)

As you get closer, Aliyah turns and smiles at you. Re-introducing itself, the human informs you that its pronouns are she/her. You register this fact, but you are also in shock at the fact that she's here. 

"Want to come with me?" Aliyah offers, gesturing at a blue shimmery portal that had started to open in front of her. 

(respond "follow" to go with her, respond "south" to head on your way to the mission. Note: You will be able to come back here and finish the mission if you want.)`);
										variables["north Aliyah"] = -1
									}
								}
								else {
									print(`You head north. You do like to waste time. Why did you choose north? You hadn't even seen anything interesting in that direction...

As you stalk off, looking around for something to do, you see a figure disappear around a corner. You narrow your eyes. As you turn the corner, intent on figuring out what the human is up to, you realize that you know this one already! This is one of the humans that you killed (and later unkilled, of course), from the place where Nathan is staying! As you get closer, the human turns around and smiles at you. 

"Hello, Lucky!" The human says to you. "Fancy seeing you here! I should introduce myself, my name is Aliyah. I realize that I know your name and you never knew mine...also my pronouns are she/her." You stare at the human. How could she be here?

"Want to come with me?" Aliyah offers, gesturing at a blue shimmery portal that had started to open in front of her. 

(respond "follow" to go with her, respond "south" to head on your way to the mission. Note: If you go through the portal, you will be able to come back here and finish the mission if you want.)`);
									variables["north Aliyah"] = -1
									variables["Name Aliyah"] = -1
								}
							}
						}
					}
				}
			},
			"s": () => {
				if (variables["north Aliyah"]) {
					print(`You shake your head and turn away from Aliyah. You look over your shoulder to find that she seems disappointed, but shrugs and enters the portal by herself. As it closes behind her, you note that you've lost the chance to find out where the portal leads...

Shaking it off, you head south. 

You head south, toward a town built on the floor of the ocean. You had been informed that the individual you are searching for is extremely dangerous and that he must be killed as quickly and as quietly as possible. You take out the drawing that had been given to you, and you notice a name written at the bottom: ΓÇ¥Spongebob Squarepants.ΓÇ¥ Odd name. 

As you walk through the town's streets, you wonder who lives here. You see fish wearing clothes and walking around town upright. This really is a strange place. You have been told to look out for a large pineapple, and that your target should be inside it when he is at home from work. 

You see a pineapple nearby, but upon looking around, you conclude that Spongebob is not home yet. You see a large sculpture next door of a human head, with a door for the mouth. A bit further over, there is also a large rock on the ground where there might have been a house. 

You walk over to the rock, deciding to hop up and curl up for a second, but suddenly the rock lifts fully upright as though on a hinge, and you see a pink starfish underneath. The starfish hops off the rock and introduces itself excitedly as Patrick Star. You are taken aback, as you didn't know that starfish spoke. You ask if Patrick knows where Spongebob Squarepants is, or when he'll be back. 

"It'll be a while..." Patrick says sadly. "He gets off work at around 6 PM." You look at the watch that is included in your suit, and find that it's about 5:30 PM. 

"He'll be back in half an hour." You reassure the star. 

"Hey, do you know Sandy Cheeks?" Patrick asks you. "She's a squirrel, and she also wears a suit like that."

A squirrel? Underwater? Your mouth starts to salivate as you think about killing Sandy. Should you wait the half hour, wandering around town for a bit and making sure to not be too suspicious, or should you go kill Sandy and then come back to kill him afterward? it doesn't really matter when in the evening you kill him, so it's fine to waste a bit more than half an hour as long as you get the job done. 

(respond "kill Spongebob" or "kill Sandy")`);
					variables["who to kill first?"] = -1
					variables["rejection"] = -1
				}
				else {
					print(`You head south, toward a town built on the floor of the ocean. You had been informed that the individual you are searching for is extremely dangerous and that he must be killed as quickly and as quietly as possible. You take out the drawing that had been given to you, remembering the name that they'd told you: ΓÇ¥Spongebob Squarepants.ΓÇ¥ Odd name, but perhaps it's fitting for a sponge. You wonder if every sponge's name has the word "sponge" in it...

As you walk through the town's streets, you wonder who lives here. You see fish wearing clothes and walking around town upright. This really is a strange place. You have been told to look out for a large pineapple, and that your target should be inside it when he is at home from work. 

You see a pineapple nearby, but upon looking around, you conclude that Spongebob is not home yet. You see a large sculpture next door of a human head, with a door for the mouth. A bit further over, there is also a large rock on the ground where there might have been a house. 

You walk over to the rock, deciding to hop up and curl up for a second, but suddenly the rock lifts fully upright as though on a hinge, and you see a pink starfish underneath. The starfish hops off the rock and introduces itself excitedly as Patrick Star. You are taken aback, as you didn't know that starfish spoke. You ask if Patrick knows where Spongebob Squarepants is, or when he'll be back. 

"It'll be a while..." Patrick says sadly. "He gets off work at around 6 PM." You look at the watch that is included in your suit, and find that it's about 5:30 PM. 

"He'll be back in half an hour." You reassure the star. 

"Hey, do you know Sandy Cheeks?" Patrick asks you. "She's a squirrel, and she also wears a suit like that."

A squirrel? Underwater? Your mouth starts to salivate as you think about killing Sandy. Should you wait the half hour, wandering around town for a bit and making sure to not be too suspicious, or should you go kill Sandy and then come back to kill him afterward? it doesn't really matter when in the evening you kill him, so it's fine to waste a bit more than half an hour as long as you get the job done. 

(respond "kill Spongebob" or "kill Sandy")`);
					variables["who to kill first?"] = -1
				}
			},
		},
	},
	SaveCats: {
		name: "SaveCats",
		commands: {
			"hint": (args) => {
				if (variables["south kill"]) {
					print(`Agent Lucky, here are all your possible commands at the moment (NOTE: this list updates as you progress):

look
move (up|down)
kill
gather intel
inv
clear
help
hint
`);
				}
				else {
					print(`Agent Lucky, here are all your possible commands at the moment (NOTE: this list updates as you progress):

look
move (north|south|up|down)
inv
clear
help
hint
`);
				}
			},
			"l": (args) => {
				t.clear();
				print(`You are in an unknown location, but you know which way to go

S: To get to the place you need to be, you should head south.                    N: You see a leaf blowing in the wind! That looks like it would be fun to chase!`);
			},
			"kill": (args) => {
				if (variables["south kill"]) {
					print(`You decide to kill them all. This is going to be fun. Good thing you have a licence to kill, there's no rewinding necessary! You creep into the warehouse, avoiding the people standing guard. First, you want to see what's going on in more detail. 

A few different cat species are here, one row has leopards, the row next to it has caracals, and the next one has lynxes. You shake your head to yourself. The cats aren't supposed to exist in the same habitat. 

You sneak up on a guard, preparing to take out the entire group. Then, you notice that a few rows over, a housecat seems to be trying to get your attention silently. You carefully retreat and go around the rows to reach the row where the cat is without drawing the humans' attention. As you approach, you realize that the housecat is one of your littermates! You hadn't seen her since you were kittens! 

You use your telekinesis to free her quietly (she can't free herself because although she does have magical powers, they're more in the vein of invulnerability). Looking at one another in utter shock, you both have many questions. 

"We can talk later" She whispers, narrowing her eyes at the guards threateningly. You have many questions for her, but you agree and turn your gaze to the humans as well. The two of you nod at one another and stalk off in opposite directions to take the humans from both sides. 

The two of you work quickly to kill all of the guards and then you go together to the meet location and you lead the other agents to the warehouse so they can transport the cats back to their habitats.

Now that you're done with the mission, you turn to your sister and ask her if she wants to come with you. You have so much to catch up on! She declines reluctantly. "I'm an agent too, so I have to be getting back to my Headquarters in Italy." She explains. 

You're disappointed, but you understand. You don't really want to follow her to Italy, and she doesn't want to follow you back to Canada. You say your goodbyes and step back onto the plane. 

You are now back at Headquarters, you can look around to see if there's a mission.`);
					variables["littermate"] = -1
					variables["kill point SaveCats"] = 1
					variables["Save the cats mission"] = 0
					variables["Save the cats mission - completed"] = 1
					goTo("Headquarters");
				}
				else {
					if (variables["north leaf"]) {
						print(`You look around for something to kill. The leaf! You rewind time slightly so it's within your reach, and you snatch it right out of the air triumphantly. This is good practice for your mission. Is it time to go south now?`);
					}
					else {
						print(`What is there to kill? Maybe try going north or south (look around to see where things are)`);
					}
				}
			},
			"(Gather|sneak)": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == '(intel|around)') {
					print(`You decide to sneak around and gather intel. A few different cat species are here, one row has leopards, the row next to it has caracals, and the next one has lynxes. You shake your head to yourself. The cats aren't supposed to exist in the same habitat. 

As you creep around, you notice that a few rows over, a housecat seems to be trying to get your attention silently. You carefully retreat and go around the rows to reach the row where the cat is without drawing the humans' attention. As you approach, you realize that the housecat is one of your littermates! You hadn't seen her since you were kittens! 

You use your telekinesis to free her quietly (she can't free herself because although she does have magical powers, they're more in the vein of invulnerability). Looking at one another in utter shock, you both have many questions. 

"We'll catch up later, first we should take them all out." She says, narrowing her eyes at the guards. Normally you'd be up for that, but you'd opted to just gather intel rather than kill everyone, so you're committed to getting everyone arrested without hurting them. 

"No!" You respond, stopping her from pouncing. She looks at you in confusion. Even as a kitten, you'd never turned down a fight. She must think you're going soft. 

"Let's just gather intel and report back; I want to see if I can take the whole organization down with enough intel." You whisper, darting your eyes toward the guards. She sighs and agrees.

You sneak around to a back room and get a glimpse of a long-haired human talking to a short-haired human. You stare at them for a few seconds, hoping that it's a clear enough short to run facial recognition. 

Unsure what to do, the two of your wander around the warehouse for a bit and then leave, meeting the people from Headquarters at the meet point. They thank you for what you did and they say that they have enough evidence now to take legal action against the organization. 

Turning to your sibling, you ask her if she wants to come back to Canada with you. She declines, and asks if you want to come to where she is stationed in Italy. You turn her down. The two of you say your goodbyes and you get on the plane by yourself, headed for Canada. 


You are now in Headquarters. Look around to see if you have a mission.`);
					variables["littermate"] = -1
					variables["gathered intel"] = -1
					variables["Save the cats mission"] = 0
					variables["Save the cats mission - completed"] = 1
					goTo("Headquarters");
				}
			},
		},
		connections: {
			"s": () => {
				print(`You trot along the street toward your destination, going over the plan in your head. You arrive at a warehouse-like building, and you peek inside. 

Cages fill the building, only leaving narrow paths between stacks of cages to allow a person to squeeze by, presumably to allow a person to feed the cats. You recognize that you need to proceed with caution. You are not a human, so they won't think you're onto their plans, but you are a cat, so you're in danger of being captured! 

What do you do now?
You can sneak around and gather intel (you have a contact lens that records audio & video), or you can just try to kill all the humans you see in the warehouse.`);
				variables["south kill"] = -1
			},
			"n": () => {
				if (variables["south kill"]) {
					print(`You chase after the leaf! It tumbles in the wind as you sprint after it. Unfortunately, the leaf flies up out of your reach, swept away by the wind.`);
					variables["north leaf"] = -1
				}
				else {
					print(`Ummm hello, you've got a mission to do! The time for chasing leaves is over!!`);
				}
			},
		},
	},
	heaven: {
		name: "heaven",
		commands: {
			"hint": (args) => {
				print(`Going for the hint was probably a good choice. Here are your options:

kill leprechaun
Where am I?
move (down|up)
look
inv
clear
help
hint
`);
			},
			"kill": (args) => {
				if (!args || !args[0]) {
					print(`Try killing a leprechaun rather than just shouting "kill" into the void.`);
				} else if (args[0] == 'Leprechaun') {
					print(`You have killed a leprechaun!`);
					if (variables["licence to kill revoked"]) {
						print(`Killing things doesn't feel so fun anymore...`);
					}
					else {
						if (variables["kill point N"] && variables["kill point A"] && variables["kill point Maia"] && variables["kill point M"] && variables["kill point Em"] && variables["kill point Aliyah"] && variables["kill point Ev"] && variables["kill point R"] && variables["kill point B"]) {
							print(`You are ready. You are transported to the Assassin's Headquarters`);
							variables["licence to kill"] = (variables["licence to kill"] ? variables["licence to kill"] + 1 : 1)
							variables["kill point L"] = (variables["kill point L"] ? variables["kill point L"] + 1 : 1)
							goTo("Headquarters");
						}
						else {
							print(`You hear a voice coming from a higher being. It's the God of Leprechauns! The god bellows "How dare you so much as touch a hair on one of my lovely leprechauns' heads! You've killed them!? You don't deserve to be here in lovely Leprechaun Heaven! I hereby banish you to hell!"`);
							variables["thou art banished!"] = (variables["thou art banished!"] ? variables["thou art banished!"] + 1 : 1)
							goTo("hell");
						}
					}
				}
			},
			"l": (args) => {
				if (variables["looked around Leprechaun heaven already"]) {
					t.clear();
					print(`The leprechauns hand you a matching outfit and ask you to join them in their leprechauning. You are reluctant, but they're insistent. 

"We all resisted at first, but now we embrace it!"

They say to you. You back away, but they creep ever closer. You're not so sure that this is heaven anymore...`);
					print("[image]https://images4-f.ravelrycache.com/uploads/rdavis8483/543913653/IMG_8100_small2.JPG");
					endGame(777)
				}
				else {
					print(`Leprechaun Heaven seems amazing! Gold is abundant, and that includes goldfish - they come here when they die. Leprechauns are unicycling all over the place, doing fancy tricks. Look around again? 

("look")`);
					variables["looked around Leprechaun heaven already"] = -1
				}
			},
			"Where": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'am') {
					if (!args || !args[1]) {
					} else if (args[1] == 'I') {
						print(`You are in Leprechaun Heaven! Look around!`);
					}
				}
			},
		},
		connections: {
			"u": () => {
				if (variables["attempt #7-fail"]) {
					print(`Alright, alright, you passed the test *rolls eyes*`);
					variables["attempt #7-fail"] = 0
					variables["attempt #6-fail"] = 0
					variables["attempt #5-fail"] = 0
					variables["attempt #4- fail"] = 0
					variables["attempt #3- fail"] = 0
					variables["attempt #2- fail"] = 0
					variables["attempt #1- fail"] = 0
					goTo("HomeHardware");
				}
				else {
					if (variables["attempt #6-fail"]) {
						print(`I'm done writing messages.`);
						variables["attempt #7-fail"] = -1
					}
					else {
						if (variables["attempt #5-fail"]) {
							print(`I'm done writing messages.`);
							variables["attempt #6-fail"] = -1
						}
						else {
							if (variables["attempt #4- fail"]) {
								print(`Yeah, nothing's happening.`);
								variables["attempt #5-fail"] = -1
							}
							else {
								if (variables["attempt #3- fail"]) {
									print(`And we're on attempt 4 now...you can probably stop now...nothing's going to happen`);
									variables["attempt #4- fail"] = -1
								}
								else {
									if (variables["attempt #2- fail"]) {
										print(`Uh...and you're still trying...alright...`);
										variables["attempt #3- fail"] = -1
									}
									else {
										if (variables["attempt #1- fail"]) {
											print(`I see that you're trying again. Well, I believe in you, I suppose.`);
											variables["attempt #2- fail"] = -1
										}
										else {
											print(`Uh...you're already here, you can't go to Leprechaun Heaven again (although I know, it's pretty fantastic. Keep trying, I believe in you!)`);
											variables["attempt #1- fail"] = -1
										}
									}
								}
							}
						}
					}
				}
			},
		},
	},
	hell: {
		name: "hell",
		commands: {
			"if": (args) => {
				if (!args || !args[0]) {
					// UNDEFINED_KEY 'cond';
				} else if (args[0] == '(h|hint)') {
					print(`Since you've been specifically *banished* to hell for your crimes, you have less possible things to do, but it's possible to unlock actions.

look
move (up|down)
inv
clear
help
hint
`);
				} else if (args[0] == 'm') {
					if (!args || !args[1]) {
					} else if (args[1] == 'd') {
						print(`You descend into a different part of hell (different options now).`);
						variables["unremorseful serial killer banished"] = 0
						goTo("hell");
					}
				} else if (args[0] == 'l') {
					if (variables["tempted fate lol"]) {
						t.clear();
						print(`Beavers surround you as you catch on fire and as Easy Street plays.`);
						endGame(666)
					}
					else {
						print(`You look around. Fires burn everywhere. You see beavers off in the distance. Look around again?`);
						variables["tempted fate lol"] = -1
					}
				}
			},
			"else": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'h') {
					print(`Here are your basic commands (maybe if you type "hint" you'll get one or two extra)

move (up|down)
look
inv
clear
help
hint
`);
				} else if (args[0] == 'hint') {
					if (variables["talked to the beaver"]) {
						print(`Here's the list of commands:

follow
move (up|down)
kill beavers
look
inv
clear
help
hint
`);
					}
					else {
						print(`Here you go:

move (up|down)
talk to beavers
kill beavers
look
inv
clear
help
hint
`);
					}
				} else if (args[0] == 'kill') {
					if (!args || !args[1]) {
					} else if (args[1] == '(beaver|beavers|them|everyone|.*)') {
						t.clear();
						print(`You kill the beavers. 

Now what?

Perhaps now you are the master of hell or something. You don't see anyone around. You feel a bit lonely. You suppose that this must be your personal hell, since if this were a group situation, it'd be pretty well-populated. Or maybe everyone became beavers. You laugh at the concept. 

You look at your paws and find, to your horror, that you are morphing into a beaver! When someone pops into hell, you attack them as easy street plays.`);
						variables["kill point Beaver"] = (variables["kill point Beaver"] ? variables["kill point Beaver"] + 1 : 1)
						endGame(666)
					}
				} else if (args[0] == 'l') {
					if ((variables["tempted fate lol"] >= 2 || -variables["tempted fate lol"] >= 2)) {
						t.clear();
						print(`Beavers surround you as you catch on fire and as Easy Street plays.`);
						endGame(666)
					}
					else {
						print(`You look around. Fires burn everywhere. You see beavers off in the distance. Look around again?`);
						variables["tempted fate lol"] = -1
						variables["tempted fate lol"] = (variables["tempted fate lol"] ? variables["tempted fate lol"] + 1 : 1)
					}
				} else if (args[0] == 'm') {
					if (!args || !args[1]) {
					} else if (args[1] == 'u') {
						if (variables["thou art banished!"]) {
							print(`No! You have been banished for a reason! Killing a leprechaun is simply unforgivable! You should be ashamed of yourself...`);
						}
						else {
							print(`You ascend to Leprechaun Heaven! Leprechauns are frolicking.`);
							goTo("heaven");
						}
					} else if (args[1] == 'd') {
						if (variables["highway to hell 5"]) {
							print(`Whoops, you dig through and find that there's a lava pit there. You are now burning to...death? You're already in hell...
You climb out of the pit and find that although you are in excruciating pain, you haven't died. Hell is weird.`);
							endGame(321)
						}
						else {
							if (variables["highway to hell 4"]) {
								print(`Your digging seems to pay off! You can feel that the ground in the hole is close to breaking!`);
								variables["highway to hell 5"] = -1
							}
							else {
								if (variables["highway to hell 3"]) {
									print(`You continue to dig`);
									variables["highway to hell 4"] = -1
								}
								else {
									if (variables["highway to hell 2"]) {
										print(`You dig as quickly as you can. It's unclear if anything will happen.`);
										variables["highway to hell 3"] = -1
									}
									else {
										if (variables["highway to hell 1"]) {
											print(`You begin to dig in the ground`);
											variables["highway to hell 2"] = -1
										}
										else {
											print(`Uh, you're already in hell. I'm not entirely sure where you think you're going...`);
											variables["highway to hell 1"] = -1
										}
									}
								}
							}
						}
					}
				} else if (args[0] == '(meow|beaver|beavers)') {
					if (variables["talked to the beaver"]) {
						if (!args || !args[1]) {
							print(`Want to follow the beavers? ("follow" if yes)`);
						} else if (args[1] == '(beaver|beavers)') {
							if (variables["talked to the beaver"]) {
								print(`Want to follow the beavers? ("follow" if yes)`);
							}
							else {
								if (variables["already followed the beaver"]) {
									print(`You've already talked to and followed the beaver! Either pick a portal (1, 2, or 3) or do something else!`);
								}
								else {
									print(`You walk up to the beavers and decide to talk to them. Of course, they don't understand what you say, since you're a cat and beavers don't understand cats. That would just be ridiculous!

Although they don't understand you, they seem to want to lead you somewhere. Follow?`);
									variables["talked to the beaver"] = -1
								}
							}
						}
					}
					else {
						if (variables["already followed the beaver"]) {
							if (!args || !args[1]) {
								print(`You've already talked to and followed the beaver! Either pick a portal (1, 2, or 3) or do something else!`);
							} else if (args[1] == '(beaver|beavers)') {
								if (variables["talked to the beaver"]) {
									print(`Want to follow the beavers? ("follow" if yes)`);
								}
								else {
									if (variables["already followed the beaver"]) {
										print(`You've already talked to and followed the beaver! Either pick a portal (1, 2, or 3) or do something else!`);
									}
									else {
										print(`You walk up to the beavers and decide to talk to them. Of course, they don't understand what you say, since you're a cat and beavers don't understand cats. That would just be ridiculous!

Although they don't understand you, they seem to want to lead you somewhere. Follow?`);
										variables["talked to the beaver"] = -1
									}
								}
							}
						}
						else {
							if (!args || !args[1]) {
								print(`You walk up to the beavers and decide to talk to them. Of course, they don't understand what you say, since you're a cat and beavers don't understand cats. That would just be ridiculous!

Although they don't understand you, they seem to want to lead you somewhere. Follow?`);
								variables["talked to the beaver"] = -1
							} else if (args[1] == '(beaver|beavers)') {
								if (variables["talked to the beaver"]) {
									print(`Want to follow the beavers? ("follow" if yes)`);
								}
								else {
									if (variables["already followed the beaver"]) {
										print(`You've already talked to and followed the beaver! Either pick a portal (1, 2, or 3) or do something else!`);
									}
									else {
										print(`You walk up to the beavers and decide to talk to them. Of course, they don't understand what you say, since you're a cat and beavers don't understand cats. That would just be ridiculous!

Although they don't understand you, they seem to want to lead you somewhere. Follow?`);
										variables["talked to the beaver"] = -1
									}
								}
							}
						}
					}
				} else if (args[0] == '(follow|yes)') {
					if (variables["talked to the beaver"]) {
						print(`You follow the beavers to a set of three shimmering portals. Which portal should you enter? (1, 2, or 3?)`);
						variables["talked to the beaver"] = 0
						variables["already followed the beaver"] = -1
						variables["the great beaver question"] = -1
					}
					else {
						if (variables["already followed the beaver"]) {
							print(`You...you've already done that. You know where the portals are, just pick: 1, 2, or 3?`);
						}
						else {
							print(`Huh?`);
						}
					}
				} else if (args[0] == '(1|one|first|left)') {
					if (variables["the great beaver question"]) {
						print(`You go into portal 1 (the one on the left) and appear back in your house, in the kitchen!`);
						goTo("kitchen");
					}
					else {
						print(`What?`);
					}
				} else if (args[0] == '(2|two|second|middle)') {
					if (variables["the great beaver question"]) {
						if (variables["Grebel"]) {
							print(`You go into portal 2 (the one in the middle) and appear in the room where Nathan currently lives!`);
							variables["recently arrived"] = -1
							goTo("nathan2");
						}
						else {
							print(`You go into portal 2 (the one in the middle) and appear in a room you've never been in before! Look around!`);
							goTo("nathan2");
							variables["went into portal 2"] = -1
						}
					}
					else {
						print(`What?`);
					}
				} else if (args[0] == '(3|three|third|right)') {
					if (variables["the great beaver question"]) {
						print(`You go into portal 3 (the one on the right) and appear in a room (look around)!`);
						goTo("AliyahRoom2");
					}
					else {
						print(`What?`);
					}
				}
			},
		},
	},
	AliyahRoom2: {
		name: "AliyahRoom2",
		commands: {
			"hint": (args) => {
				if (variables["licence to kill"]) {
					if (variables["Assassination mission"]) {
						print(`Alright, here are your available commands:

look
leave
portal
Assassination
Headquarters
bed
carpet
inv
clear
help
hint`);
					}
					else {
						print(`Alright, here are your available commands:

look
leave
portal
Headquarters
bed
carpet
inv
clear
help
hint`);
					}
				}
				else {
					print(`Alright, here are your available commands:

look
leave
portal
bed
carpet
inv
clear
help
hint`);
				}
			},
			"l": (args) => {
				if (variables["licence to kill"]) {
					if (variables["Assassination mission"]) {
						t.clear();
						print("[image]Includes/Images/AliyahRoom2.jpeg");
						print(`You look around the room. The bed looks comfortable, the carpet looks soft and fluffy, and the sunlight streams in through the window. The door is open and you see a hallway. ("leave" to go to the hallway, "portal" to go to the building where Nathan lives now, "Assassination" to go back to your mission, or "Headquarters" to return to headquarters).`);
					}
					else {
						t.clear();
						print("[image]Includes/Images/AliyahRoom2.jpeg");
						print(`You look around the room. The bed looks comfortable, the carpet looks soft and fluffy, and the sunlight streams in through the window. The door is open and you see a hallway. ("leave" to go to the hallway, "portal" to go to the building where Nathan lives now, or "Headquarters" to return to headquarters).`);
					}
				}
				else {
					t.clear();
					print("[image]Includes/Images/AliyahRoom2.jpeg");
					print(`You look around the room. The bed looks comfortable, the carpet looks soft and fluffy, and the sunlight streams in through the window. The door is open and you see a hallway. ("leave" to go to the hallway, "portal" to go to the building where Nathan lives now.)`);
				}
			},
			"bed": (args) => {
				print(`Walking across the soft carpet, you curl up on the bed happily and fall asleep.`);
				variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
			},
			"carpet": (args) => {
				print(`You curl up on the fluffy carpet and fall asleep.`);
				variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
			},
			"(portal|Grebel)": (args) => {
				print(`You return to Aliyah's other room and then go to the hallway.`);
				goTo("hallway3");
			},
			"(explore|leave|hallway)": (args) => {
				print(`You go to the hallway. There are four open doors, one leading to a bathroom, and the others leading to bedrooms. There is also a slippery-looking staircase at the end of the hall.`);
				goTo("AliyahHallway");
			},
			"Headquarters": (args) => {
				if (variables["licence to kill revoked"]) {
					print(`You have lost your licence to kill, so you can't go back to Headquarters.`);
				}
				else {
					if (variables["Assassination mission"]) {
						print(`You are transported back to Headquarters. Look around- you can re-accept the mission to go back to the mission.`);
						goTo("Headquarters");
					}
					else {
						if (variables["Assassination mission - completed"]) {
							print(`You are transported back to Headquarters. Look around to see if you have a mission.`);
							goTo("Headquarters");
						}
						else {
							print(`What do you want to do?`);
						}
					}
				}
			},
			"(Assassination|mission)": (args) => {
				if (variables["Assassination mission"]) {
					print(`You return to the place that Headquarters had beamed you to. Perhaps now it's time you go south?`);
					goTo("Assassin");
				}
				else {
					print(`Assassination?`);
				}
			},
		},
	},
	AliyahHallway: {
		name: "AliyahHallway",
		commands: {
			"hint": (args) => {
				if (variables["stairs question"]) {
					print(`Alright, here are your commands for now (they change as you progress through the game):

be careful
just go
look
help
Zara
kill Zara
Parents
hallway
water / toilet
stairs
Aliyah
bathroom
bed (after "parents")
laundry (after "door")
door (after "parents")
inv
help
clear
hint`);
				}
				else {
					print(`Alright, here are your commands for now (they change as you progress through the game):

be careful
just go
look
help
Zara
kill Zara
Parents
hallway
water / toilet
stairs
Aliyah
bathroom
bed (after "parents")
laundry (after "door")
door (after "parents")
inv
help
clear
hint`);
				}
			},
			"h": (args) => {
				t.clear();
				print(`Commands: north/south/east/west are now obsolete, you can type a name that you see on the floor plan to go to their room. When you "look" while in a room, the text there should tell you which objects you can interact with, and/or the object will be on the floor plan. 

look
inv
help
clear
hint`);
			},
			"l": (args) => {
				t.clear();
				print("[image]Includes/Images/AliyahHallway.jpeg");
				print(`You are in a hallway with four open doors. One leads to a bathroom, and the others lead to bedrooms. There is also a slippery-looking staircase at the end of the hall.`);
			},
			"(Zara|right|r)": (args) => {
				if (variables["Name Zara"]) {
					print(`Entering Zara's room, you climb over mountains of clothes to see them laying on its side on its bed. 

`);
					goTo("ZaraRoom");
				}
				else {
					print(`Entering a bedroom to your right, you climb over mountains of clothes to see a lazy looking human laying on its side on its bed. 

You try to determine its gender and start to wonder how you had guessed others'. Had you been making too many assumptions?. You shake your head and decide not to care about gender. 

"Oh hi, Lucky!" It says. You wonder how it knows your name. 
"You can call me Zara. I use they/them pronouns." You meow in understanding, but the silly human seems to take your understanding for confusion. They continue to talk about pronouns for a bit, so you skip forward in time a minute or two to get out of the conversation. 

You are now in their room.`);
					variables["Name Zara"] = -1
					goTo("ZaraRoom");
				}
			},
			"kill": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'Zara') {
					if (variables["licence to kill revoked"]) {
						print(`Killing things doesn't feel so fun anymore...`);
					}
					else {
						print(`You go into the messy room to the right in the hallway and jump at the human's head, aiming to kill. You'd aimed for the eyes, but your claws dig into their hair instead and you hang awkwardly from their hair. They lift you gently to sit on their hair and you sit on top of their head in confusion. They take your off their head and pet you with one hand, balancing you with the other. They giggle.

"Try poison next time." They advise you, placing your on their bed. You decide to take a nap there instead of trying to kill them again because sleep is the best. You wake up a bit later and jump down from the bed.`);
						variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
					}
				}
			},
			"(left|Leila|Rob|Parents)": (args) => {
				print(`You go into a room with brownish-coloured walls. No one is here, but there is a large bed that looks comfy and there is a door leading somewhere.`);
				variables["bathroom and walk-in closet"] = -1
				variables["parents' bed"] = -1
			},
			"bed": (args) => {
				if (variables["parents' bed"]) {
					print(`You curl up on the bed. Mm. Cozy wonderful sleep :) `);
					variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
				}
				else {
					print(`Whose bed? Maybe explore around a bit.`);
				}
			},
			"door": (args) => {
				if (variables["bathroom and walk-in closet"]) {
					print(`You head for the mysterious door and it leads to a small room with clothing on hangers and in laundry baskets, and then a small bathroom with a blue floor, a sink, and a toilet. The toilet water is calling to you but so does the pile of laundry in the small room. You return to the hallway, but you can come straight to the toilet or laundry now that you know where they are..`);
					variables["laundry"] = -1
					variables["bathroom and walk-in closet"] = 0
				}
				else {
					print(`Which door?`);
				}
			},
			"hallway": (args) => {
				print(`You're in the hallway.`);
			},
			"(water|toilet)": (args) => {
				print(`You drink that glorious water. Ah...refreshing...`);
				variables["water"] = (variables["water"] ? variables["water"] + 1 : 1)
			},
			"laundry": (args) => {
				if (variables["laundry"]) {
					print(`You curl up in the laundry in the small room between the bedroom and the connected bathroom. Cozy.`);
					variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
				}
				else {
					print(`Where's the laundry? Go find it first so you know where to go.`);
				}
			},
			"(stairs|staircase|down|downstairs)": (args) => {
				print(`You look down the stairs and wonder how careful you should be. "Be careful" or "just go"?`);
				variables["stairs question"] = -1
			},
			"careful": (args) => {
				if (variables["stairs question"]) {
					print(`You step carefully down the stairs, coming to the bottom. You see a living room and a door that leads outside.`);
					variables["stairs question"] = 0
					goTo("AliyahDownstairs");
				}
				else {
					print(`What are you trying to do?`);
				}
			},
			"just": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'go') {
					if (variables["stairs question"]) {
						print(`You go down the stairs at your usual speed. YouΓÇÖve seen worse than some pesky stairs. 

The stairs are no match for the great and powerful Lucky-

AH!You're falling down the stairs!!

A lovely funeral was held.

Summer has come and passed
The innocent cat never lasts
Wake me up when September ends
Like my kitties come to pass
One year has gone so fast
Wake me up when September ends
Here comes the meows again
Falling from the leprechaun heaven
Drenched in my pain again
Becoming who we are
As my memory rests
But never forgets what I lost
Wake me up when September ends
Summer has come and passed
The innocent cat never lasts
Wake me up when September ends
bring out the milk again
Like we did when spring began
Wake me up when September ends
Here comes the meows again
Falling from the stars
Drenched in my pain again
Becoming who we are
As my memory rests
But never forgets what I lost
Wake me up when September ends
Summer has come and passed
The innocent cat never last
Wake me up when September ends
Like my kitties come to pass
Five years has gone so fast
Wake me up when September ends
Wake me up when September ends
Wake me up when September ends`);
						variables["stairs question"] = 0
						endGame(7)
					}
					else {
						print(`What are you trying to do?`);
					}
				}
			},
			"Aliyah": (args) => {
				print(`You trot into Aliyah's room.`);
				goTo("AliyahRoom2");
			},
			"bathroom": (args) => {
				print(`You head over to the bathroom. Nothing much is happening here, but you do see a toilet, so you take the opportunity to drink some *sophisticated* water.`);
				variables["water"] = (variables["water"] ? variables["water"] + 1 : 1)
			},
		},
	},
	ZaraRoom: {
		name: "ZaraRoom",
		commands: {
			"(hint|h)": (args) => {
				print(`Here are all the possible commands right now: 

look
return / leave
kill Zara
sleep / bed                    inv
help
clear
hint`);
			},
			"l": (args) => {
				t.clear();
				print(`You look around the room.

`);
			},
			"(return|leave)": (args) => {
				if (variables["Name Zara"]) {
					print(`You leave Zara's room. You are now in the hallway.`);
					goTo("AliyahHallway");
				}
				else {
					print(`You leave the room. You are now in the hallway.`);
					goTo("AliyahHallway");
				}
			},
			"kill": (args) => {
				if (!args || !args[0]) {
					print(`You jump at Zara's head, aiming to kill. You'd aimed for their eyes, but your claws dig into their hair instead and you hang awkwardly from their hair. They lift you gently to sit on their hair and you sit on top of their head in confusion. They take your off their head and pet you with one hand, balancing you with the other. They giggle.

"Try poison next time." They advise you, placing your on their bed. You decide to take a nap there instead of trying to kill them again because sleep is the best. You wake up a bit later and jump down from the bed.`);
					variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
				} else if (args[0] == 'Zara') {
					print(`You jump at Zara's head, aiming to kill. You'd aimed for their eyes, but your claws dig into their hair instead and you hang awkwardly from their hair. They lift you gently to sit on their hair and you sit on top of their head in confusion. They take your off their head and pet you with one hand, balancing you with the other. They giggle.

"Try poison next time." They advise you, placing your on their bed. You decide to take a nap there instead of trying to kill them again because sleep is the best. You wake up a bit later and jump down from the bed.`);
					variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
				}
			},
			"(sleep|bed)": (args) => {
				print(`You curl up on Zara's bed and fall asleep.`);
				variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
			},
		},
	},
	HomeHardware: {
		name: "HomeHardware",
		commands: {
			"hint": (args) => {
				print(`Alright, here are your available commands:

look
move (up|down)
inv
clear
help
hint
`);
			},
			"l": (args) => {
				t.clear();
				print(`Welcome to Home Hardware!`);
			},
			"(g|buy)": (args) => {
				if (!args || !args[0]) {
					print(`You browse the store and find a catnip plant! You use your telekinetic powers to lift it, and you walk over to the cashier and set it down in front of her. Maia walks up and pays for it, and you leave with the plant.`);
					endGame(789)
				} else if (args[0] == '(plants|plant)') {
					print(`You browse the store and find a catnip plant! You use your telekinetic powers to lift it, and you walk over to the cashier and set it down in front of her. Maia walks up and pays for it, and you leave with the plant.`);
					endGame(789)
				}
			},
		},
		connections: {
			"u": () => {
				if (variables["idk why but they're trying to go even further up than Home Hardware 4"]) {
					print(`Aha, I have fooled you. You've gone so far up that you've gone down! Welcome to hell!`);
					variables["idk why but they're trying to go even further up than Home Hardware 5"] = 0
					variables["idk why but they're trying to go even further up than Home Hardware 4"] = 0
					variables["idk why but they're trying to go even further up than Home Hardware 3"] = 0
					variables["idk why but they're trying to go even further up than Home Hardware 2"] = 0
					variables["idk why but they're trying to go even further up than Home Hardware 1"] = 0
					goTo("hell");
				}
				else {
					if (variables["idk why but they're trying to go even further up than Home Hardware 3"]) {
						print(`You're not going to get anywhere this time..`);
						variables["idk why but they're trying to go even further up than Home Hardware 4"] = -1
					}
					else {
						if (variables["idk why but they're trying to go even further up than Home Hardware 2"]) {
							print(`You're not going to get anywhere this time..`);
							variables["idk why but they're trying to go even further up than Home Hardware 3"] = -1
						}
						else {
							if (variables["idk why but they're trying to go even further up than Home Hardware 1"]) {
								print(`I see you're still trying. Huh. There's something to be said for perseverance, I suppose.`);
								variables["idk why but they're trying to go even further up than Home Hardware 2"] = -1
							}
							else {
								print(`How can you go up from here?`);
								variables["idk why but they're trying to go even further up than Home Hardware 1"] = -1
							}
						}
					}
				}
			},
		},
	},
	DecisionRoom: {
		name: "DecisionRoom",
		commands: {
			"l": (args) => {
				print(`Revive? ("yes" or "no")`);
			},
			"(yes|revive)": (args) => {
				if (variables["Mumu life/death question"]) {
					print(`You decide to revive Mumu. You start to cry in regret, and as your tears fall onto her, she starts to wake up. Your tears have healed her! They also seem to have had an amnesic effect: she doesn't remember you killing her! It's probably a good idea to leave now... 

`);
					variables["Mumu life/death question"] = 0
					variables["revived Mumu"] = -1
					goTo("living_room");
				}
				else {
					if (variables["Baba life/death question"]) {
						print(`You decide to revive Baba.`);
						variables["Baba life/death question"] = 0
						variables["revived Baba"] = -1
						goTo("office");
					}
					else {
						if (variables["Emily life/death question"]) {
							print(`You rewind time, watching the human's struggle happen in reverse. It is now alive, having no memory of what just happened.`);
							variables["Emily life/death question"] = 0
							variables["revived Emily"] = -1
							goTo("Emily");
						}
						else {
							if (variables["Eevee life/death question"]) {
								print(`You decide to rewind time to avoid facing consequences. The fluffy cat remembers nothing.`);
								variables["Eevee life/death question"] = 0
								variables["revived Eevee"] = -1
								goTo("Emily");
							}
							else {
								if (variables["Reu life/death question"]) {
									print(`You decide to revive Reu by rewinding time. You return to the hallway.`);
									variables["Reu life/death question"] = 0
									variables["revived Reu"] = -1
									goTo("hallway3");
								}
								else {
									if (variables["Maia life/death question"]) {
										print(`Because you hate consequences, you decide to revive the human. You return to the hallway.`);
										variables["Maia life/death question"] = 0
										variables["revived Maia"] = -1
										goTo("hallway3");
									}
									else {
										if (variables["Nathan life/death question"]) {
											print(`Because you are a *cough cough chicken cough cough* (sorry, I meant to say a *coward*), you decide to revive the human. 

Afterwards, you go to the hallway.`);
											variables["Nathan life/death question"] = 0
											variables["revived Nathan"] = -1
											goTo("hallway3");
										}
										else {
											if (variables["Andrew life/death question"]) {
												print(`You decide to revive the human, probably because you want to sleep on its couch but you feel a little weird about doing it while the human is dead... Afterwards, you return to the hallway.`);
												variables["Andrew life/death question"] = 0
												variables["revived Andrew"] = -1
												goTo("hallway3");
											}
											else {
												if (variables["Aliyah life/death question"]) {
													print(`You decide to revive the human (good choice). You use your amnesic healing tears to heal the human. When you're finished, the human sees you and reaches out to pet you. You comply, hopping up onto the human's lap, feeling somewhat guilty for killing the human in the first place. You fall asleep.

Later, you return to the hall.`);
													variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
													variables["Aliyah life/death question"] = 0
													variables["revived Aliyah"] = -1
													goTo("hallway3");
												}
												else {
													print(`Revive who?`);
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"(no|kill)": (args) => {
				if (variables["Mumu life/death question"]) {
					print(`You leave her dead :) You can still change your mind and revive her (command is "revive"). You are still in the living room.`);
					variables["chose kill Mumu"] = -1
					variables["Mumu life/death question"] = 0
					variables["revived Mumu"] = 0
					goTo("living_room");
				}
				else {
					if (variables["Baba life/death question"]) {
						print(`Alright, Baba can stay dead. If you want to be boring, type "revive."`);
						variables["Baba life/death question"] = 0
						variables["chose kill Baba"] = -1
						variables["revived Baba"] = 0
						goTo("office");
					}
					else {
						if (variables["Emily life/death question"]) {
							print(`Coolio, Emily stays dead. If your conscience kicks in, type "revive Emily."`);
							variables["Emily life/death question"] = 0
							variables["chose kill Emily"] = -1
							variables["revived Emily"] = 0
							goTo("Emily");
						}
						else {
							if (variables["Eevee life/death question"]) {
								print(`Yay, living life on the edge. Type "revive Eevee" if you change your mind.`);
								variables["Eevee life/death question"] = 0
								variables["chose kill Eevee"] = -1
								variables["revived Eevee"] = 0
							}
							else {
								if (variables["Reu life/death question"]) {
									print(`Yes! You decide to keep Reu dead, live on the edge. "Revive Reu" brings the human back to life, if you change your mind for some reason.

You are now in the hallway`);
									variables["Reu life/death question"] = 0
									variables["chose kill Reu"] = -1
									variables["revived Reu"] = 0
									goTo("hallway3");
								}
								else {
									if (variables["Maia life/death question"]) {
										print(`Yes! You decide to keep the human dead, living life on the edge! "Revive Maia" brings the human back to life, if you want that. 

You are now in the hallway`);
										variables["Maia life/death question"] = 0
										variables["chose kill Maia"] = -1
										variables["revived Maia"] = 0
										goTo("hallway3");
									}
									else {
										if (variables["Nathan life/death question"]) {
											print(`Yes! You decide to keep the human dead, living life on the edge! "Revive Nathan" brings the human back to life, if you want that. You are now in the hallway outside his room`);
											variables["Nathan life/death question"] = 0
											variables["chose kill Nathan"] = -1
											variables["revived Nathan"] = 0
											goTo("hallway3");
										}
										else {
											if (variables["Andrew life/death question"]) {
												print(`Yes! You decide to keep the human dead, living life on the edge! You take a nap on the human's chest, just to feel like you have truly beat it. 

After a while, you return to the hallway. 

"Revive Andy" brings the human back to life, if you want that.`);
												variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
												variables["Andrew life/death question"] = 0
												variables["chose kill Andrew"] = -1
												variables["revived Andrew"] = 0
												goTo("hallway3");
											}
											else {
												if (variables["Aliyah life/death question"]) {
													print(`You decide to leave the human dead, which I can normally get behind, but really? The human wanted nothing more than to pet you! Don't you feel even the slightest bit of remorse? Ah, forget it...you're too far gone...

You return to the hall, leaving the dead body in the room. You notice that a closet door is open in the room, but decide not to explore it. ("go" to go see what's happening, "revive Aliyah" to revive)

You are now in the hallway.`);
													variables["Aliyah life/death question"] = 0
													variables["chose kill Aliyah"] = -1
													variables["revived Aliyah"] = 0
													goTo("hallway3");
												}
												else {
													print(`Huh?`);
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
		},
	},
	WonderPetSchoolhouse: {
		name: "WonderPetSchoolhouse",
		commands: {
			"if": (args) => {
				if (!args || !args[0]) {
					// UNDEFINED_KEY 'cond';
				} else if (args[0] == '(look|l|.*)') {
					t.clear();
					print("[image]https://s3.amazonaws.com/images.hamlethub.com/hhresized/500/6932/201905/Peter-Parley-Schoolhouse-2-1558533334.jpg");
					print(`You take a second to look around outside the schoolhouse before the weird boat/plane contraption flies you inside through the chimney at the top of the building. You cough as smoke flies up your nose. What is happening?? ("look" again)`);
					variables["looked outside the schoolhouse already"] = -1
				}
			},
			"else": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'hint') {
					if (variables["started to rescue the cat"]) {
						print(`Just type rescue, check back in after if you get stuck. "Kill Wonder Pets" is also an option if you wanted to, though.`);
					}
					else {
						print(`Hint time: here are your options:

look
move (down|up)
inv
clear
help
hint
`);
					}
				} else if (args[0] == 'h') {
					if (variables["WonderPetsMissionQuestion"]) {
						print(`Commands:

look
kill Wonder Pets
inv
help
clear
hint-> hopefully very helpful for if you don't know what to do, the hint is a specific list of possible commands that changes depending on where you are in the game`);
					}
					else {
						print(`Commands:

look
inv
help
clear
hint-> hopefully very helpful for if you don't know what to do, the hint is a specific list of possible commands that changes depending on where you are in the game`);
					}
				} else if (args[0] == 'l') {
					if (variables["WonderPetsMissionQuestion"]) {
						t.clear();
						print(`The animals look at you uncomfortably. You think about how nice it would feel to kill them...("kill Wonder Pets" or "mission" are the only two options here)`);
					}
					else {
						t.clear();
						print("[image]https://lh3.googleusercontent.com/proxy/XDdXbxL2X9k6ReyfX5w9IEVjjKXySDMZIprj-h5SdRrWOhdo94RPC74DI8Xo7PgCWMwQ0T4eHuARXqbvs1FarldyZRBvbQ459w");
						print(`The building seems to only contain one room, and it has a colourful rug on the floor with the alphabet written around the edge, and children's toys are scattered around the room. As you look around, a hamster and a duckling jump out of their enclosures and come running up to you. 

"We're so glad you're here!" The hamster says to you. 

"We really need your help!" The duckling adds. "See, our friend Tuck is not feeling well today, and we need someone to help us on our missions!" The duckling motions to a turtle lying in its tank. 

You nod, still unsure why you, a trained assassin, were sent here...

Then, you hear a ringing sound, and you turn to see that a cylindrical tin pen-holder that is decidedly *not* a phone is shaking and ringing as though it's a phone. The hamster immediately begins to sing: 

"The phone, the phone is ringing!"

"The phone, we'll be right there!" The duckling continues. You stare at the animals in confusion.

"The phone, the phone is ringing!" The turtle chimes in from its tank.

"There's an animal in trouble" (the hamster again)

"There's an animal in trouble" (the duckling)

"There's an animal in trouble somewhere." The turtle finishes the song and the hamster at last picks up the phone. 

After listening to the phone for approximately half a second, the hamster gasps. "What's happening?" You inquire. 

"It's a c-" the hamster starts to sing the answer, but you slash it across the face with your claws. The hamster shrinks back and decides that it would be best to just give a straight answer.

"There's, um, there's a cat...t-trapped in a tree." The hamster says shakily. 

The duckling and the hamster look at one another, probably regretting hiring an assassin to help them with their little 'save the animals' missions.

Do you go on the mission right now? (yes/no)`);
						variables["WonderPetsMissionQuestion"] = -1
					}
				} else if (args[0] == '(Yes|mission|rescue)') {
					if (!variables["started to rescue the cat"]++) {
						print("[image]Includes/Images/WonderPets.jpeg");
						print(`Stepping back, you nod. "Let's save that cat!" You say. The duckling and hamster look relieved that they're no longer in imminent danger. 

The three of you board the boat-plane contraption and fly straight toward a series of wooden squares on the wall, which are each filled with children's belongings. You brace yourself for impact, wondering why they are choosing to crash. At the last second, a flap opens and you see that there is a path leading straight outside.

As you fly toward your destination, the animals start to sing: 

"Wonder Pets, Wonder Pets, we're on our way-" You cut them off immediately.

"What did I say about singing?" You snarl at them. Quivering, they wisely decide not to reply.

After some time, you arrive in a foresty area near a housing area. You vaguely see a cat in the tree. The cat's pretty high up, so you don't see any details.

"M-my name's Linny, pronouns he/him, I'm a guinea pig." Linny says. Whoops. You'd been referring to him as a hamster this whole time. Oh well.

"I'm Ming-ming, pronouns she/her, I'm a duck who's just learned to fly!" The duckling adds proudly, showing you that she can get a whole five inches off the ground. You nod, trying to resist pointing out how close she was to the ground. 

"I'm Lucky, pronouns she/her, and I'm a cat." You reluctantly introduce yourself. You concede that you should be cordial, at least for now. Put your murderous tendencies on hold.

"Shall we rescue the cat?" You say, sighing inwardly. This was not what you had in mind when you'd heard that you were now an assassin.

(respond with "rescue", this is the only possible command)`);
					}
					else {
						t.clear();
						print(`"Yes! Now, let's think of a solution together to fix this problem." Linny says, looking like he's about to start singing again. You resist the temptation to strangle him.

You use your telekinetic powers to part some branches to help free the cat, and you carefully let the cat float down.

Meanwhile, Linny and Ming-ming seem to be singing about teamwork. 

"What's gonna work?" Linny asks. 

"Teamwork!" Ming-ming responds brightly. You roll your eyes.

"I got the cat down!" You inform them as the cat reaches the ground. 

They blink at you in surprise.

Your surroundings start to dissolve and you struggle to understand your surroundings as it changes. You spin around, trying to find an explanation, anything. You see that while the Wonder Pets are disappearing, the recently rescued cat is not. In fact, the cat glares at you threateningly. 

Your surroundings solidify again. Look around!`);
						goTo("UnluckyEncounter");
					}
				} else if (args[0] == 'No') {
					print(`You decide not to go on the mission (you can still choose to go on the mission if you want). You can look around the room a bit as the three animals look at you uncomfortably.`);
				} else if (args[0] == 'kill') {
					if (!args || !args[1]) {
						print(`A true murderer at heart, huh? Alright, go kill the harmless little class pets and prevent them from saving kittens or helping pandas. Just know that I am judging you.

You lunge at the hamster first, and the duckling and the turtle scream in terror as you slit its throat. You turn to the duckling next, and lastly you kill the turtle. The boat-plane thing aggressively picks you up and transports you back to Assassin's Headquarters. You get a very stern talking-to, and then a threatening-looking human comes in with a gun. You try to resist, running all over the room. A few other agents get shot accidentally in the process. The human manages to shoot you. As you lie, gasping your last breaths, you wonder if it was worth it.`);
						variables["food"] = (variables["food"] ? variables["food"] + 1 : 1)
						variables["food"] = (variables["food"] ? variables["food"] + 1 : 1)
						variables["food"] = (variables["food"] ? variables["food"] + 1 : 1)
						variables["kill point WP"] = (variables["kill point WP"] ? variables["kill point WP"] + 1 : 1)
						endGame(307)
					} else if (args[1] == 'wonder') {
						if (!args || !args[2]) {
						} else if (args[2] == 'pets') {
							print(`A true murderer at heart, huh? Alright, go kill the harmless little class pets and prevent them from saving kittens or helping pandas.

You lunge at the hamster first, and the duckling and the turtle scream in terror as you slit its throat. You turn to the duckling next, and lastly you kill the turtle. The boat-plane thing aggressively picks you up and transports you back to Assassin's Headquarters. You get a very stern talking-to, and then a threatening-looking human comes in with a gun. You try to resist, running all over the room. A few other agents get shot accidentally in the process. The human manages to shoot you. As you lie, gasping your last breaths, you wonder if it was worth it.`);
							variables["food"] = (variables["food"] ? variables["food"] + 1 : 1)
							variables["food"] = (variables["food"] ? variables["food"] + 1 : 1)
							variables["food"] = (variables["food"] ? variables["food"] + 1 : 1)
							variables["kill point WP"] = (variables["kill point WP"] ? variables["kill point WP"] + 1 : 1)
							endGame(307)
						}
					}
				}
			},
		},
	},
	UnluckyEncounter: {
		name: "UnluckyEncounter",
		commands: {
			"(l|look.*)": (args) => {
				if (!variables["Unlucky wants to try again"]++) {
					t.clear();
					print(`You look around to find yourself in a plain, featureless white room. The cat sits in front of you, glaring so hard you can practically feel the heat of its gaze. 

You examine the cat. It has tortoiseshell patterning that, come to think of it, looks a lot like yours. In fact, it looks exactly like yours. You don't look in mirrors often, but you think that this cat looks remarkably like you.

"Who are you?" You ask the cat. It smirks at you.

"Isn't it obvious? I'm you, but evil." The cat says. You roll your eyes. You note that she even sounds like you...

"You're me but evil? I'm not exactly an angel myself" You reply. "I've killed pretty much everyone I know, and I don't exactly feel guilty about it." The cat nods. 

"Well, honestly maybe it's not exactly that I'm the evil version of you, but rather I'm just your worst enemy, so from your perspective I'm sort of like the evil you..."

"My name's Unlucky, by the way. Pronouns are she/her." She adds. You blink at her.

"Did you...did you name yourself Unlucky just so you'd be the opposite of me?" You ask incredulously. The cat looks a little uncomfortable

"W-well, when you say it like that, it sounds lame..." She replies.

"But...yeah...I suppose that's why I named myself Unlucky..."

"First time having a nemesis, huh?" You say. She scowls.

"We're doing this again." She mutters to herself. You blink in confusion. Your surroundings blur again. Try looking around again.`);
				}
				else {
					if (!variables["Things are getting pretty darn Unlucky now..."]++) {
						print("[image]Includes/Images/UnluckyMurder.jpeg");
						print(`You look around to find yourself in a plain, featureless grey-black room this time. Unlucky sits in front of you, glaring holes into your skull. 

"What just happened?" You ask the cat. She smirks at you.

"My name is Unlucky. I'm a representation of your sins. If you've behaved yourself, you should be fine, but if you haven't (and I know you haven't), I'm your worst enemy." Unlucky says. You suppose that she really was serious about the whole 'redoing it' thing.

"You-" You start to say, when you notice the dark wispy shapes coming out of Unlucky. Her eyes have turned fully black and her pupils glow red. 

"The more bad things you do, the more powerful I get." The darkness grows, creeping over to you and threatening to envelop you, forcing you to the ground. 

Shrinking back, you try to fend it off with your telekinesis.

(type anything)`);
					}
					else {
						if (variables["chose to revive someone"]) {
							if (variables["revived Baba"] && variables["revived Mumu"] && variables["revived Reu"] && variables["revived Nathan"] && variables["revived Maia"] && variables["revived Aliyah"] && variables["revived Andrew"] && variables["revived Emily"]) {
								if (variables["revived Eevee"]) {
									t.clear();
									print("[image]Includes/Images/DarkTitans.jpeg");
									print(`Unlucky smiles, knowing that she now has the upper hand.

"Not that I needed any more help, but just for fun, I've brought with me everyone who you've killed." As she says this, figures start to materialize out of black clouds. You know some of their names: Nathan, Baba, Mumu. Some names you don't even know, you'd just killed them for no reason other than to feel something. Most of the ones that you don't know are Nathan's friends from his new living place. They all look...different. They have the same darkness around their eyes that Unlucky has, and they are enveloped in the same dark and wispy magic. There's no sympathy in their hollow eyes.

"You did decide to revive everyone, which shows remorse, to some extent, but it can just as easily be you just wanting to avoid consequences, so you're not quite let off the hook in my mind. I hunted you down to kill you, but now that I've realized that you revive everyone you kill, I find myself wanting to feel sympathy for you..."

You stay silent, hoping that she will decide to spare you.

"I'm going to rewind time." She decides.

"You will start all of this from the beginning again. If you want to avoid meeting me, don't kill people at all, or at least don't accept that mission and try to do things to qualify for a different mission."
<br                                         The darkness surrounds you, but it doesn't feel as painful as you thought it would. It feels comforting. You allow your memories to slip away as you are transported back to your house. This time, you can choose to make the right choices...`);
									endGame(30)
								}
								else {
									t.clear();
									print("[image]Includes/Images/DarkTitans.jpeg");
									print(`Unlucky smiles, knowing that she now has the upper hand.

"Not that I needed any more help, but just for fun, I've brought with me everyone who you've killed (some of which you may have revived)." As she says this, many figures materialize out of black clouds. You know some of their names: Nathan, Baba, Mumu. Some names you don't even know, you'd just killed them for no reason other than to feel something. Most of the ones that you don't know are Nathan's friends from his new living place. Some, you killed in past lives. 

They all look...different. They have the same darkness around their eyes that Unlucky has, and they are enveloped in the same dark and wispy magic. You can't find any sympathy in their hollow eyes. 

Unlucky continues speaking:

"You did revive most of them, so maybe you felt remorse at times, but you didn't revive everyone. Eevee still lies dead. She didn't deserve that." She turns and nods toward the crowd behind her.

You can do nothing but lie there as you are surrounded by those who had once been your victims. They envelop you in blackness, which feels like a cloud of knives. The pain escalates and you can feel blood pouring out of you. 

You open your eyes to find yourself in a place that you presume to be hell.`);
									variables["unremorseful serial killer banished"] = -1
									variables["Wonder Pets mission"] = 0
									variables["Wonder Pets mission - completed"] = 1
									goTo("hell");
								}
							}
							else {
								t.clear();
								print("[image]Includes/Images/DarkTitans.jpeg");
								print(`Unlucky smiles, knowing that she now has the upper hand.

"Not that I needed any more help, but just for fun, I've brought with me everyone who you've killed (some of which you may have revived)." As she says this, many figures materialize out of black clouds. You know some of their names: Nathan, Baba, Mumu. Some names you don't even know, you'd just killed them for no reason other than to feel something. Most of the ones that you don't know are Nathan's friends from his new living place. Some, you killed in past lives. 

They all look...different. They have the same darkness around their eyes that Unlucky has, and they are enveloped in the same dark and wispy magic. You can't find any sympathy in their hollow eyes. 

Unlucky continues speaking:

"You did some reviving, so maybe you felt remorse at times, but you didn't revive everyone. They didn't deserve to be killed." She turns and nods toward the crowd behind her.

You can do nothing but lie there as you are surrounded by those who had once been your victims. They envelop you in blackness, which feels like a cloud of knives. The pain escalates and you can feel blood pouring out of you. 

You open your eyes to find yourself in a place that you presume to be hell.`);
								variables["unremorseful serial killer banished"] = -1
								variables["Wonder Pets mission"] = 0
								variables["Wonder Pets mission - completed"] = 1
								goTo("hell");
							}
						}
						else {
							t.clear();
							print("[image]Includes/Images/DarkTitans.jpeg");
							print(`Unlucky smiles, knowing that she now has the upper hand.

"Not that I needed any more help, but just for fun, I've brought with me everyone who you've killed." As she says this, many figures materialize out of black clouds. You know some of their names: Nathan, Baba, Mumu. Some names you don't even know, you just killed them for no reason other than to feel something. Most of the ones that you don't know are Nathan's friends from his new living place. Some are people and cats you killed from past lives. They all look...different. They have the same darkness around their eyes that Unlucky has, and they are enveloped in the same dark and wispy magic. There's no sympathy in their hollow eyes.

"You made the decision to never revive anyone, to never even try to avoid the consequences for your actions. In some sense, I like that. Reviving is somewhat cowardly, in my opinion, but it can also show remorse for your actions. You felt no remorse for anyone you had killed, and for that we will kill you."

You can do nothing but lie there as you are surrounded by those who had once been your victims. You are enveloped in the blackness, which feels like a cloud of knives. The pain escalates and you can feel blood pouring out of you. 

You open your eyes to find yourself in a place that you presume to be hell.`);
							variables["unremorseful serial killer banished"] = -1
							variables["Wonder Pets mission"] = 0
							variables["Wonder Pets mission - completed"] = 1
							goTo("hell");
						}
					}
				}
			},
		},
	},
	AliyahDownstairs: {
		name: "AliyahDownstairs",
		commands: {
			"l": (args) => {
				t.clear();
				print("[image]Includes/Images/AliyahDownstairs.jpeg");
				print(`You see a door that leads outside, and a living room with a TV and couches.`);
			},
			"living": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'room') {
					print(`You trot into the living room. There is a comfy looking recliner and two couches, as well as a TV. No one is here.`);
				}
			},
			"(hallway|hall)": (args) => {
				print(`You are now in the hallway. You see the living room and a door that leads outside.`);
			},
			"(couch|couches)": (args) => {
				if (!variables["mm comfy couch"]++) {
					print(`You curl up on one of the couches in the living room. Mm. Comfy.`);
					variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
				}
				else {
					print(`You curl up on the other couch in the living room. Mm. Comfy.`);
					variables["rest"] = (variables["rest"] ? variables["rest"] + 1 : 1)
				}
			},
			"(television|TV)": (args) => {
				print(`You watch TV.`);
			},
			"(stairs|up|upstairs)": (args) => {
				print(`You trot up the stairs.`);
				goTo("AliyahHallway");
			},
			"(door|outside)": (args) => {
				if (!variables["exciting outside portal"]++) {
					if (!variables["window breaking portal times"]++) {
						if (variables["licence to kill revoked"]) {
							print(`You head over to the door and try to push it open. It's pretty hard for a cat to open. Good thing you're not a normal cat! You use your telekinesis to turn the doorknob, opening the door. Looking out, you see that there is just a portal on the other side. There's no way to get to the outside that you see through the window. You decide to go through the portal. You are surprised to face some resistance as you try to push through the blue swirling cloud. You pop your head through to the other side to see Headquarters. The agents on the other side narrow their eyes at you and shove you back through. You tumble backward and the door closes on its own. You try to reopen it, but it won't open. 

You are sitting at the bottom of the stairs, somewhat dazed from the somersault.`);
						}
						else {
							if (variables["licence to kill"]) {
								print(`You head over to the door and try to push it open. It's pretty hard for a cat to open. Good thing you're not a normal cat! You use your telekinesis to turn the doorknob, opening the door. Looking out, you see that there is just a portal on the other side. There's no way to get to the outside that you see through the window. You decide to go through the portal. Coming out the other side, you realize that it's Assassin's Headquarters. Huh. You look behind you to see that the portal has closed. There's no way back to the house. Well, maybe there's a mission you can go on...`);
								goTo("Headquarters");
							}
							else {
								if (variables["kill point B"] || variables["kill point M"] || variables["kill point N"] || variables["kill point Aliyah"] || variables["kill point Em"] || variables["kill point R"] || variables["kill point Maia"] || variables["kill point A"] || variables["kill point Claire"] || variables["kill point Ev"] || variables["kill point W"] || variables["kill point S"] || variables["kill point WP"] || variables["kill point Beaver"] || variables["kill point L"]) {
									print(`You head over to the door and try to push it open. It's pretty hard for a cat to open. Good thing you're not just a normal cat! You use your telekinesis to turn the doorknob, opening the door. Looking out, you see that there's a lawn, a street, and a grey car.

You run outside excitedly, frolicking about. After wandering the area for a while, you find that you are completely lost. You scratch the door of a nearby house, hoping that the people inside will be nice.

The door opens and a human looks down at you in surprise.

"Well, hello!" The human says to you.

"My name's Amy, my pronouns are she/her." She informs you. She shakes her head to herself. "Why am I introducing myself to a cat..." Amy mutters to herself

You walk past her and enter the house.`);
									goTo("AmyHouse");
								}
								else {
									print(`You head over to the door and try to push it open. It's pretty hard for a cat to open. Good thing you're not a normal cat! You use your telekinesis to turn the doorknob, opening the door. Looking out, you see that there is just a portal on the other side. There's no way to get to the outside that you see through the window. You decide to go through the portal. Where are you? ("look")`);
									goTo("PacifistHeadquarters");
								}
							}
						}
					}
					else {
						if (variables["licence to kill revoked"]) {
							print(`You decide to try to open the door again. Unsurprisingly, it refuses to budge.`);
						}
						else {
							if (variables["licence to kill"]) {
								print(`You go through the portal to Headquarters.`);
								goTo("Headquarters");
							}
							else {
								if (variables["kill point B"] || variables["kill point M"] || variables["kill point N"] || variables["kill point Aliyah"] || variables["kill point Em"] || variables["kill point R"] || variables["kill point Maia"] || variables["kill point A"] || variables["kill point Claire"] || variables["kill point Ev"] || variables["kill point W"] || variables["kill point S"] || variables["kill point WP"] || variables["kill point Beaver"] || variables["kill point L"]) {
									print(`You open the door with your telekinesis and run outside, making your way to Amy's house.`);
									goTo("AmyHouse");
								}
								else {
									print(`You go to Headquarters.`);
									goTo("PacifistHeadquarters");
								}
							}
						}
					}
				}
			},
			"window": (args) => {
				print(`You look out the window to see a grey car, a lawn, and a street. There's a lot less green than at your house, although to be fair you do live in the middle of a forest. You contemplate breaking the window.`);
			},
			"break": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'window') {
					if (!variables["window breaking portal times"]++) {
						if (!variables["exciting outside portal"]++) {
							if (variables["licence to kill revoked"]) {
								print(`You smash the window in an attempt to get outside, but instead, the second the glass breaks, you realize that the view through the window was an illusion, and there is simply a portal surrounding the house. You decide to go through the portal. 

You are surprised to face some resistance as you try to push through the blue swirling cloud. You pop your head through to the other side to see Headquarters!

The agents on the other side narrow their eyes at you and shove you back through. You tumble backward and the window repairs itself on its own. You try to break it again it, but it won't break. 

`);
							}
							else {
								if (variables["kill point B"] || variables["kill point M"] || variables["kill point N"] || variables["kill point Aliyah"] || variables["kill point Em"] || variables["kill point R"] || variables["kill point Maia"] || variables["kill point A"] || variables["kill point Claire"] || variables["kill point Ev"] || variables["kill point W"] || variables["kill point S"] || variables["kill point WP"] || variables["kill point Beaver"] || variables["kill point L"]) {
									print(`You smash the window and find yourself outside. Looking out, you see that there's a lawn, a street, and a grey car.

You start frolicking about. After wandering the area for a while, you find that you are completely lost. You scratch the door of a nearby house, hoping that the people inside will be nice.

The door opens and a human looks down at you in surprise.

"Well, hello!" The human says to you.

"My name's Amy, my pronouns are she/her." She informs you. She shakes her head to herself. "Why am I introducing myself to a cat..." Amy mutters to herself

You walk past her and enter the house.`);
									goTo("AmyHouse");
								}
								else {
									print(`You smash the window in an attempt to get outside, but instead, the second the glass breaks, you realize that the view through the window was an illusion, and there is simply a portal surrounding the house. You are immediately transported somewhere.`);
									goTo("PacifistHeadquarters");
								}
							}
						}
						else {
							if (variables["licence to kill revoked"]) {
								print(`You break the window to find the same portal that was at the door. You try to go through, but it's pretty unyielding.`);
							}
							else {
								if (variables["licence to kill"]) {
									print(`You break the window to find the same portal that was at the door. You go through to find yourself in Headquarters.`);
									goTo("Headquarters");
								}
								else {
									if (variables["kill point B"] || variables["kill point M"] || variables["kill point N"] || variables["kill point Aliyah"] || variables["kill point Em"] || variables["kill point R"] || variables["kill point Maia"] || variables["kill point A"] || variables["kill point Claire"] || variables["kill point Ev"] || variables["kill point W"] || variables["kill point S"] || variables["kill point WP"] || variables["kill point Beaver"] || variables["kill point L"]) {
										print(`You break the window and run, making your way to Amy's house.`);
										goTo("AmyHouse");
									}
									else {
										print(`You break the window to find the same portal that was at the door. You go through to find yourself in Headquarters.`);
										goTo("PacifistHeadquarters");
									}
								}
							}
						}
					}
					else {
						if (variables["licence to kill revoked"]) {
							print(`You try to break the window again, but it's impenetrable. You glare at it in frustration.`);
						}
						else {
							if (variables["licence to kill"]) {
								print(`You hop through the broken window and find yourself in Headquarters!`);
								goTo("Headquarters");
							}
							else {
								if (variables["kill point B"] || variables["kill point M"] || variables["kill point N"] || variables["kill point Aliyah"] || variables["kill point Em"] || variables["kill point R"] || variables["kill point Maia"] || variables["kill point A"] || variables["kill point Claire"] || variables["kill point Ev"] || variables["kill point W"] || variables["kill point S"] || variables["kill point WP"] || variables["kill point Beaver"] || variables["kill point L"]) {
									print(`You hop through the broken window and run outside, making your way to Amy's house.`);
									goTo("AmyHouse");
								}
								else {
									print(`You hop through the broken window and find yourself in Headquarters!`);
									goTo("PacifistHeadquarters");
								}
							}
						}
					}
				}
			},
			"(down|downstairs)": (args) => {
				if (!variables["went into scary Aliyah basement"]++) {
					print(`You head downstairs. It's cold down here and you don't like it much. You head back upstairs. You're now on the ground level, you see a door leading outside, a living room, a kitchen, and a dining room.`);
				}
				else {
					print(`You've been down there already, you didn't like it all that much...`);
				}
			},
			"kitchen": (args) => {
				print(`There's not much going on here, it's just a kitchen and it seems like this family doesn't have a cat, there's no food and water bowls.`);
			},
			"dining": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'room') {
					print(`There's not much going on there, it's just a table with some chairs.`);
				}
			},
			"bathroom": (args) => {
				print(`You go to a small room and find a toilet. Finally, some good water. As you turn to leave, you see a scary-looking set of stairs leading downstairs. You run to the hallway.`);
				variables["water"] = (variables["water"] ? variables["water"] + 1 : 1)
			},
			"leave": (args) => {
				print(`You are in the hallway.`);
			},
		},
	},
	PacifistHeadquarters: {
		name: "PacifistHeadquarters",
		commands: {
			"l": (args) => {
				print(`You're in Headquarters! When this is more developed, you'll have missions to go on.

"portal" to return back through the portal.`);
			},
			".*": (args) => {
				print(`Lol haven't written a thing for that (yet). Contact me and tell me to add what you want me to add.`);
			},
			"(portal|back)": (args) => {
				print(`You go through the portal and return to the house. You are now at the bottom of the stairs.`);
			},
		},
	},
	AmyHouse: {
		name: "AmyHouse",
		commands: {
			"l": (args) => {
				if (!args || !args[0]) {
					print(`You're in Amy's house. There are balloons everywhere. You suppose that they've had a celebration recently.`);
				} else if (args[0] == '(computer|laptop)') {
					if (variables["computer curiosity"]) {
						print(`You wander the house in search of a computer so you can find the game. You find one in the basement, a thin laptop with what looks like an apple icon on top of it. You use your telekinesis to open the laptop. Darn, there's a password needed. 

You meow at Amy until she follows you downstairs. She looks confused, but she looks around to try to figure out what you want her to see. You use your telekinesis to take hold of her finger and you bring it to the computer. She looks alarmed at the mysterious force, but she places it on a black square in the corner of the keyboard, and the laptop is now open. 

"Do you want to see the game Aliyah and Nathan made about you?" Amy says. She opens a program and sends a text to Aliyah, who quickly responds with a link. She opens the link, and you see a black screen with white letters. 

"Lucky's Text Adventure!
Welcome to Lucky's Text Adventure!! Everybody's gone out, so you're left alone at home with Baba. He just works at his computer though, so you're basically alone. What to do now...

You read the text and decide that it looks interesting. You start to play the game.`);
						endGame(3374)
					}
					else {
						print(`You decide to look for a computer. You find one downstairs. Alright, who cares?`);
					}
				}
			},
			"meow": (args) => {
				if (!args || !args[0]) {
				} else if (args[0] == 'Amy') {
					print(`You meow at Amy. She smiles at you and pets you. 

"This is just like in Aliyah's cat game!" She comments. She shakes her head to herself, dismissing the idea that she's living in the game. You wonder if she's talking about the cat game that Nathan's developing, 'Lucky's Cat Adventures,' which is about you. You wonder to yourself what's in the game. 

You consider looking for a computer to try to play the game yourself (you have telekinesis, so you can use that to press the keys).`);
					variables["computer curiosity"] = -1
				} else if (args[0] == '(balloons|balloon)') {
					if (!variables["balloons do be scary"]++) {
						print(`You paw at one of the balloons. It pops, startling you.`);
					}
					else {
						print(`Nope, you won't make that mistake again. You glare at the deflated balloon.`);
					}
				}
			},
			"Amy": (args) => {
				print(`You meow at Amy. She smiles at you and pets you. 

"This is just like in Aliyah's cat game!" She comments. She shakes her head to herself, dismissing the idea that she's living in the game. You wonder if she's talking about the cat game that Nathan's developing, 'Lucky's Cat Adventures,' which is about you. You wonder to yourself what's in the game. 

You consider looking for a computer to try to play the game yourself (you have telekinesis, so you can use that to press the keys).`);
				variables["computer curiosity"] = -1
			},
			"(computer|laptop)": (args) => {
				if (variables["computer curiosity"]) {
					print(`You wander the house in search of a computer so you can find the game. You find one in the basement, a thin laptop with what looks like an apple icon on top of it. You use your telekinesis to open the laptop. Darn, there's a password needed. 

You meow at Amy until she follows you downstairs. She looks confused, but she looks around to try to figure out what you want her to see. You use your telekinesis to take hold of her finger and you bring it to the computer. She looks alarmed at the mysterious force, but she places it on a black square in the corner of the keyboard, and the laptop is now open. 

"Do you want to see the game Aliyah and Nathan made about you?" Amy says. She opens a program and sends a text to Aliyah, who quickly responds with a link. She opens the link, and you see a black screen with white letters. 

"Lucky's Text Adventure!
Welcome to Lucky's Text Adventure!! Everybody's gone out, so you're left alone at home with Baba. He just works at his computer though, so you're basically alone. What to do now...

You read the text and decide that it looks interesting. You start to play the game.`);
					endGame(3374)
				}
				else {
					print(`You decide to look for a computer. You find one downstairs. Alright, who cares?`);
				}
			},
			"(balloons|balloon)": (args) => {
				if (!variables["balloons do be scary"]++) {
					print(`You paw at one of the balloons. It pops, startling you.`);
				}
				else {
					print(`Nope, you won't make that mistake again. You glare at the deflated balloon.`);
				}
			},
			".*": (args) => {
				print(`Hasn't been written yet, whoops. Contact me and tell me to add what you want me to add.`);
			},
			"(leave|back|outside|door)": (args) => {
				print(`You open the front door of Amy's house and you wander around until you get back to the house that looks familiar. Phew, I guess you're not lost anymore! You hop back in through the broken window. You are now at the bottom of the stairs.`);
				goTo("AliyahDownstairs");
			},
		},
	},
	MergeTime: {
		name: "MergeTime",
		commands: {
			"msg": (args) => {
				// UNDEFINED_KEY '0';
				// UNDEFINED_KEY '1';
				// UNDEFINED_KEY '2';
				// UNDEFINED_KEY '3';
				// UNDEFINED_KEY '4';
				// UNDEFINED_KEY '5';
				// UNDEFINED_KEY '6';
				// UNDEFINED_KEY '7';
				// UNDEFINED_KEY '8';
				// UNDEFINED_KEY '9';
				// UNDEFINED_KEY '10';
				// UNDEFINED_KEY '11';
				// UNDEFINED_KEY '12';
				// UNDEFINED_KEY '13';
				// UNDEFINED_KEY '14';
			},
			"Grebel": (args) => {
				if (!variables["mergy merge"]++) {
					print(`...`);
				}
				else {
					print(`You decide to go into the closet labelled 'Grebel.'
You find lots of coats and you push past them to the back of the closet. You see that the back of the closet is a portal, and you enter it and come out of the closet into Grebel! As you leave the closet, Aliyah is laughing about 'coming out of the closet.' You roll your eyes. 

Look around!`);
					goTo("GrebelMerged");
				}
			},
			"Home": (args) => {
				if (!variables["mergy merge"]++) {
					print(`...`);
				}
				else {
					print(`You decide to go into the closet labelled 'Home.' `);
					goTo("HomeMerged");
				}
			},
			"Assassin's Headquarters": (args) => {
				if (!variables["mergy merge"]++) {
					print(`...`);
				}
				else {
					print(`You decide to go into the closet labelled 'Assassin's Headquarters.' `);
					goTo("HeadquartersMerged");
				}
			},
			".*": (args) => {
				if (!variables["just merged"]++) {
					print(`You look around and notice, to your horror, that you are much higher from the ground than you are used to being. (type anything to continue)`);
				}
				else {
					if (!variables["mergy merge"]++) {
						print(`You attempt to walk and realize that walking on two legs is incredibly difficult. Why do humans do this? You drop to the floor and attempt to walk on all fours, but you find that your pesky human legs are too long to allow you to comfortably stand on your legs and hands. You sigh. Rising up to a human standing position, you take a few steps. After a bit of practice (and the human's muscle memory), you have successfully learned to walk in a straight line. As you're thinking this to yourself, you can feel another presence in your mind. It's laughing. 
"Ha, as if *I* could ever be straight," the strange presence says. You look around frantically for the source of the sound, but you see nothing.
"I'm not standing there, I'm in your head." It says, and you can somehow sense that it would be rolling its eyes if you looked at it.
"We've merged, you now control my body. I'm not sure exactly why or how, but that's the situation now." The presence explains. "I'm probably just going to quietly sleep in the back of your mind, since I can't control things anyway, so have fun living my life!"
"Wait! Who are you?? You say aloud, wondering how to communicate with the strange presence."
"Ah, I guess I forgot to introduce myself." The presence says. "My name is Aliyah. My pronouns are she/her, and I like to 'code' text adventure-style cat games!" She says. You get a mental image of a female human putting up peace signs. 

"I wanted a bit of a front-row seat to the game, but I think I did it wrong..." She says sheepishly. You have no idea what she's talking about.
"Anyway, looks like you're stuck in my body now! Have fun!" She retreats into the back of your mind, and you get a mental image of her eating popcorn as she watches. 

You're not really sure what to do.`);
						variables["looked around"] = -1
					}
					else {
						print(`You start to register your surroundings and determine that you are in a strange room. The walls are a sky-blue colour and there are a few couches and a few comfortable-looking chairs, and a few closets. You note that it's unusual for rooms to have several closets, but it's also unusual for cats to merge with humans.

You take a closer look at the closets and notice that each one has a rectangular engraved plaque at the top, just above the doors of the closet. Which closet do you choose?

Your options are:

Grebel
Home
Assassin's Headquarters
Narnia

Note that you will not be able to come back here.`);
					}
				}
			},
		},
	},
	GrebelMerged: {
		name: "GrebelMerged",
		commands: {
			"l": (args) => {
				print(`As you walk out of the closet, you see that you're in Nathan's room at Grebel. 

"Hi Nathan!" You say. He jumps out of his seat.
"Aliyah? What are you doing here?" You blink at him. He can understand you?
"I just walked into a portal and showed up here." You explain. He laughs. YOu're confused. Why does he think that was a joke? 

You go back to the closet and open it to show him the portal, then realize that there is no portal in there. Huh.
You leave the room.

"Bye, love you!" Nathan calls after you. you walk down the hall and peer into different rooms. You trip a few times, still getting used to these dumb legs, but it seems that you're okay for the most part.`);
			},
		},
	},
	HomeMerged: {
		name: "HomeMerged",
		commands: {
			"l": (args) => {
				if (!variables["arrived at home?"]++) {
					print(`You look around. This isn't where you expected to go when you went into the 'home' door...`);
				}
				else {
				}
			},
		},
	},
	HeadquartersMerged: {
		name: "HeadquartersMerged",
		commands: {
			"l": (args) => {
				if (!variables["just arrived"]++) {
					print(`You've arrived at Assassin's Headquarters! `);
				}
			},
		},
	},
	".*": (args) => {
		t.write("Chichien's brain is too smol to understand")
	},
};
aliases = [
["m", ["move"]],
["n", ["north", "run away", "run", "run inside", "go inside"]],
["s", ["south", "adventure time"]],
["e", ["east"]],
["w", ["west"]],
["u", ["up"]],
["d", ["down"]],
["m n", ["n"]],
["m s", ["s"]],
["m e", ["e"]],
["m w", ["w"]],
["m u", ["u"]],
["m d", ["d"]],
["l", ["look"]],
["chess", ["play chess", "chess time"]],
["g plant", ["get plant", "buy plant", "plant"]],
["careful", ["be careful", "go carefully"]],
["bean", ["heart bean", "bean plant", "look bean plant", "look heart bean"]],
["basketball", ["play basketball"]],
["song Werdna Dandrewlion Andy", ["Werdna Dandrewlion Andy", "song"]],
["hallway3", ["leave room", "hall-wander", "hall wander", "see people"]],
["nathan", ["go to Nathan's room", "Nathan's room"]],
["laundry", ["sleep laundry", "nap laundry", "sleep laundry pile", "nap laundry pile"]],
["blanket", ["sleep blanket", "nap blanket", "get rest"]],
["chocolate milk", ["get chocolate milk"]],
["TV", ["watch tv", "watch television", "box", "watch box"]],
["chair", ["look outside", "look out window", "sit chair"]],
["bed", ["nap bed", "sleep bed", "nap"]],
["hard hat", ["steal hard hat", "take hard hat"]],
["portal", ["sleep under bed", "under bed", "go under bed", "go Grebel", "Grebel"]],
["h", ["halp", "help", "helpp", "helppp"]],
["squirrel", ["hunt squirrel", "hunt squirrel", "chase squirrel", "chase squirrels", "find squirrel", "find a squirrel", "hunting time"]],
["catnip", ["get catnip", "find catnip", "catnip time", "look catnip", "catnippp", "hunt catnip", "hunt for catnip"]],
["mock", ["chichiens brain is too smol to understand", "mocks", "mocks you"]],
["s", ["adventure time"]],
["door", ["backdoor", "back door", "frontdoor", "front door"]],
["goose", ["Mr. Goose", "mr goose"]],
["weed", ["get weed"]],
["i", ["inventory", "inv"]],
["Treacys", ["talk to treacys"]],
["i", ["l i"]],
["water", ["glass", "toilet"]],
["g", ["pick up", "get", "grab", "obtain", "eat", "drink"]],
["bed", ["nest", "sleeping bag", "sleep bed"]],
["u bed", ["sleep"]],
["leprechaun", ["a leprechaun", "the leprechaun", "all the leprechauns", "every leprechaun", "all leprechauns", "the leprechauns"]],
["water", ["glass of water", "glass"]],
["u", ["use", "interact", "sleep", "sit", "climb", "bask in"]],
["u sun", ["sunbathe", "sunlight", "sunshine"]],
["meow", ["talk", "say", "speak"]],
["kill", ["murder", "attack"]],
["clr", ["clear", "cls"]],
["", ["\btalk to", "see", "visit", "on", "in", "with", "to", "for", "at", "from", "the", "about", "into", "near", "after", "as", "like", "since", "after", "off", "above", "below", "and", "but\b"]],
];

