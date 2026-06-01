var store = {};store['sv'] = {};


        $(document).ready(function () {
        
            
            index  = lunr(function () {

            this.use(lunr.sv);

                this.field('title', {boost: 10});
                this.field('body');
                this.ref('id');
            

        
this.add({id:1, 
title:"Inledning", 
body:" inledning " });
this.add({id:2, 
title:"EG\/UKCA-försäkran om överensstämmelse enligt (UKCA, Machinery (Safety) Regulations 2008, as amended.2) and Maskindirektivet 2006\/42\/EG", 
body:" eg\/ukca-försäkran om överensstämmelse enligt (ukca, machinery (safety) regulations 2008, amended.2) maskindirektivet 2006\/42\/eg steelwrist ab, titangatan 9, 195 72 rosersberg, sverige, försäkrar härmed som tillverkare att nedan definierade utbytbara utrustning är ce\/ukca-märkt och överensstämmelse med tillämpliga krav maskindirektivet 2006\/42\/eg \/ ukca märkt föreskrifterna för leverans av maskiner (säkerhet) 2008. för ab lokala representanter se www.steelwrist.com. beskrivning av den utbytbara utrustningen modell : serienummer : tillverkningsår : ingen ny ce\/ukca-märkning krävs för att använda den utbytbara utrustningen kombination med avsedd grävmaskin om kraven som uppges denna eg\/ukca-försäkran överensstämmelse enligt maskindirektivet 2006\/42\/eg \/ regler leverans av maskiner (säkerhet) 2008 har uppfyllts. krav som skall uppfyllas för att steelwrist ce\/ukca-märkning av den utbytbara utrustningen ska gälla när används med avsedd grävmaskin: grävmaskinen ska uppfylla relaterade krav och tekniska specifikationer den här användarmanualen uppger för att anses kompatibel med utbytbara utrustningen den utbytbara utrustningen är ansluten till grävmaskinens hydraulik och styrsystem enligt instruktionerna denna användarmanual grävmaskinens\/styrsystemets den utbytbara utrustningen ska användas enlighet med instruktioner som finns denna användarmanual den utbytbara utrustningen ska användas på ett sådant sätt att nedan listade hälso- och säkerhetskraven ur maskindirektivet bilaga 1 4, 2006\/42\/eg uppfylls användaren ska själv kontrollera kompatibiliteten mellan den utbytbara utrustningen och grävmaskinen baserat på tekniska informationen denna användarmanual samt grävmaskinens användarmanual. den utbytbara utrustningen har bedömts uppfylla relevanta bestämmelser enligtmaskindirektivet 2006\/42\/eg, på följande punkter bilaga 1: bilaga 1, 1. grundläggande krav 1, 1.1.2, 1.1.5, 1.1.6, 1.2, 1.2.1, 1.2.2, 1.2.3, 1.2.6, 1.3.2, 1.3.3, 1.3.4, 1.3.7, 1.5, 1.5.3, 1.5.4, 1.5.10, 1.5.11, 1.6, 1.6.3, 1.7, 1.7.1.1, 1.7.1.2, 1.7.2, 1.7.3, 1.7.4, 1.7.4.1 och 1.7.4.2 bilaga 1, 4. ytterligare krav samband med lyft 4.1.2.3, 4.1.3, 4.3,  4.3.2, 4.4, och 4.4.1 relevanta delar harmoniserade standarder som används vid bedömningen en iso 12100:2010, 474-1:2022, 474-5:2022, 19014-1:2018, 19014-3:2018, 19014-4:2020 13849-1:2023 ,iso 13013:2016 as 13031:2023 denna försäkran samt steelwrists garantier upphör att gälla om produkten används utanför dess specifikationer eller ändringar andra ingrepp görs på utan godkännande. den tekniska dokumentationen för denna maskin förvaras ovanstående adress. frågor besvaras av vd utvecklingschef. stefan stockhaus, vd, steelwrist ab detta dokument upprättades rosersberg, sverige 2025-03-17. produktkompatibilitet checklist våra produkter är ce\/ukca-märkta enligt denna försäkran. användarmanualen innehåller en mängd olika modeller av produkten och kapitlet tekniska data definieras det tillåtna användningsområdet för varje modell. checklistan nedan kan användas att kontrollera grävmaskinen kompatibel med produkt. detta mycket viktigt säker hantering produkten, ce\/ukca-märkning garanti. grävmaskin uppgifter baserade på tillverkarens specifikationer grävmaskinens användarmanual kommentar märke och modell: serienummer: typ: maskinvikt: [ton, cirka] max brytmoment: [knm] maximalt brytmoment, formel: grävkraft eller brytkraft [kn] x skopradie [m]. max hydrauliskt tryck: [bar] elektrisk spänning: [v] utbytbar utrustning uppgifter baserade på våra specifikationer denna användarmanual modell: samma som försäkran om överensstämmelse på föregående sida. serienummer: samma som försäkran om överensstämmelse på föregående sida. alla punkter installationschecklistan avbockade: ja........ nej........ ja, se kommentar kommentar: minsta positiva grävmoment: ............ [knm] grävmoment är inom grävmaskinens tolerans: ja........ nej........ minsta negativa grävmoment: ............ [knm] grävmoment är inom grävmaskinens tolerans: ja........ nej........ maskinvikt: ange vikt: ............ ton maskinvikt är inom specifikationsområdet: ja........ nej........ kompatibilitet uppgifter baserade på tillverkarnas specifikationer användarmanualer för berörda produkter kontrollera att din produkt är kompatibel med alla redskapsfästen och arbetsverktyg som den kommer kopplas\/användas med. ja........ nej........ kommentar: " });
this.add({id:3, 
title:"Avsedd användning", 
body:" avsedd användning steelwrist fingergrip är en allsidig grip med extra stor öppning och mekaniska ändstopp. griparna har integrerade grindar s- sq-standard. gripen kan användas för sortering återvinning lastarbete hantering av sten hantering av stockar samt avverkningsrester (grenar och toppar) skrothantering hantering av bulkmaterial rivning av träkonstruktioner rivning av lättare murverk. för att använda gripen ska grävmaskinens vikt motsvara den maskinvikt som gripen är avsedd för risken för fallande på grund av hög belastning avlastningsventilerna beaktas dess maxlast beaktas, enligt information manualen. använd inte gripen för att slå eller hacka för lyft med kätting, stropp eller motsvarande för att flytta grävmaskinen med stöd av gripen vatten miljöer där explosionsrisk föreligger. för att säkerställa gripens funktion och säkra handhavande, måste gripen användas underhållas efter givna instruktioner den här manualen. läs informationen manualen noggrant följ alla säkerhetsföreskrifter underhållsinstruktioner. innan tas bruk ska även grävmaskinens säkerhetsinstruktion bruksanvisning läsas. " });
this.add({id:4, 
title:"Om denna manual", 
body:" om denna manual denna manual är avsedd att vara till ledning för korrekt användning och skötsel av produkten. studera manualen noga före start körning med produkten, eller innan något förebyggande underhåll utförs. gör dig förtrogen med produkten och alla anvisningar, förvara manualen\/ qr-dekalen som leder till manualen så att den alltid finns hands vid användandet av produkten. den extra klistras lämpligtvis fast hytten på väl synlig plats. steelwrist strävar ständigt efter förbättra våra produkter vi förbehåller oss därför rätten göra konstruktionsändringar förbättringar närhelst anser det befogat. detta utan därmed införa dessa redan har levererats eller satts arbete. vi även föregående meddelande ändra data utrustning, samt föreskrifter för underhåll övriga serviceåtgärder. den här manualen är utformad för att gälla samtliga marknader. detta medför olika konfigurationer speciella marknader kan förekomma den manualen. vi ber dig därför bortse från avsnitt som inte aktuella din produkt. " });
this.add({id:5, 
title:"Miljöinformation", 
body:" miljöinformation som en del av miljöarbetet på steelwrist strävar vi efter att göra produkter som över sin livscykel har så liten miljöpåverkan möjligt. Övergripande innebär användandet steelwristprodukt grävmaskinen kan användas mer effektivt, vilket färre förflyttningar med grävmaskinen, högre utnyttjandegrad och inte minst transporter maskiner då fler typer arbeten göras samma grävmaskin. allt detta positiv jämfört grävmaskin utan steelwristprodukter. trots detta är det emellertid även viktigt att steelwristprodukter sig själva utvecklas, produceras, underhålls och vid produktlivscykelns slut, återvinns på ett sådant sätt som följer lagkrav minskar produkternas miljöpåverkan. följande gäller vid montering och demonteringsarbete: allt demonteringsarbete ska ske enlighet med gällande nationella lagar och förordningar inom områdena miljö, hälsa arbetsskydd. detta inkluderar allt arbete, hantering, sortering, transportering, förvaring övrigt omhändertagande av komponenter, hydrauloljor, annat material. hänsyn ska tas till mark, dagvatten och avlopp för att undvika förorening av dessa. skadliga ämnen farligt avfall hanteras förvaras väl ventilerade utrymmen enligt lagar förordningar. lokala säkerhetsinstruktioner ska vara väl kända av personalen och respekteras. transporter av miljöfarligt avfall ska ske transportör godkänd myndighet. följande gäller för återvinning och hantering av avfall: steelwristprodukter är tillverkade med tanke på att så mycket som möjligt ska gå återvinna, och den största delen av produkterna består återvinningsbart material. metaller det material lättast återvinna. generellt rekommenderar vi för återvinning överlämnas genom kontakta ett godkänt återvinningsföretag. metaller är den största delen av vikten steelwristprodukter. Över 80% utgörs stål men även aluminiumbrons kan återfinnas produkten. de flesta metaller materialåtervinnas. stål och bör separeras från andra innan omhändertagande för återvinning. oljor dräneras, renas och återanvänds alternativt bränns för energiutvinning. se till att oljan ej hälls ut avloppet! detta kan orsaka problem reningsverk. kontakta lokala myndigheter information. säkerställ inte förorenas av andra vätskor som vatten eller lösningsmedel då förorenad olja är svårare dyrare återvinna. plaster kan återvinnas antingen genom främst nersmältning (termoplaster) eller förbränning (härdplaster). ska endast brännas godkända förbränningsstationer. elektriskt och elektroniskt avfall innehåller värdefulla återanvändningsbara komponenter dessutom ett antal kemikalier (pcb, tungmetaller, etc.) med miljöfarliga egenskaper. Övriga delar kan brännas för energiutvinning. deponera aldrig farligt elektriskt avfall. utrustning för demonteringsarbetet: demonteringsarbetet bör utföras väl ventilerad lokal som är utrustad enligt arbetsskyddslagar och andra lagar förordningar. det viktigt att demonteringsarbetet sker med lämpliga verktyg ur både miljösynpunkt arbetsskyddssynpunkt. vid olika momenten demonteringsarbetet bör personlig skyddsutrustning användas vid behov. detta inkluderar skyddskläder och skor, skyddsglasögon, handskar, öronskydd, hjälm ansiktsskydd. " });
this.add({id:6, 
title:"Säkerhet", 
body:" säkerhet " });
this.add({id:7, 
title:"Säkerhetsnivåer", 
body:" säkerhetsnivåer de flesta arbetsplatsolyckor inträffar som en följd av att någon varit oaktsam eller slarvat med följa givna säkerhetsanvisningar. för oss på steelwrist är säkerhetsaspekterna mycket viktiga och vi gör vårt bästa för risker skall förhindras förebyggande säkerhetsåtgärder. inga säkerhetsföreskrifter skyddsanordningar, hur bra än gjorda, emellertid bättre försiktig maskinförare. för att klassificera risker använder vi denna manual följande säkerhetsnivåer och rekommendationer: varning varning (warning) anger att en olycka kan komma inträffa om föreskriften inte följs. olyckan leda till allvarlig personskada eller möjligen dödsfall. försiktighet försiktighet (caution) anger att en olycka kan komma inträffa om föreskriften inte följs. olyckan leda till personskada. observera observera (note) kan vara något som vi vill göra dig uppmärksam på förbättra eller försämra prestanda produkten din grävmaskin. " });
this.add({id:8, 
title:"Säkerhetsföreskrifter", 
body:" säkerhetsföreskrifter steelwrist fingergrip kan användas för en mängd olika arbetsuppgifter och rätt använd ökar gripen grävmaskinens produktivitet väsentligt. användningsområdena förutsätts emellertid vara av den typ som redskapet är avsett för. ingen annan användning får förekomma utan steelwrists skriftliga godkännande. gripen vidare konstruerad viss maskinvikt vissa brytmoment skall inte monteras på grävmaskin med högre vikt\/prestanda än vad avsedd däremot det möjligt att montera lägre förutsättning gripens egenvikt beaktas. säkerställ din grip matchar prestanda. se vidare:  tekniska data . försök inte montera, använda eller underhålla gripen innan ni har läst och förståelse för information om den samt grävmaskinen. var extra uppmärksam på säkerhetsinformationen. varning felaktig montering kan påverka säkerheten. vid minsta tveksamhet om kunnande eller utrustning, kontakta er återförsäljare steelwrist ab. varning använd aldrig gripen för att lyfta en person eller personer. följ alltid säkerhetsanvisningar för grävmaskin och grip. vistas ej nära redskap då grävmaskinen är bruk och aldrig upplyfta eller last. när gripen kopplas eller loss får ingen vistas inom ett säkerhetsavstånd på tre meter. enbart behörig och utbildad personal får använda gripen. det är viktigt att föraren avsätter tid för lära sig hantera gripen på ett säkert sätt innan den tas bruk. gripen får inte användas om korrekt låsning mot grävmaskinen är genomförd. kontrollera att låstapparna trängt ut enligt specifikation för aktuell fästestyp. varning klämrisk vid rörliga detaljer. risk för personskada. var försiktig vid hantering av långa föremål på grund krafter orsakade \"levande vikt\" och det utökade riskområdet. greppa långa objekt mitten så att jämviktsläge uppnås. säkerställ att gripen har ett bra grepp innan objekt lyfts. slå alltid av grävmaskinen och tryckavlasta hydraulsystemet vid underhåll reparationsarbete. varning defekt eller skadad maskin och\/eller utrustning kan orsaka skada på person, miljö egendom. genomför service och underhåll enligt rekommendation. varning infästningar är säkerhetsdetaljer som kräver regelbunden kontroll och anpassning. var uppmärksam på sprickbildningar. varning försök inte uppgradera utrustningens kapacitet genom modifieringar som ej är godkända av steelwrist ab. fÖrsiktighet följ rekommendationerna kapitlet  underhåll för att minska risken personskador samt säkerställa livslängden på gripen. fÖrsiktighet slå alltid av grävmaskinen och tryckavlasta hydraulsystemet vid underhåll reparationsarbete. var försiktig läckagesökning då varm hydraulolja kan förorsaka brännskador att tryck penetrera huden. användande av gripen utöver angiven maxkapacitet kan orsaka skador på den samt grävmaskinen. se kapitlet tekniska data för mer information.  " });
this.add({id:9, 
title:"Maskinskylt och dekaler på fingergripen FGX", 
body:" maskinskylt och dekaler på fingergripen fgx fingergripens maskinskylt och dekaler ska vara synliga läsbara. varningsdekalerna belyser säkerhetsrisker är därför extra betydelsefulla. kontakta din leverantör eller steelwrist om du behöver nya. 1) alla fingergripmodeller. varningsdekal. art.nr: 835022 2) maskinskylt. av maskinskylten framgår modell, serienummer, vikt, tillverkningsår, ce\/ukca-märkning samt kontaktuppgifter till steelwrist. 3) fgx. qr-dekal. art.nr: 830408 4) modelldekal: - fgx6. art.nr: 830407 - fgx8. art.nr: 830390 - fgx14. art.nr: 830391 - fgx20. art.nr: 830392 - fgx26. art.nr: 830393 5) varningsdekal ackumulator. art.nr: 835136 beskrivning av symboler på varningsdekalerna ovan läs först operatörsmanualen! risk för maskin- och personskador. vistas inte inom grävmaskinens eller gripens säkerhetsområde som är 3 m \/ 3.3 yd. risk för personskador. risk för klämskador. vistas inte närheten av upplyft eller arbetsredskap. risk för personskador. ackumulatorn är högt tryck utför inte service förrän gastrycket har avlastats utför inte service av ackumulatorn utan relevant kunskap förladda endast med kväve. dekaler grävmaskinshytten 1) qr-dekal, bland dokumenten som följer med gripen finns det en extra qr-dekal. den monteras till höger och framför operatören långt ner på hyttens ruta. art.nr: 830408 " });
this.add({id:10, 
title:"Produktbeskrivning", 
body:" produktbeskrivning " });
this.add({id:11, 
title:"Funktionsbeskrivning FGX", 
body:" funktionsbeskrivning fgx fingergripen finns fem storlekar, samtliga med sex fingrar. gripen är utrustad med en dubbelverkande hydraulcylinder som styrs hydraulkrets. flöde den ena riktningen öppnar griparmarna, och flöde andra stänger dem. de strukturella huvudkomponenterna konstruktionen huvudram två griparmar ihoplagrade fyra axellagringar. två stag lagrade axellagringar överför rörelsen skapad av hydraulcylindern mellan griparmarna. har mekaniska ändstopp. en lasthållningsventil stänger inne trycket på låssidan, vilket hindrar ofrivillig öppning av griparmarna vid tryckfall. ackumulator fungerar även som reservoar och tryckuppbackning för att säkrare hålla last. samtliga lagerlägen gripen är försedda med glidlager tillverkade ett plastkompositmaterial självsmörjande egenskaper, alternativt smörjbara bronslager.  fgx6-fgx26: har svetsade adaptrar av s- och sq-standard. adaptrarna har sex graders vinkel, vilket gör att gripen blir parallell med steelwrist tiltrotatorers rotationsplan. " });
this.add({id:12, 
title:"S - adapter och SQ - adapter", 
body:" s - adapter och sq s-adapter hydrauliken kopplas manuellt av operatören efter det att redskapsfästet kopplats mekaniskt mot adaptern. sq-adapter (open-s) hydrauliska snabbkopplingar kopplas ihop samma rörelser som redskapsfästet kopplar mekaniskt mot adaptern. operatören kan börja arbeta direkt utan att lämna hytten. " });
this.add({id:13, 
title:"Fingergripens delar", 
body:" fingergripens delar adapter huvudram axellagring expanderaxel hydraulcylinder länkage griparm " });
this.add({id:14, 
title:"Open-S", 
body:" open-s open-s, den öppna standarden för helautomatiska snabbfästen grävmaskiner. syftet med open-s är att erbjuda kompatibilitet mellan maskinfästen, tiltrotatorer, rotorfästen och arbetsredskap från olika tillverkare. läs mer på www.opens.org " });
this.add({id:15, 
title:"Installation", 
body:" installation " });
this.add({id:16, 
title:"Uppackning\/transport av gripen", 
body:" uppackning\/transport av gripen en steelwrist grip levereras stripad på pall. varning före lyft kontrollera lyftkapacitet på lyftsling, truck, lyftverktyg etc.  varning placera pallen på ett stabilt, horisontellt och halkfritt underlag. exempel på hur gripen kan transporteras med gaffeltruck: placera gaffeltruckens gafflar gripens huvudram så att jämvikt uppnås. lyft gripen långsamt. transportera gripen till den avsedda platsen. " });
this.add({id:17, 
title:"Anslut hydraulik", 
body:" anslut hydraulik nedan visas hur gripens hydraulik ansluts när gripen är kopplad snabbfäste eller tiltrotator från steelwrist. hydrauliken och dess tillhörande elektriska komponenter för styrning ska vara godkända ändamålet. det viktigt att få rätt längd på hydraulslangarna. om långa så riskerar kroka arbete korta slits onödan, vilket kan medföra onödig service. Är redskapsfäste grind av sq-standard hydrauliken automatiskt. fÖrsiktighet tänk på renheten hela montaget så att inte hydrauloljan maskinen blir förorenad. partiklar är skadligt för komponenter som ventiler, hydraulmotorer och vidare. i värsta fall kan förorenad hydraulolja förhindra korrekt funktionalitet redskap grävmaskin. risk maskinskador. koppla gripen enligt  handhavande . montera adaptrar på hydraulblocket ovanpå hydraulcylindern inuti gripens huvudram, för dimensioner se tekniska data . i vissa fall medföljer hydraulslangar vilka så monteras. annat tillverkas slangar. anslut slangarna av lämplig längd till avsedd hydraulkrets på gripen, lämpligen snabbkopplingar (1). minsta storlek snabbkoppling ska motsvara 3\/8” (dn10.5). för hydraulschema se tekniska data . vid koppling snabbfäste: anslut slangarna mot avsedd hydraulkrets på grävmaskinen, lämpligen snabbkopplingar. vid koppling tiltrotator: anslut slangarna till anslutningspunkterna för aux-hydraulik, lämpligen snabbkopplingar. Öppna eventuella avstängningsventiler på stickan. kör försiktigt alla rörelser på grävmaskinen. kontrollera att gripen inte tar någon av grävmaskinens delar eller slangarna skavs kläms hela rörelsen från ändläge till ändläge. provkör hydraulfunktionen gripen och förvissa dig om korrekt funktion att inget läckage förekommer.  eventuellt kan hydraulkretsens flöde och maxtryck behöva justeras för att uppnå god funktion, se tekniska data . se även grävmaskinens manual. " });
this.add({id:18, 
title:"Åtdragningsmoment för ledaxlar låsta med expanderkonor", 
body:" Åtdragningsmoment för ledaxlar låsta med expanderkonor observera viktigt, för axeltappar med expanderkonor skall bultarna efterdras moment och intervall enligt nedan: efter 1h efter 3h efter 1 dags användning efter 4 dagars användning vid service Åtdragningsmoment för ledaxlar låsta med expanderkonor. typ dimension kvalitet moment mutter m20 låg - 200 nm \/ 150 lbf-ft mutter m30 350 nm \/ 260 lbf-ft skruv bricka expanderkona expanderaxel " });
this.add({id:19, 
title:"Handhavande", 
body:" handhavande " });
this.add({id:20, 
title:"Koppla fingergripen med snabbfäste", 
body:" koppla fingergripen med snabbfäste hydrauliken och dess tillhörande elektriska komponenter för styrning ska vara godkända ändamålet. säkerställ att arbetsredskap och grävmaskin står säkert på plan mark (rekommendation lutning max ±5°) ingen befinner sig inom riskområdet 3 m \/ 3.3 yd. risk för personskador. 1. se redskapsfästets operatörsmanual för instruktioner om hur du kopplar fingergripen. 2. s-adapter: anslut snabbkopplingarna mot tiltrotatorns aux-hydraulkrets (1), sq-adapter: har fingergripen sq-adapter ansluts hydrauliken automatiskt. 3. provkör hydraulfunktionen fingergripen och förvissa dig om korrekt funktion att inget läckage förekommer. fingergripen är nu klar att användas. " });
this.add({id:21, 
title:"Koppla loss fingergripen", 
body:" koppla loss fingergripen säkerställ att arbetsredskap och grävmaskin står säkert på plan mark (rekommendation lutning max ±5°) ingen befinner sig inom riskområdet 3 m \/ 3.3 yd. risk för personskador. 1. s-adapter: tänk på att inte pressa armarna något ändläge för ha minsta möjliga tryck slangarna lättare kunna koppla loss snabbkopplingarna. koppla isär snabbkopplingarna (1) mot tiltrotatorns hydraulkrets och placera slangarna så att risk för skador avkopplingen minimeras (behövs ej om fingergripen har en sq-grind monterad). sq-adapter: har fingergripen sq-adapter kopplas hydrauliken loss automatiskt. 2. se redskapsfästets operatörsmanual för instruktioner om hur du kopplar loss fingergripen. " });
this.add({id:22, 
title:"Använda gripen", 
body:" använda gripen när fingergripen har kopplats med tiltrotator eller annan fästestyp och hydrauliken är ansluten så styrs dess funktion grävmaskinens hydraulsystem. säkerställ att arbetsredskap och grävmaskin står säkert på plan mark (rekommendation lutning max ±5°) ingen befinner sig inom riskområdet 3 m \/ 3.3 yd. risk för personskador. styr gripens öppnings- och stängningsfunktion med ett kontrollreglage på en av joystickarna. se grävmaskinens eller styrsystemets manual för närmare instruktioner. " });
this.add({id:23, 
title:"Felaktigt handhavande", 
body:" felaktigt handhavande läs gripens operatörsmanual innan du installerar, använder eller servar gripen. lyft inte grävmaskinen med stöd av gripen. risk för skador på gripen eller dess inre hydraulcylinder genom överbelastning. detta gäller alla steelwrist gripar: fingergrip (fgx) multigrip (mgx) sten-\/sorteringsgrip (sgx) inte när den är helt öppen; helt stängd; eller någonstans däremellan. lyft inte objekt med endast ena sidan av gripen. risk för maskin- och personskador. krossa inte objekt med sving\/sidorörelser. risk för maskinskador. gräv inte med gripen. risk för maskinskador. backa inte med ena griparmen marken. risk för maskinskador. " });
this.add({id:24, 
title:"Tekniska data", 
body:" tekniska data " });
this.add({id:25, 
title:"Generella data", 
body:" generella data modell fgx6 fgx8 fgx14 fgx20 fgx26 a. gripvidd, minsta objekt [mm] 104 104 107 119 149 b. gripvidd, största objekt [mm] 458 458 492 580 606 c. gripvidd [mm] 1451 1451 1632 1830 2026 d. vidd. max öppen [mm] 1534 1534 1727 1961 2129 e. vidd. stängd [mm] 854 854 959 1084 1189 f. höjd, stängd [mm] 450 450 508 568 615 g. höjd, öppen [mm] 624 624 690 813 824 h. höjd, spets mot [mm] 752 751 839 960 1012 i. bredd [mm] 624 624 687 791 854 j. bredd, griparm [mm] 529 529 597 680 734 maskinvikt [ton] 4-7 6-8 6-14 12-20 18-26 vikt från med adapter (teoretisk) 260 280 400 655 835 maxlast [kg] 3000 3000 6000 6000 10000 max brytmoment [knm] 50 70 80 180 240 gripkraft, spets mot [kn] 9,8 9,8 17,5 19,8 25,3 max arbetstryck [bar] 250 250 250 250 250 oljeflöde, öppna [l\/min] 19 19 28 41 57 oljeflöde, stäng [l\/min] 26 26 46 66 90 infästningsalternativ s40, sq40 s45, sq45, s50,sq50 s45, sq45, s50, sq50, s60, sq60 s60, sq60 s70, sq70 " });
this.add({id:26, 
title:"Adaptermått", 
body:" adaptermått gripen levereras med en adapter av dessa två standarder: s sq (open-s) adaptermått s\/sq adaptermått s adaptermodell a b c d e s30\/180 230.5 mm 9.07 in. 30 mm 1.18 in. 0° 50 mm 1.97 in. 181 mm 7.13 in. s40 \/ sq40 300.5 mm 11.83 in. 40 mm 1.57 in. 6° 75 mm 2.95 in. 202 mm 7.95 in. s45, sq45-4, sq45-5 430.25 mm 16.94 in. 45 mm 1.77 in. 6° 152 mm 5.98 in. 291.5 mm 11.48 in. s50, sq50 430.5 mm 16.95 in. 50 mm 1.97 in. 6° 152 mm 5.98 in. 271.5 mm 10.69 in. s60, sq60-4, sq60-5 480.25 mm 18.90 in. 60 mm 2.36 in. 6° 179 mm 7.05 in. 341.5 mm 13.44 in. s65, sq65 530.25 mm 20.88 in. 65 mm 2.56 in. 6° 211 mm 8.31 in. 441.5 mm 17.38 in. s70, sq70 600.25 mm 23.63 in. 70 mm 2.76 in. 6° 211 mm 8.31 in. 451.5 mm 17.78 in. s70\/55, sq70\/55 600.25 mm 26.63 in. 70 mm 2.76 in. 6° 231 mm 9.09 in. 551.5 mm 21.71 in. " });
this.add({id:27, 
title:"Hydraulanslutningar", 
body:" hydraulanslutningar fgx6 - fgx26 + stänger vid trycksättning \/ - Öppnar vid trycksättning gripmodell 1) dimension och gänga 2) dimension och gänga fgx6 g 3\/8\" g 3\/8\" fgx8 g 3\/8\" g 3\/8\" fgx14 g 3\/8\" g 3\/8\" fgx20 g 1\/2\" g 1\/2\" fgx26 g 1\/2\" g 1\/2\" " });
this.add({id:28, 
title:"Hydraulschema", 
body:" hydraulschema hydraulcylinder pilotstyrd backventil Övertrycksventil med backventil 250 bar \/ 3625 psi Övertrycksventil med backventil 75 bar \/ 1085 psi ackumulator med förladdningstryck 50 bar \/ 725 psi " });
this.add({id:29, 
title:"Åtdragningsmoment för hydrauladaptrar och slangkopplingar", 
body:" Åtdragningsmoment för hydrauladaptrar och slangkopplingar alla portar block och cylindrar har bspp g-gängor enligt iso 228, iso 1179-1.  vi rekommenderar adaptrar med ed-tätning mot blocken enligt iso1179-2. våra rekommenderade moment för adaptrar, se tabell. Åtdragningsmoment för hydrauladapter blockadapter slangkopplingar weo-insats gänga moment koppling gänga moment  gänga moment 1\/8\" bspp 15 nm \/ 11 lbf-ft 6l m12x1.5 20 nm \/ 15 lbf-ft - - 1\/4\" bspp 35 nm \/ 26 lbf-ft 8l m14x1.5 30 nm \/ 22 lbf-ft 1\/4” 30 nm \/ 22 lbf-ft - - 10l m16x1.5 40 nm \/ 30 lbf-ft - - 3\/8\" bspp 60 nm \/ 44 lbf-ft 12l m18x1.5 50 nm \/ 37 lbf-ft 3\/8\" 35 nm \/ 26 lbf-ft 1\/2\" bspp 80 nm \/ 59 lbf-ft 15l m22x1.5 70 nm \/ 52 lbf-ft 1\/2\" 45 nm \/ 33 lbf-ft - - 18l m26x1.5 90 nm \/ 66 lbf-ft - - 3\/4\" bspp 150 nm \/ 111 lbf-ft 20s m30x2 140 nm \/ 103 lbf-ft 3\/4\" 75 nm \/ 55 lbf-ft - - 22l m30x2 120 nm \/ 89 lbf-ft - - - - 25s m36x2 190 nm \/ 140 lbf-ft - - - - 30s m42x2 270 nm \/ 199 lbf-ft - - adaptrarna våra produkter har på slangsidan anslutning enligt din 3861\/iso 8434-1, slangarna våra produkter har skärringskopplingar med mjuktätning enligt din 3865\/din en iso 8434-4. skärringskoppling (metrisk koppling) 1. tätning slang-sida (dko 24°), din 3865, en iso 8434-4 2.1 tätning port-sida (bspp), din 3852-11, form e, iso 1179-2, föredragen framför 2.2 2.2 tätning port-sida (bspp), iso 1179-3, form h " });
this.add({id:30, 
title:"Mätning och identifiering samt flödeskapacitet - SQ-hankopplingar", 
body:" mätning och identifiering samt flödeskapacitet - sq-hankopplingar sq-hankopplingar dimension 1\/4\" och 3\/8\" passar samma position kopplingsrampen. säkerställ att rätt sq-hankoppling används mot sq-honkoppling. kopplar du en adapterplattan sq-honkoppling redskapsfästet så förstörs båda sq-kopplingarna! hankoppling diameter (1) flödeskapacitet 1\/4\" 14 mm \/ 0.55\" 25 l\/min \/ 6.6 us gpm 3\/8\" 15 mm \/ 0.59\" 45 l\/min \/ 11.9 us gpm 7\/16\" 17 mm \/ 0.67\" 70 l\/min \/ 18.5 us gpm 1\/2\" 24.5 mm \/ 0.96\" 90 l\/min \/ 23.8 us gpm 3\/4\" 32 mm \/ 1.26\" 180 l\/min \/ 47.6 us gpm 1\" 40 mm \/ 1.57\" 300 l\/min \/ 79.3 us gpm " });
this.add({id:31, 
title:"SQ-kopplingarnas dimension och placering", 
body:" sq-kopplingarnas dimension och placering kopplingarnas placering och dimension varierar, beroende på grävmaskinens redskapshydraulik samt vilka arbetsredskap som systemet ska användas till. frågor om vilken modell kopplingsuppsättning passar din grävmaskin besvaras av närmaste steelwrist-återförsäljare. vi rekommenderar att en blindplugg\/dummy används alla säten som inte har koppling installerad. kopplingarnas dimension och placering: sq40 dimension placering koppling 1, 2, 3 och 4 7\/16\" axel med snabbkopplingarnas principiella placering gentemot varandra samt storlek korrekt. sq45-4 dimension placering koppling 1, 2, 3 och 4 1\/2\" stiliserad h-cylinder snabbkopplingarnas principiella placering gentemot varandra samt storlek korrekt. sq45-5 dimension placering koppling 1 och 5 1\/2\" stiliserad h-cylinder snabbkopplingarnas principiella placering gentemot varandra samt storlek korrekt. koppling 2, 3 och 4 1\/4\" \/ 3\/8\" sq50 dimension placering koppling 1, 3 och 5 1\/2\" koppling 2 och 4 3\/8\" sq50 dimension placering koppling 1, 3 och 5 1\/2\" koppling 2 och 4 - sq60-4 dimension placering koppling 1 och 4 1\/2\" koppling 2 och 3 3\/4\" sq60-5 dimension placering koppling 1 och 5 3\/4\" koppling 2 och 4 3\/8\" koppling 3 1\/2\" sq60-5 dimension placering koppling 1 och 5 3\/4\" koppling 2 och 4 1\/4\" koppling 3 1\/2\" sq60-5 dimension placering koppling 1 och 5 3\/4\" koppling 2 och 4 3\/8\" koppling 3 - sq60-5 dimension placering koppling 1 och 5 3\/4\" koppling 2 och 4 1\/4\" koppling 3 - sq60-5 dimension placering koppling 1 och 5 3\/4\" koppling 2 och 4 - koppling 3 1\/2\" sq65 dimension placering koppling 1 och 5 1\/2\" koppling 2, 3 och 4 3\/4\" sq70 dimension placering koppling 1 och 5 1\/2\" koppling 2 och 4 1\" koppling 3 3\/4\" sq70 dimension placering koppling 1 och 5 1\/2\" koppling 2 och 4 1\" koppling 3 - sq70\/55 \/ sq80 dimension placering koppling 1 och 6 - koppling 2 och 5 - koppling 3 och 4 1\" sq70\/55 \/ sq80 dimension placering koppling 1 och 6 - koppling  5 3\/4\" koppling 3 och 4 1\" sq70\/55 \/ sq80 dimension placering koppling 1 och 6 1\/2\" koppling 2 och 5 - koppling 3 och 4 1\" sq70\/55 \/ sq80 dimension placering koppling 1 och 6 1\/2\" koppling 5 3\/4\" koppling 3 och 4 1\" sq90 dimension placering koppling 1, 2, 8 och 9 1\" koppling 7 3\/4\" koppling 3 och 5 1\/2\" sq90 dimension placering koppling 1, 2, 8 och 9 1\" koppling 7 - koppling 3 och 5 1\/2\" " });
this.add({id:32, 
title:"Underhåll", 
body:" underhåll " });
this.add({id:33, 
title:"Underhållsschema", 
body:" underhållsschema för att din grip skall fungera utan problem hela sin livslängd är det viktigt regelbundet utföra relevant skötsel och underhållsarbete. i underhållsarbetet alla säkerhetsanvisningar följs. den som skall utföra inspektion, underhåll eller reparation ska inneha nödvändig kännedom och tillräcklig kunskap för arbetet ifråga. risk maskin- personskador. tänk på att tryckavlasta hydraulsystemet innan servicearbete påbörjas. var försiktig vid läckagesökning då varm hydraulolja kan förorsaka brännskador och tryck penetrera huden. risk för personskador. vid ersättning av delar skall steelwrist originaldelar användas. ansvarar ej för icke original reservdelar och dess inverkan på övriga produkten. risk person- maskinskador. observera vid kontakt med din leverantör eller steelwrist rörande underhåll, service reservdelar är det viktigt att ha serienumret på grip tillgängligt. serienumret hittar du eg\/ukca-försäkran om överensstämmelse enligt (ukca, machinery (safety) regulations 2008, as amended.2) and maskindirektivet 2006\/42\/eg  och på maskinskylten som är monterad gripen. smörjpunkter, se även underhållsschema nedan vid svåra driftförhållanden, till exempel exponering för nötande damm kan kortare smörjintervall krävas. risk maskinskador. gripens underhållsschema är uppdelat två tabeller: underhållspunkter för alla gripar - alla gripar oavsett adapter extra underhållspunkter för grip med sq-adapter - endast för gripar med sq-adapter frekvensen som underhållet ska utföras vid rangeras tre alternativ: dagligen veckovis vid service (alla underhållspunkter som rör din grip ska kontrolleras) underhållspunkter för alla gripar frekvens kontrollpunkt bildbeskrivning - dagligen - vid service kontrollera att inga sprickbildningar uppstått konstruktionen (1). - dagligen - vid service kontrollera att hydraulslangar och anslutningar (1) är hela inget oljeläckage förekommer. dra åt vid behov för åtdragningsmoment se tekniska data -> Åtdragningsmoment hydrauladaptrar slangkopplingar - dagligen - vid service kontrollera att gripen är korrekt infäst mot grävmaskinen (1). se redskapsfästets eller grävmaskinens operatörsmanual beroende på hur den infäst. - dagligen - vid service fgx6-fgx26: kontrollera expanderaxlarna på alla ledaxlar och efterdra vid behov, se installation för åtdragningsmoment. vissa går att dra med stängd grip (1) och andra öppen (2). - dagligen - vid service fgx6-fgx26: smörj gripens smörjnipplar, för smörjning rekommenderas ett litiumbaserat fett med hårdhet (nlgi) 2 eller lägre: 1) Öppna gripen: fem smörjnipplar på gripens kolvstångssida 2) stäng gripen: fem smörjnipplar på gripens hydraulblocksida. - veckovis - vid service rengör gripen (1). - veckovis - vid service kontrollera att varningsdekaler finns och är läsbara. se kapitel säkerhet. - vid service byt ut krökta eller skadade hydraulrör (1). - vid service byt ut slitna eller skadade slangar (1). extra underhållspunkter för grip med sq-adapter frekvens kontrollpunkt bildbeskrivning - dagligen - vid service kontrollera att sq-kopplingar (1) och dess tätningar är intakta. - dagligen - vid service kontrollera att hydraulslangar och anslutningar (1) är hela inget oljeläckage förekommer. dra åt vid behov för åtdragningsmoment se reservdelar -> reservdelsöversikt sq-hankopplingar. - vid service byt ut slitna eller skadade slangar (1). " });
this.add({id:34, 
title:"Byte av SQ40-hankopplingar", 
body:" byte av sq40-hankopplingar slå alltid av grävmaskinen och dess huvudströmbrytare samt tryckavlasta hydraulsystemet före underhålls- reparationsarbete. risk för maskin- personskador. arbetsgång: 1. placera verktyg 229099 (2) mot sq-hankopplingen (1). 2. lossa och ta ut sq-hankopplingens främre del (1). 3. repetera steg 2-1 omvänd ordning. " });
this.add({id:35, 
title:"Byte av SQ-hankopplingar med låsring", 
body:" byte av sq-hankopplingar med låsring slå alltid av grävmaskinen och dess huvudströmbrytare samt tryckavlasta hydraulsystemet före underhålls- reparationsarbete. risk för maskin- personskador. arbetsgång: 1. skruva loss slanganslutningen mot sq-kopplingen (1). dra av slangadaptern (2). 2. placera låsringstången låsringens hål, tryck ihop tånghandtagen (1). avlägsna låsringen (2). 3. tryck ur kopplingskroppen (1). 4. montera den nya kopplingen genom att matcha spåren kopplingskroppen (1) med kopplingsrampen (2), tryck sedan handkraft (3). 4. repetera steg 2-1, båda omvänd ordning. - " });
this.add({id:36, 
title:"Byte av SQ-hankopplingar utan låsring", 
body:" byte av sq-hankopplingar utan låsring slå alltid av grävmaskinen och dess huvudströmbrytare samt tryckavlasta hydraulsystemet före underhålls- reparationsarbete. risk för maskin- personskador. arbetsgång: 1. skruva loss slanganslutningen mot sq-kopplingen (1). dra av slangadaptern (2). 2. lossa sq-hankopplingens främre del (1). 3. dra ut sq-hankopplingens främre del (1). dra ut sq-hankopplingens bakre del (2). 4. repetera steg 3-1, alla omvänd ordning. - " });
this.add({id:37, 
title:"Kontroll av S40 \/ SQ40 axel", 
body:" kontroll av s40 \/ sq40 axel slå alltid av grävmaskinen och dess huvudströmbrytare samt tryckavlasta hydraulsystemet före underhålls- reparationsarbete. risk för maskin- personskador. fgx med s40 axel: för fgx med infästning s40 axel (1). kontrollera att axeln (1) inte är lös. mutter (3) km utförande ska efterdras med 200 nm vid behov. sexkantutförande 350 behov fgx med sq40 axel för fgx med infästning sq40 axel (1). kontrollera att axeln inte är lös mutter (3) ska efterdras med 350 nm vid behov. justera då först vridningen av axeln med hjälp verktyg eller en linjal, se bild. linjalen (4) ska då ligga plant på den plana delen av axeln när samtidigt ligger mot runda " });
this.add({id:38, 
title:"Förbättringsmålning", 
body:" förbättringsmålning förbättringsmålning kan utföras på stålytor enligt steelwrist målningsinstruktion 720008. måla inte på\/i kontaktytor, hål, gängor, grepp eller bussningar! kulör: ral 9005 (svart) ral 6018 (grön för logotyp och lyftkrok \/ lyftögla) " });
this.add({id:39, 
title:"Felsökning", 
body:" felsökning " });
this.add({id:40, 
title:"Problem och lösningar", 
body:" problem och lösningar två felsökningsscheman är presenterade här nedan: s och sq: gäller alla gripar. sq: gäller endast gripar med sq-adapter. 1. s och sq: problem möjlig orsak Åtgärd utföres av s och sq gripen öppnar\/stänger inte. kontrollventilen på hydraulledningarna som styr öppning\/stängning är stängd. Öppna kontrollventilen. föraren. defekta kopplingar blockerar ledningarna. kontrollera och reparera eller byt ut defekta kopplingar\/kopplingsdelar efter behov. auktoriserad reparatör\/verkstad. elektrisk utrustning systemet är defekt. kontrollera och reparera eller byt ut defekta komponenter efter behov. auktoriserad reparatör\/verkstad. defekt vippomkopplare. kontrollera och reparera eller byt ut vippomkopplaren efter behov. auktoriserad reparatör\/verkstad. magnet skadad påkopplingsventil. kontrollera och byt ut defekt magnet efter behov. auktoriserad reparatör\/verkstad. lasthållningsventilen är defekt. kontrollera och reparera eller byt ut defekt lasthållningsventil efter behov. auktoriserad reparatör\/verkstad. läckande hydraulik-kopplingar\/ledningar. kontrollera och reparera eller byt ut defekta kopplingar\/ledningar efter behov. auktoriserad reparatör\/verkstad. gripens stängkraft räcker inte till. arbetstrycket är för lågt hydraulsystemet. justera arbetstrycket. auktoriserad reparatör\/verkstad. olja läcker från hydraulportarna. kopplingsmuttrar ej tillräckligt åtdragna. kontrollera och dra åt, för åtdragningsmoment se kapitel tekniska data. föraren. drifttemperaturen är för hög. oljenivån är för låg tanken. kontrollera och fyll på olja. föraren. grävmaskinens pumpmatning är för hög; en konstant mängd olja sprutar ur övertrycksventilen. kontrollera grävmaskinens varvtal och aux-kretsens flödesinställning. kör öppning\/stängnings-funktionen igen. auktoriserad reparatör\/verkstad. Övertrycksventilen är defekt. montera nya typtestade övertrycksinsatser eller byt till en exaktare tryckbegränsningsventil. auktoriserad reparatör\/verkstad. gripen rör sig långsamt. flöde för lågt. justera flöde. föraren. otillräcklig smörjning. för långa smörjintervaller. kontrollera smörjning och smörj enligt underhållsschemat, se kapitel underhåll. föraren. 2. sq: problem möjlig orsak Åtgärd utföres av oljeläckage från koppling när gripen är kopplad mot redskapsfäste. nostätningen är borta eller skadad. byt nostätning, se underhållsschema. föraren. oljeläckage från koppling på gripen (hankoppling). kopplingen är smutsig eller skadad. rengör eller montera ny koppling, se kapitel underhåll. föraren. gripens hydraulik fungerar ej. felaktig koppling av gripen. koppla loss gripen och koppla om, se kapitel handhavande. föraren. grävmaskinen ger inte gripen det tryck och\/eller flöde som arbetsredskapet kräver. kontrollera grävmaskinens manual eller kontakta dess leverantör. föraren. hankopplingar ur position. kontakta steelwrist support. föraren. fel gripens hydrauliska system. kontrollera denna manual eller kontakta leverantör. föraren. " });
this.add({id:41, 
title:"Reservdelar", 
body:" reservdelar " });
this.add({id:42, 
title:"Generellt reservdelar", 
body:" generellt reservdelar ring steelwrist reservdelar på +46 (0) 8 626 07 13 för mer info om reservdelar som inte finns listade detta underkapitel. fysisk manual; scanna qr-koden nedan för att komma till reservdelskonfiguratorn. digital manual; klicka på qr-koden för att komma till reservdelskonfiguratorn. " });
this.add({id:43, 
title:"Reservdelsöversikt SQ-hankopplingar med och utan låsring", 
body:" reservdelsöversikt sq-hankopplingar med och utan låsring sq-hankopplingarna finns fyra huvudvarianter, totalt sex varianter: kort bsp med och utan låsring kort orfs med och utan låsring kort skärring med låsring direktinfäst kort bsp med låsring pos. kvantitet beskrivning 1\/2\" sq60\/sq65 art.nr 3\/4\" sq60-sq65 art.nr 1\" sq70-sq90 art.nr 1 1 snabbkopplingsenhet främre, hane 210293 150 nm \/ 110 lbf-ft 211358 200 nm \/ 147 lbf-ft 211591 300 nm \/ 221 lbf-ft 2 1 o-ring 904319 903252 903253 3 1 snabbkopplingsenhet bakre, hane 227148 226423 226934 4 1 låsring 905675 905674 905714 5 1 komplett sq-hankoppling 227148 226929 226933 kort bsp utan låsring pos. kvantitet beskrivning 1\/2\" sq50 art.nr 1 1 snabbkopplingsenhet främre, hane 210293 150 nm \/ 110 lbf-ft 2 1 o-ring 904319 3 1 distansring 217657 4 2 o-ring 905412 5 1 snabbkopplingsenhet bakre, hane 223190 6 1 komplett sq-hankoppling 223189 kort orfs med låsring pos. kvantitet beskrivning 3\/8\" sq45 art.nr 1\/2\" sq45 art.nr 1\/4\" sq60-sq65 art.nr 3\/8\" sq60-sq65 art.nr 1\/2\" sq60-sq65 art.nr 3\/4\" sq60-sq65 art.nr 1 1 snabbkopplingsenhet främre, hane 210292 60 nm \/ 44 lbf-ft 210293 150 nm \/ 110 lbf-ft 210291 60 nm \/ 44 lbf-ft 210292 60 nm \/ 44 lbf-ft 210293 150 nm \/ 110 lbf-ft 211358 200 nm \/ 147 lbf-ft 2 1 o-ring 904344 904319 904344 904344 904319 903252 3 1 snabbkopplingsenhet bakre, hane 226894 226859 225096 225096 225098 224959 4 1 låsring 905750 905715 905676 904203 905675 905674 5 1 o-ring 904202 904203 904203 905676 905421 904205 6 1 komplett sq-hankoppling 226893 226858 225067 226919 225097 224958 kort orfs utan låsring pos. kvantitet beskrivning 3\/8\" sq50 art.nr 1\/2\" sq50 orfs 13\/16\" art.nr 1\/2\" sq50 orfs 1\" art.nr 1 1 snabbkopplingsenhet främre, hane 210292 60 nm \/ 44 lbf-ft 210293 150 nm \/ 110 lbf-ft 210293 150 nm \/ 110 lbf-ft 2 1 o-ring 904344 904319 904319 3 1 distansring 217656 217657 217657 4 2 o-ring 904198 905412 905412 5 1 snabbkopplingsenhet bakre, hane 222496 222531 222494 6 1 o-ring 904203 904203 905421 7 1 komplett sq-hankoppling 222495 222530 222493 kort skärring med låsring pos. kvantitet beskrivning 1\/2\" sq70-sq90 art.nr 3\/4\" sq70-sq90 art.nr 1\" sq70-sq90 art.nr 1 1 snabbkopplingsenhet främre, hane 210293 150 nm \/ 110 lbf-ft 211358 200 nm \/ 147 lbf-ft 211591 300 nm \/ 221 lbf-ft 2 1 o-ring 904319 903252 903253 3 1 snabbkopplingsenhet bakre, hane 226429 226426 226421 4 1 låsring 905715 905713 905714 5 1 komplett sq-hankoppling 226428 226425 226420 direktinfäst pos. sq40 kvantitet beskrivning 7\/16\" sq40 art.nr. 1 1 snabbkopplingsenhet främre, hane 228871 60 nm \/ 44 lbf-ft 2 1 o-ring 905873 " });
this.add({id:44, 
title:"SQ-handummys", 
body:" sq-handummys utnyttjas inte urtaget rampen av en sq-koppling ska det sitta dummy där istället. sq-handummys finns med och utan låsring samt direktinfäst. sq-handummy med låsring pos. kvantitet beskrivning 1\/4\"+3\/8\" sq45 1\/2\" sq45 1\/4\"+3\/8\" sq60-sq65 1\/2\" sq60-sq65 3\/4\" sq60-sq65 1\/2\" sq70-sq90 3\/4\" sq70-sq90 1 1 o-ring 905630 905631 905630 905631 905632 905631 905632 2 1 kropp 226943 226945 226404 226406 226408 226936 226938 3 1 låsring 905750 905715 905676 905675 905674 905715 905713 4 1 komplett handummy 226942 226944 226403 226405 226407 226935 226937 sq-handummy utan låsring pos. kvantitet beskrivning 3\/8\" sq50 art.nr 1\/2\" sq50 art.nr 1 1 o-ring 905630 905631 2 1 kropp 218425 218442 3 1 o-ring 904198 905412 4 1 bricka 222525 222527 5 1 bricka 211150 221122 6 1 skruv 901214 15 nm \/ 11 lbf-ft 901214 15 nm \/ 11 lbf-ft 7 1 komplett handummy 222524 222526 sq-handummy direkt infäst pos. kvantitet beskrivning 7\/16\" sq40 art.nr. 1 1 handummy 229679 60 nm \/ 44 lbf-ft " });
this.add({id:45, 
title:"Garanti", 
body:" garanti " });
this.add({id:46, 
title:"Garantivillkor", 
body:" garantivillkor allmänt följande garantivillkor gäller för produkter som levereras från steelwrist. garantin täcker material- och fabrikationsfel, garantitiden är 12 månader eller 1600 timmars användning påbörjas senast sex efter leverans garantigränser steelwrist garanti täcker inte fel orsakade av överbelastning, felaktig användning, bristande underhåll eller annan användning utöver vad som anges bruksanvisningen. garantin upphör att gälla om produktens serienummerskylt har ändrats, manipulerats eller förlorats. steelwrist ersätter inte stilleståndskostnader, hyra av annan utrustning andra indirekta kostnader. garantin täcker till exempel inte fel som orsakats av: föroreningar eller främmande material som har kommit hydraulsystemet användning av reservdelar som inte tillverkats eller godkänts steelwrist modifieringar av produkten som inte har godkänts skriftligen steelwrist brist på underhåll enligt beskrivningen operatörsmanualen använd en högre belastning än vad som kan anses normalt eller anges på produkten produktdokumentationen, till exempel gripens lyftkapacitet felaktig installation av produkten hydraultryck över den maximala nivån som anges på produkten och \/ eller dokumentationen skador transport av produkten normalt slitage på delar som slangar, bussningar, lager, tätningar eller andra utsätts för slitage. skadehantering reklamationer hanteras steelwrist support hemsida som du hittar på återförsäljare logga www.steelwrist.com Övriga villkor avser steelwrist nl09\/nl09e eller orgalimes2012 beroende på vilken marknad produkten levereras till. du kan se vilka av dessa din produkt omfattas leveransdokumenten. steelwrist servicechef, fredrik segerström, 2020-02-09 " });
                
                store['sv'][1]= {
                'title': "Inledning",
                'href': 'index-sv.html#UUID-2cbe60a4-3eb4-cdee-f7e3-bee5f0bc49e0'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Inledning"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][2]= {
                'title': "EG\/UKCA-försäkran om överensstämmelse enligt (UKCA, Machinery (Safety) Regulations 2008, as amended.2) and Maskindirektivet 2006\/42\/EG",
                'href': 'index-sv.html#UUID-0a7cf8b0-c9f0-b276-ee9d-1c4b35c86df6'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Inledning \/ EG\/UKCA-försäkran om överensstämmelse enligt (UKCA, Machinery (Safety) Regulations 2008, as amended.2) and Maskindirektivet 2006\/42\/EG"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][3]= {
                'title': "Avsedd användning",
                'href': 'index-sv.html#UUID-211ace8c-a5a5-f3ac-ab8b-4552c68a6c6e'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Inledning \/ Avsedd användning"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][4]= {
                'title': "Om denna manual",
                'href': 'index-sv.html#UUID-fa1043f1-b7cd-f6ac-b935-7cfde395a62f'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Inledning \/ Om denna manual"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][5]= {
                'title': "Miljöinformation",
                'href': 'index-sv.html#UUID-cee00c72-3232-08da-5fe0-a5041e3dcf43'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Inledning \/ Miljöinformation"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][6]= {
                'title': "Säkerhet",
                'href': 'index-sv.html#UUID-364e1324-b355-cfbf-ba30-51d6306b2bc5'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Säkerhet"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][7]= {
                'title': "Säkerhetsnivåer",
                'href': 'index-sv.html#UUID-cb26943e-0cba-2e20-3e12-5a147176755c'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Säkerhet \/ Säkerhetsnivåer"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][8]= {
                'title': "Säkerhetsföreskrifter",
                'href': 'index-sv.html#UUID-dbeee519-d9b7-03de-c383-05b78d4d962d'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Säkerhet \/ Säkerhetsföreskrifter"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][9]= {
                'title': "Maskinskylt och dekaler på fingergripen FGX",
                'href': 'index-sv.html#UUID-efba3c25-1348-11fc-6fd6-4d7553743f81'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Säkerhet \/ Maskinskylt och dekaler på fingergripen FGX"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][10]= {
                'title': "Produktbeskrivning",
                'href': 'index-sv.html#UUID-8b1a3bdf-81f1-66c6-c85e-46712d1b427b'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Produktbeskrivning"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][11]= {
                'title': "Funktionsbeskrivning FGX",
                'href': 'index-sv.html#UUID-e3d9cf75-d5d9-e6aa-657b-65ec83d87f99'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Produktbeskrivning \/ Funktionsbeskrivning FGX"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][12]= {
                'title': "S - adapter och SQ - adapter",
                'href': 'index-sv.html#UUID-8114e162-3127-de73-ebd9-eeeeb909a1bb'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Produktbeskrivning \/ S - adapter och SQ - adapter"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][13]= {
                'title': "Fingergripens delar",
                'href': 'index-sv.html#UUID-3c2499d0-ea09-7cab-eec2-9b55928a7e58'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Produktbeskrivning \/ Fingergripens delar"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][14]= {
                'title': "Open-S",
                'href': 'index-sv.html#UUID-998cf936-ebce-3b5e-12ae-9ba3fe24c1bb'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Produktbeskrivning \/ Open-S"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][15]= {
                'title': "Installation",
                'href': 'index-sv.html#UUID-21c97778-bc0d-4834-f286-71e29319669a'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Installation"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][16]= {
                'title': "Uppackning\/transport av gripen",
                'href': 'index-sv.html#UUID-373715da-07ad-55c1-7175-9e3762032b21'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Installation \/ Uppackning\/transport av gripen"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][17]= {
                'title': "Anslut hydraulik",
                'href': 'index-sv.html#UUID-6fa676b1-47ee-1021-04bc-fd89b0e5f0fe'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Installation \/ Anslut hydraulik"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][18]= {
                'title': "Åtdragningsmoment för ledaxlar låsta med expanderkonor",
                'href': 'index-sv.html#UUID-8f6115b0-e8fd-f61d-2b4c-045432de2f57'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Installation \/ Åtdragningsmoment för ledaxlar låsta med expanderkonor"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][19]= {
                'title': "Handhavande",
                'href': 'index-sv.html#UUID-7b2e47ab-ea67-cc37-27b7-31f0f2c002b0'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Handhavande"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][20]= {
                'title': "Koppla fingergripen med snabbfäste",
                'href': 'index-sv.html#UUID-4ec50210-0bf1-d646-6da9-b8050024f2e7'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Handhavande \/ Koppla fingergripen med snabbfäste"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][21]= {
                'title': "Koppla loss fingergripen",
                'href': 'index-sv.html#UUID-9dffd10c-bf1e-dd80-c6aa-b5b319d0eee7'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Handhavande \/ Koppla loss fingergripen"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][22]= {
                'title': "Använda gripen",
                'href': 'index-sv.html#UUID-6d8e3988-3937-50e3-7cca-ef38f39d8e06'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Handhavande \/ Använda gripen"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][23]= {
                'title': "Felaktigt handhavande",
                'href': 'index-sv.html#UUID-13504fd2-6ecd-2f84-135e-ba1d6cefd13c'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Handhavande \/ Felaktigt handhavande"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][24]= {
                'title': "Tekniska data",
                'href': 'index-sv.html#UUID-07373354-a90a-ce22-7d9f-02e3acf7d25e'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Tekniska data"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][25]= {
                'title': "Generella data",
                'href': 'index-sv.html#UUID-1b450346-40a0-5027-e79c-b417c6209577'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Tekniska data \/ Generella data"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][26]= {
                'title': "Adaptermått",
                'href': 'index-sv.html#UUID-56752149-473a-c69b-bb4e-f83bac5c29ae'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Tekniska data \/ Adaptermått"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][27]= {
                'title': "Hydraulanslutningar",
                'href': 'index-sv.html#UUID-c1dd66d2-f5d2-f815-a3b3-f1aa503bcf62'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Tekniska data \/ Hydraulanslutningar"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][28]= {
                'title': "Hydraulschema",
                'href': 'index-sv.html#UUID-98b483fb-ce12-6eea-52e7-f83bfb21054d'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Tekniska data \/ Hydraulschema"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][29]= {
                'title': "Åtdragningsmoment för hydrauladaptrar och slangkopplingar",
                'href': 'index-sv.html#UUID-bed45d0c-7566-5215-2578-92de798b1748'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Tekniska data \/ Åtdragningsmoment för hydrauladaptrar och slangkopplingar"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][30]= {
                'title': "Mätning och identifiering samt flödeskapacitet - SQ-hankopplingar",
                'href': 'index-sv.html#UUID-61df21cf-f4a6-6616-c842-0f76d7a299e8'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Tekniska data \/ Mätning och identifiering samt flödeskapacitet - SQ-hankopplingar"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][31]= {
                'title': "SQ-kopplingarnas dimension och placering",
                'href': 'index-sv.html#UUID-f92bf09c-a70b-1724-ff80-3a76b2063939'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Tekniska data \/ SQ-kopplingarnas dimension och placering"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][32]= {
                'title': "Underhåll",
                'href': 'index-sv.html#UUID-ece6ac9c-b6a8-1885-249f-e6321cbbdc1d'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Underhåll"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][33]= {
                'title': "Underhållsschema",
                'href': 'index-sv.html#UUID-7806519b-3768-5f6e-a29d-10269a3ee8cc'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Underhåll \/ Underhållsschema"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][34]= {
                'title': "Byte av SQ40-hankopplingar",
                'href': 'index-sv.html#UUID-d916f97a-be3b-4e98-e292-d09ff14ddd17'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Underhåll \/ Byte av SQ40-hankopplingar"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][35]= {
                'title': "Byte av SQ-hankopplingar med låsring",
                'href': 'index-sv.html#UUID-a47dfc65-8fd4-b374-0ab1-c88ed393195e'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Underhåll \/ Byte av SQ-hankopplingar med låsring"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][36]= {
                'title': "Byte av SQ-hankopplingar utan låsring",
                'href': 'index-sv.html#UUID-3b3f5566-e3df-db75-671a-7d9bf8a5856b'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Underhåll \/ Byte av SQ-hankopplingar utan låsring"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][37]= {
                'title': "Kontroll av S40 \/ SQ40 axel",
                'href': 'index-sv.html#UUID-33ad9123-e987-998f-814c-95a99758e2a0'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Underhåll \/ Kontroll av S40 \/ SQ40 axel"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][38]= {
                'title': "Förbättringsmålning",
                'href': 'index-sv.html#UUID-75593488-b06c-f18e-b057-581eef34a3a9'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Underhåll \/ Förbättringsmålning"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][39]= {
                'title': "Felsökning",
                'href': 'index-sv.html#UUID-d2fc49d9-41bd-a196-0113-efd260530d21'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Felsökning"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][40]= {
                'title': "Problem och lösningar",
                'href': 'index-sv.html#UUID-3305374d-2440-36d7-82ef-fe7382333564'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Felsökning \/ Problem och lösningar"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][41]= {
                'title': "Reservdelar",
                'href': 'index-sv.html#UUID-fbe75823-8cdf-a313-cbcb-d5c48bbea3b7'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Reservdelar"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][42]= {
                'title': "Generellt reservdelar",
                'href': 'index-sv.html#UUID-17992096-6494-a69b-b535-d9a411176a50'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Reservdelar \/ Generellt reservdelar"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][43]= {
                'title': "Reservdelsöversikt SQ-hankopplingar med och utan låsring",
                'href': 'index-sv.html#UUID-7467f480-95b2-a545-4d61-6780e117a826'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Reservdelar \/ Reservdelsöversikt SQ-hankopplingar med och utan låsring"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][44]= {
                'title': "SQ-handummys",
                'href': 'index-sv.html#UUID-4069dad3-f94b-df75-193f-8f6b0b30ce93'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Reservdelar \/ SQ-handummys"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][45]= {
                'title': "Garanti",
                'href': 'index-sv.html#UUID-7100464e-0824-e32f-36b9-4068c78a81cd'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Garanti"
                        , 'snippet': ''
                    
                };
                
                
                
                store['sv'][46]= {
                'title': "Garantivillkor",
                'href': 'index-sv.html#UUID-ddda9aea-d820-8e3a-af89-8e9335b42781'
                
                    , 'breadcrumbs': "Operatörsmanual Fingergrip FGX \/ Garanti \/ Garantivillkor"
                        , 'snippet': ''
                    
                };
                
                


            });

            $(document).trigger('search.ready');
       }); 

        