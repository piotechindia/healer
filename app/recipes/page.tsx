import Image from "next/image";
import style from './recipes.module.css';

export default function Recipes() {
  return (
    <>
      <div className={`${style.body}`}>
        <div className={`pb1 ${style.recommended}`}>
          <h1>Recommended Recipes</h1>
          <p>Based on your preference</p>
          <div className={`flex-space-between m1 gap2 ${style.recipes}`}>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/icons/food.jpeg' alt="" width={200} height={100} />
              <h5>Name</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
              </div>
            </div>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/icons/food.jpeg' alt="" width={200} height={100} />
              <h5>Name</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
              </div>
            </div>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/icons/food.jpeg' alt="" width={200} height={100} />
              <h5>Name</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
              </div>
            </div>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/icons/food.jpeg' alt="" width={200} height={100} />
              <h5>Name</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
                <div className={`${style.nutrient}`}>
                  nutrient
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
              <Image src='/images/icons/food.jpeg' alt="" width={200} height={100} />
              <h5>Name</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
              </div>
            </div>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/icons/food.jpeg' alt="" width={200} height={100} />
              <h5>Name</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
              </div>
            </div>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/icons/food.jpeg' alt="" width={200} height={100} />
              <h5>Name</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
              </div>
            </div>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/icons/food.jpeg' alt="" width={200} height={100} />
              <h5>Name</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`pb1 ${style.recommended}`}>
          <h1>Healer&apos;s Choice</h1>
          <p>Specially for you</p>
          <div className={`flex-space-between m1 gap2 ${style.recipes}`}>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/icons/food.jpeg' alt="" width={200} height={100} />
              <h5>Name</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
              </div>
            </div>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/icons/food.jpeg' alt="" width={200} height={100} />
              <h5>Name</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
              </div>
            </div>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/icons/food.jpeg' alt="" width={200} height={100} />
              <h5>Name</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
              </div>
            </div>
            <div className={`flex-coloumn ${style.recipe}`}>
              <Image src='/images/icons/food.jpeg' alt="" width={200} height={100} />
              <h5>Name</h5>
              <div className={`flex-space-between ${style.component}`}>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
                <div className={`${style.nutrient}`}>
                  nutrient
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
