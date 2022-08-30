import { imgSlides } from "../components/carrusel/Carrusel";

export const IMAGES_BRANDS: any = {
  disney: require("../assets/brands/disney.svg").default,
  logo_funko: require("../assets/brands/logo_funko.svg").default,
  logo_LOL: require("../assets/brands/logo_LOL.svg").default,
  marvel: require("../assets/brands/marvel.svg").default,
};

export enum ENUM_IMAGES_BRANDS {
  disney = 0,
  logo_funko,
  logo_LOL,
  marvel,
}

export function getImagesBrands(): Array<imgSlides> {
  let brands: Array<imgSlides> = [];
  for (let i = 0; i < Object.keys(IMAGES_BRANDS).length; i++) {
    brands.push({
      image: `${IMAGES_BRANDS[ENUM_IMAGES_BRANDS[i]]}`,
      text: `${ENUM_IMAGES_BRANDS[i]}`,
    });
  }
  return brands;
}
