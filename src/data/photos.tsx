import { IPhoto } from '../types/IPhoto';

import img1 from '../img/img (1).jpeg';
import img2 from '../img/img (2).jpeg';
import img3 from '../img/img (3).jpeg';
import img4 from '../img/img (4).jpeg';
import img5 from '../img/img (5).jpeg';
import img6 from '../img/img (6).jpeg';
import img7 from '../img/img (7).jpeg';
import img8 from '../img/img (8).jpeg';
import img9 from '../img/img (9).jpeg';
import img10 from '../img/img (10).jpeg';
import img11 from '../img/img (11).jpeg';
import img12 from '../img/img (12).jpeg';
import img13 from '../img/img (13).jpeg';
import img14 from '../img/img (14).jpeg';
import img15 from '../img/img (15).jpeg';
import img16 from '../img/img (16).jpeg';
import img17 from '../img/img (17).jpeg';
import img18 from '../img/img (18).jpeg';
import img19 from '../img/img (19).jpeg';
import img20 from '../img/img (20).jpeg';
import img21 from '../img/img (21).jpeg';
import img22 from '../img/img (22).jpeg';
import img23 from '../img/img (23).jpeg';
import img24 from '../img/img (24).jpeg';
import img25 from '../img/img (25).jpeg';
import img26 from '../img/img (26).jpeg';
import img27 from '../img/img (27).jpeg';
import img28 from '../img/img (28).jpeg';
import img29 from '../img/img (29).jpeg';
import img30 from '../img/img (30).jpeg';
import img31 from '../img/img (31).jpeg';
import img32 from '../img/img (32).jpeg';
import img33 from '../img/img (33).jpeg';
import img34 from '../img/img (34).jpeg';
import img35 from '../img/img (35).jpeg';
import img36 from '../img/img (36).jpeg';
import img37 from '../img/img (37).jpeg';
import img38 from '../img/img (38).jpeg';
import img39 from '../img/img (39).jpeg';
import img40 from '../img/img (40).jpeg';
import img41 from '../img/img (41).jpeg';
import img42 from '../img/img (42).jpeg';
import img43 from '../img/img (43).jpeg';
import img44 from '../img/img (44).jpeg';
import img45 from '../img/img (45).jpeg';
import img46 from '../img/img (46).jpeg';
import img47 from '../img/img (47).jpeg';
import img48 from '../img/img (48).jpeg';
import img49 from '../img/img (49).jpeg';
import img50 from '../img/img (50).jpeg';
import img51 from '../img/img (51).jpeg';
import img52 from '../img/img (52).jpeg';
import img53 from '../img/img (53).jpeg';
import img54 from '../img/img (54).jpeg';
import img55 from '../img/img (55).jpeg';
import img56 from '../img/img (56).jpeg';
import img57 from '../img/img (57).jpeg';
import img58 from '../img/img (58).jpeg';
import img59 from '../img/img (59).jpeg';
import img60 from '../img/img (60).jpeg';
import img61 from '../img/img (61).jpeg';
import img62 from '../img/img (62).jpeg';
import img63 from '../img/img (63).jpeg';
import img64 from '../img/img (64).jpeg';
import img65 from '../img/img (65).jpeg';
import img66 from '../img/img (66).jpeg';
import img67 from '../img/img (67).jpeg';
import img68 from '../img/img (68).jpeg';
import img69 from '../img/img (69).jpeg';
import img70 from '../img/img (70).jpeg';
import img71 from '../img/img (71).jpeg';
import img72 from '../img/img (72).jpeg';
import img73 from '../img/img (73).jpeg';
import img74 from '../img/img (74).jpeg';
import img75 from '../img/img (75).jpeg';
import img76 from '../img/img (76).jpeg';
import img77 from '../img/img (77).jpeg';
import img78 from '../img/img (78).jpeg';
import img79 from '../img/img (79).jpeg';
import img80 from '../img/img (80).jpeg';
import img81 from '../img/img (81).jpeg';
import img82 from '../img/img (82).jpeg';
import img83 from '../img/img (83).jpeg';
import img84 from '../img/img (84).jpeg';
import img85 from '../img/img (85).jpeg';
import img86 from '../img/img (86).jpeg';

const imports: string[] = [
  img1,
  img2,
  img3,
  img86,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
  img50,
  img51,
  img52,
  img53,
  img54,
  img55,
  img56,
  img57,
  img58,
  img59,
  img60,
  img61,
  img62,
  img63,
  img64,
  img65,
  img66,
  img67,
  img68,
  img69,
  img70,
  img71,
  img72,
  img73,
  img74,
  img75,
  img76,
  img77,
  img78,
  img79,
  img80,
  img81,
  img82,
  img83,
  img84,
  img85,
  img4,
];

// function changeRatio(arr: IPhoto[], indexs: number[], ratio: Ratio) {
//   return arr.map((photo, index) => {
//     if (indexs.includes(index)) {
//       return { src: photo.src, width: ratio.width, height: ratio.height };
//     }
//     return { ...photo };
//   });
// }

const RATIO_1_1: number[] = [14, 29, 65, 84];
const RATIO_16_9: number[] = [8, 51, 56, 64, 80, 83];
const RATIO_9_16: number[] = [0, 1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 85];

function createArrayPhotos(numberOfPhotos: number) {
  let arr: IPhoto[] = [];
  for (let i = 0; i < numberOfPhotos; i++) {
    if (RATIO_1_1.includes(i)) {
      arr.push({
        src: imports[i],
        width: 4000,
        height: 4000,
      });
    } else if (RATIO_16_9.includes(i)) {
      arr.push({
        src: imports[i],
        width: 1024,
        height: 683,
      });
    } else if (RATIO_9_16.includes(i)) {
      arr.push({
        src: imports[i],
        width: 683,
        height: 1024,
      });
    } else {
      arr.push({
        src: imports[i],
        width: 4000,
        height: 5000,
      });
    }
  }

  return arr;
}

export const photos: IPhoto[] = createArrayPhotos(86);
