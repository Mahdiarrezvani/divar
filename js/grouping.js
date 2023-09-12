import { createGrouping, findBranchesChosen, findSubsetBranchesChosen } from "./mixins.js"
let typeAdvertisementsContainer = document.querySelector('.type-advertisements-container')
let type = new URLSearchParams(location.search);
let getMainGrouping = type.get('type-grouping');
let getSubset = type.get('sub-set');
createGrouping("grouping.html", typeAdvertisementsContainer);
if (getMainGrouping) {
    findBranchesChosen(getMainGrouping, typeAdvertisementsContainer, "classifiedAds.html")
}
if (getMainGrouping && getSubset) {
    findSubsetBranchesChosen(typeAdvertisementsContainer, getMainGrouping, getSubset, "classifiedAds.html")
}