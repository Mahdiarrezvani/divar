import { branches } from './DataBase.js';
let branchsContainer = document.querySelector('.branchs-container');

function CreateCategorys() {
    branches.forEach(function (info) {
        branchsContainer.insertAdjacentHTML("beforeend", `
            <div class="type branche" type="${info.label}">
                <div class="branche" type="${info.label}"><i class="branche" type="${info.label}">@@</i><span class="branche" type="${info.label}">${info.label}</span></div>
                <span class="branche" type="${info.label}">></span>
            </div>`);
    });
}
CreateCategorys();

let andisNumberBranche = -1;
window.addEventListener('click', function (elem) {
    let brancheChoosed = elem.target.attributes.type;
    if (elem.target.attributes.type && elem.target.attributes.class) {
        if (elem.target.attributes.class.nodeValue.includes('branche')) {
            findBranche(brancheChoosed.nodeValue, "subsetPosters", branches);
        } else {
            findBranche(brancheChoosed.nodeValue, "subsetSubset", branches[andisNumberBranche].subsetPosters);
        }
    }
});

function findBranche(brancheChoosed, type, branche) {
    andisNumberBranche = -1;
    let findedBranche = branche.find(function (info) {
        andisNumberBranche++;
        return info.label == brancheChoosed;
    });

    branchsContainer.innerHTML = "";
    if (findedBranche) {
        createGrouping(findedBranche, type, brancheChoosed);
    } else {
        let branche = brancheChoosed.replaceAll(' ', '-');
        location.assign(`posterRegistration.html?branche=${branche}`);
    }
}

function createGrouping(findedBranche, type, brancheChoosed) {
    if (findedBranche[type]) {
        let isSubset = '';
        findedBranche[type].forEach(function (info) {
            //
            let text = "";
            type == "subsetPosters" ? text = info.label : text = info;
            info.subsetSubset ? isSubset = '<span>></span>' : isSubset = '';
            //
            branchsContainer.insertAdjacentHTML("beforeend", `
            <div class="type subsetSubset" type="${text}">
                <div class="subsetSubset" type="${text}">
                    <i class="${info.icon} subsetSubset" type="${text}">@@</i>
                    <span class="subsetSubset" type="${text}">${text}</span>
                </div>
                ${isSubset}
            </div>`);
        });
    } else {
        let branche = brancheChoosed.replaceAll(' ', '-');
        location.assign(`posterRegistration.html?branche=${branche}`);
    }
}