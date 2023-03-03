var char = document.querySelector('.character-column');
var charImg = document.querySelector('.column-middle');
var desc = document.querySelector('.column-right');
var weap = document.querySelector('.weapons');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://valorant-api.com/v1/agents?isPlayableCharacter=true');
xhr.responseType = 'json';

xhr.addEventListener('load', function () {
  for (var i = 0; i < xhr.response.data.length; i++) {
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
    if (i !== 0) {
      img2.className = 'hidden';
    }
    charImg.appendChild(img2);

    var div2 = document.createElement('div');
    if (i === 0) {
      div2.className = 'content';
    } else {
      div2.className = 'content hidden';
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
    img5.className = 'ability';

    var img6 = document.createElement('img');
    img6.src = xhr.response.data[i].abilities[1].displayIcon;
    img6.alt = xhr.response.data[i].abilities[1].displayName;
    img6.className = 'ability';

    var img7 = document.createElement('img');
    img7.src = xhr.response.data[i].abilities[2].displayIcon;
    img7.alt = xhr.response.data[i].abilities[2].displayName;
    img7.className = 'ability';

    var img8 = document.createElement('img');
    img8.src = xhr.response.data[i].abilities[3].displayIcon;
    img8.alt = xhr.response.data[i].abilities[3].displayName;
    img8.className = 'ability';

    var div5 = document.createElement('div');
    div5.className = 'info-window';

    var div6 = document.createElement('div');
    div6.className = 'main-window';

    var div7 = document.createElement('div');
    div7.className = 'exit';

    var p1 = document.createElement('p');
    p1.textContent = '&#10006;';

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
    document.body.appendChild(div5);
    document.body.appendChild(div6);
    div6.appendChild(div7);
    div6.appendChild(div8);
    div8.appendChild(div9);
    div9.appendChild(img3);
    div8.appendChild(div10);
    div10.appendChild(text);
    div10.appendChild(h1);
    div10.appendChild(text5);
    div6.appendChild(div11);
    div11.appendChild(text4);
    div6.appendChild(div12);
    div12.appendChild(div13);
    div13.appendChild(img5);
    div13.appendChild(img6);
    div12.appendChild(div14);
    div14.appendChild(img7);
    div14.appendChild(img8);
  }
});
xhr.send();

var xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'https://valorant-api.com/v1/weapons');
xhr2.responseType = 'json';

xhr2.addEventListener('load', function () {
  for (var i = 0; i < xhr2.response.data.length; i++) {
    var div = document.createElement('div');
    if (xhr2.response.data[i].displayName === 'Sheriff') {
      div.className = 'gun sheriff';
      div.classList.add(xhr2.response.data[i].category);
    } else if (xhr2.response.data[i].displayName === 'Classic') {
      div.className = 'gun classic';
      div.classList.add(xhr2.response.data[i].category);
    } else if (xhr2.response.data[i].displayName === 'Frenzy') {
      div.className = 'gun frenzy';
      div.classList.add(xhr2.response.data[i].category);
    } else {
      div.className = 'gun';
      div.classList.add(xhr2.response.data[i].category);

    }

    var p = document.createElement('p');
    p.textContent = xhr2.response.data[i].displayName;

    var img = document.createElement('img');
    img.src = xhr2.response.data[i].displayIcon;
    img.alt = xhr2.response.data[i].displayName;

    weap.appendChild(div);
    div.appendChild(p);
    div.appendChild(img);
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
