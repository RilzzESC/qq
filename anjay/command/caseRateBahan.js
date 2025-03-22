const fs = require('fs')
const chalk = require('chalk')
const toRupiah = require('../lib/toRupiah')
function rateBahan(command, reply, m, text, itsMeDica, isAdmins){
switch(command){


    //✄┈┈┈⟬ *FITUR RATE BAHAN* ⟭ •
	case 'valo' : {  
if (!text) return reply('Masukkan Rate nya, Contoh : .valo 2900')      
if (!itsMeDica && !isAdmins) return reply('Fitur Khusus admin!')
if (!m.isGroup) return reply('Fitur Khusus Group!')
   	let tekvalo = text.split(' ')[0]
  if (isNaN(tekvalo)) return reply('Masukan hanya angka yah')
  reply(`*VALORANT R${tekvalo}*

300 ⭐️ = Rp ${toRupiah(9.51*tekvalo)}
625 ⭐️ = Rp ${toRupiah(19.02*tekvalo)}
1125 ⭐️ = Rp ${toRupiah(33.29*tekvalo)}
1650 ⭐️ = Rp ${toRupiah(47.55*tekvalo)}
3400 ⭐️ = Rp ${toRupiah(95.1*tekvalo)}
7000 ⭐️ = Rp ${toRupiah(190.2*tekvalo)}`
)
  }
  break;                                         
 case 'genshinph': {
if (!text) return reply('Masukkan Rate nya, Contoh : .genshinph 220')     
if (!itsMeDica && !isAdmins) return reply('Fitur Khusus admin!')
if (!m.isGroup) return reply('Fitur Khusus Group!')
  	let tekgennph = text.split(' ')[0]
  if (isNaN(tekgennph)) return reply('Masukan hanya angka yah')
  
  reply(`*GENSHIN UNI PH R${tekgennph}*

60 🔮 = Rp ${toRupiah(55*tekgennph)}
330 🔮 = Rp ${toRupiah(280*tekgennph)}
1090 🔮 = Rp ${toRupiah(830*tekgennph)}
2240 🔮 = Rp ${toRupiah(1670*tekgennph)}
3880 🔮 = Rp ${toRupiah(2800*tekgennph)}
8080 🔮 = Rp ${toRupiah(5500*tekgennph)}

Blessing of the Welkin Moon  = Rp ${toRupiah(280*tekgennph)}`
)
  }
  break;                
  case 'genshinmy' : {  
if (!text) return reply('Masukkan Rate nya, Contoh : .genshinmy 2900')      
if (!itsMeDica && !isAdmins) return reply('Fitur Khusus admin!')
if (!m.isGroup) return reply('Fitur Khusus Group!')
   	let tekgenmy = text.split(' ')[0]
  if (isNaN(tekgenmy)) return reply('Masukan hanya angka yah')
  reply(`*GENSHIN UNI MY R${tekgenmy}*

60 🔮 = Rp ${toRupiah(3.9*tekgenmy)}
330 🔮 = Rp ${toRupiah(19.9*tekgenmy)}
1090 🔮 = Rp ${toRupiah(59.9*tekgenmy)}
2240 🔮 = Rp ${toRupiah(129.9*tekgenmy)}
3880 🔮 = Rp ${toRupiah(199.9*tekgenmy)}

Blessing of the Welkin Moon  = Rp ${toRupiah(19.9*tekgenmy)}`
)
  }
  break; 
  case 'aov' : {  
if (!text) return reply('Masukkan Rate nya, Contoh : .aov 265')           
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!m.isGroup) return reply('Fitur Khusus Group!')
   	let tekaov = text.split(' ')[0]
  if (isNaN(tekaov)) return reply('Masukan hanya angka yah')
  reply(`*ARENA OF VALOR R${tekaov}*

40 💳 = Rp ${toRupiah(33*tekaov)}
90 💳 = Rp ${toRupiah(66*tekaov)}
230 💳 = Rp ${toRupiah(165*tekaov)}
470 💳 = Rp ${toRupiah(330*tekaov)}
950 💳 = Rp ${toRupiah(660*tekaov)}
1.430 💳 = Rp ${toRupiah(990*tekaov)}
2.390 💳 = Rp ${toRupiah(1660*tekaov)}
4.800 💳 = Rp ${toRupiah(3300*tekaov)}
24.050 💳 = Rp ${toRupiah(16500*tekaov)}
48.200 💳 = Rp ${toRupiah(33000*tekaov)}`
)
  }
  break;                             
  case 'undawn' : {  
if (!text) return reply('Masukkan Rate nya, Contoh : .undawn 265')     
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!m.isGroup) return reply('Fitur Khusus Group!')
   	let tekud = text.split(' ')[0]
  if (isNaN(tekud)) return reply('Masukan hanya angka yah')
  reply(`*GARENA UNDAWN R${tekud}*

80 💵 = Rp ${toRupiah(50*tekud)}
250 💵 = Rp ${toRupiah(150*tekud)}
450 💵 = Rp ${toRupiah(250*tekud)}
920 💵 = Rp ${toRupiah(495*tekud)}
1.850 💵 = Rp ${toRupiah(990*tekud)}
2.800 💵 = Rp ${toRupiah(1485*tekud)}
4.750 💵 = Rp ${toRupiah(2475*tekud)}
9.600 💵 = Rp ${toRupiah(4950*tekud)}
33.000 💵 = Rp ${toRupiah(16500*tekud)}
66.500 💵 = Rp ${toRupiah(33000*tekud)}

Kartu Mingguan 💳 = Rp ${toRupiah(96*tekud)}
Kartu Bulanan 💳 = Rp ${toRupiah(159*tekud)}
Growth Fund (REBATE) 💳 = Rp ${toRupiah(319*tekud)}
Glory Pass Premium 💳 = Rp ${toRupiah(479*tekud)}`
)
  }
  break;                                                       
   case 'kios': {
if (!text) return reply('Masukkan Rate nya, Contoh : .kios 265')
if (!itsMeDica && !isAdmins) return reply('Fitur Khusus admin!')
if (!m.isGroup) return reply('Fitur Khusus Group!')
  	let tekkios = text.split(' ')[0]
  if (isNaN(tekkios)) return reply('Masukan hanya angka yah')
  reply(`*FREE FIRE R${tekkios}*

💎 5 = Rp ${toRupiah(3*tekkios)}
💎 10 = Rp ${toRupiah(6*tekkios)}
💎 15 = Rp ${toRupiah(9*tekkios)}
💎 20 = Rp ${toRupiah(12*tekkios)}
💎 25 = Rp ${toRupiah(15*tekkios)}
💎 30 = Rp ${toRupiah(18*tekkios)}
💎 50 = Rp ${toRupiah(24*tekkios)}
💎 55 = Rp ${toRupiah(27*tekkios)}
💎 60 = Rp ${toRupiah(30*tekkios)}
💎 70 = Rp ${toRupiah(33*tekkios)}
💎 75 = Rp ${toRupiah(36*tekkios)}
💎 80 = Rp ${toRupiah(39*tekkios)}
💎 90 = Rp ${toRupiah(45*tekkios)}
💎 100 = Rp ${toRupiah(48*tekkios)}
💎 120 = Rp ${toRupiah(57*tekkios)}
💎 130 = Rp ${toRupiah(63*tekkios)}
💎 140 = Rp ${toRupiah(66*tekkios)}
💎 145 = Rp ${toRupiah(69*tekkios)}
💎 150 = Rp ${toRupiah(72*tekkios)}
💎 160 = Rp ${toRupiah(78*tekkios)}
💎 190 = Rp ${toRupiah(90*tekkios)}
💎 200 = Rp ${toRupiah(96*tekkios)}
💎 210 = Rp ${toRupiah(99*tekkios)}
💎 250 = Rp ${toRupiah(120*tekkios)}
?? 280 = Rp ${toRupiah(132*tekkios)}
💎 300 = Rp ${toRupiah(144*tekkios)}
💎 355 = Rp ${toRupiah(165*tekkios)}
💎 360 = Rp ${toRupiah(168*tekkios)}
💎 375 = Rp ${toRupiah(177*tekkios)}
💎 405 = Rp ${toRupiah(189*tekkios)}
💎 425 = Rp ${toRupiah(198*tekkios)}
💎 475 = Rp ${toRupiah(222*tekkios)}
💎 500 = Rp ${toRupiah(234*tekkios)}
💎 510 = Rp ${toRupiah(240*tekkios)}
💎 515 = Rp ${toRupiah(243*tekkios)}
💎 520 = Rp ${toRupiah(246*tekkios)}
💎 545 = Rp ${toRupiah(255*tekkios)}
💎 565 = Rp ${toRupiah(264*tekkios)}
💎 600 = Rp ${toRupiah(282*tekkios)}
💎 635 = Rp ${toRupiah(297*tekkios)}
💎 645 = Rp ${toRupiah(303*tekkios)}
💎 655 = Rp ${toRupiah(309*tekkios)}
💎 725 = Rp ${toRupiah(333*tekkios)}
💎 740 = Rp ${toRupiah(342*tekkios)}
💎 770 = Rp ${toRupiah(354*tekkios)}
💎 790 = Rp ${toRupiah(363*tekkios)}
💎 800 = Rp ${toRupiah(369*tekkios)}
💎 860 = Rp ${toRupiah(396*tekkios)}
💎 930 = Rp ${toRupiah(429*tekkios)}
💎 1000 = Rp ${toRupiah(462*tekkios)}
💎 1050 = Rp ${toRupiah(486*tekkios)}
💎 1060 = Rp ${toRupiah(492*tekkios)}
💎 1075 = Rp ${toRupiah(495*tekkios)}
💎 1080 = Rp ${toRupiah(498*tekkios)}
💎 1200 = Rp ${toRupiah(558*tekkios)}
💎 1215 = Rp ${toRupiah(561*tekkios)}
💎 1300 = Rp ${toRupiah(603*tekkios)}
💎 1440 = Rp ${toRupiah(660*tekkios)}
💎 1450 = Rp ${toRupiah(666*tekkios)}
💎 1490 = Rp ${toRupiah(684*tekkios)}
💎 1510 = Rp ${toRupiah(693*tekkios)}
💎 1580 = Rp ${toRupiah(726*tekkios)}
💎 1795 = Rp ${toRupiah(825*tekkios)}
💎 1800 = Rp ${toRupiah(828*tekkios)}
💎 2000 = Rp ${toRupiah(924*tekkios)}
💎 2160 = Rp ${toRupiah(990*tekkios)}
💎 2180 = Rp ${toRupiah(1002*tekkios)}
💎 2200 = Rp ${toRupiah(1014*tekkios)}
💎 2210 = Rp ${toRupiah(1023*tekkios)}
💎 2280 = Rp ${toRupiah(1056*tekkios)}
💎 2355 = Rp ${toRupiah(1089*tekkios)}
💎 2720 = Rp ${toRupiah(1254*tekkios)}
💎 3640 = Rp ${toRupiah(1674*tekkios)}
💎 3800 = Rp ${toRupiah(1746*tekkios)}
💎 4000 = Rp ${toRupiah(1842*tekkios)}
💎 4340 = Rp ${toRupiah(1992*tekkios)}
💎 7290 = Rp ${toRupiah(3300*tekkios)}
Member Mingguan 1 = Rp ${toRupiah(100*tekkios)}
Member Mingguan 2 = Rp ${toRupiah(200*tekkios)}
Member Mingguan 3 = Rp ${toRupiah(300*tekkios)}
Member Bulanan 1 = Rp ${toRupiah(300*tekkios)}
Member Bulanan 2 = Rp ${toRupiah(600*tekkios)}
Member Bulanan 3 = Rp ${toRupiah(900*tekkios)}
Level Up Pass = Rp ${toRupiah(50*tekkios)}
BP Card = Rp ${toRupiah(150*tekkios)}`
)
  }
  break;      
  case 'unicodm': {
if (!text) return reply('Masukkan Rate nya, Contoh : .unicodm 0.8')      
if (!itsMeDica && !isAdmins) return reply('Fitur Khusus admin!')
if (!m.isGroup) return reply('Fitur Khusus Group!')
  	let tekucodm = text.split(' ')[0]
  if (isNaN(tekucodm)) return reply('Masukan hanya angka yah')
  reply(`*UNIPIN ID CODM R${tekucodm}*

32🪙 = Rp ${toRupiah(5000*tekucodm)}
62🪙 = Rp ${toRupiah(10000*tekucodm)}
127🪙 = Rp ${toRupiah(20000*tekucodm)}
320🪙 = Rp ${toRupiah(50000*tekucodm)}
644🪙 = Rp ${toRupiah(100000*tekucodm)}
1373🪙 = Rp ${toRupiah(200000*tekucodm)}
2059🪙 = Rp ${toRupiah(300000*tekucodm)}
3564🪙 = Rp ${toRupiah(500000*tekucodm)}
7656🪙 = Rp ${toRupiah(1000000*tekucodm)}`
)
  }
  break;                           
  case 'codm' : {  
if (!text) return reply('Masukkan Rate nya, Contoh : .codm 265')               
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!m.isGroup) return reply('Fitur Khusus Group!')
   	let tekkcodm = text.split(' ')[0]
  if (isNaN(tekkcodm)) return reply('Masukan hanya angka yah')
  reply(`*CALL OF DUTY MOBILE R${tekkcodm}*

63 🪙 = Rp ${toRupiah(33*tekkcodm)}
128 🪙 = Rp ${toRupiah(66*tekkcodm)}
321 🪙 = Rp ${toRupiah(165*tekkcodm)}
645 🪙 = Rp ${toRupiah(330*tekkcodm)}
800 🪙 = Rp ${toRupiah(396*tekkcodm)}
1.373 🪙 = Rp ${toRupiah(660*tekkcodm)}
2.060 🪙 = Rp ${toRupiah(990*tekkcodm)}
2.750 🪙 = Rp ${toRupiah(1254*tekkcodm)}
3.564 🪙 = Rp ${toRupiah(1650*tekkcodm)}
5.619 🪙 = Rp ${toRupiah(2409*tekkcodm)}
7.656 🪙 = Rp ${toRupiah(3300*tekkcodm)}`
)
  }
  break;                                    
  case 'aceracer': {
if (!text) return reply('Masukkan Rate nya, Contoh : .aceracer 2900')      
if (!itsMeDica && !isAdmins) return reply('Fitur Khusus admin!')
if (!m.isGroup) return reply('Fitur Khusus Group!')
  	let tekacer = text.split(' ')[0]
  if (isNaN(tekacer)) return reply('Masukan hanya angka yah')
  reply(`*Ace Racer R${tekacer}*

65🪙 ( 60 + 5 ) = Rp ${toRupiah(4.9*tekacer)}
270🪙 ( 250 + 20 ) = Rp ${toRupiah(18.9*tekacer)}
740🪙 ( 680 + 80 ) = Rp ${toRupiah(44.9*tekacer)}
1300🪙 ( 1180 + 120 ) = Rp ${toRupiah(84.9*tekacer)}
2180🪙 ( 2880 + 300 ) = Rp ${toRupiah(214.9*tekacer)}
6530🪙 ( 5880 + 650 ) = Rp ${toRupiah(429.9*tekacer)}`
)
  }
  break;                                
  case 'uniph': {
if (!text) return reply('Masukkan Rate nya, Contoh : .uniph 220')      
if (!itsMeDica && !isAdmins) return reply('Fitur Khusus admin!')
if (!m.isGroup) return reply('Fitur Khusus Group!')
  	let tekuniph = text.split(' ')[0]
  if (isNaN(tekuniph)) return reply('Masukan hanya angka yah')
  reply(`*MLC R${tekuniph}*

10💎 = Rp ${toRupiah(10*tekuniph)}
19💎 = Rp ${toRupiah(20*tekuniph)}
47💎 = Rp ${toRupiah(50*tekuniph)}
93💎 = Rp ${toRupiah(100*tekuniph)}
184💎 = Rp ${toRupiah(200*tekuniph)}
277💎 = Rp ${toRupiah(300*tekuniph)}
570💎 = Rp ${toRupiah(500*tekuniph)}
954💎 = Rp ${toRupiah(1000*tekuniph)}
1968💎 = Rp ${toRupiah(2000*tekuniph)}
4955💎 = Rp ${toRupiah(5000*tekuniph)}
Twilight = Rp ${toRupiah(500*tekuniph)}
Weekly Pass 1 = Rp ${toRupiah(99*tekuniph)}
Weekly Pass 2 = Rp ${toRupiah(198*tekuniph)}
Weekly Pass 3 = Rp ${toRupiah(297*tekuniph)}
Weekly Pass 4 = Rp ${toRupiah(396*tekuniph)}
Weekly Pass 5 = Rp ${toRupiah(495*tekuniph)}`
)
  }
  break;
   case 'pmb': {
if (!text) return reply('Masukkan Rate nya, Contoh : .pmb 2900')
if (!itsMeDica && !isAdmins) return reply('Fitur Khusus admin!')
if (!m.isGroup) return reply('Fitur Khusus Group!')
  	let tekunimy = text.split(' ')[0]
  if (isNaN(tekunimy)) return reply('Masukan hanya angka yah')
  reply(`*PROMO MLB R${tekunimy}*

14💎 = Rp ${toRupiah(1*tekunimy)}
42💎 = Rp ${toRupiah(2.85*tekunimy)}
70💎 = Rp ${toRupiah(4.75*tekunimy)}
140💎 = Rp ${toRupiah(9.51*tekunimy)}
284💎 = Rp ${toRupiah(19.02*tekunimy)}
355💎 = Rp ${toRupiah(23.77*tekunimy)}
429💎 = Rp ${toRupiah(28.53*tekunimy)}
716💎 = Rp ${toRupiah(47.55*tekunimy)}
1084💎 = Rp ${toRupiah(71.32*tekunimy)}
1446💎 = Rp ${toRupiah(95.09*tekunimy)}
2976💎 = Rp ${toRupiah(190.19*tekunimy)}
7502💎 = Rp ${toRupiah(475.47*tekunimy)}
Weekly Diamond Pass = Rp ${toRupiah(7.64*tekunimy)}
Twilight = Rp ${toRupiah(38.04*tekunimy)}`
)
  }
  break;               
  case 'unimy': {
if (!text) return reply('Masukkan Rate nya, Contoh : .unimy 2900')
if (!itsMeDica && !isAdmins) return reply('Fitur Khusus admin!')
if (!m.isGroup) return reply('Fitur Khusus Group!')
  	let tekunimy = text.split(' ')[0]
  if (isNaN(tekunimy)) return reply('Masukan hanya angka yah')
  reply(`*MLB R${tekunimy}*

14💎 = Rp ${toRupiah(1.06*tekunimy)}
28💎 = Rp ${toRupiah(2.12*tekunimy)}
42💎 = Rp ${toRupiah(3.18*tekunimy)}
56💎 = Rp ${toRupiah(4.24*tekunimy)}
70💎 = Rp ${toRupiah(5.3*tekunimy)}
112💎 = Rp ${toRupiah(8.48*tekunimy)}
140💎 = Rp ${toRupiah(10.6*tekunimy)}
284💎 = Rp ${toRupiah(21.2*tekunimy)}
355💎 = Rp ${toRupiah(26.5*tekunimy)}
429💎 = Rp ${toRupiah(31.8*tekunimy)}
716💎 = Rp ${toRupiah(53*tekunimy)}
1446💎 = Rp ${toRupiah(106*tekunimy)}
Weekly Diamond Pass = Rp ${toRupiah(8.48*tekunimy)}
Twilight = Rp ${toRupiah(42.4*tekunimy)}`
)
  }
  break;
                
  case 'unibrl': {
if (!text) return reply('Masukkan Rate nya, Contoh : .unibrl 2900')
if (!itsMeDica && !isAdmins) return reply('Fitur Khusus admin!')
if (!m.isGroup) return reply('Fitur Khusus Group!')
  	let tekunibrl = text.split(' ')[0]
  if (isNaN(tekunibrl)) return reply('Masukan hanya angka yah')
  reply(`*MLA R${tekunibrl}*

86💎 = Rp ${toRupiah(7.1*tekunibrl)}
172💎 = Rp ${toRupiah(14.2*tekunibrl)}
257💎 = Rp ${toRupiah(21.3*tekunibrl)}
344💎 = Rp ${toRupiah(28.4*tekunibrl)}
429💎 = Rp ${toRupiah(35.5*tekunibrl)}
514💎 = Rp ${toRupiah(42.6*tekunibrl)}
600💎 = Rp ${toRupiah(49.7*tekunibrl)}
706💎 = Rp ${toRupiah(56.8*tekunibrl)}
878💎 = Rp ${toRupiah(71*tekunibrl)}
963💎 = Rp ${toRupiah(78.1*tekunibrl)}
1050💎 = Rp ${toRupiah(85.19*tekunibrl)}
1135💎 = Rp ${toRupiah(92.3*tekunibrl)}
1220💎 = Rp ${toRupiah(99.4*tekunibrl)}
1412💎 = Rp ${toRupiah(113.6*tekunibrl)}
1584💎 = Rp ${toRupiah(127.8*tekunibrl)}
1669💎 = Rp ${toRupiah(134.9*tekunibrl)}
1756💎 = Rp ${toRupiah(142*tekunibrl)}
1841💎 = Rp ${toRupiah(149.1*tekunibrl)}
2195💎 = Rp ${toRupiah(170.4*tekunibrl)}
2539💎 = Rp ${toRupiah(198.8*tekunibrl)}
2901💎 = Rp ${toRupiah(227.2*tekunibrl)}
3073💎 = Rp ${toRupiah(241.4*tekunibrl)}
3688💎 = Rp ${toRupiah(284*tekunibrl)}
4394💎 = Rp ${toRupiah(340.8*tekunibrl)}
5532💎 = Rp ${toRupiah(426*tekunibrl)}
6238💎 = Rp ${toRupiah(482.8*tekunibrl)}
7727💎 = Rp ${toRupiah(596.4*tekunibrl)}
9288💎 = Rp ${toRupiah(710*tekunibrl)}
Twilight = Rp ${toRupiah(46.86*tekunibrl)}
SL + 12💎 = Rp ${toRupiah(46.86*tekunibrl)}
Starlight Plus = Rp ${toRupiah(106.5*tekunibrl)}`
)
  }
  break;
                
case 'soc': {
if (!text) return reply('Masukkan Rate nya, Contoh : .soc 2900')
if (!itsMeDica && !isAdmins) return reply('Fitur Khusus admin!')
if (!m.isGroup) return reply('Fitur Khusus Group!')
      
  	let teksoc = text.split(' ')[0]
  if (isNaN(teksoc)) return reply('Masukan hanya angka yah')
  reply(`*MLA R${teksoc}*

86   💎 = Rp ${toRupiah(6.4*teksoc)}
172  💎 = Rp ${toRupiah(12.7*teksoc)}
257  💎 = Rp ${toRupiah(19.1*teksoc)}
344  💎 = Rp ${toRupiah(24.9*teksoc)}
429  💎 = Rp ${toRupiah(31.2*teksoc)}
514  💎 = Rp ${toRupiah(37*teksoc)}
600  💎 = Rp ${toRupiah(43.4*teksoc)}
706  💎 = Rp ${toRupiah(50*teksoc)}
878  💎 = Rp ${toRupiah(62.7*teksoc)}
963  💎 = Rp ${toRupiah(68.5*teksoc)}
1050 💎 = Rp ${toRupiah(75.4*teksoc)}
1135 💎 = Rp ${toRupiah(81.2*teksoc)}
1220 💎 = Rp ${toRupiah(87.6*teksoc)}
1412 💎 = Rp ${toRupiah(100*teksoc)}
1584 💎 = Rp ${toRupiah(112.7*teksoc)}
1669 💎 = Rp ${toRupiah(119.1*teksoc)}
1756 💎 = Rp ${toRupiah(125.4*teksoc)}
1841 💎 = Rp ${toRupiah(131.8*teksoc)}
2195 💎 = Rp ${toRupiah(151.3*teksoc)}
2539 💎 = Rp ${toRupiah(176.2*teksoc)}
2901 💎 = Rp ${toRupiah(201.3*teksoc)}
3073 💎 = Rp ${toRupiah(214*teksoc)}
3688 💎 = Rp ${toRupiah(252.4*teksoc)}
4394 💎 = Rp ${toRupiah(302.4*teksoc)}
5532 💎 = Rp ${toRupiah(381*teksoc)}
6238 💎 = Rp ${toRupiah(431*teksoc)}
7727 💎 = Rp ${toRupiah(532.3*teksoc)}
9288 💎 = Rp ${toRupiah(632.9*teksoc)}
Twilight = Rp ${toRupiah(41.9*teksoc)}
Weekly Pass 1 = Rp ${toRupiah(7.92*teksoc)}
Weekly Pass 2 = Rp ${toRupiah(15.84*teksoc)}
Weekly Pass 3 = Rp ${toRupiah(23.76*teksoc)}
Weekly Pass 4 = Rp ${toRupiah(31.68*teksoc)}
Weekly Pass 5 = Rp ${toRupiah(39.6*teksoc)}`
)
  }
  break
     case 'hsr': {
if (!text) return reply('Masukkan Rate nya, Contoh : .hsr 2900')        
  	let tekhsr = text.split(' ')[0]
  if (isNaN(tekhsr)) return reply('Masukan hanya angka yah')
  reply(`*Honkai Star Rail R${tekhsr}*
_Bonus hanya terhitung untuk Top Up pertama_

60 OS = Rp ${toRupiah(4.90*tekhsr)}
300 + Bonus 30 OS = Rp ${toRupiah(19.90*tekhsr)}
980 + Bonus 110 OS = Rp ${toRupiah(59.90*tekhsr)}
1980 + Bonus 260 OS = Rp ${toRupiah(129.90*tekhsr)}
3280 + Bonus 600 OS = Rp ${toRupiah(199.90*tekhsr)}
6480 + Bonus 1600 OS = Rp ${toRupiah(399.90*tekhsr)}

Express Supply Pass = Rp ${toRupiah(19.90*tekhsr)}`
)
  }
  break;                             
    case 'kachi': {
if (!text) return reply('Masukkan Rate nya, Contoh : .kachi 2900')        
  	let tekachi = text.split(' ')[0]
  if (isNaN(tekachi)) return reply('Masukan hanya angka yah')
  reply(`*RATE KACHI R${tekachi}*

140💎 = Rp ${toRupiah(9.19*tekachi)}
280💎 = Rp ${toRupiah(18.38*tekachi)}
355💎 = Rp ${toRupiah(22.99*tekachi)}
425💎 = Rp ${toRupiah(27.58*tekachi)}
565💎 = Rp ${toRupiah(36.77*tekachi)}
716💎 = Rp ${toRupiah(46.99*tekachi)}
1446💎 = Rp ${toRupiah(94.99*tekachi)}
2976💎 = Rp ${toRupiah(189.99*tekachi)}
7502💎 = Rp ${toRupiah(467*tekachi)}`
)
  }
  break;              
case 'socl': {
if (!text) return reply('Masukkan Rate nya, Contoh : .soc 2900')
if (!itsMeDica && !isAdmins) return reply('Fitur Khusus admin!')
if (!m.isGroup) return reply('Fitur Khusus Group!')
      
  	let teksoc = text.split(' ')[0]
  if (isNaN(teksoc)) return reply('Masukan hanya angka yah')
  reply(`*MLA R${teksoc}*

86   💎 = Rp ${toRupiah(6.4*teksoc)}
172  💎 = Rp ${toRupiah(12.7*teksoc)}
257  💎 = Rp ${toRupiah(19.1*teksoc)}
344  💎 = Rp ${toRupiah(25.4*teksoc)}
429  💎 = Rp ${toRupiah(31.8*teksoc)}
514  💎 = Rp ${toRupiah(38.2*teksoc)}
600  💎 = Rp ${toRupiah(44.6*teksoc)}
706  💎 = Rp ${toRupiah(51*teksoc)}
878  💎 = Rp ${toRupiah(63.7*teksoc)}
963  💎 = Rp ${toRupiah(70.1*teksoc)}
1050 💎 = Rp ${toRupiah(76.4*teksoc)}
1135 💎 = Rp ${toRupiah(82.8*teksoc)}
1220 💎 = Rp ${toRupiah(89.2*teksoc)}
1412 💎 = Rp ${toRupiah(102*teksoc)}
1584 💎 = Rp ${toRupiah(114.7*teksoc)}
1669 💎 = Rp ${toRupiah(121.1*teksoc)}
1756 💎 = Rp ${toRupiah(127.4*teksoc)}
1841 💎 = Rp ${toRupiah(133.8*teksoc)}
2195 💎 = Rp ${toRupiah(153.2*teksoc)}
2539 💎 = Rp ${toRupiah(178.6*teksoc)}
2901 💎 = Rp ${toRupiah(204.2*teksoc)}
3073 💎 = Rp ${toRupiah(216.9*teksoc)}
3688 💎 = Rp ${toRupiah(255.6*teksoc)}
4394 💎 = Rp ${toRupiah(306.6*teksoc)}
5532 💎 = Rp ${toRupiah(383.6*teksoc)}
6238 💎 = Rp ${toRupiah(434.6*teksoc)}
7727 💎 = Rp ${toRupiah(536.8*teksoc)}
9288 💎 = Rp ${toRupiah(638*teksoc)}
Twilight = Rp ${toRupiah(41.9*teksoc)}
Weekly Pass 1 = Rp ${toRupiah(7.92*teksoc)}
Weekly Pass 2 = Rp ${toRupiah(15.84*teksoc)}
Weekly Pass 3 = Rp ${toRupiah(23.76*teksoc)}
Weekly Pass 4 = Rp ${toRupiah(31.68*teksoc)}
Weekly Pass 5 = Rp ${toRupiah(39.6*teksoc)}`
)
  }
  break
    case 'fifa': {
if (!text) return reply('Masukkan Rate nya, Contoh : .fifa 2900')        
  	let tekachi = text.split(' ')[0]
  if (isNaN(tekachi)) return reply('Masukan hanya angka yah')
  reply(`*RATE FIFA R${tekachi}*

50 FIFA POINTS = Rp ${toRupiah(1.90*tekachi)}
100 FIFA POINTS= Rp ${toRupiah(3.40*tekachi)}
150 FIFA POINTS = Rp ${toRupiah(4.90*tekachi)}
500 FIFA POINTS = Rp ${toRupiah(13.90*tekachi)}
1050 FIFA POINTS = Rp ${toRupiah(23.90*tekachi)}
2200 FIFA POINTS = Rp ${toRupiah(44.90*tekachi)}
5750 FIFA POINTS = Rp ${toRupiah(119.90*tekachi)}
12000 FIFA POINTS = Rp ${toRupiah(239.90*tekachi)}
17500 FIFA POINTS = Rp ${toRupiah(329.90*tekachi)}
26000 FIFA POINTS = Rp ${toRupiah(479.90*tekachi)}`
)
  }
  break;                            

}
}

module.exports = rateBahan
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});