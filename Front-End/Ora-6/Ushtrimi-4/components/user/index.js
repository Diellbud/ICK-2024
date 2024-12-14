class UserComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        const name = this.getAttribute('name')
        const points = this.getAttribute('points')
        this.innerHTML = `
            <link rel="stylesheet" href="../../components/user/index.css">
    <div class="container">
        <h1 class="itemText">
            ${name}
        </h1>
        <h1 class="pointsText">
            ${points} points
        </h1>
    </div>
        `
    }
}

customElements.define('custom-user', UserComponent)