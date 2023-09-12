import { branches } from './DataBase.js';
export function createGrouping(url, container) {
    branches.forEach(info => {
        let link = info.label.replaceAll(' ', '-');
        container.insertAdjacentHTML('beforeend', `
        <div>
            <a href="${url}?type-grouping=${link}">
                <div class="type">
                    <div>${info.icon} <span>${info.label}</span></div>
                    <span>></span>
                </div>
            </a>
        </div>`);
    });
}

export function findBranchesChosen(getMainGrouping, container, url) {
    let groupingChosen = getMainGrouping.replaceAll('-', ' ');
    let branche = branches.find(function (info) {
        return info.label == groupingChosen
    })
    // 
    if (branche) {
        container.innerHTML = "";
        createElem(branche, container, url)
        console.log(url);
    }
}

function createElem(branche, container, url) {
    branche.sebsetAdvertisements.forEach(function (info) {
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

export function findSubsetBranchesChosen(container, getMainGrouping, getSubset, url) {
    let groupingChosen = getMainGrouping.replaceAll('-', ' ');
    let groupingChosenSubset = getSubset.replaceAll('-', ' ');
    let branche = branches.find(function (info) {
        return info.label == groupingChosen
    });
    let subsetBranche = branche.sebsetAdvertisements.find(function (info) {
        return info.label == groupingChosenSubset
    });
    if (subsetBranche) {
        container.innerHTML = "";
        createSubsetGrouping(subsetBranche, container, url)
    }
}

function createSubsetGrouping(branche, container, url) {
    branche.subsetSubset.forEach(function (info) {
        // ! chenge name  <groupingChosenSubset>
        let groupingChosenSubset = info.replaceAll(' ', '-')
        // classifiedAds.html
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