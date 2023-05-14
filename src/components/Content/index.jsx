import React from 'react';

import styles from './index.module.css';

import pudge from '../../image/pudge.png';
import hero_strength from '../../icon/hero_strength.png';
import hero_agility from '../../icon/hero_agility.png';
import hero_intelligence from '../../icon/hero_intelligence.png';

import icon_damage from '../../icon/icon_damage.png';
import icon_attack_time from '../../icon/icon_attack_time.png';
import icon_attack_range from '../../icon/icon_attack_range.png';
import icon_armor from '../../icon/icon_armor.png';
import icon_magic_resist from '../../icon/icon_magic_resist.png';
import icon_movement_speed from '../../icon/icon_movement_speed.png';
import icon_turn_rate from '../../icon/icon_turn_rate.png';
import icon_vision from '../../icon/icon_vision.png';


import CarouselBox from '../CarouselBox';
import Talents from '../Talents';

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.tip}>
        <div className={styles.tip_text}>
          <h4>Для более подробной информации зарегистрируйтесь</h4>
        </div>
      </div>
      {/* Заголовок */}
      <div className={styles.title}>
        <div className={styles.title_text}>
          <h1>PUDGE</h1>
          <h4>ПРИТЯГИВАЕТ ВРАГОВ СВОИМ КРЮКОМ</h4>
        </div>
      </div>
      {/* <!-- Характеристики --> */}
      <div className={styles.characteristic}>
        <div className={styles.attributes}>
          <div className={styles.attributes_app}>
            <div className={styles.attributes_wrapper}>
              <div className={styles.attributes_ph}>
                <img src={pudge} alt='pudge icon'/>
                <div className={styles.health}>
                  700
                  <div className={styles.att_plus}>+4.3</div>
                </div>
                <div className={styles.mana}>
                  267
                  <div className={styles.att_plus}>+0.8</div>
                </div>
              </div>
              <div className={styles.attributes_num}>
                <div className={styles.attributes_num_item}>
                  <img src={hero_strength} alt='hero_strength'/>
                  <div className={styles.main_num}>25</div>
                  <div className={styles.notmain}>+3.0</div>
                </div>
                <div className={styles.attributes_num_item}>
                  <img src={hero_agility} alt='hero_agility'/>
                  <div className={styles.main_num}>14</div>
                  <div className={styles.notmain}>+1.4</div>
                </div>
                <div className={styles.attributes_num_item}>
                  <img src={hero_intelligence} alt='hero_intelligence'/>
                  <div className={styles.main_num}>16</div>
                  <div className={styles.notmain}>+1.8</div>
                </div>
              </div>
            </div>
            <div className={styles.name_characteristic}>
              <h4>АТТРИБУТЫ</h4>
            </div>
          </div>
          <div className={styles.indicators}>
            <div className={styles.indicator}>
              <div className={styles.indicators_atack}>
                <div className={styles.indicator_title}>АТАКА</div>
                <div className={styles.indicators_atack_item}>
                  <img src={icon_damage} alt='icon_damage'/>
                  <div className={styles.indicator_text}>70-76</div>
                </div>
                <div className={styles.indicators_atack_item}>
                  <img src={icon_attack_time} alt='icon_attack_time'/>
                  <div className={styles.indicator_text}>1.7</div>
                </div>
                <div className={styles.indicators_atack_item}>
                  <img src={icon_attack_range} alt='icon_attack_range'/>
                  <div className={styles.indicator_text}>175</div>
                </div>
              </div>
              <div className={styles.indicators_def}>
                <div className={styles.indicator_title}>ЗАЩИТА</div>
                <div className={styles.indicators_def_item}>
                  <img src={icon_armor} alt='icon_armor'/>
                  <div className={styles.indicator_text}>1.3</div>
                </div>
                <div className={styles.indicators_def_item}>
                  <img src={icon_magic_resist} alt='icon_magic_resist'/>
                  <div className={styles.indicator_text}>25%</div>
                </div>
              </div>
              <div className={styles.indicators_mobility}>
                <div className={styles.indicator_title}>МОБИЛЬНОСТЬ</div>
                <div className={styles.indicators_mobility_item}>
                  <img src={icon_movement_speed} alt='icon_movement_speed'/>
                  <div className={styles.indicator_text}>280</div>
                </div>
                <div className={styles.indicators_mobility_item}>
                  <img src={icon_turn_rate} alt='icon_turn_rate'/>
                  <div className={styles.indicator_text}>0.7</div>
                </div>
                <div className={styles.indicators_mobility_item}>
                  <img src={icon_vision} alt='icon_vision'/>
                  <div className={styles.indicator_text}>1800/800</div>
                </div>
              </div>
            </div>
            <div className={styles.name_characteristic}>
              <h4>ПОКАЗАТЕЛИ</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="about">
        <div class="about_text">
          <p>
            На полях Вечной бойни, далеко на юге от Квойджа, тучная фигура упорно трудится под
            покровом ночи — расчленяет и потрошит павших, сгружая в кучи их конечности и потроха, —
            чтобы к рассвету поле боя было чисто. В этом проклятом мире ничто не разлагается само по
            себе — мертвецам не суждено вернуться обратно в землю, и не важно, насколько глубока
            могила. Окружённый стаями птиц-падальщиков, каждая из которых ждёт своего кусочка
            мёртвой плоти, мясник упражняется с лезвиями, и с каждым движением они становятся лишь
            острее. Вжик-вжик-тук. Плоть отсекается от костей, связки и сухожилия разрываются как
            мокрая бумага. И хоть мясницкое ремесло всегда было по вкусу тучному здоровяку, с годами
            у него проснулся интерес ещё и к тому, что остаётся после его работы. Сначала кусочек
            мускула там, потом глоточек крови здесь... Вскоре он впивался в самые крепкие тела
            подобно грызущей кость собаке. Даже те, кто не питают страха перед жнецом Смерти,
            предпочитают не связываться с мясником.
          </p>
        </div>
      </div>
      <CarouselBox/>
      <Talents/>
    </div>
  );
};

export default Content;
