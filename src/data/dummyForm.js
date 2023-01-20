import { getRandomInt } from '../utils/Utils';

export const baseDomain = 'http://adminselvi.com';
export const DummyComent = [
  {
    id: 1,
    fullName: 'Renaldo Spiby',
    phone: '601-286-2663',
    comment: 'cursus id turpis',
    createdAt: '2022-10-18 15:38:00',
  },
  {
    id: 2,
    fullName: 'Brietta Pinyon',
    phone: '889-799-6849',
    comment: 'luctus et ultrices',
    createdAt: '2022-08-03 03:32:43',
  },
  {
    id: 3,
    fullName: 'Lidia Darrach',
    phone: '336-947-1895',
    comment: 'posuere cubilia curae',
    createdAt: '2022-10-14 22:58:55',
  },
  {
    id: 4,
    fullName: 'Matthias Beardwood',
    phone: '364-438-6657',
    comment: 'aliquam lacus morbi',
    createdAt: '2022-07-08 21:48:14',
  },
  {
    id: 5,
    fullName: 'Myron Forestall',
    phone: '312-787-6986',
    comment: 'quisque porta volutpat',
    createdAt: '2022-08-30 20:51:13',
  },
  {
    id: 6,
    fullName: 'Clio Sentance',
    phone: '785-669-2574',
    comment: 'justo nec condimentum',
    createdAt: '2022-08-02 03:08:19',
  },
  {
    id: 7,
    fullName: 'Harrietta LeEstut',
    phone: '698-280-3063',
    comment: 'aenean sit amet',
    createdAt: '2022-09-10 06:02:28',
  },
  {
    id: 8,
    fullName: 'Ronnie Melendez',
    phone: '646-794-0550',
    comment: 'mattis nibh ligula',
    createdAt: '2022-12-09 12:10:59',
  },
  {
    id: 9,
    fullName: 'Harriette Morby',
    phone: '938-699-4362',
    comment: 'sed vestibulum sit',
    createdAt: '2022-08-16 03:13:56',
  },
  {
    id: 10,
    fullName: 'Pietro Penketh',
    phone: '939-364-7838',
    comment: 'urna pretium nisl',
    createdAt: '2022-05-24 09:21:07',
  },
  {
    id: 11,
    fullName: 'Matthus Castaneda',
    phone: '495-289-5412',
    comment: 'est phasellus sit',
    createdAt: '2023-01-03 15:32:37',
  },
  {
    id: 12,
    fullName: 'Ruperta Lowdham',
    phone: '163-620-1727',
    comment: 'lacus morbi quis',
    createdAt: '2022-08-20 11:11:16',
  },
  {
    id: 13,
    fullName: 'Ursulina Tallow',
    phone: '599-629-3043',
    comment: 'erat curabitur gravida',
    createdAt: '2022-06-13 17:21:55',
  },
  {
    id: 14,
    fullName: 'Lesya Sign',
    phone: '916-577-6380',
    comment: 'magna ac consequat',
    createdAt: '2022-03-08 07:54:45',
  },
  {
    id: 15,
    fullName: 'Minta Towersey',
    phone: '224-968-4742',
    comment: 'metus vitae ipsum',
    createdAt: '2022-04-02 07:35:10',
  },
  {
    id: 16,
    fullName: 'Terry Chiddy',
    phone: '245-991-7960',
    comment: 'neque sapien placerat',
    createdAt: '2022-11-08 09:41:19',
  },
  {
    id: 17,
    fullName: 'Charil Lammerich',
    phone: '773-984-6060',
    comment: 'mauris enim leo',
    createdAt: '2022-09-22 04:14:56',
  },
  {
    id: 18,
    fullName: 'Robert Battman',
    phone: '866-981-7690',
    comment: 'curae nulla dapibus',
    createdAt: '2022-03-07 21:41:42',
  },
  {
    id: 19,
    fullName: 'Aksel Yuryichev',
    phone: '798-518-1939',
    comment: 'nisi nam ultrices',
    createdAt: '2023-01-19 02:28:24',
  },
  {
    id: 20,
    fullName: 'Menard Ebbotts',
    phone: '891-172-2100',
    comment: 'consequat nulla nisl',
    createdAt: '2022-03-01 06:44:33',
  },
  {
    id: 21,
    fullName: 'Darby Erwin',
    phone: '299-410-3681',
    comment: 'pede justo eu',
    createdAt: '2022-07-12 09:26:10',
  },
  {
    id: 22,
    fullName: 'Vevay Ikin',
    phone: '215-235-2410',
    comment: 'lacus morbi quis',
    createdAt: '2022-11-13 18:59:30',
  },
  {
    id: 23,
    fullName: 'Jeanna Norquay',
    phone: '498-715-0043',
    comment: 'sed sagittis nam',
    createdAt: '2022-07-26 09:29:39',
  },
  {
    id: 24,
    fullName: 'Juanita MacCathay',
    phone: '319-703-1204',
    comment: 'rutrum nulla tellus',
    createdAt: '2022-08-24 05:27:59',
  },
  {
    id: 25,
    fullName: 'Baryram MacManus',
    phone: '309-644-4619',
    comment: 'vestibulum vestibulum ante',
    createdAt: '2022-04-16 09:10:17',
  },
  {
    id: 26,
    fullName: 'Charmian Esom',
    phone: '170-682-7584',
    comment: 'nulla sed vel',
    createdAt: '2022-07-11 12:43:41',
  },
  {
    id: 27,
    fullName: 'Roseanna Gresch',
    phone: '793-992-9373',
    comment: 'primis in faucibus',
    createdAt: '2023-01-14 19:31:05',
  },
  {
    id: 28,
    fullName: 'Meredith Gigg',
    phone: '164-954-8050',
    comment: 'at velit vivamus',
    createdAt: '2022-08-08 16:51:33',
  },
  {
    id: 29,
    fullName: 'Cinda Chiene',
    phone: '477-586-1904',
    comment: 'erat quisque erat',
    createdAt: '2022-04-24 09:06:55',
  },
  {
    id: 30,
    fullName: 'Crissy Meffen',
    phone: '175-308-1432',
    comment: 'elementum ligula vehicula',
    createdAt: '2022-06-04 07:29:26',
  },
  {
    id: 31,
    fullName: 'Stepha Haycox',
    phone: '455-928-7273',
    comment: 'luctus et ultrices',
    createdAt: '2022-03-27 12:30:04',
  },
  {
    id: 32,
    fullName: 'Stanfield Campling',
    phone: '836-668-2350',
    comment: 'cras non velit',
    createdAt: '2023-01-07 17:07:16',
  },
  {
    id: 33,
    fullName: 'Felicity Acory',
    phone: '336-190-2268',
    comment: 'erat volutpat in',
    createdAt: '2022-05-26 14:36:35',
  },
  {
    id: 34,
    fullName: 'Anastassia Ibert',
    phone: '566-707-5816',
    comment: 'scelerisque mauris sit',
    createdAt: '2022-02-15 20:05:37',
  },
  {
    id: 35,
    fullName: 'Paulie Glassup',
    phone: '172-517-7974',
    comment: 'elementum nullam varius',
    createdAt: '2022-12-09 13:20:06',
  },
  {
    id: 36,
    fullName: 'Erda Breagan',
    phone: '352-583-9683',
    comment: 'suspendisse potenti nullam',
    createdAt: '2022-05-03 09:02:41',
  },
  {
    id: 37,
    fullName: 'Zak Dennidge',
    phone: '153-774-2507',
    comment: 'libero ut massa',
    createdAt: '2022-10-12 00:42:23',
  },
  {
    id: 38,
    fullName: 'Berri Arnaudi',
    phone: '898-728-0792',
    comment: 'nunc purus phasellus',
    createdAt: '2022-11-20 00:32:21',
  },
  {
    id: 39,
    fullName: 'Basil Cudde',
    phone: '540-447-0921',
    comment: 'nec sem duis',
    createdAt: '2022-01-31 22:07:05',
  },
  {
    id: 40,
    fullName: 'Charley Ollington',
    phone: '783-203-5819',
    comment: 'nulla sed accumsan',
    createdAt: '2022-12-07 12:59:11',
  },
  {
    id: 41,
    fullName: 'Meryl Darter',
    phone: '958-113-1094',
    comment: 'eget vulputate ut',
    createdAt: '2022-04-18 03:04:05',
  },
  {
    id: 42,
    fullName: 'Sal Rowesby',
    phone: '501-671-8329',
    comment: 'morbi porttitor lorem',
    createdAt: '2022-07-11 17:54:13',
  },
  {
    id: 43,
    fullName: 'Gisele Basford',
    phone: '719-133-8936',
    comment: 'ut volutpat sapien',
    createdAt: '2022-08-19 01:32:58',
  },
  {
    id: 44,
    fullName: 'Brett Goly',
    phone: '889-694-1197',
    comment: 'sit amet eros',
    createdAt: '2022-04-12 01:34:06',
  },
  {
    id: 45,
    fullName: 'Morgun Calbrathe',
    phone: '929-457-3051',
    comment: 'scelerisque quam turpis',
    createdAt: '2022-02-18 19:27:50',
  },
  {
    id: 46,
    fullName: 'Chuck Colgrave',
    phone: '499-603-7504',
    comment: 'et magnis dis',
    createdAt: '2022-11-30 03:58:05',
  },
  {
    id: 47,
    fullName: 'Otho Montez',
    phone: '916-408-2676',
    comment: 'odio justo sollicitudin',
    createdAt: '2022-11-13 02:19:49',
  },
  {
    id: 48,
    fullName: 'Vivi Wash',
    phone: '195-102-0345',
    comment: 'in felis donec',
    createdAt: '2022-03-07 18:16:21',
  },
  {
    id: 49,
    fullName: 'Ax Buckler',
    phone: '936-264-5282',
    comment: 'erat vestibulum sed',
    createdAt: '2022-11-26 05:09:51',
  },
  {
    id: 50,
    fullName: 'Willamina Pancast',
    phone: '782-312-9807',
    comment: 'nunc vestibulum ante',
    createdAt: '2022-08-16 05:46:44',
  },
  {
    id: 51,
    fullName: 'Quill Pulford',
    phone: '431-368-6513',
    comment: 'dui luctus rutrum',
    createdAt: '2022-09-07 21:53:02',
  },
  {
    id: 52,
    fullName: 'Kirstin Freebury',
    phone: '744-131-9699',
    comment: 'enim lorem ipsum',
    createdAt: '2022-10-26 09:41:41',
  },
  {
    id: 53,
    fullName: 'Lawton Brookzie',
    phone: '164-574-5265',
    comment: 'praesent lectus vestibulum',
    createdAt: '2022-09-03 04:16:21',
  },
  {
    id: 54,
    fullName: 'Betti Dalston',
    phone: '810-535-4212',
    comment: 'tristique fusce congue',
    createdAt: '2022-04-15 05:37:54',
  },
  {
    id: 55,
    fullName: 'Estelle Gresley',
    phone: '229-997-4079',
    comment: 'justo nec condimentum',
    createdAt: '2022-03-05 21:09:51',
  },
  {
    id: 56,
    fullName: 'Bearnard Farrens',
    phone: '396-363-4270',
    comment: 'donec quis orci',
    createdAt: '2022-07-25 05:18:39',
  },
  {
    id: 57,
    fullName: 'Fitz Boost',
    phone: '232-508-8726',
    comment: 'gravida sem praesent',
    createdAt: '2022-08-05 14:07:07',
  },
  {
    id: 58,
    fullName: 'Sandra Pullinger',
    phone: '497-474-8006',
    comment: 'tempor turpis nec',
    createdAt: '2022-10-23 01:32:46',
  },
  {
    id: 59,
    fullName: 'Catherina Bras',
    phone: '711-686-9162',
    comment: 'sit amet diam',
    createdAt: '2022-06-16 06:50:39',
  },
  {
    id: 60,
    fullName: 'Dorey Denning',
    phone: '295-342-2963',
    comment: 'vel sem sed',
    createdAt: '2022-07-09 08:27:17',
  },
  {
    id: 61,
    fullName: 'Kermie Ganter',
    phone: '149-614-8744',
    comment: 'in lectus pellentesque',
    createdAt: '2023-01-12 03:08:06',
  },
  {
    id: 62,
    fullName: 'Wandie McNirlin',
    phone: '167-210-6961',
    comment: 'praesent id massa',
    createdAt: '2022-07-25 21:00:42',
  },
  {
    id: 63,
    fullName: 'Kristofor Becerro',
    phone: '186-432-2299',
    comment: 'aliquam augue quam',
    createdAt: '2022-04-04 17:29:16',
  },
  {
    id: 64,
    fullName: 'Maryjo Meriet',
    phone: '732-157-4205',
    comment: 'nullam orci pede',
    createdAt: '2022-10-02 03:48:49',
  },
  {
    id: 65,
    fullName: 'Frank Santorini',
    phone: '649-720-6389',
    comment: 'posuere metus vitae',
    createdAt: '2023-01-09 14:05:32',
  },
  {
    id: 66,
    fullName: 'Araldo McGiveen',
    phone: '947-398-2370',
    comment: 'tincidunt in leo',
    createdAt: '2022-02-25 08:35:23',
  },
  {
    id: 67,
    fullName: 'Bevin Durber',
    phone: '486-445-0257',
    comment: 'amet nulla quisque',
    createdAt: '2022-09-30 13:10:06',
  },
  {
    id: 68,
    fullName: 'Ruthann Segge',
    phone: '474-613-2064',
    comment: 'volutpat quam pede',
    createdAt: '2022-02-10 14:15:05',
  },
  {
    id: 69,
    fullName: 'Gerrie Dooman',
    phone: '409-997-2341',
    comment: 'condimentum curabitur in',
    createdAt: '2022-02-27 15:29:47',
  },
  {
    id: 70,
    fullName: 'Avril MacDaid',
    phone: '512-656-3156',
    comment: 'nulla justo aliquam',
    createdAt: '2022-06-01 07:29:47',
  },
  {
    id: 71,
    fullName: 'Morie Cranch',
    phone: '497-694-4213',
    comment: 'gravida nisi at',
    createdAt: '2022-07-12 05:01:53',
  },
  {
    id: 72,
    fullName: 'Beckie Manketell',
    phone: '941-133-1568',
    comment: 'vulputate elementum nullam',
    createdAt: '2022-08-17 06:13:42',
  },
  {
    id: 73,
    fullName: 'Rusty Speeks',
    phone: '545-911-4425',
    comment: 'nibh in hac',
    createdAt: '2022-05-06 11:11:55',
  },
  {
    id: 74,
    fullName: 'Gary Burtwistle',
    phone: '172-607-8295',
    comment: 'semper rutrum nulla',
    createdAt: '2022-10-23 04:34:35',
  },
  {
    id: 75,
    fullName: 'Mariann Wallwork',
    phone: '480-926-5950',
    comment: 'feugiat non pretium',
    createdAt: '2022-03-16 15:52:05',
  },
  {
    id: 76,
    fullName: 'Dene Orrocks',
    phone: '932-605-8867',
    comment: 'nulla sed accumsan',
    createdAt: '2022-06-10 01:13:59',
  },
  {
    id: 77,
    fullName: 'Yancey Kundert',
    phone: '306-168-3014',
    comment: 'dictumst etiam faucibus',
    createdAt: '2022-11-07 11:00:40',
  },
  {
    id: 78,
    fullName: 'Chrotoem Fearnyhough',
    phone: '518-310-1323',
    comment: 'lacinia nisi venenatis',
    createdAt: '2022-12-08 12:15:56',
  },
  {
    id: 79,
    fullName: 'Hanny Arnhold',
    phone: '407-785-4748',
    comment: 'venenatis lacinia aenean',
    createdAt: '2022-02-27 08:14:59',
  },
  {
    id: 80,
    fullName: 'Jan Alwell',
    phone: '628-699-2253',
    comment: 'odio porttitor id',
    createdAt: '2022-03-08 18:13:49',
  },
  {
    id: 81,
    fullName: 'Rolland Hamprecht',
    phone: '544-330-5218',
    comment: 'hac habitasse platea',
    createdAt: '2022-05-17 10:40:35',
  },
  {
    id: 82,
    fullName: 'Llywellyn Olle',
    phone: '113-912-3648',
    comment: 'accumsan felis ut',
    createdAt: '2022-01-23 23:42:11',
  },
  {
    id: 83,
    fullName: 'Florentia McMeeking',
    phone: '125-424-0480',
    comment: 'lacus curabitur at',
    createdAt: '2022-10-03 05:44:48',
  },
  {
    id: 84,
    fullName: 'Abbott Oddey',
    phone: '522-359-2281',
    comment: 'interdum mauris non',
    createdAt: '2022-05-29 10:14:27',
  },
  {
    id: 85,
    fullName: 'Dur Jossum',
    phone: '472-105-6493',
    comment: 'consequat ut nulla',
    createdAt: '2022-09-26 19:10:15',
  },
  {
    id: 86,
    fullName: 'Bartlett Germon',
    phone: '377-538-3278',
    comment: 'posuere cubilia curae',
    createdAt: '2022-03-03 21:07:57',
  },
  {
    id: 87,
    fullName: 'Tracie Baldock',
    phone: '886-479-6170',
    comment: 'elementum in hac',
    createdAt: '2022-12-01 09:59:49',
  },
  {
    id: 88,
    fullName: 'Nance Lexa',
    phone: '598-651-4645',
    comment: 'donec ut mauris',
    createdAt: '2022-09-29 12:00:28',
  },
  {
    id: 89,
    fullName: 'Darya Schoales',
    phone: '174-799-1045',
    comment: 'vitae nisl aenean',
    createdAt: '2022-08-27 21:10:48',
  },
  {
    id: 90,
    fullName: 'Addy Van Der Weedenburg',
    phone: '306-622-8279',
    comment: 'quam turpis adipiscing',
    createdAt: '2022-10-13 22:45:46',
  },
  {
    id: 91,
    fullName: 'Viv Ney',
    phone: '357-806-0301',
    comment: 'risus dapibus augue',
    createdAt: '2022-08-30 12:34:17',
  },
  {
    id: 92,
    fullName: 'Danyelle Willbourne',
    phone: '802-365-9349',
    comment: 'habitasse platea dictumst',
    createdAt: '2022-08-30 11:38:56',
  },
  {
    id: 93,
    fullName: 'Reba Gilfoyle',
    phone: '906-736-5415',
    comment: 'nisi venenatis tristique',
    createdAt: '2022-12-18 08:03:48',
  },
  {
    id: 94,
    fullName: 'Brinn Foxall',
    phone: '590-661-2890',
    comment: 'at turpis a',
    createdAt: '2022-10-12 09:40:33',
  },
  {
    id: 95,
    fullName: 'Josias Bruinemann',
    phone: '649-639-1837',
    comment: 'dui maecenas tristique',
    createdAt: '2022-04-06 10:09:56',
  },
  {
    id: 96,
    fullName: 'Bruce Scotchbrook',
    phone: '952-135-7562',
    comment: 'primis in faucibus',
    createdAt: '2022-11-16 16:29:07',
  },
  {
    id: 97,
    fullName: 'Anna-maria Studman',
    phone: '748-899-8842',
    comment: 'non velit donec',
    createdAt: '2022-09-02 17:10:45',
  },
  {
    id: 98,
    fullName: 'Dietrich Widdecombe',
    phone: '776-513-4630',
    comment: 'quam suspendisse potenti',
    createdAt: '2022-08-10 06:23:25',
  },
  {
    id: 99,
    fullName: 'Andriana Dalgardno',
    phone: '360-511-8005',
    comment: 'justo aliquam quis',
    createdAt: '2022-04-17 10:34:06',
  },
  {
    id: 100,
    fullName: 'Giles Hoggins',
    phone: '211-391-5151',
    comment: 'parturient montes nascetur',
    createdAt: '2022-11-30 03:40:44',
  },
];

const dummyShuffledComment = (n = 10) => {
  const shuffled = DummyComent.sort(() => {
    return 0.5 - Math.random();
  });

  const selected = shuffled.slice(0, n);
  return selected;
};

export const DummyFormData = [
  'Buah',
  'Bunga',
  'Keep',
  'Viralizer',
  'Broadcast List',
  'GiveAway',
].map((e) => {
  const slug = e.split(' ').join().toLocaleLowerCase();
  return {
    id: slug,
    title: e,
    link: `${baseDomain}/${slug}`,
    comments: dummyShuffledComment(),
    // comments: dummyShuffledComment(Math.floor(Math.random() * DummyComent.length)),
    data: {
      today: {
        click: getRandomInt(189) * 15,
        lead: getRandomInt(170) * 16,
      },
      total: {
        click: getRandomInt(189) * 28,
        lead: getRandomInt(170) * 25,
      },
    },
  };
});
