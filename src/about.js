// entry helper function
function createParagraph(paragraph) {
    const para = document.createElement('p');
    para.textContent = paragraph;
    para.classList.add('medium', 'indent', 'para-distance');

    return para
}

export default function () {
    const mainContainer = document.querySelector('#content')

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    mainContainer.appendChild(aboutContainer);

    const title = document.createElement('h1');
    title.classList.add('largest');
    title.textContent = 'Meet the Maven';
    aboutContainer.appendChild(title);

    const source = document.createElement('p');
    source.classList.add('medium', 'centered');
    source.textContent = 'Taken from Maven entry in POE wiki: https://www.poewiki.net/wiki/The_Maven';
    aboutContainer.appendChild(source);

    const paragraphs = [
        {para: 'The Maven is an NPC and boss encountered within maps. Progressing the Maven\'s questline allows the player to unlock the Maven\'s Beacon, which lets the player call upon the Maven to the map to witness you. Defeating enough unique bosses while the Maven is witnessing you will earn you a Maven\'s Invitation to challenge them all at once for rewards. Completing each Invitation for the first time earns you an atlas passive skill point. '},
        {para: 'The Maven can also be fought as a boss after collecting enough Crescent Splinters from challenging Invitations to form The Maven\'s Writ. Defeating the Maven for the first time will reward the player with an Atlas Book of Skill and a Ceremonial Voidstone. '},
        {para: 'Activate the Maven\'s Beacon on your map device to call upon the Maven to the map. She will appear when you fight the map boss, empowering it in various ways. Once defeated, the boss will be marked as being witnessed by the Maven. '},
        {para: 'The Maven cannot be called to maps if she has already witnessed the boss, until you encounter them in a Maven\'s Invitation. To know if the map is eligible to have Maven\'s presence, you can check if her symbol is highlighted before activating your map device. When witnessing a map occupied by an Elder Guardian or Conqueror, the witness status for the Elder Guardian/Conqueror takes priority over the base map\'s; the witness status for the opened map area is ignored and won\'t count as being witnessed after completing the map. '},
        {para: 'The Maven will boost the boss in one of the following ways: '},
        {para: 'Create one or more clone(s) of the boss (Shadow, rise and fight! and other voice lines)'},
        {para: 'Guard: Grants a 3 second guard skill that takes 75% of the damage taken by the boss'},
        {para: 'Increase the boss\'s speed'},
        {para: 'Heal: Regenerates a percentage of the boss\'s life (the cooldown for this boost increases each time it is used, can be countered via reduced regeneration rate)'},
        {para: 'Spatial Decay: enemies inflict the debuff on hit, dealing chaos damage over time for a duration.'},
        {para: 'Ethereal Tendrils: the player\'s action speed is reduced; can be removed by moving or using a blink skill.'},
        {para: 'Degen Orbs: Cast an orb that follows the player and deals fire damage over time from the debuff Orb Fire'},
        {para: 'Chilling Orbs: Casts several orb that when triggered, explodes and drops Frozen Ground which deals cold damage over time'},
        {para: 'Volatile Orbs: Casts an orb that chases the player and explodes, dealing lightning damage'},
        {para: 'Beam Orbs: Creates an orb that branches out and rotates, dealing damage in an area for a duration.'},
        {para: 'More about the Maven can be found at the link above.'}
    ]

    paragraphs.forEach(paraItem => {
        const newPara = createParagraph(paraItem.para);
        aboutContainer.appendChild(newPara);
    })
}