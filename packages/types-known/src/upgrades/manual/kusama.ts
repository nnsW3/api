// Copyright 2017-2024 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ChainUpgradesRaw } from '../types.js';

export const upgrades: ChainUpgradesRaw = [
  [0, 1020], [26669, 1021], [38245, 1022], [54248, 1023], [59659, 1024],
  [67651, 1025], [82191, 1027], [83238, 1028], [101503, 1029], [203466, 1030],
  [295787, 1031], [461692, 1032], [504329, 1033], [569327, 1038], [587687, 1039],
  [653183, 1040], [693488, 1042], [901442, 1045], [1375086, 1050], [1445458, 1051],
  [1472960, 1052], [1475648, 1053], [1491596, 1054], [1574408, 1055], [2064961, 1058],
  [2201991, 1062], [2671528, 2005], [2704202, 2007], [2728002, 2008], [2832534, 2011],
  [2962294, 2012], [3240000, 2013], [3274408, 2015], [3323565, 2019], [3534175, 2022],
  [3860281, 2023], [4143129, 2024], [4401242, 2025], [4841367, 2026], [5961600, 2027],
  [6137912, 2028], [6561855, 2029], [7100891, 2030], [7468792, 9010], [7668600, 9030],
  [7812476, 9040], [8010981, 9050], [8073833, 9070], [8555825, 9080], [8945245, 9090],
  [9611377, 9100], [9625129, 9111], [9866422, 9122], [10403784, 9130], [10960765, 9150],
  [11006614, 9151], [11404482, 9160], [11601803, 9170], [12008022, 9180], [12405451, 9190],
  [12665416, 9200], [12909508, 9220], [13109752, 9230], [13555777, 9250], [13727747, 9260],
  [14248044, 9271], [14433840, 9280], [14645900, 9291], [15048375, 9300], [15426015, 9320],
  // we have 9340 via system.setStorage (whitelist.WhitelistedCallDispatched event)
  [15680713, 9340], [15756296, 9350], [15912007, 9360], [16356547, 9370], [17335450, 9381],
  [18062739, 9420], [18625000, 9430], [20465806, 1000000], [21570000, 1001000], [21786291, 1001002],
  [22515962, 1001003], [22790000, 1002000], [23176015, 1002001], [23450253, 1002004], [23565293, 1002005]
];
