console.log("JavaScript file is loaded.");

/* #33CC33 is green */
/* #FF00FF is purple */
/* gold, blue, lightgrey */
const items = [
    {
        name: "Thief's Gloves",
        tier: 'S',
        image: 'images/tieritem/thiefsgloves.png',
        placeholders: [
            { src: 'images/tierchampion/yorick.png', borderColor: 'gold' },
            { src: 'images/tierchampion/sett.png', borderColor: 'blue' },
            { src: 'images/tierchampion/illaoi.png', borderColor: 'gold' },
            { src: 'images/tierchampion/neeko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/ekko.png', borderColor: 'blue' }
        ]
    },
    {
        name: "Guinsoo's Rageblade",
        tier: 'S',
        image: 'images/tieritem/guinsoosrageblade.png',
        placeholders: [
            { src: 'images/tierchampion/kayle.png', borderColor: '#33CC33' },
            { src: 'images/tierchampion/jinx.png', borderColor: 'lightgrey' },
            { src: 'images/tierchampion/lucian.png', borderColor: 'gold' },
            { src: 'images/tierchampion/caitlyn.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/twistedfate.png', borderColor: '#FF00FF' }
        ]
    },
	{
        name: "Infinity Edge",
        tier: 'S',
        image: 'images/tieritem/infinityedge.png',
        placeholders: [
            { src: 'images/tierchampion/ezreal.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/caitlyn.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/lucian.png', borderColor: 'gold' },
            { src: 'images/tierchampion/samira.png', borderColor: 'blue' },
            { src: 'images/tierchampion/jhin.png', borderColor: 'gold' }
        ]
    },
	{
        name: "Hand Of Justice",
        tier: 'S',
        image: 'images/tieritem/handofjustice.png',
        placeholders: [
            { src: 'images/tierchampion/akali.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/viego.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/katarina.png', borderColor: '#33CC33' },
            { src: 'images/tierchampion/zed.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/qiyana.png', borderColor: 'gold' }
        ]
    },
	{
        name: "Spear of Shojin",
        tier: 'S',
        image: 'images/tieritem/spearofshojin.png',
        placeholders: [
            { src: 'images/tierchampion/karthus.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/caitlyn.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/senna.png', borderColor: '#33CC33' },
            { src: 'images/tierchampion/ahri.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/twistedfate.png', borderColor: '#FF00FF' }
        ]
    },
	{
        name: "Warmog's Armor",
        tier: 'S',
        image: 'images/tieritem/warmogsarmor.png',
        placeholders: [
            { src: 'images/tierchampion/ekko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/neeko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/mordekaiser.png', borderColor: 'blue' },
            { src: 'images/tierchampion/zac.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/illaoi.png', borderColor: 'gold' }
        ]
    },
	{
        name: "Giant Slayer",
        tier: 'S',
        image: 'images/tieritem/giantslayer.png',
        placeholders: [
            { src: 'images/tierchampion/lucian.png', borderColor: 'gold' },
            { src: 'images/tierchampion/ezreal.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/caitlyn.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/jinx.png', borderColor: 'lightgrey' },
            { src: 'images/tierchampion/samira.png', borderColor: 'blue' }
        ]
    },
	{
        name: "Bloodthirster",
        tier: 'S',
        image: 'images/tieritem/bloodthirster.png',
        placeholders: [
            { src: 'images/tierchampion/viego.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/zed.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/akali.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/riven.png', borderColor: 'blue' },
            { src: 'images/tierchampion/yorick.png', borderColor: 'gold' }
        ]
    },
	{
        name: "Crownguard",
        tier: 'S',
        image: 'images/tieritem/crownguard.png',
        placeholders: [
            { src: 'images/tierchampion/mordekaiser.png', borderColor: 'blue' },
            { src: 'images/tierchampion/zac.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/ekko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/illaoi.png', borderColor: 'gold' },
            { src: 'images/tierchampion/sett.png', borderColor: 'blue' }
        ]
    },
	{
        name: "Blue Buff",
        tier: 'A',
        image: 'images/tieritem/bluebuff.png',
        placeholders: [
            { src: 'images/tierchampion/ezreal.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/ahri.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/jhin.png', borderColor: 'gold' },
            { src: 'images/tierchampion/vex.png', borderColor: 'blue' },
            { src: 'images/tierchampion/lulu.png', borderColor: 'blue' }
        ]
    },
	{
        name: "Evenshroud",
        tier: 'S',
        image: 'images/tieritem/evenshroud.png',
        placeholders: [
            { src: 'images/tierchampion/zac.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/mordekaiser.png', borderColor: 'blue' },
            { src: 'images/tierchampion/sett.png', borderColor: 'blue' },
            { src: 'images/tierchampion/illaoi.png', borderColor: 'gold' },
            { src: 'images/tierchampion/ekko.png', borderColor: 'blue' }
        ]
    },
	{
        name: "Steadfast Heart",
        tier: 'S',
        image: 'images/tieritem/steadfastheart.png',
        placeholders: [
            { src: 'images/tierchampion/ekko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/neeko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/blitzcrank.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/mordekaiser.png', borderColor: 'blue' },
            { src: 'images/tierchampion/illaoi.png', borderColor: 'gold' }
        ]
    },
	{
        name: "Gargoyle Stoneplate",
        tier: 'S',
        image: 'images/tieritem/gargoylestoneplate.png',
        placeholders: [
            { src: 'images/tierchampion/ekko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/neeko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/amumu.png', borderColor: 'blue' },
            { src: 'images/tierchampion/mordekaiser.png', borderColor: 'blue' },
            { src: 'images/tierchampion/blitzcrank.png', borderColor: '#FF00FF' }
        ]
    },
	{
        name: "Edge of Night",
        tier: 'A',
        image: 'images/tieritem/edgeofnight.png',
        placeholders: [
            { src: 'images/tierchampion/zed.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/qiyana.png', borderColor: 'gold' },
            { src: 'images/tierchampion/viego.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/akali.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/yorick.png', borderColor: 'gold' }
        ]
    },
	{
        name: "Red Buff",
        tier: 'A',
        image: 'images/tieritem/redbuff.png',
        placeholders: [
            { src: 'images/tierchampion/ezreal.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/lucian.png', borderColor: 'gold' },
            { src: 'images/tierchampion/caitlyn.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/akali.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/jhin.png', borderColor: 'gold' }
        ]
    },
	{
        name: "Adaptive Helm",
        tier: 'A',
        image: 'images/tieritem/adaptivehelm.png',
        placeholders: [
            { src: 'images/tierchampion/bard.png', borderColor: '#33CC33' },
            { src: 'images/tierchampion/karthus.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/ekko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/mordekaiser.png', borderColor: 'blue' },
            { src: 'images/tierchampion/neeko.png', borderColor: 'blue' }
        ]
    },
	{
        name: "Hextech Gunblade",
        tier: 'S',
        image: 'images/tieritem/hextechgunblade.png',
        placeholders: [
            { src: 'images/tierchampion/ahri.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/kayle.png', borderColor: '#33CC33' },
            { src: 'images/tierchampion/twistedfate.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/kayn.png', borderColor: 'gold' },
            { src: 'images/tierchampion/lucian.png', borderColor: 'gold' }
        ]
    },
	{
        name: "Protector's Vow",
        tier: 'A',
        image: 'images/tieritem/protectorsvow.png',
        placeholders: [
            { src: 'images/tierchampion/ekko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/neeko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/illaoi.png', borderColor: 'gold' },
            { src: 'images/tierchampion/mordekaiser.png', borderColor: 'blue' },
            { src: 'images/tierchampion/zac.png', borderColor: '#FF00FF' }
        ]
    },
	{
        name: "Ionic Spark",
        tier: 'S',
        image: 'images/tieritem/ionicspark.png',
        placeholders: [
            { src: 'images/tierchampion/ekko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/neeko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/blitzcrank.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/mordekaiser.png', borderColor: 'blue' },
            { src: 'images/tierchampion/zac.png', borderColor: '#FF00FF' }
        ]
    },
	{
        name: "Sunfire Cape",
        tier: 'A',
        image: 'images/tieritem/sunfirecape.png',
        placeholders: [
            { src: 'images/tierchampion/ekko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/mordekaiser.png', borderColor: 'blue' },
            { src: 'images/tierchampion/neeko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/sett.png', borderColor: 'blue' },
            { src: 'images/tierchampion/zac.png', borderColor: '#FF00FF' }
        ]
    },
	{
        name: "Sterak's Gage",
        tier: 'A',
        image: 'images/tieritem/steraksgage.png',
        placeholders: [
            { src: 'images/tierchampion/yorick.png', borderColor: 'gold' },
            { src: 'images/tierchampion/viego.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/poppy.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/urgot.png', borderColor: 'blue' },
            { src: 'images/tierchampion/olaf.png', borderColor: 'lightgrey' }
        ]
    },
	{
        name: "Guardbreaker",
        tier: 'A',
        image: 'images/tieritem/guardbreaker.png',
        placeholders: [
            { src: 'images/tierchampion/lucian.png', borderColor: 'gold' },
            { src: 'images/tierchampion/caitlyn.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/ezreal.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/viego.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/jhin.png', borderColor: 'gold' }
        ]
    },
	{
        name: "Redemption",
        tier: 'A',
        image: 'images/tieritem/redemption.png',
        placeholders: [
            { src: 'images/tierchampion/ekko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/mordekaiser.png', borderColor: 'blue' },
            { src: 'images/tierchampion/neeko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/zac.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/sett.png', borderColor: 'blue' }
        ]
    },
	{
        name: "Tactician's Crown",
        tier: 'A',
        image: 'images/tieritem/tacticianscrown.png',
        placeholders: [
            { src: 'images/tierchampion/kennen.png', borderColor: 'lightgrey' },
            { src: 'images/tierchampion/ekko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/lillia.png', borderColor: 'lightgrey' },
            { src: 'images/tierchampion/sett.png', borderColor: 'blue' },
            { src: 'images/tierchampion/qiyana.png', borderColor: 'gold' }
        ]
    },
	{
        name: "Dragon Claw",
        tier: 'A',
        image: 'images/tieritem/dragonsclaw.png',
        placeholders: [
            { src: 'images/tierchampion/ekko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/neeko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/pantheon.png', borderColor: '##33CC33' },
            { src: 'images/tierchampion/mordekaiser.png', borderColor: 'blue' },
            { src: 'images/tierchampion/blitzcrank.png', borderColor: '#FF00FF' }
        ]
    },
	{
        name: "Nashor's Tooth",
        tier: 'A',
        image: 'images/tieritem/nashorstooth.png',
        placeholders: [
            { src: 'images/tierchampion/ahri.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/annie.png', borderColor: 'lightgrey' },
            { src: 'images/tierchampion/senna.png', borderColor: '#33CC33' },
            { src: 'images/tierchampion/lulu.png', borderColor: 'blue' },
            { src: 'images/tierchampion/vex.png', borderColor: 'blue' }
        ]
    },
	{
        name: "Runaan's Hurricane",
        tier: 'A',
        image: 'images/tieritem/runaanshurricane.png',
        placeholders: [
            { src: 'images/tierchampion/lucian.png', borderColor: 'gold' },
            { src: 'images/tierchampion/jinx.png', borderColor: 'blue' },
            { src: 'images/tierchampion/caitlyn.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/zed.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/ezreal.png', borderColor: '#FF00FF' }
        ]
    },
	{
        name: "Statikk Shiv",
        tier: 'A',
        image: 'images/tieritem/statikkshiv.png',
        placeholders: [
            { src: 'images/tierchampion/kayle.png', borderColor: '#33CC33' },
            { src: 'images/tierchampion/lulu.png', borderColor: 'blue' },
            { src: 'images/tierchampion/ziggs.png', borderColor: 'gold' },
            { src: 'images/tierchampion/sona.png', borderColor: 'gold' },
            { src: 'images/tierchampion/lucian.png', borderColor: 'gold' }
        ]
    },
	{
        name: "Morellonomicon",
        tier: 'A',
        image: 'images/tieritem/morellonomicon.png',
        placeholders: [
            { src: 'images/tierchampion/seraphine.png', borderColor: '#33CC33' },
            { src: 'images/tierchampion/ziggs.png', borderColor: 'gold' },
            { src: 'images/tierchampion/karthus.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/vex.png', borderColor: 'blue' },
            { src: 'images/tierchampion/zac.png', borderColor: '#FF00FF' }
        ]
    },
	{
        name: "Jeweled Gauntlet",
        tier: 'A',
        image: 'images/tieritem/jeweledgauntlet.png',
        placeholders: [
            { src: 'images/tierchampion/karthus.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/ahri.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/vex.png', borderColor: 'blue' },
            { src: 'images/tierchampion/annie.png', borderColor: 'lightgrey' },
            { src: 'images/tierchampion/twistedfate.png', borderColor: '#FF00FF' }
        ]
    },
	{
        name: "Bramble Vest",
        tier: 'B',
        image: 'images/tieritem/bramblevest.png',
        placeholders: [
            { src: 'images/tierchampion/ekko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/pantheon.png', borderColor: 'blue' },
            { src: 'images/tierchampion/neeko.png', borderColor: 'blue' },
            { src: 'images/tierchampion/mordekaiser.png', borderColor: 'blue' },
            { src: 'images/tierchampion/illaoi.png', borderColor: 'gold' }
        ]
    },
	{
        name: "Titan's Resolve",
        tier: 'A',
        image: 'images/tieritem/titansresolve.png',
        placeholders: [
            { src: 'images/tierchampion/viego.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/riven.png', borderColor: 'blue' },
            { src: 'images/tierchampion/akali.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/poppy.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/yorick.png', borderColor: 'gold' }
        ]
    },
	{
        name: "Deathblade",
        tier: 'B',
        image: 'images/tieritem/deathblade.png',
        placeholders: [
            { src: 'images/tierchampion/jinx.png', borderColor: 'lightgrey' },
            { src: 'images/tierchampion/missfortune.png', borderColor: 'blue' },
            { src: 'images/tierchampion/caitlyn.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/lucian.png', borderColor: 'gold' },
            { src: 'images/tierchampion/ezreal.png', borderColor: '#FF00FF' }
        ]
    },
	{
        name: "Last Whisper",
        tier: 'B',
        image: 'images/tieritem/lastwhisper.png',
        placeholders: [
            { src: 'images/tierchampion/jinx.png', borderColor: 'lightgrey' },
            { src: 'images/tierchampion/samira.png', borderColor: 'blue' },
            { src: 'images/tierchampion/caitlyn.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/lucian.png', borderColor: 'gold' },
            { src: 'images/tierchampion/ezreal.png', borderColor: '#FF00FF' }
        ]
    },
	{
        name: "Rabadon's Deathcap",
        tier: 'B',
        image: 'images/tieritem/rabadonsdeathcap.png',
        placeholders: [
            { src: 'images/tierchampion/ahri.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/seraphine.png', borderColor: '#33CC33' },
            { src: 'images/tierchampion/karthus.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/vex.png', borderColor: 'blue' },
            { src: 'images/tierchampion/senna.png', borderColor: 'lightgrey' }
        ]
    },
	{
        name: "Quicksilver",
        tier: 'C',
        image: 'images/tieritem/quicksilver.png',
        placeholders: [
            { src: 'images/tierchampion/riven.png', borderColor: 'blue' },
            { src: 'images/tierchampion/viego.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/zed.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/qiyana.png', borderColor: 'gold' },
            { src: 'images/tierchampion/yorick.png', borderColor: 'gold' }
        ]
    },
	{
        name: "Archangel's Staff",
        tier: 'D',
        image: 'images/tieritem/archangelsstaff.png',
        placeholders: [
            { src: 'images/tierchampion/karthus.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/vex.png', borderColor: 'blue' },
            { src: 'images/tierchampion/lux.png', borderColor: 'blue' },
            { src: 'images/tierchampion/ahri.png', borderColor: '#FF00FF' },
            { src: 'images/tierchampion/garen.png', borderColor: '#33CC33' }
        ]
    },
    // Add other items similarly...
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('tier-list');
    if (!container) {
        console.log("Tier list container not found.");
        return;
    }

    // Sorting the items by tier: S, A, B, C, D
    items.sort((a, b) => {
        const tierOrder = ['S', 'A', 'B', 'C', 'D']; // Define the order of tiers
        return tierOrder.indexOf(a.tier) - tierOrder.indexOf(b.tier);
    });

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        itemDiv.appendChild(img);

        const nameDiv = document.createElement('div');
        nameDiv.className = 'name';
        nameDiv.textContent = item.name;
        itemDiv.appendChild(nameDiv);

        const tierDiv = document.createElement('div');
        tierDiv.className = 'tier';
        tierDiv.textContent = item.tier;
        itemDiv.appendChild(tierDiv);

        const squaresDiv = document.createElement('div');
        squaresDiv.className = 'squares';
        item.placeholders.forEach(placeholder => {
            const squareImg = document.createElement('img');
            squareImg.src = placeholder.src;  // Corrected to properly reference the 'src' property
            squareImg.style.border = `3px solid ${placeholder.borderColor}`;
            squaresDiv.appendChild(squareImg);
        });
        itemDiv.appendChild(squaresDiv);

        container.appendChild(itemDiv);
    });
});



