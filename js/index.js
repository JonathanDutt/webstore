// let prod0 = {
//     name: `Gold Package`,
//     code: `INTR 2016`,
//     inst: `Ryan Bailey`,
//     start: `Fall 2019`,
//     weeks: 15,
//     breaks: true,
//     duration: `3hr, 0 min`
//   }
  
//   let prod1 = {
//     name: `Diamond Package`,
//     code: `INTR 2012`,
//     inst: `Rocco`,
//     start: `Fall 2019`,
//     weeks: 15,
//     breaks: true,
//     duration: `3hr, 0 min`
//   }
  
  
//   let prod2 = {
//     name: `Platinum Package`,
//     code: `INTR 20132`,
//     inst: `Rocco`,
//     start: `Fall 2019`,
//     weeks: 15,
//     breaks: true,
//     duration: `3hr, 0 min`
//   }

const prod = [  {
    class:`grey-packages`,
    name: `Gold Package`,
    price: 2500,
    guests: `200-400`,
    desc0: ``,
    desc1: `DJ services from 6PM to 1AM`,
    desc2: `4 speaker JBL sound system (inside main hall)`,
    desc3: ``,
    category:  `low`,
    link: `#`,
  }, {
    class:`dark-packages`,  
    name: `Diamond Package`,
    price: 5000,
    guests: `400-700`,
    desc0: `Gold Package`,
    desc1: `DJ services from 6PM to 1AM`,
    desc2: `2 side fill surround sound speakers`,
    desc3: `2 wireless microphones and more!`,
    category:  `available`,
    link: `product.html`
  }, {
    class:`grey-packages`,   
    name: `Platinum Package`,
    price: 7500,
    guests: `700-1000`,
    desc0: `Gold Package`,
    desc1: `DJ services from 6PM to 1AM`,
    desc2: `2 side fill surround sound speakers`,
    desc3: `2 wireless microphones and more!`,
    category:  `low`,
    link: `#`,
 }, {
    class:`dark-packages`,  
    name: `Obsidian Package`,
    price: 5000,
    guests: `1000-1500`,
    desc0: `Gold Package`,
    desc1: `DJ services from 6PM to 1AM`,
    desc2: `2 side fill surround sound speakers`,
    desc3: `2 wireless microphones and more!`,
    category:  `unavailable`,
    link: `#`,
  }];

 function getProductsAsHtmlString(prod) {
    return `<article class="${prod.class} ${prod.category}" >
    <div class="product-wrapper">
      <h4>${prod.name} </h4>
      <ul class="prod-desc">
        <li> ${prod.guests} Guests </li>
        <li> ${prod.desc1} </li>
        <li> ${prod.desc0} </li>
        <li> ${prod.desc2} </li>
        <li> ${prod.desc3} </li>
      </ul>
      <div class="info-img">
          <a href="${prod.link}">
            <img src="img/more-info.svg" alt="More info">
          </a>
      </div>
    </div>
  </article>`;
  }

function renderList(arr) {
  
    const arrHtmlProducts = arr.map(getProductsAsHtmlString);
    const strHtmlItems = arrHtmlProducts.join(`\n`)
    document.getElementById(`products`).innerHTML += strHtmlItems;
  }
renderList(prod)