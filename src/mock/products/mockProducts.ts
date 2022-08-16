import { getRandom } from "../../helpers/helper";
import { CategoryProduct, IProduct, QuotaProduct, Toy } from "../../interfaces/products";
import { Product } from "../../models/Product";
import { ENUM_IMAGES_FUNKOS, IMAGES_FUNKOS } from "../../services/importImagesFunkos";
import { ENUM_IMAGES_DINO, IMAGES_DINO } from "../../services/importImagesDinosaurios";

export const mockProducts: Array<IProduct> = [{
    id: 1,
    title: `Funko POP | Game Of Thrones - ${ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]}`,
    price: {
        price: 3645,
        discount: 36,

    },
    description: "Passenger in hv veh injured in clsn w rail trn/veh nontraf",
    category: { toy: Toy.FUNKO },
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
    category: { toy: Toy.FUNKO },
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
    category: { toy: Toy.FUNKO },
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
    category: { toy: Toy.FUNKO },
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
    category: { toy: Toy.FUNKO },
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
    category: { toy: Toy.FUNKO },
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
    category: { toy: Toy.FUNKO },
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
    category: { toy: Toy.FUNKO },
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
    category: { toy: Toy.FUNKO },
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
    category: { toy: Toy.FUNKO },
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
    category: { toy: Toy.FUNKO },
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
    category: { toy: Toy.FUNKO },
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
    category: { toy: Toy.FUNKO },
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
    category: { toy: Toy.FUNKO },
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
    category: { toy: Toy.FUNKO },
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
    category: { toy: Toy.FUNKO },
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
    category: { toy: Toy.FUNKO },
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
    category: { toy: Toy.FUNKO },
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
    category: { toy: Toy.FUNKO },
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
    category: { toy: Toy.FUNKO },
    image: IMAGES_FUNKOS[ENUM_IMAGES_FUNKOS[getRandom(Object.keys(IMAGES_FUNKOS).length)]],
    quotas: QuotaProduct.seis
}, {
    id: 21,
    title: "Bobby",
    price: {
        price: 1037,
        discount: 41

    },
    description: "Nondisp fx of med condyle of r femr, 7thQ",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.seis
}, {
    id: 22,
    title: "Daisy",
    price: {
        price: 3137,
        discount: 32,

    },
    description: "Type III traum spondylolysis of sixth cervcal vertebra, init",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.tres
}, {
    id: 23,
    title: "Christine",
    price: {
        price: 4098,
        discount: 4,
    },
    description: "Puncture wound with foreign body of unspecified ear",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.doce
}, {
    id: 24,
    title: "Darlleen",
    price: {
        price: 1275,
        discount: 12

    },
    description: "Age-rel osteopor w current path fracture, unsp low leg, init",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.tres
}, {
    id: 25,
    title: "Ruy",
    price: {
        price: 3422,
        discount: 58

    },
    description: "Epileptic seizures related to external causes, not ntrct",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.doce
}, {
    id: 26,
    title: "Carol",
    price: {
        price: 4558,
        discount: 43

    },
    description: "Poisoning by beta-adrenoreceptor antagonists, assault, subs",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.tres
}, {
    id: 27,
    title: "Wenona",
    price: {
        price: 3324,
        discount: 41

    },
    description: "Hypertrophy of kidney",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.seis
}, {
    id: 28,
    title: "Huntlee",
    price: {
        price: 4601,
        discount: 9,
    },
    description: "Poisoning by iron and its compounds, undetermined, sequela",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.tres
}, {
    id: 29,
    title: "Ira",
    price: {
        price: 1519,
        discount: 0,
    },
    description: "Displ spiral fx shaft of unsp fibula, 7thB",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.tres
}, {
    id: 30,
    title: "Crichton",
    price: {
        price: 4012,
        discount: 2,
    },
    description: "Unspecified fracture of shaft of left tibia, sequela",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.doce
}, {
    id: 31,
    title: "Hewett",
    price: {
        price: 1159,
        discount: 1,
    },
    description: "Toxic effect of paints and dyes, NEC, accidental, sequela",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.seis
}, {
    id: 32,
    title: "Alexis",
    price: {
        price: 2109,
        discount: 3,
    },
    description: "Endometriosis of ovary",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.seis
}, {
    id: 33,
    title: "Jerry",
    price: {
        price: 3351,
        discount: 31

    },
    description: "Dissociative amnesia",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.nueve
}, {
    id: 34,
    title: "Janela",
    price: {
        price: 4231,
        discount: 12

    },
    description: "Arthropathy following intestinal bypass, wrist",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.nueve
}, {
    id: 35,
    title: "Jourdain",
    price: {
        price: 4226,
        discount: 43

    },
    description: "Nondisp fx of greater tuberosity of r humer, 7thD",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.doce
}, {
    id: 36,
    title: "Catarina",
    price: {
        price: 4995,
        discount: 27

    },
    description: "Atrophic nonflaccid tympanic membrane, unspecified ear",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.seis
}, {
    id: 37,
    title: "Leanora",
    price: {
        price: 2020,
        discount: 29

    },
    description: "Abn lev enzymes in specimens from dgstv org/abd cav",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.tres
}, {
    id: 38,
    title: "Allyce",
    price: {
        price: 2426,
        discount: 42

    },
    description: "Acute mastoiditis",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.tres
}, {
    id: 39,
    title: "Jobey",
    price: {
        price: 4397,
        discount: 58

    },
    description: "Hemoptysis",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.doce
}, {
    id: 40,
    title: "Corney",
    price: {
        price: 2709,
        discount: 12

    },
    description: "Malignant otitis externa, unspecified ear",
    category: {
        toy: Toy.DINOSAURIO
    },
    image: IMAGES_DINO[ENUM_IMAGES_DINO[getRandom(Object.keys(IMAGES_DINO).length)]],
    quotas: QuotaProduct.doce
}

]

