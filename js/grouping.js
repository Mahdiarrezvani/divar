import { branches } from './DataBase.js';
let typePosterContainer = document.querySelector('.type-posters-container')
let type = new URLSearchParams(location.search);
let getMainGrouping = type.get('type-grouping');
let getSubset = type.get('sub-set');

function createGrouping() {
    branches.forEach(info => {
        let link = info.label.replaceAll(' ', '-');
        typePosterContainer.insertAdjacentHTML('beforeend', `
        <div>
            <a href="grouping.html?type-grouping=${link}">
                <div class="type">
                    <div><iconify-icon icon="${info.icon}"></iconify-icon><span>${info.label}</span></div>
                    <span>></span>
                </div>
            </a>
        </div>`);
    });
}

function findBranchesChosen() {
    let groupingChosen = getMainGrouping.replaceAll('-', ' ');
    let branche = branches.find(function (info) {
        return info.label == groupingChosen
    })
    // 
    if (branche) {
        typePosterContainer.innerHTML = "";
        createElem(branche, typePosterContainer, "classifiedPosters.html")
    }
}

function createElem(branche, container, url) {
    branche.subsetPosters.forEach(function (info) {
        let link = info.label.replaceAll(' ', '-');
        let isSubset = '';
        // 
        info.subsetSubset ? isSubset = '<span>></span>' : isSubset = '';
        // ! شرط کلین کن
        if (info.subsetSubset) {
            container.insertAdjacentHTML('beforeend', `
            <div>
                <a href="grouping.html?type-grouping=${branche.label}&sub-set=${link}">
                    <div class="type">
                        <div>${info.label}</span></div>
                        ${isSubset}
                    </div>
                </a>
            </div>`);
        } else {
            container.insertAdjacentHTML('beforeend', `
            <div>
                <a href="${url}?branche=${link}">
                    <div class="type">
                        <div>${info.label}</span></div>
                    </div>
                </a>
            </div>`);
        }
    });
}

function findSubsetBranchesChosen(url) {
    let groupingChosen = getMainGrouping.replaceAll('-', ' ');
    let groupingChosenSubset = getSubset.replaceAll('-', ' ');
    let branche = branches.find(function (info) {
        return info.label == groupingChosen
    });
    let subsetBranche = branche.subsetPosters.find(function (info) {
        return info.label == groupingChosenSubset
    });
    if (subsetBranche) {
        typePosterContainer.innerHTML = "";
        createSubsetGrouping(subsetBranche, typePosterContainer, "classifiedPosters.html")
    }
}

function createSubsetGrouping(branche, container, url) {
    branche.subsetSubset.forEach(function (info) {
        // ! chenge name  <groupingChosenSubset>
        let groupingChosenSubset = info.replaceAll(' ', '-')
        // classifiedPosters.html
        container.insertAdjacentHTML('beforeend', `
        <div>
            <a href="${url}?branche=${groupingChosenSubset}">
                <div class="type">
                    <div>${info}</span></div>
                </div>
            </a>
        </div>`);
    });
}

createGrouping();
if (getMainGrouping) {
    findBranchesChosen()
}
if (getMainGrouping && getSubset) {
    findSubsetBranchesChosen();
}