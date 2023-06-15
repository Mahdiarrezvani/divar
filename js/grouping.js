import { branches } from '../js/mixins.js';
let typeAdvertisementsContainer = document.querySelector('.type-advertisements-container')
let type = new URLSearchParams(location.search)
let getMainGrouping = type.get('type-grouping')
let getSubset = type.get('sub-set')
function createGrouping() {
    branches.forEach(info => {
        let link = info.label.replaceAll(' ', '-')
        typeAdvertisementsContainer.insertAdjacentHTML('beforeend', `
        <div>
            <a href="grouping.html?type-grouping=${link}">
                <div class="type">
                    <div>${info.icon} <span>${info.label}</span></div>
                    <span>></span>
                </div>
            </a>
        </div>`);
    });
}
createGrouping();
function findBranchesChosen() {
    let groupingChosen = getMainGrouping.replaceAll('-', ' ')
    let branche = branches.find(function (info) {
        return info.label == groupingChosen
    })
    // 
    if (branche) {
        typeAdvertisementsContainer.innerHTML = "";
        createElem(branche)
    }
}
function createElem(branche) {
    branche.sebsetAdvertisements.forEach(function (info) {
        let link = info.label.replaceAll(' ', '-')
        let isSubset = ''
        if (info.subsetSubset) {
            isSubset = '<span>></span>'
        } else {
            isSubset = ''
        }
        typeAdvertisementsContainer.insertAdjacentHTML('beforeend', `
            <div>
                <a href="grouping.html?type-grouping=${branche.label}&sub-set=${link}">
                    <div class="type">
                        <div>${info.label}</span></div>
                        ${isSubset}
                    </div>
                </a>
            </div>`);
    });
}
function findSybsetBranchesChosen() {
    let groupingChosen = getMainGrouping.replaceAll('-', ' ')
    let groupingChosenSubset = getSubset.replaceAll('-', ' ')
    let branche = branches.find(function (info) {
        return info.label == groupingChosen
    });
    // console.log(groupingChosenSubset);
    let subsetBranche = branche.sebsetAdvertisements.find(function (info) {
        return info.label == groupingChosenSubset
    });
    if (subsetBranche) {
        typeAdvertisementsContainer.innerHTML = "";
        createSubsetGrouping(subsetBranche)
    }
}
function createSubsetGrouping(branche) {
    // if(branche.subsetSubset){س
    // }else{
    //     // go to brance
    // }
    branche.subsetSubset.forEach(function (info) {
        // <a href="grouping.html?type-grouping=${branche}&sub-set=${link}">
        // a href = go to branche
        typeAdvertisementsContainer.insertAdjacentHTML('beforeend', `
            <div>
                <a href="#">
                    <div class="type">
                        <div>${info}</span></div>
                    </div>
                </a>
            </div>`);
    });
}
if (getMainGrouping) {
    findBranchesChosen()
}
if (getMainGrouping && getSubset) {
    findSybsetBranchesChosen()
}