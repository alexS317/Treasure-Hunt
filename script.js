function startGame() {


    let openBottle = confirm(`You're just walking along the beach and enjoying your holiday, when you suddenly notice a bottle in the sand. It looks like there's some kind of paper inside it. Do you want to open it?`);
    if (openBottle === true) {
        alert(`It is a treasure map! You decide that you want to go on an adventure, and look for the starting point on the map.`);

        let = hillChoice = ''
        while (hillChoice !== 1 && hillChoice !== 2 && hillChoice !== 3) {
            hillChoice = +prompt(`The marked path starts next to some hills, but you're not quite sure what these drawings could mean. Do you go to the sand dunes (1), the golf course (2) or the bumpy road (3)?`);  
        }
        switch (hillChoice) {
            case 1:
                alert(`Going through the dunes seems to be the right way! You start looking for the next hint on the map.`);

                let waterChoice = '' 
                while (waterChoice !== 1 && waterChoice !== 2 && waterChoice !== 3) {
                    waterChoice = +prompt(`The marked path goes next to some kind of water fountain. Do you go to the lake at the park (1), the sea (2) or the well at the village square (3)?`);
                }
                switch (waterChoice) {
                    case 1:
                        alert(`No, this doesn't seem to be the right way. Around the lake are just some ducks, no treasure. \n YOU LOST`);
                        break;
                    case 2:
                        alert(`You go back to the sea where you started, but it doesn't seem like you're going to find anything here. After looking for a long time, you give up. \n YOU LOST`);
                        break;
                    case 3:
                        alert(`It's looking good, it seems you've guessed right with choosing the well. You've already made it halfway.`);

                        let forestChoice = '' 
                        while (forestChoice !== 'garden center' && forestChoice !== 'forest') { 
                            forestChoice = prompt(`The next hint on the map is a bit difficult to recognise, but you come to the conclusion that the drawings are supposed to be trees. Do you go to the (garden center) or the (forest) near the village?`);
                        }
                            if (forestChoice.toLowerCase() === 'forest') {
                                alert(`This has to be the right way, you can feel it! The treasure can't be far from this forest.`);

                                let caveChoice = ''
                                while (caveChoice !== 1 && caveChoice !== 2 && caveChoice !== 3) {
                                    caveChoice = +prompt(`The next hint is easy to decipher, the drawing on the map shows a cave entrance. It doesn't take you long to find it, but a few meters after the entrance it splits into three tunnels. Do you take the left (1), the middle (2) or the right one (3)?`);
                                }
                                    switch (caveChoice) {
                                    case 1:
                                        alert(`This tunnel is a dead end. Maybe after all you weren't supposed to find the treasure anyway. \n YOU LOST`);
                                        break;
                                    case 2:
                                        alert(`The middle tunnel was the right one! After a few minutes you reach a small room with a wooden chest placed in its middle. \n \n Congratulations! You found the treasure! \n THE END`);
                                        break;
                                    case 3:
                                        alert(`This tunnel leads further and further into the cave, and at some point you start to become afraid that you won't find the way back. You take the chance and turn around as long as you still can. Maybe it wasn't your destiny to find the treasure. \n YOU LOST`);
                                        break;
                                    default:
                                        break;
                                }
                        } else {
                                alert(`It doesn't look like this way is going to lead anywhere. A pity, you've made it so far already! \n YOU LOST`);
                        }
                        break;
                    default:
                        break;
                }
                break;
            case 2:
                alert(`You try really hard, but you can't find any further hints on the golf course. The adventure is over for you. \n YOU LOST`);
                break;
            case 3:
                alert(`You can't find any clues on the bumpy road, this was apparently the wrong choice. The adventure is over for you. \n YOU LOST`);
                break;
            default:
                break;
        }
    } else {
        alert(`You don't open the bottle and go on with your day. The adventure is over before it has even started. \n YOU LOST`);
    }

    
}