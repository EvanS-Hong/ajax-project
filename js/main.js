var char = document.querySelector('.character-column');
var charImg = document.querySelector('.column-middle');
var desc = document.querySelector('.column-right');
var weap = document.querySelector('.weapons');
var container = document.querySelector('.container');
var agentNames = [];
var overlay = document.querySelector('.overlay');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://valorant-api.com/v1/agents?isPlayableCharacter=true');
xhr.responseType = 'json';

xhr.addEventListener('load', function () {
  for (var i = 0; i < xhr.response.data.length; i++) {
    agentNames.push(xhr.response.data[i].displayName.toLowerCase());

    var div = document.createElement('div');
    div.className = 'character';
    div.classList.add(xhr.response.data[i].role.displayName.toLowerCase());
    div.classList.add(xhr.response.data[i].displayName.toLowerCase());

    var img1 = document.createElement('img');
    img1.src = xhr.response.data[i].displayIcon;
    img1.alt = xhr.response.data[i].displayName.toLowerCase();

    var text = document.createElement('p');
    text.textContent = xhr.response.data[i].displayName;

    char.appendChild(div);
    div.appendChild(img1);
    div.appendChild(text);

    var img2 = document.createElement('img');
    img2.src = xhr.response.data[i].fullPortraitV2;
    img2.alt = xhr.response.data[i].displayName.toLowerCase();
    img2.classList.add('picture');
    if (i !== 0) {
      img2.classList.add('hidden');
    }
    charImg.appendChild(img2);

    var div2 = document.createElement('div');
    div2.classList.add(xhr.response.data[i].displayName.toLowerCase());
    if (i === 0) {
      div2.classList.add('content');
    } else {
      div2.classList.add('content', 'hidden');
    }

    var div3 = document.createElement('div');
    div3.className = 'role-wrapper';

    var text2 = document.createElement('h2');
    text2.textContent = '// ROLE';

    var h1 = document.createElement('h1');
    h1.textContent = xhr.response.data[i].role.displayName.toUpperCase();

    var img3 = document.createElement('img');
    img3.src = xhr.response.data[i].role.displayIcon;
    img3.alt = xhr.response.data[i].role.displayName.toLowerCase();

    var text3 = document.createElement('h2');
    text3.textContent = '// BIOGRAPHY';

    var text4 = document.createElement('p');
    text4.textContent = xhr.response.data[i].description;

    var text5 = document.createElement('p');
    text5.textContent = xhr.response.data[i].role.description;

    var div4 = document.createElement('div');
    div4.className = 'abilities';

    var img5 = document.createElement('img');
    img5.src = xhr.response.data[i].abilities[0].displayIcon;
    img5.alt = xhr.response.data[i].abilities[0].displayName;
    img5.className = 'ability1';
    img5.classList.add(xhr.response.data[i].displayName.toLowerCase());

    var img6 = document.createElement('img');
    img6.src = xhr.response.data[i].abilities[1].displayIcon;
    img6.alt = xhr.response.data[i].abilities[1].displayName;
    img6.className = 'ability2';
    img6.classList.add(xhr.response.data[i].displayName.toLowerCase());

    var img7 = document.createElement('img');
    img7.src = xhr.response.data[i].abilities[2].displayIcon;
    img7.alt = xhr.response.data[i].abilities[2].displayName;
    img7.className = 'grenade';
    img7.classList.add(xhr.response.data[i].displayName.toLowerCase());

    var img8 = document.createElement('img');
    img8.src = xhr.response.data[i].abilities[3].displayIcon;
    img8.alt = xhr.response.data[i].abilities[3].displayName;
    img8.className = 'ultimate';
    img8.classList.add(xhr.response.data[i].displayName.toLowerCase());

    var div5 = document.createElement('div');
    div5.className = 'info-window';
    div5.classList.add('hidden');
    div5.classList.add(xhr.response.data[i].displayName.toLowerCase());

    var div6 = document.createElement('div');
    div6.className = 'main-window';

    var div7 = document.createElement('div');
    div7.className = 'exit';

    var x = '\u2715';

    var p1 = document.createElement('p');
    p1.textContent = x;

    var div8 = document.createElement('div');
    div8.className = 'row';

    var div9 = document.createElement('div');
    div9.className = 'column';

    var div10 = document.createElement('div');
    div10.className = 'column';

    var div11 = document.createElement('div');
    div11.className = 'row';

    var div12 = document.createElement('div');
    div12.className = 'abilities';

    var div13 = document.createElement('div');
    div13.className = 'ability-row';

    var div14 = document.createElement('div');
    div14.className = 'ability-row';

    var img9 = document.createElement('img');
    img9.src = xhr.response.data[i].displayIcon;
    img9.alt = xhr.response.data[i].displayName.toLowerCase();

    var text6 = document.createElement('p');
    text6.textContent = xhr.response.data[i].displayName;

    var h2 = document.createElement('h1');
    h2.textContent = xhr.response.data[i].role.displayName.toUpperCase();

    var text7 = document.createElement('p');
    text7.textContent = xhr.response.data[i].role.description;

    var text8 = document.createElement('p');
    text8.textContent = xhr.response.data[i].description;

    var img10 = document.createElement('img');
    img10.src = xhr.response.data[i].abilities[0].displayIcon;
    img10.alt = xhr.response.data[i].abilities[0].displayName;
    img10.className = 'ability';
    img10.classList.add('ability1');
    img10.classList.add(xhr.response.data[i].displayName.toLowerCase());

    var img11 = document.createElement('img');
    img11.src = xhr.response.data[i].abilities[1].displayIcon;
    img11.alt = xhr.response.data[i].abilities[1].displayName;
    img11.className = 'ability';
    img11.classList.add('ability2');
    img11.classList.add(xhr.response.data[i].displayName.toLowerCase());

    var img12 = document.createElement('img');
    img12.src = xhr.response.data[i].abilities[2].displayIcon;
    img12.alt = xhr.response.data[i].abilities[2].displayName;
    img12.className = 'ability';
    img12.classList.add('grenade');
    img12.classList.add(xhr.response.data[i].displayName.toLowerCase());

    var img13 = document.createElement('img');
    img13.src = xhr.response.data[i].abilities[3].displayIcon;
    img13.alt = xhr.response.data[i].abilities[3].displayName;
    img13.className = 'ability';
    img13.classList.add('ultimate');
    img13.classList.add(xhr.response.data[i].displayName.toLowerCase());

    var aContainer1 = document.createElement('div');
    aContainer1.className = 'ability-container';

    var aContainer2 = document.createElement('div');
    aContainer2.className = 'ability-container';

    var aContainer3 = document.createElement('div');
    aContainer3.className = 'ability-container';

    var aContainer4 = document.createElement('div');
    aContainer4.className = 'ability-container';

    var aDiv1 = document.createElement('div');
    aDiv1.className = 'ability-description';
    aDiv1.classList.add('hidden');
    aDiv1.classList.add(xhr.response.data[i].displayName.toLowerCase());

    aDiv1.classList.add('ability1');

    var aRow1 = document.createElement('div');
    aRow1.className = 'row';

    var aDesc1 = document.createElement('p');
    aDesc1.textContent = 'E: ';

    var aDesc2 = document.createElement('p');
    aDesc2.textContent = xhr.response.data[i].abilities[0].displayName;

    var aRow2 = document.createElement('div');
    aRow2.className = 'row';

    var aDesc3 = document.createElement('p');
    aDesc3.textContent = xhr.response.data[i].abilities[0].description;

    var aDiv2 = document.createElement('div');
    aDiv2.className = 'ability-description';
    aDiv2.classList.add('ability2');
    aDiv2.classList.add('hidden');
    aDiv2.classList.add(xhr.response.data[i].displayName.toLowerCase());

    var aRow3 = document.createElement('div');
    aRow3.className = 'row';

    var aDesc4 = document.createElement('p');
    aDesc4.textContent = 'C: ';

    var aDesc5 = document.createElement('p');
    aDesc5.textContent = xhr.response.data[i].abilities[1].displayName;

    var aRow4 = document.createElement('div');
    aRow4.className = 'row';

    var aDesc6 = document.createElement('p');
    aDesc6.textContent = xhr.response.data[i].abilities[1].description;

    var aDiv3 = document.createElement('div');
    aDiv3.className = 'ability-description';
    aDiv3.classList.add('grenade');
    aDiv3.classList.add('hidden');
    aDiv3.classList.add(xhr.response.data[i].displayName.toLowerCase());

    var aRow5 = document.createElement('div');
    aRow5.className = 'row';

    var aDesc7 = document.createElement('p');
    aDesc7.textContent = 'Q: ';

    var aDesc8 = document.createElement('p');
    aDesc8.textContent = xhr.response.data[i].abilities[2].displayName;

    var aRow6 = document.createElement('div');
    aRow6.className = 'row';

    var aDesc9 = document.createElement('p');
    aDesc9.textContent = xhr.response.data[i].abilities[2].description;

    var aDiv4 = document.createElement('div');
    aDiv4.className = 'ability-description';
    aDiv4.classList.add('ultimate');
    aDiv4.classList.add('hidden');
    aDiv4.classList.add(xhr.response.data[i].displayName.toLowerCase());

    var aRow7 = document.createElement('div');
    aRow7.className = 'row';

    var aDesc10 = document.createElement('p');
    aDesc10.textContent = 'X: ';

    var aDesc11 = document.createElement('p');
    aDesc11.textContent = xhr.response.data[i].abilities[3].displayName;

    var aRow8 = document.createElement('div');
    aRow8.className = 'row';

    var aDesc12 = document.createElement('p');
    aDesc12.textContent = xhr.response.data[i].abilities[3].description;

    var bDiv1 = document.createElement('div');
    bDiv1.className = 'ability-description';
    bDiv1.classList.add('hidden');
    bDiv1.classList.add(xhr.response.data[i].displayName.toLowerCase());

    bDiv1.classList.add('ability1');

    var bRow1 = document.createElement('div');
    bRow1.className = 'row';

    var bDesc1 = document.createElement('p');
    bDesc1.textContent = 'E: ';

    var bDesc2 = document.createElement('p');
    bDesc2.textContent = xhr.response.data[i].abilities[0].displayName;

    var bRow2 = document.createElement('div');
    bRow2.className = 'row';

    var bDesc3 = document.createElement('p');
    bDesc3.textContent = xhr.response.data[i].abilities[0].description;

    var bDiv2 = document.createElement('div');
    bDiv2.className = 'ability-description';
    bDiv2.classList.add('ability2');
    bDiv2.classList.add('hidden');
    bDiv2.classList.add(xhr.response.data[i].displayName.toLowerCase());

    var bRow3 = document.createElement('div');
    bRow3.className = 'row';

    var bDesc4 = document.createElement('p');
    bDesc4.textContent = 'C: ';

    var bDesc5 = document.createElement('p');
    bDesc5.textContent = xhr.response.data[i].abilities[1].displayName;

    var bRow4 = document.createElement('div');
    bRow4.className = 'row';

    var bDesc6 = document.createElement('p');
    bDesc6.textContent = xhr.response.data[i].abilities[1].description;

    var bDiv3 = document.createElement('div');
    bDiv3.className = 'ability-description';
    bDiv3.classList.add('grenade');
    bDiv3.classList.add('hidden');
    bDiv3.classList.add(xhr.response.data[i].displayName.toLowerCase());

    var bRow5 = document.createElement('div');
    bRow5.className = 'row';

    var bDesc7 = document.createElement('p');
    bDesc7.textContent = 'Q: ';

    var bDesc8 = document.createElement('p');
    bDesc8.textContent = xhr.response.data[i].abilities[2].displayName;

    var bRow6 = document.createElement('div');
    bRow6.className = 'row';

    var bDesc9 = document.createElement('p');
    bDesc9.textContent = xhr.response.data[i].abilities[2].description;

    var bDiv4 = document.createElement('div');
    bDiv4.className = 'ability-description';
    bDiv4.classList.add('ultimate');
    bDiv4.classList.add('hidden');
    bDiv4.classList.add(xhr.response.data[i].displayName.toLowerCase());

    var bRow7 = document.createElement('div');
    bRow7.className = 'row';

    var bDesc10 = document.createElement('p');
    bDesc10.textContent = 'X: ';

    var bDesc11 = document.createElement('p');
    bDesc11.textContent = xhr.response.data[i].abilities[3].displayName;

    var bRow8 = document.createElement('div');
    bRow8.className = 'row';

    var bDesc12 = document.createElement('p');
    bDesc12.textContent = xhr.response.data[i].abilities[3].description;

    desc.appendChild(div2);
    div2.appendChild(text2);
    div2.appendChild(div3);
    div3.appendChild(h1);
    div3.appendChild(img3);
    div2.appendChild(text3);
    div2.appendChild(text4);
    div2.appendChild(div4);
    div4.appendChild(img5);
    div4.appendChild(img6);
    div4.appendChild(img7);
    div4.appendChild(img8);
    container.appendChild(div5);
    div5.appendChild(div6);
    div6.appendChild(div7);
    div6.appendChild(div8);
    div7.appendChild(p1);
    div8.appendChild(div9);
    div9.appendChild(img9);
    div8.appendChild(div10);
    div10.appendChild(text6);
    div10.appendChild(h2);
    div10.appendChild(text7);
    div6.appendChild(div11);
    div11.appendChild(text8);
    div6.appendChild(div12);
    div12.appendChild(div13);
    div13.appendChild(img10);
    div13.appendChild(img11);
    div12.appendChild(div14);
    div14.appendChild(img12);
    div14.appendChild(img13);

    div2.appendChild(aContainer1);
    aContainer1.appendChild(aDiv1);
    aDiv1.appendChild(aRow1);
    aRow1.appendChild(aDesc1);
    aRow1.appendChild(aDesc2);
    aDiv1.appendChild(aRow2);
    aRow2.appendChild(aDesc3);

    div2.appendChild(aContainer2);
    aContainer2.appendChild(aDiv2);
    aDiv2.appendChild(aRow3);
    aRow3.appendChild(aDesc4);
    aRow3.appendChild(aDesc5);
    aDiv2.appendChild(aRow4);
    aRow4.appendChild(aDesc6);

    div2.appendChild(aContainer3);
    aContainer3.appendChild(aDiv3);
    aDiv3.appendChild(aRow5);
    aRow5.appendChild(aDesc7);
    aRow5.appendChild(aDesc8);
    aDiv3.appendChild(aRow6);
    aRow6.appendChild(aDesc9);

    div2.appendChild(aContainer4);
    aContainer4.appendChild(aDiv4);
    aDiv4.appendChild(aRow7);
    aRow7.appendChild(aDesc10);
    aRow7.appendChild(aDesc11);
    aDiv4.appendChild(aRow8);
    aRow8.appendChild(aDesc12);

    div6.appendChild(bDiv1);
    bDiv1.appendChild(bRow1);
    bRow1.appendChild(bDesc1);
    bRow1.appendChild(bDesc2);
    bDiv1.appendChild(bRow2);
    bRow2.appendChild(bDesc3);

    div6.appendChild(bDiv2);
    bDiv2.appendChild(bRow3);
    bRow3.appendChild(bDesc4);
    bRow3.appendChild(bDesc5);
    bDiv2.appendChild(bRow4);
    bRow4.appendChild(bDesc6);

    div6.appendChild(bDiv3);
    bDiv3.appendChild(bRow5);
    bRow5.appendChild(bDesc7);
    bRow5.appendChild(bDesc8);
    bDiv3.appendChild(bRow6);
    bRow6.appendChild(bDesc9);

    div6.appendChild(bDiv4);
    bDiv4.appendChild(bRow7);
    bRow7.appendChild(bDesc10);
    bRow7.appendChild(bDesc11);
    bDiv4.appendChild(bRow8);
    bRow8.appendChild(bDesc12);

  }
});
xhr.send();

var xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'https://valorant-api.com/v1/weapons');
xhr2.responseType = 'json';

xhr2.addEventListener('load', function () {
  for (var i = 0; i < xhr2.response.data.length; i++) {
    var div = document.createElement('div');
    div.className = 'gun';
    div.classList.add(xhr2.response.data[i].displayName.toLowerCase());
    div.classList.add(xhr2.response.data[i].category);
    div.setAttribute('id', xhr2.response.data[i].displayName.toLowerCase());

    var p = document.createElement('p');
    p.textContent = xhr2.response.data[i].displayName;
    p.className = xhr2.response.data[i].displayName.toLowerCase();

    var img = document.createElement('img');
    img.src = xhr2.response.data[i].displayIcon;
    img.alt = xhr2.response.data[i].displayName;
    img.className = xhr2.response.data[i].displayName.toLowerCase();

    var div2 = document.createElement('div');
    div2.className = 'gun-info';
    div2.classList.add(xhr2.response.data[i].displayName.toLowerCase());
    div2.classList.add('hidden');

    var h1 = document.createElement('h1');
    h1.textContent = xhr2.response.data[i].displayName;

    var p2 = document.createElement('p');
    if (xhr2.response.data[i].shopData !== null) {
      p2.textContent = 'Type: ' + xhr2.response.data[i].shopData.category;
    } else {
      p2.textContent = 'Type: ' + xhr2.response.data[i].displayName;
    }

    var p3 = document.createElement('p');
    p3.textContent = 'Skin Count = ' + xhr2.response.data[i].skins.length + '.';

    weap.appendChild(div);
    div.appendChild(div2);
    div.appendChild(p);
    div.appendChild(img);
    div2.appendChild(h1);
    div2.appendChild(p2);
    div2.appendChild(p3);
  }
});
xhr2.send();

var selector = document.querySelector('.selection-bar');
function viewSwap(event) {
  var agentView = document.querySelector('.agentsView');
  var weaponView = document.querySelector('.weaponsView');
  if (event.target.getAttribute('id') === 'agents') {
    agentView.classList.remove('hidden');
    weaponView.classList.add('hidden');
  } else if (event.target.getAttribute('id') === 'weapons') {
    agentView.classList.add('hidden');
    weaponView.classList.remove('hidden');
  }

}
selector.addEventListener('click', viewSwap);

var pickGuns = document.getElementById('guns');
var pickAgents = document.querySelector('.agents');

function gunSwap(event) {
  var gunList = document.querySelectorAll('.gun');
  for (var i = 0; i < gunList.length; i++) {
    if (gunList[i].classList.contains(event.target.value)) {
      gunList[i].classList.remove('hidden');
    } else if (event.target.value === 'all') {
      gunList[i].classList.remove('hidden');
    } else {
      gunList[i].classList.add('hidden');
    }
  }
}

function agentSwap(event) {
  var agentList = document.querySelectorAll('.character');
  for (var i = 0; i < agentList.length; i++) {
    if (agentList[i].classList.contains(event.target.value)) {
      agentList[i].classList.remove('hidden');
    } else if (event.target.value === 'all') {
      agentList[i].classList.remove('hidden');
    } else {
      agentList[i].classList.add('hidden');
    }
  }
}

pickGuns.addEventListener('change', gunSwap);
pickAgents.addEventListener('change', agentSwap);

function agentInfoSwap(event) {
  var agents = document.querySelectorAll('.character');
  var agentPortrait = document.querySelectorAll('.picture');
  var agentDetails = document.querySelectorAll('.content');
  var agentInfo = document.querySelectorAll('.info-window');
  if (container.classList.contains('hidden')) {
    container.classList.remove('hidden');
  }
  if (event.target.tagName === 'IMG') {
    for (var i = 0; i < agents.length; i++) {
      if (agents[i].classList.contains(event.target.getAttribute('alt'))) {
        agentPortrait[i].classList.remove('hidden');
        agentDetails[i].classList.remove('hidden');
        agentInfo[i].classList.remove('hidden');
        overlay.classList.remove('hidden');
      } else {
        agentPortrait[i].classList.add('hidden');
        agentDetails[i].classList.add('hidden');
        agentInfo[i].classList.add('hidden');
      }
    }
  }
}

char.addEventListener('click', agentInfoSwap);

function agentWindowClose() {
  if (event.target.tagName === 'P') {
    if (event.target.textContent === '\u2715') {
      var parent = (event.target.parentNode);
      var grandParent = parent.parentNode;
      grandParent.parentNode.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  }
}

container.addEventListener('click', agentWindowClose);

function weaponInfoViewSwap() {
  var weapon = document.querySelectorAll('.gun');
  var weaponList = document.querySelectorAll('.gun-info');
  for (var i = 0; i < weapon.length; i++) {
    if (weapon[i].classList.contains(event.target.className) || weapon[i].classList.contains(event.target.getAttribute('id'))) {
      weaponList[i].classList.remove('hidden');
    } else {
      weaponList[i].classList.add('hidden');
    }
  }
}

weap.addEventListener('click', weaponInfoViewSwap);

function toggleAbility() {
  var q = document.querySelectorAll('.ability-description');
  for (var z = 0; z < agentNames.length; z++) {
    if (event.target.classList.contains(agentNames[z]) && event.target.classList.contains('ability1')) {
      for (var i = 0; i < q.length; i++) {
        if (q[i].classList.contains(agentNames[z]) && q[i].classList.contains('ability1') && q[i].classList.contains('hidden')) {
          q[i].classList.remove('hidden');
        } else {
          q[i].classList.add('hidden');
        }
      }
    } else if (event.target.classList.contains(agentNames[z]) && event.target.classList.contains('ability2')) {
      for (var m = 0; m < q.length; m++) {
        if (q[m].classList.contains(agentNames[z]) && q[m].classList.contains('ability2') && q[m].classList.contains('hidden')) {
          q[m].classList.remove('hidden');
        } else {
          q[m].classList.add('hidden');
        }
      }
    } else if (event.target.classList.contains(agentNames[z]) && event.target.classList.contains('grenade')) {
      for (var n = 0; n < q.length; n++) {
        if (q[n].classList.contains(agentNames[z]) && q[n].classList.contains('grenade') && q[n].classList.contains('hidden')) {
          q[n].classList.remove('hidden');
        } else {
          q[n].classList.add('hidden');
        }
      }
    } else if (event.target.classList.contains(agentNames[z]) && event.target.classList.contains('ultimate')) {
      for (var b = 0; b < q.length; b++) {
        if (q[b].classList.contains(agentNames[z]) && q[b].classList.contains('ultimate') && q[b].classList.contains('hidden')) {
          q[b].classList.remove('hidden');
        } else {
          q[b].classList.add('hidden');
        }
      }
    }
  }
}

container.addEventListener('click', toggleAbility);
desc.addEventListener('click', toggleAbility);
