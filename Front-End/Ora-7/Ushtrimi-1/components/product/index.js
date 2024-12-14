
class ProductComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        const title = this.getAttribute('title')
        const amount = this.getAttribute('amount')
        const image = this.getAttribute('image')
        const imageWidth = this.getAttribute('imageWidth')

        this.innerHTML = `
        <link rel="stylesheet" href="../../components/product/index.css">
        <div class="container">
            <div class="discountContainer">
                <p>
                    -26%
                </p>
            </div>
            <img src="${image}" alt="Product Image" class="img" style="width:${imageWidth}"/>
            <div class="productDescriptions">
                <div class="productTitleContainer">
                    <p class="productTitle">
                        ${title}
                    </p>
                </div>
                <h4>
                    ${amount}
                </h4>
                <p class="discountAmount">
                    2,000.00 €
                </p>
                <p class="includeVat">
                    Përfshirë TVSH
                </p>
                <div class="footerContainer">
                    <button class="addToCartButton">
                        SHTO NE SHPORTË
                    </button>
                    <div class="iconContainer">
                        <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                        
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('product-item', ProductComponent)