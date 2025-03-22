const { getList } = require('../controller/digiController')
const fs = require('fs')
const chalk = require('chalk')
function listPrepaid(command, level, reply , m){
switch(command){
                    /* GAMESS */
     case 'listff': {
        const kategori = 'Games'
        const brand = 'FREE FIRE'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
        case 'listffm': {
        const kategori = 'Games'
        const brand = 'FREE FIRE'
        const type = 'Membership'
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listbd': {
        const kategori = 'Games'
        const brand = 'Boss Domino'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listhd': {
        const kategori = 'Games'
        const brand = 'Higgs Domino'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
        break
      case 'listhdd': {
        const kategori = 'Games'
        const brand = 'Higgs Domino'
        const type = 'Emas D'
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listf84': {
        const kategori = 'Games'
        const brand = 'Farlight 84'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listml': {
        const kategori = 'Games'
        const brand = 'MOBILE LEGENDS'
        const type = 'Umum'
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listls': {
        const kategori = 'Games'
        const brand = 'Lumia Saga'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listhg': {
        const kategori = 'Games'
        const brand = 'HAGO'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listkov': {
        const kategori = 'Games'
        const brand = 'Knights of Valour'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listep': {
        const kategori = 'Games'
        const brand = 'Eggy Party'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listwg': {
        const kategori = 'Games'
        const brand = 'Werewolf (Party Game)'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listsd': {
        const kategori = 'Games'
        const brand = 'Speed Drifters'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listaov': {
        const kategori = 'Games'
        const brand = 'ARENA OF VALOR'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listl': {
        const kategori = 'Games'
        const brand = 'Lokapala'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listhok': {
        const kategori = 'Games'
        const brand = 'Honor of Kings'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listfm2': {
        const kategori = 'Games'
        const brand = 'Football Master 2'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listpm': {
        const kategori = 'Games'
        const brand = 'PUBG MOBILE'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listro': {
        const kategori = 'Games'
        const brand = 'Ragnarok Origin'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listsg': {
        const kategori = 'Games'
        const brand = 'Snail Games'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listtpg': {
        const kategori = 'Games'
        const brand = 'Teen Patti Gold'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listlac': {
        const kategori = 'Games'
        const brand = 'LifeAfter Credits'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listac': {
        const kategori = 'Games'
        const brand = 'Auto Chess'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listrom': {
        const kategori = 'Games'
        const brand = 'Ragnarok M: Eternal Love'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listbm3d': {
        const kategori = 'Games'
        const brand = 'Bleach Mobile 3D'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listol': {
        const kategori = 'Games'
        const brand = 'Omega Legends'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listcodm': {
        const kategori = 'Games'
        const brand = 'Call of Duty MOBILE'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listopm': {
        const kategori = 'Games'
        const brand = 'One Punch Man'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listss': {
        const kategori = 'Games'
        const brand = 'Shining Spirit'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listpt': {
        const kategori = 'Games'
        const brand = 'Poker Texas'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listbcs': {
        const kategori = 'Games'
        const brand = 'Boyaa Capsa Susun'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'listhbf': {
        const kategori = 'Games'
        const brand = 'Higgs Bearfish'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      







    case 'listau': {
        const kategori = 'Games'
        const brand = 'Among Us'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listpg': {
        const kategori = 'Games'
        const brand = 'Pokemon Go'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listwt': {
        const kategori = 'Games'
        const brand = 'WEBTOON'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listkc': {
        const kategori = 'Games'
        const brand = 'Kings Choice'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listbl': {
        const kategori = 'Games'
        const brand = 'Bigo Live'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listfcm': {
        const kategori = 'Games'
        const brand = 'FC Mobile'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listjd': {
        const kategori = 'Games'
        const brand = 'Joy Domino'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listrd': {
        const kategori = 'Games'
        const brand = 'Royal Dream'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listhmcs': {
        const kategori = 'Games'
        const brand = 'Hatsune Miku Colorful Stage'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listz': {
        const kategori = 'Games'
        const brand = 'Zepeto'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listss': {
        const kategori = 'Games'
        const brand = 'Super Sus'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listrij': {
        const kategori = 'Games'
        const brand = 'Revelation Infinite Journey'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listlm': {
        const kategori = 'Games'
        const brand = 'Lords Mobile'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listpb': {
        const kategori = 'Games'
        const brand = 'POINT BLANK'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'lista9': {
        const kategori = 'Games'
        const brand = 'Asphalt 9'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listip': {
        const kategori = 'Games'
        const brand = 'IndoPlay'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listgrn': {
        const kategori = 'Games'
        const brand = 'GARENA'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listhiya': {
        const kategori = 'Games'
        const brand = 'Hiya'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listsp': {
        const kategori = 'Games'
        const brand = 'Starpass'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listba': {
        const kategori = 'Games'
        const brand = 'Bullet Angel'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listjdy': {
        const kategori = 'Games'
        const brand = 'Jade Dynasty'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listys6mv': {
        const kategori = 'Games'
        const brand = 'YS 6 Mobile VNG'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listbcm': {
        const kategori = 'Games'
        const brand = 'Black Clover M'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listcs': {
        const kategori = 'Games'
        const brand = 'Cloud Song'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listgi': {
        const kategori = 'Games'
        const brand = 'Genshin Impact'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listtof': {
        const kategori = 'Games'
        const brand = 'Tower of Fantasy'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

    case 'listsg': {
        const kategori = 'Games'
        const brand = 'Stumble Guys'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listmsw': {
        const kategori = 'Games'
        const brand = 'Marvel Super War'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listlc': {
        const kategori = 'Games'
        const brand = 'LUDO CLUB'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listlotne': {
        const kategori = 'Games'
        const brand = 'Light of Thel New Era'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listmsa': {
        const kategori = 'Games'
        const brand = 'Metal Slug Awakening'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listsm': {
        const kategori = 'Games'
        const brand = 'Sausage Man'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listhpma': {
        const kategori = 'Games'
        const brand = 'Harry Potter Magic Awakened'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listgvn': {
        const kategori = 'Games'
        const brand = 'Goddess of Victory Nikke'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listlpm': {
        const kategori = 'Games'
        const brand = 'Laplace M'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listsms': {
        const kategori = 'Games'
        const brand = 'Seal M Sea'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listbtk': {
        const kategori = 'Games'
        const brand = 'Be The King'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listsos': {
        const kategori = 'Games'
        const brand = 'State of Survival'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listar': {
        const kategori = 'Games'
        const brand = 'Ace Racer'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listbs': {
        const kategori = 'Games'
        const brand = 'Blood Strike'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listud': {
        const kategori = 'Games'
        const brand = 'Undawn'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listmuo3': {
        const kategori = 'Games'
        const brand = 'MU ORIGIN 3'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listcoc': {
        const kategori = 'Games'
        const brand = 'Clash of Clans'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listdrs': {
        const kategori = 'Games'
        const brand = 'DRAGON RAJA - SEA'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listiv': {
        const kategori = 'Games'
        const brand = 'Identity V'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listab': {
        const kategori = 'Games'
        const brand = 'Arena Breakout'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listhf': {
        const kategori = 'Games'
        const brand = 'Hyper Front'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listcr': {
        const kategori = 'Games'
        const brand = 'Clash Royale'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listhsr': {
        const kategori = 'Games'
        const brand = 'Honkai Star Rail'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listhe': {
        const kategori = 'Games'
        const brand = 'Heroes Evolved'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listrok': {
        const kategori = 'Games'
        const brand = 'Rise of Kingdom'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listhi3': {
        const kategori = 'Games'
        const brand = 'Honkai Impact 3'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listlodfw': {
        const kategori = 'Games'
        const brand = 'Legacy of Discord Furious Wings'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'list8bp': {
        const kategori = 'Games'
        const brand = '8 Ball Pool'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listeoc': {
        const kategori = 'Games'
        const brand = 'Era of Celestial'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listlm': {
        const kategori = 'Games'
        const brand = 'Life Makeover'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listpnsm': {
        const kategori = 'Games'
        const brand = 'PUBG New State Mobile'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listmi': {
        const kategori = 'Games'
        const brand = 'Madtale Idle RPG'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listsm': {
        const kategori = 'Games'
        const brand = 'StarMaker'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listcc': {
        const kategori = 'Games'
        const brand = 'Chaos Crisis'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listpgr': {
        const kategori = 'Games'
        const brand = 'Punishing Gray Raven'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listesm': {
        const kategori = 'Games'
        const brand = 'Ensemble Stars Music'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listag': {
        const kategori = 'Games'
        const brand = 'Astral Guardians'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listtjc': {
        const kategori = 'Games'
        const brand = 'Tom and Jerry : Chase'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listv': {
        const kategori = 'Games'
        const brand = 'Valorant'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'lista2m': {
        const kategori = 'Games'
        const brand = 'AU2 MOBILE'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listlor': {
        const kategori = 'Games'
        const brand = 'Legends of Runeterra'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listlolwr': {
        const kategori = 'Games'
        const brand = 'League of Legends Wild Rift'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listpg3d': {
        const kategori = 'Games'
        const brand = 'Pixel Gun 3D'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listsoo': {
        const kategori = 'Games'
        const brand = 'Scroll of Onmyoji'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listal': {
        const kategori = 'Games'
        const brand = 'Azur Lane'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listln': {
        const kategori = 'Games'
        const brand = 'Love Nikki'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listec': {
        const kategori = 'Games'
        const brand = 'Eternal City'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listroh': {
        const kategori = 'Games'
        const brand = 'Ride Out Heroes'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listros': {
        const kategori = 'Games'
        const brand = 'Rules of Survival Mobile'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listlnw': {
        const kategori = 'Games'
        const brand = 'Luna New World'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listpe': {
        const kategori = 'Games'
        const brand = 'Project Entropy'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listlolpc': {
        const kategori = 'Games'
        const brand = 'League of Legends PC'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listmt': {
        const kategori = 'Games'
        const brand = 'MangaToon'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listtftm': {
        const kategori = 'Games'
        const brand = 'Teamfight Tactics Mobile'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listwsfs': {
        const kategori = 'Games'
        const brand = 'Whiteout Survival Frost Star'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listrh': {
        const kategori = 'Games'
        const brand = 'Rhythm Hive'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listscz': {
        const kategori = 'Games'
        const brand = 'Snowbreak Containment Zone'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listdsg': {
        const kategori = 'Games'
        const brand = 'Dragonheir Silent Gods'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listdcm': {
        const kategori = 'Games'
        const brand = 'Dark Continent Mist'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listib': {
        const kategori = 'Games'
        const brand = 'Infinite Borders'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listtauk': {
        const kategori = 'Games'
        const brand = 'The Ants Underground Kingdom'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listbdm': {
        const kategori = 'Games'
        const brand = 'Black Desert Mobile'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'lista': {
        const kategori = 'Games'
        const brand = 'Aswat'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listld': {
        const kategori = 'Games'
        const brand = 'Love and Deepspace'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listmgl': {
        const kategori = 'Games'
        const brand = 'Mango Live'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listkok': {
        const kategori = 'Games'
        const brand = 'King of Kings'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listhay': {
        const kategori = 'Games'
        const brand = 'Hay Day'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listl': {
        const kategori = 'Games'
        const brand = 'Likee'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listbs': {
        const kategori = 'Games'
        const brand = 'Brawl Stars'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listms': {
        const kategori = 'Games'
        const brand = 'Marvel Snap'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listlt': {
        const kategori = 'Games'
        const brand = 'Lita'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'listgt': {
        const kategori = 'Games'
        const brand = 'Growtopia'
        const type = ''
        getList(kategori, brand, type, level,reply , m)
    }
    break
          case 'listwdp': {
            const kategori = 'Games'
            const brand = 'MOBILE LEGENDS'
            const type = 'Membership'
          getList(kategori, brand, type, level, reply , m)
          }
          break

          /* PULSA */
    case 'pults': {
        const kategori = 'Pulsa'
        const brand = 'TELKOMSEL'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'pulxl': {
        const kategori = 'Pulsa'
        const brand = 'XL'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'pulis': {
        const kategori = 'Pulsa'
        const brand = 'INDOSAT'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'pultri': {
        const kategori = 'Pulsa'
        const brand = 'TRI'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    
    case 'pulsf': {
        const kategori = 'Pulsa'
        const brand = 'SMARTFREN'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'pulbu': {
        const kategori = 'Pulsa'
        const brand = 'by.U'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
    case 'pulax': {
        const kategori = 'Pulsa'
        const brand = 'AXIS'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

                    /** DATA */

      case 'datts': {
        const kategori = 'Data'
        const brand = 'TELKOMSEL'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'datxl': {
        const kategori = 'Data'
        const brand = 'XL'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'datis': {
        const kategori = 'Data'
        const brand = 'INDOSAT'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
        break
      case 'datisfc': {
        const kategori = 'Data'
        const brand = 'INDOSAT'
        const type = 'Freedom Combo'
      getList(kategori, brand, type, level,reply , m)
      }
        break
      case 'datisfu': {
        const kategori = 'Data'
        const brand = 'INDOSAT'
        const type = 'Freedom U'
      getList(kategori, brand, type, level,reply , m)
      }
        break
      case 'datisfh': {
        const kategori = 'Data'
        const brand = 'INDOSAT'
        const type = 'Freedom Harian'
      getList(kategori, brand, type, level,reply , m)
      }
        break
      case 'datisfi': {
        const kategori = 'Data'
        const brand = 'INDOSAT'
        const type = 'Freedom Internet'
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'dattri': {
        const kategori = 'Data'
        const brand = 'TRI'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'datsf': {
        const kategori = 'Data'
        const brand = 'SMARTFREN'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'datbu': {
        const kategori = 'Data'
        const brand = 'by.U'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'datax': {
        const kategori = 'Data'
        const brand = 'AXIS'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

                /** Voucher */
      case 'Vocts': {
        const kategori = 'Voucher'
        const brand = 'TELKOMSEL'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocxl': {
        const kategori = 'Voucher'
        const brand = 'XL'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocis': {
        const kategori = 'Voucher'
        const brand = 'INDOSAT'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'voctri': {
        const kategori = 'Voucher'
        const brand = 'TRI'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocsf': {
        const kategori = 'Voucher'
        const brand = 'SMARTFREN'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocax': {
        const kategori = 'Voucher'
        const brand = 'AXIS'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vochm': {
        const kategori = 'Voucher'
        const brand = 'HOTELMURAH'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocwi': {
        const kategori = 'Voucher'
        const brand = 'WIFI ID'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocgpid': {
        const kategori = 'Voucher'
        const brand = 'GOOGLE PLAY INDONESIA'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'voctk': {
        const kategori = 'Voucher'
        const brand = 'Tokopedia'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocidm': {
        const kategori = 'Voucher'
        const brand = 'INDOMARET'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocstw': {
        const kategori = 'Voucher'
        const brand = 'Steam Wallet (IDR)'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocbu': {
        const kategori = 'Voucher'
        const brand = 'by.U'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocgb': {
        const kategori = 'Voucher'
        const brand = 'GRAB'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocpb': {
        const kategori = 'Voucher'
        const brand = 'POINT BLANK'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocms': {
        const kategori = 'Voucher'
        const brand = 'Mango Soft'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocgr': {
        const kategori = 'Voucher'
        const brand = 'GARENA'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocuv': {
        const kategori = 'Voucher'
        const brand = 'Unipin Voucher'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocrg': {
        const kategori = 'Voucher'
        const brand = 'Razer Gold'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocwg': {
        const kategori = 'Voucher'
        const brand = 'WAVE GAME'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocmx': {
        const kategori = 'Voucher'
        const brand = 'MEGAXUS'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocem': {
        const kategori = 'Voucher'
        const brand = 'e-MeteraiIqiyi'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocpm': {
        const kategori = 'Voucher'
        const brand = 'PUBG MOBILE'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocgc': {
        const kategori = 'Voucher'
        const brand = 'Game-On Credits'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vochsr': {
        const kategori = 'Voucher'
        const brand = 'Honkai Star Rail'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocsh': {
        const kategori = 'Voucher'
        const brand = 'Shell'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocvd': {
        const kategori = 'Voucher'
        const brand = 'Vidio'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocam': {
        const kategori = 'Voucher'
        const brand = 'ALFAMART VOUCHER'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocvu': {
        const kategori = 'Voucher'
        const brand = 'Viui'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'voctu': {
        const kategori = 'Voucher'
        const brand = 'Tunes'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocpubg': {
        const kategori = 'Voucher'
        const brand = 'PUBG'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocr': {
        const kategori = 'Voucher'
        const brand = 'Riot Cash'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocme': {
        const kategori = 'Voucher'
        const brand = 'MAP E-gift Voucher'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocte': {
        const kategori = 'Voucher'
        const brand = 'Traveloka E-Voucher'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocr': {
        const kategori = 'Voucher'
        const brand = 'Roblox'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocdac': {
        const kategori = 'Voucher'
        const brand = 'Dota Auto Chess Candy (Global)'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocel': {
        const kategori = 'Voucher'
        const brand = 'Exitlag'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocsp': {
        const kategori = 'Voucher'
        const brand = 'SPOTIFY'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocgpks': {
        const kategori = 'Voucher'
        const brand = 'GOOGLE PLAY KOREA SELATAN'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocbngc': {
        const kategori = 'Voucher'
        const brand = 'Battle Net Gift Card'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocxb': {
        const kategori = 'Voucher'
        const brand = 'XBOX'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocpw': {
        const kategori = 'Voucher'
        const brand = 'Playwith'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocps': {
        const kategori = 'Voucher'
        const brand = 'PLAYSTATION'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocnes': {
        const kategori = 'Voucher'
        const brand = 'Nintendo eShop'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocgpu': {
        const kategori = 'Voucher'
        const brand = 'GOOGLE PLAY US REGION'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocimvu': {
        const kategori = 'Voucher'
        const brand = 'IMVU'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vockk': {
        const kategori = 'Voucher'
        const brand = 'Karma Koin'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'voccdmw': {
        const kategori = 'Voucher'
        const brand = 'Call of Duty Modern Warfare'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
      case 'vocso': {
        const kategori = 'Voucher'
        const brand = 'Smile One'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

             /** E-Money */

 case 'emodn': {
        const kategori = 'E-Money'
        const brand = 'DANA'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emosp': {
        const kategori = 'E-Money'
        const brand = 'SHOPEE PAY'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emoov': {
        const kategori = 'E-Money'
        const brand = 'OVO'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emola': {
        const kategori = 'E-Money'
        const brand = 'LinkAja'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emogp': {
        const kategori = 'E-Money'
        const brand = 'GO PAY'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emomx': {
        const kategori = 'E-Money'
        const brand = 'MAXIM'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emomb': {
        const kategori = 'E-Money'
        const brand = 'Mitra Blibli'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emosk': {
        const kategori = 'E-Money'
        const brand = 'Sakuku'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emoet': {
        const kategori = 'E-Money'
        const brand = 'MANDIRI E-TOLL'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emodk': {
        const kategori = 'E-Money'
        const brand = 'DOKU'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emoap': {
        const kategori = 'E-Money'
        const brand = 'AstraPay'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emois': {
        const kategori = 'E-Money'
        const brand = 'i.saku'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emoti': {
        const kategori = 'E-Money'
        const brand = 'TIX ID'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emotb': {
        const kategori = 'E-Money'
        const brand = 'TAPCASH BNI'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emoapy': {
        const kategori = 'E-Money'
        const brand = 'Alipay'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emogb': {
        const kategori = 'E-Money'
        const brand = 'GRAB'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emobrb': {
        const kategori = 'E-Money'
        const brand = 'BRI BRIZZI'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emokp': {
        const kategori = 'E-Money'
        const brand = 'KasPro'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emobl': {
        const kategori = 'E-Money'
        const brand = 'BUKALAPAK'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emosfd': {
        const kategori = 'E-Money'
        const brand = 'Shopee Food Driver'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emoms': {
        const kategori = 'E-Money'
        const brand = 'Mitra Shopee'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emoind': {
        const kategori = 'E-Money'
        const brand = 'Indriver'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'emomt': {
        const kategori = 'E-Money'
        const brand = 'M-Tix'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break


                   /**   PLN */
 case 'token': {
        const kategori = 'PLN'
        const brand = 'PLN'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break

      /** Paket SMS & Telpon */
 case 'pakt': {
        const kategori = 'Paket SMS & Telpon'
        const brand = 'TELKOMSEL'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break
 case 'pakx': {
        const kategori = 'Paket SMS & Telpon'
        const brand = 'XL'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
 case 'paki': {
        const kategori = 'Paket SMS & Telpon'
        const brand = 'INDOSAT'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
 case 'pakt': {
        const kategori = 'Paket SMS & Telpon'
        const brand = 'TRI'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
 case 'paka': {
        const kategori = 'Paket SMS & Telpon'
        const brand = 'AXIS'
        const type = ''
      getList(kategori, brand, type, level,reply , m)
      }
      break



                            /** Masa Aktif */
      
 case 'akt': {
    const kategori = 'Masa Aktif'
    const brand = 'TELKOMSEL'
    const type = ''
  getList(kategori, brand, type, level,reply , m)
  }
  break
 case 'akx': {
    const kategori = 'Masa Aktif'
    const brand = 'XL'
    const type = ''
  getList(kategori, brand, type, level,reply , m)
  }
  break
 case 'aki': {
    const kategori = 'Masa Aktif'
    const brand = 'INDOSAT'
    const type = ''
  getList(kategori, brand, type, level,reply , m)
  }
  break
 case 'akt': {
    const kategori = 'Masa Aktif'
    const brand = 'TRI'
    const type = ''
  getList(kategori, brand, type, level,reply , m)
  }
  break
 case 'aka': {
    const kategori = 'Masa Aktif'
    const brand = 'AXIS'
    const type = ''
  getList(kategori, brand, type, level,reply , m)
  }
  break

                /** Malaysia TOPUP */
 

            }
}

module.exports = {listPrepaid}
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
