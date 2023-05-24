import React from 'react';
import Talent from './Talent';

import styles from './index.module.css'

const talent_data = [
    {
        "id": 0,
        "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/pudge_meat_hook.png",
        "gifUrl": "https://i.giphy.com/media/DI3FxMgdLK7mU39ajL/giphy.webp",
        "title": "MEAT HOOK",
        "description": "Бросает окровавленный крюк в указанную цель или в выбранном направлении. Крюк зацепится за первое существо, в которое попадёт, и притащит его к владельцу способности. Вражеские герои получают от крюка урон, а крипы, не являющиеся древними, сразу погибают."
    },
    {
        "id": 1,
        "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/pudge_rot.png",
        "gifUrl": "https://i.giphy.com/media/yqhKS63zlG1oOa1xHA/giphy.webp",
        "title": "ROT",
        "description": "Ядовитое облако, которое замедляет врагов и наносит значительный урон как им, так и владельцу способности."
    },
    {
        "id": 2,
        "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/pudge_flesh_heap.png",
        "gifUrl": "https://i.giphy.com/media/RpsMaYBE6PHA5V2dLD/giphy.webp",
        "title": "FLESH HEAP",
        "description": "Временно блокирует часть любого урона, наносимого владельцу. Способность также пассивно даёт дополнительную силу за каждого убитого или погибшего поблизости вражеского героя. Эффекты накапливаются с начала игры, но герой получит силу только после изучения способности."
    },
    {
        "id": 3,
        "imageUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/pudge_dismember.png",
        "gifUrl": "https://i.giphy.com/media/eEdcT34qSh3l0rHByd/giphy.webp",
        "title": "DISMEMBER",
        "description": "ПРЕРЫВАЕМАЯ — герой заживо пожирает врага, оглушая его и нанося периодический урон, который зависит от силы владельца способности и излечивает его на столько же, сколько наносит урона. Жертва притягивается со скоростью 75.0 единиц в секунду, пока расстояние не сократится до 125.0 единиц. На крипов действует дольше."
    },
];

const Talents = () => {
  return (
    <div id="talent" className={styles.talent}>
      <div className={styles.talent_title}>
        <h1>Таланты</h1>
      </div>
      {
        talent_data.map((obj) => (<Talent {...obj}/>))
      }
    </div>
  );
};

export default Talents;
