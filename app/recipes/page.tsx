import Image from "next/image";
import style from './recipes.module.css';

export default function Recipes() {
  return (
    <>
        <div className={`${style.recommended}`}>
          <h1>Recommended Recipes</h1>
          <p>Based on your preference</p>
          <div className={`flex-space-between ${style.recipes}`}>
            <div className={`flex-coloumn ${style.recipe}`}>
            <Image src='/images/food/greenSalad.jpg' alt="" width={30} height={30} />
              <h5>Name</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  Heart health
                </div>
                <div className={`${style.nutrient}`}>
                  Weight Loss
                </div>
              </div>
            </div>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/food/roastedChicken.jpg' alt="" width={200} height={100} />
              <h5>Roasted Chicken</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  B-12
                </div>
                <div className={`${style.nutrient}`}>
                  Protein Rich
                </div>
              </div>
            </div>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/food/bananaShake.jpg' alt="" width={200} height={100} />
              <h5>Banana Shake</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  Quick
                </div>
                <div className={`${style.nutrient}`}>
                  Complex Carbs
                </div>
              </div>
            </div>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/food/sunnySideUp.jpg' alt="" width={200} height={100} />
              <h5>Sunny Side Up</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  Heart Health
                </div>
                <div className={`${style.nutrient}`}>
                  Protein Rich
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`pb1 ${style.recommended}`}>
          <h1>Trending Recipes</h1>
          <p>Cooked by people with same preferences</p>
          <div className={`flex-space-between m1 gap2 ${style.recipes}`}>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/food/oatsPancakes.jpg' alt="" width={200} height={100} />
              <h5>Oats Pancakes</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  Heart Health
                </div>
                <div className={`${style.nutrient}`}>
                  Weight Loss
                </div>
              </div>
            </div>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/food/wholeWheatPasta.jpg' alt="" width={200} height={100} />
              <h5>Whole Wheat Noodles</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  B-12
                </div>
                <div className={`${style.nutrient}`}>
                  Protein Rich
                </div>
              </div>
            </div>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/food/roastedChickenBreast.jpg' alt="" width={200} height={100} />
              <h5>Roasted Chicken Breast</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  Quick
                </div>
                <div className={`${style.nutrient}`}>
                  Complex Carbs
                </div>
              </div>
            </div>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/food/roastedVeggies.jpg' alt="" width={200} height={100} />
              <h5>Roasted Veggies</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  Heart Health
                </div>
                <div className={`${style.nutrient}`}>
                  Protein Rich
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`pb1 ${style.recommended}`}>
          <h1>Healer's Choice</h1>
          <p>Specially for you</p>
          <div className={`flex-space-between m1 gap2 ${style.recipes}`}>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/food/paneerRoll.jpg' alt="" width={200} height={100} />
              <h5>Paneer Roll</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  Protein Rich
                </div>
                <div className={`${style.nutrient}`}>
                  Heart Health
                </div>
              </div>
            </div>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/food/lassi.jpg' alt="" width={200} height={100} />
              <h5>Lassi</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  Quick
                </div>
                <div className={`${style.nutrient}`}>
                  Heart Health
                </div>
              </div>
            </div>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/food/paneer.jpg' alt="" width={200} height={100} />
              <h5>Paneer</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  Protein Rich
                </div>
                <div className={`${style.nutrient}`}>
                  Heart Health
                </div>
              </div>
            </div>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/food/soyaTikka.jpg' alt="" width={200} height={100} />
              <h5>Soya Tikka</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  Protein Rich
                </div>
                <div className={`${style.nutrient}`}>
                  Heart Health
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};