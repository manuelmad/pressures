class customHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }
    static get observedAttributes() {
        return ["img", "name1", "name2", "name3", "name4","linkhome", "link1", "link2", "link3", "link4"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        if(attr === "img") {
            this.img = newVal;
        }
        if(attr === "name1") {
            this.name1 = newVal;
        }
        if(attr === "name2") {
            this.name2 = newVal;
        }
        if(attr === "name3") {
            this.name3 = newVal;
        }
        if(attr === "name4") {
            this.name4 = newVal;
        }
        if(attr === "linkhome") {
            this.linkhome = newVal;
        }
        if(attr === "link1") {
            this.link1 = newVal;
        }
        if(attr === "link2") {
            this.link2 = newVal;
        }
        if(attr === "link3") {
            this.link3 = newVal;
        }
        if(attr === "link4") {
            this.link4 = newVal;
        }
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <header>
                <div class="header-logo-container">
                    <a href="${this.linkhome}"><img src="${this.img}" alt="logo"></a>
                </div>
                <nav>
                    <div class="container__menu-principal">
                        <ul id="menu-principal">
                            <li><a href="${this.link1}">${this.name1}</a></li>
                            <li><a href="${this.link2}">${this.name2}</a></li>
                            <li><a href="${this.link3}">${this.name3}</a></li>
                            <li><a href="${this.link4}">${this.name4}</a></li>
                        </ul>
                    </div>
                    <div class="container__icono-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <ul id="menu-desplegable">
                            <li>
                                <a href="${this.link1}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder2-open" viewBox="0 0 16 16">
                                        <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/>
                                    </svg> ${this.name1}
                                </a>
                            </li>
                            <li>
                                <a href="${this.link2}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    </svg> ${this.name2}
                                </a>
                            </li>
                            <li>
                                <a href="${this.link3}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-person" viewBox="0 0 16 16">
                                        <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/>
                                    </svg> ${this.name3}
                                </a>
                            </li>
                            <li>
                                <a href="${this.link4}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                                    </svg> ${this.name4}
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        return `
          <style>
            :host * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
            :host {
                --bckg-color: #252C5A;
                --font-color: white;
            }

            header {
                width: 100%;
                height: 6.2rem;
                display: flex;
                background-color: var(--bckg-color);
            }
        
            header > div {
                width: 20rem;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            
            header > div a {
                width: 14rem;
                height: 4.7rem;
            }
            
            header > div img {
                width: 100%;
                height: 100%;
            }
            
            header nav {
                display: flex;
                flex-grow: 1;
                justify-content: flex-end;
                align-items: center;
            }
            
            .container__icono-menu {
                position: relative;
                right: 0;
            }
            
            .bi-list {
                position: absolute;
                margin-top: 0;
                right: 0rem;
                top: -2rem;
                margin-right: 1rem;
                color: var(--font-color);
            }
            
            .bi-list:hover {
                cursor: pointer;
            }
            
            .container__menu-principal, .container__icono-menu, .container__logo-personal {
                margin: 0;
            }
            
            nav #menu-desplegable {
                position: absolute;
                list-style: none;
                visibility: hidden;
                font-size: var(--sm);
                right: 0rem;
                top: -23rem;
                background-color: var(--bckg-color);
                border: 0.1rem solid var(--font-color);
                transition: 0.5s ease all;
            }
            
            .container__icono-menu:hover > #menu-desplegable {
                visibility: visible;
                top: -4rem;
            }
            
            nav #menu-desplegable li {
                line-height: 3rem;
                border: 0.05rem solid var(--font-color);
                display: block;
                width: 15rem;
            }
            
            nav #menu-desplegable li:last-child {
                margin-bottom: 0;
            }
            
            nav #menu-desplegable a {
                text-decoration: none;
                display: block;
                color: var(--font-color);
                padding: 1rem;
            }
            
            nav #menu-desplegable a:active {
                background-color: white;
                color: var(--bckg-color);
            }
            
            nav #menu-principal {
                position: absolute;
                visibility: hidden;
                display: flex;
                right: 0;
                list-style: none;
            }
            
            nav #menu-principal a {
                color: var(--font-color);
                text-decoration: none;
                font-weight: bold;
            }

            ul {
                font-size: var(--sm);
                line-height: 2rem;
            }

            @media (min-width: 600px) {
                .container__icono-menu {
                    display: none;
                }
                
                nav #menu-principal {
                    position: static;
                    justify-content: space-between;
                    visibility: visible;
                    align-items: center;
                    margin-right: 3rem;
                }
                
                nav #menu-principal li {
                    padding: 0.8rem;
                }
            }

            @media (min-width: 1024px) {
                    header > .header-logo-container {
                        margin-left: 5rem;
                    }
                    
                    nav #menu-principal {
                        font-size: var(--md);
                        margin-right: 10rem;
                    }
                    
                    nav #menu-principal a:hover {
                        color: var(--very-light-gray);
                    }
            }
          </style>
        `;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("my-header", customHeader);