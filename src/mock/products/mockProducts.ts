import { getRandom } from "../../helpers/helper";
import { CategoriesProduct, IProduct, QuotaProduct } from "../../interfaces/products";
import { Product } from "../../models/Product";
import { ENUM_IMAGES_FUNKOS, IMAGES_FUNKOS } from "../../services/importImages";

export const mockProducts: Array<IProduct> = [{
    id: 1,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 3645,
        discount: 36,

    },
    description: "Passenger in hv veh injured in clsn w rail trn/veh nontraf",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.nueve
}, {
    id: 2,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 1839,
        discount: 51,

    },
    description: "Pneumonitis due to inhalation of other solids and liquids",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.doce
}, {
    id: 3,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 1969,
        discount: 10,

    },
    description: "Oth injury of popliteal vein, unspecified leg, init encntr",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.tres
}, {
    id: 4,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 739,
        discount: 41,

    },
    description: "Toxic effect of unspecified alcohol, assault",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.seis
}, {
    id: 5,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 4439,
        discount: 26,

    },
    description: "Acute embolism and thrombosis of veins of upper extremity",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.doce
}, {
    id: 6,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 1442,
        discount: 11,

    },
    description: "Poisoning by other narcotics, undetermined, subs encntr",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.tres
}, {
    id: 7,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 757,
        discount: 18,

    },
    description: "Jump/div into swim pool strk bottom causing oth injury, subs",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.tres
}, {
    id: 8,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 3760,
        discount: 4,

    },
    description: "Nondisp fx of neck of fourth MC bone, right hand, sequela",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.tres
}, {
    id: 9,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 3949,
        discount: 3,

    },
    description: "Streptococcal sepsis, unspecified",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.tres
}, {
    id: 10,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 833,
        discount: 53,

    },
    description: "Nondisp transverse fx shaft of r tibia, 7thP",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.seis
}, {
    id: 11,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 1393,
        discount: 36,

    },
    description: "Unspecified injury of blood vessel of left ring finger",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.tres
}, {
    id: 12,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 3658,
        discount: 30,

    },
    description: "Cellulitis of left finger",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.doce
}, {
    id: 13,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 4149,
        discount: 56,

    },
    description: "Felty's syndrome, unspecified hip",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.doce
}, {
    id: 14,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 2415,
        discount: 33,

    },
    description: "Heart-lung transplant failure",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.doce
}, {
    id: 15,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 4676,
        discount: 54,

    },
    description: "Unsp fx second MC bone, left hand, subs for fx w nonunion",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.seis
}, {
    id: 16,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 1817,
        discount: 31,

    },
    description: "Apraxia following nontraumatic subarachnoid hemorrhage",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.tres
}, {
    id: 17,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 1607,
        discount: 39,

    },
    description: "Unsp intracranial injury w LOC of 31-59 min",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.seis
}, {
    id: 18,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 4104,
        discount: 0,

    },
    description: "Toxic effect of contact w oth venom animals, assault, subs",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.seis
}, {
    id: 19,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 3209,
        discount: 11,

    },
    description: "Congenital deformity of finger(s) and hand",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.nueve
}, {
    id: 20,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 3934,
        discount: 35,

    },
    description: "Poisoning by other antidepressants, undetermined",
    category: CategoriesProduct.FUNKO,
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.seis
}]

