const template = document.createElement('template');
template.innerHTML = `
<style>
*{
    margin: 0;
    padding: 0;
}
.menu {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
}

.menu ul {
    align-items: center;
    height: 57px;
    background-color: #383838;
    display: flex;
    justify-content: space-around;
    font-size: 17px;
}

.menu ul li {
    list-style: none;
}

.menu ul li i {
    display: block;
    margin-bottom: 5px;
}

.asd {
    color: #ff3030;
}
</style>
<div class="menu">
    <ul>
        <li class="asd"><i>@</i>آگهی ها</li>
        <li><i>@</i>دسته ها</li>
        <li><i>@</i>ثبت آگهی</li>
        <li><i>@</i>چت</li>
        <li><i>@</i>دیوار من</li>
    </ul>
</div>`;
class Menu extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}
window.customElements.define("main-menu", Menu);