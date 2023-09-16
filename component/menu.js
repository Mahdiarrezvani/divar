let template = document.createElement('template');
template.innerHTML = `
<style>
    .menu {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        align-items: center;
        height: 55px;
        background-color: #383838;
        display: flex;

        div {
            width: 100%;
            height: 100%;

            span{
                margin-top: 7px;
                display: block;
                margin-bottom: 5px;
                font-size: 19px;
            }
            
            a {
                text-decoration: none;
                color: #fff;
            }
        }
    }
</style>
<div class="menu">
    <div><a class="link" href="index.html"><span>دیوار</span>آگهی ها</a></div>
    <div><a class="link" href="grouping.html"><span>@</span>دسته ها</a></div>
    <div><a class="link" href="choesBranchForPsoterRegistration.html"><span><iconify-icon icon="ph:plus-circle-fill"></iconify-icon></span>ثبت آگهی</a></div>
    <div><a class="link" href="chat.html"><span><iconify-icon icon="bi:chat-fill"></iconify-icon></span>چت</a></div>
    <div><a class="link" href="myDivar.html"><span><iconify-icon icon="mdi:user"></iconify-icon></span>دیوار من</a></div>
</div>
`;
class Menu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
window.customElements.define("menu-component", Menu);