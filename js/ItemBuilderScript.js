document.addEventListener('DOMContentLoaded', function() {
    const buttonClickCounts = {};
    //define button pairs and their corresponding image spots
    const buttonPairs = {
        //bf combos
        'spot1': ['button1'], //buttons 1 activate Spot 1 (needs double press function)
        'spot2': ['button1', 'button2'], //buttons 1 and 2 activate Spot 2
        'spot3': ['button1', 'button3'], //buttons 1 and 3 activate Spot 3
        'spot4': ['button1', 'button4'], //buttons 1 and 4 activate Spot 4
        'spot5': ['button1', 'button5'], //buttons 1 and 5 activate Spot 5
        'spot6': ['button1', 'button6'], //buttons 1 and 6 activate Spot 6
        'spot7': ['button1', 'button7'], //buttons 1 and 7 activate Spot 7
        'spot8': ['button1', 'button8'], //buttons 1 and 8 activate Spot 8
        'spot9': ['button1', 'button9'], //buttons 1 and 9 activate Spot 9

        //chain combos not including above BF combo
        'spot10': ['button2'], //button 2 activates Spot 10 (needs double press function)
        'spot11': ['button2', 'button3'], //buttons 2 and 3 activate Spot 11
        'spot12': ['button2', 'button4'], //buttons 2 and 4 activate Spot 12
        'spot13': ['button2', 'button5'], //buttons 2 and 5 activate Spot 13
        'spot14': ['button2', 'button6'], //buttons 2 and 6 activate Spot 14
        'spot15': ['button2', 'button7'], //buttons 2 and 7 activate Spot 15
        'spot16': ['button2', 'button8'], //buttons 2 and 8 activate Spot 16
        'spot17': ['button2', 'button9'], //buttons 2 and 9 activate Spot 17

        //belt combos not including already done
        'spot18': ['button3'], //button 3 activates Spot 18 (needs double press function)
        'spot19': ['button3', 'button4'], //buttons 3 and 4 activate Spot 19
        'spot20': ['button3', 'button5'], //buttons 3 and 5 activate Spot 20
        'spot21': ['button3', 'button6'], //buttons 3 and 6 activate Spot 21
        'spot22': ['button3', 'button7'], //buttons 3 and 7 activate Spot 22
        'spot23': ['button3', 'button8'], //buttons 3 and 8 activate Spot 23
        'spot24': ['button3', 'button9'], //buttons 3 and 9 activate Spot 24

        //glove combos not including already done
        'spot25': ['button4'], //button 4 activates Spot 25 (needs double press function)
        'spot26': ['button4', 'button5'], //buttons 4 and 5 activate Spot 26
        'spot27': ['button4', 'button6'], //buttons 4 and 6 activate Spot 27
        'spot28': ['button4', 'button7'], //buttons 4 and 7 activate Spot 28
        'spot29': ['button4', 'button8'], //buttons 4 and 8 activate Spot 29
        'spot30': ['button4', 'button9'], //buttons 4 and 9 activate Spot 30
        
        //negatron combos not including already done
        'spot31': ['button5'], //button 5 activates Spot 31 (needs double press function)
        'spot32': ['button5', 'button6'], //buttons 5 and 6 activate Spot 32
        'spot33': ['button5', 'button7'], //buttons 5 and 7 activate Spot 33
        'spot34': ['button5', 'button8'], //buttons 5 and 8 activate Spot 34
        'spot35': ['button5', 'button9'], //buttons 5 and 9 activate Spot 35

        //NLR combos not including already done
        'spot36': ['button6'], //button 6 activates Spot 36 (needs double press function)
        'spot37': ['button6', 'button7'], //buttons 6 and 7 activate Spot 37
        'spot38': ['button6', 'button8'], //buttons 6 and 8 activate Spot 38
        'spot39': ['button6', 'button9'], //buttons 6 and 9 activate Spot 39

        //recurve combos not including already done
        'spot40': ['button7'], //button 7 activates Spot 40 (needs double press function)
        'spot41': ['button7', 'button8'], //buttons 7 and 8 activate Spot 41
        'spot42': ['button7', 'button9'], //buttons 7 and 9 activate Spot 42

        //spat combos not including already done
        'spot43': ['button8'], //button 8 activates Spot 43 (needs double press function)
        'spot44': ['button8', 'button9'], //buttons 8 and 9 activate Spot 44
        //tear
        'spot45': ['button9'], //buttons 9 activates Spot 45 (needs double press)
        
    };

    //function to check and update the state of image spots
    const goldBorderRequiredSpots = ['spot1', 'spot10', 'spot18', 'spot25', 'spot31', 'spot36', 'spot40', 'spot43', 'spot45'];

    function updateImageSpots() {
        for (const [spot, buttons] of Object.entries(buttonPairs)) {
            const requiresGoldBorder = goldBorderRequiredSpots.includes(spot);
            const allHighlighted = buttons.every(buttonId => {
                const button = document.getElementById(buttonId);
                return requiresGoldBorder ? button.classList.contains('gold-border') : button.classList.contains('green-border') || button.classList.contains('gold-border');
            });

            const imageSpot = document.getElementById(spot);
            if (allHighlighted) {
                imageSpot.classList.add('active'); //remove grayscale
            } else {
                imageSpot.classList.remove('active'); //apply grayscale
            }
        }
    }

    function toggleBorderAndCheckSpots(event) {
        const button = event.target;
        const buttonId = button.id;

        //increment click count and cycle through 0 (no border), 1 (green border), 2 (gold border)
        buttonClickCounts[buttonId] = (buttonClickCounts[buttonId] || 0) + 1;
        if (buttonClickCounts[buttonId] > 2) {
            buttonClickCounts[buttonId] = 0; //reset after gold border
        }

        //update button border based on click count
        button.classList.remove('green-border', 'gold-border'); //remove existing borders
        if (buttonClickCounts[buttonId] === 1) {
            button.classList.add('green-border');
        } else if (buttonClickCounts[buttonId] === 2) {
            button.classList.add('gold-border');
        }

        updateImageSpots(); //check and update the state of image spots
    }

    document.querySelectorAll('.image-button').forEach(button => {
        button.addEventListener('click', toggleBorderAndCheckSpots);
    });

   


    document.querySelectorAll('.image-spot').forEach(function(spot) {
        //find the nested .popup-image div within the current .image-spot
        const popupImageElement = spot.querySelector('.popup-image');

        //show the popup image on mouse enter
        spot.addEventListener('mouseenter', function() {
            popupImageElement.style.display = 'block';
        });

        //hide the popup image on mouse leave
        spot.addEventListener('mouseleave', function() {
            popupImageElement.style.display = 'none';
        });
    });



});