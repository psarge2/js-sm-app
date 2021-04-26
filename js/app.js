let data = {
  fullName: 'Jane Doe',
  title: 'UI/UX Designer',
  socials: [
    {
      id: 'fb',
      service: 'Facebook',
      url: 'https://facebook.com/jdoe24',
      icon: 'fab fa-facebook-f'
    },
    {
      id: 'ig',
      service: 'Intagram',
      url: 'https://instgram.com/jdoe24',
      icon: 'fab fa-instagram'
    },
    {
      id: 'db',
      service: 'Dribbble',
      url: 'https://dribbble.com/jdoe24',
      icon: 'fab fa-dribbble'
    },
    {
      id: 'tw',
      service: 'Twitter',
      url: 'https://twitter.com/jdoe24',
      icon: 'fab fa-twitter'
    }
  ]
}
let cardApp = (data) => {
  let body = document.getElementsByTagName('body')[0];
  let root = document.createElement('div');
  let style = document.createElement('style');
  let card = document.createElement('section');
  let html = `
  <div class="card__wrapper">
    <img
      src="https://images.generated.photos/B7CJLWXHEhr73EmhhiWyTK-WT39VwobNNqwknL-vwUg/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/NzY1NDcuanBn.jpg"
      alt="" class="card__user-img">
    <div class="card__info">
      <span class="card__name">${data.fullName}</span>
      <span class="card__title">${data.title}</span>
    </div>
    <div class="card__socials">
    
    </div>
  </div>
  `;
  let cssStyles = `
    .card {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(50px);
    }

    .card__wrapper {
      padding: 20px 20px 3rem 20px;
      max-width: 300px;
      width: 100%;
      background: #fff;
      box-shadow: 0px 0px 62px 0px rgba(0, 0, 0, 0.22);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .card__user-img {
      border: 2px solid #2c5eff;
      height: 70px;
      width: 70px;
      margin: 2rem 0 1.5rem;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
    }

    .card__info {
      margin-bottom: 2rem;
    }

    .card__name {
      text-align: center;
      display: block;
      font-weight: 600;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .card__title {
      text-align: center;
      display: block;
      font-weight: 600;
      font-size: 0.7rem;
      margin-bottom: 2rem;
    }

    .card__icon {
      width: 200px;
      padding: 10px;
      border: 1px solid #000;
      border-radius: 3px;
      margin-bottom: 0.4rem;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
      cursor: pointer;
    }

    .card__icon-box {
      width: 25px;
      display: inline-block;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .card__icon-title {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .card__icon--fb {
      color: #2c5eff;
      border: 1px solid #2c5eff;
    }

    .card__icon--fb:hover {
      color: #fff;
      background: #2c5eff;
    }

    .card__icon--ig {
      color: #bc1888;
      border: 1px solid #bc1888;
    }

    .card__icon--ig:hover {
      color: #fff;
      background: linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
    }

    .card__icon--db {
      color: #f962b1;
      border: 1px solid #f962b1;
    }

    .card__icon--db:hover {
      color: #fff;
      background: #f962b1;
    } 
    .card__icon--tw {
      color: #00acee;
      border: 1px solid #00acee;
    }

    .card__icon--tw:hover {
      color: #fff;
      background: #00acee;
    } 
  `;

  body.prepend(root);
  root.classList.add('root');
  root.prepend(card);
  root.style.cssText = `
    background: url('https://images.unsplash.com/photo-1437435409766-a478cc6da81a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80');
    background-size: cover; 
    background-position: center;
  `;
  root.prepend(style);
  card.classList.add('card');
  style.innerHTML = cssStyles;
  card.innerHTML = html;

  let cardSocials = card.getElementsByClassName('card__socials')[0];

  data.socials.forEach((item, index) => {
    let tempNode = document.createElement('div')
    tempNode.classList.add('card__icon', `card__icon--${item.id}`)
    tempNode.innerHTML = `
    <span class="card__icon-box">
    <i class="${item.icon}"></i>
      </span>
    <span class="card__icon-title">
    ${item.service}
    </span>
    `;
    cardSocials.append(tempNode)
  });
};
cardApp(data);