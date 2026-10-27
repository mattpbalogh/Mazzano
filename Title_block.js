
// ==========================================================================
// THE TITLE BLOCK ON THE BASE MAP
//
//   Around Mazzano Romano                      <- title (big)
//   Celebration   Culture   Cuisine            <- three links (blue, underlined)
//   Click on an icon for more information      <- hint (smallest)
//
// x, y   : where the CENTRE of the block sits, as a percentage of the base map
//          (0,0 = top-left). Shift+click the map to read off a position, then
//          type the two numbers here to move the block.
// title  : the big first line
// hint   : the small third line (leave as "" for none)
// links  : the three blue links. Each one opens a popup, and uses the same fields
//          as any other popup block:
//            label    : the blue word shown on the map
//            title    : popup heading
//            image    : optional picture across the top   ("" for none)
//            text     : popup text, in `backticks`; your line breaks are kept
//            image2 / text2 ... image5 / text5 : optional extra picture + text pairs
//            link / linkText : optional web link
// Rules: every block ends  },  (comma) - the last one may omit it.
//        text goes in `backticks`;  other values in "quotes".
//        Field names are case sensitive (text2, not Text2).
// ==========================================================================
const titleBlock = {
  x: 30, y: 5,
  title: "Around Mazzano Romano",
  hint: "Click on an icon for more information",
 
  // "Mazzano Romano" link on the same line as Celebration / Culture / Cuisine.
  // at    : how far across the MAP it sits, in % (0 = left edge, 100 = right edge).
  //         75 = three quarters of the way across. Click it = same as the Mazzano icon.
  mazzanoLink: { label: "Mazzano Romano", at: 75 },
 
  // Movable text block on the BASE map.
  // x, y  : where the CENTRE of the block sits, as a % of the map (Shift+click to read positions)
  // width : how wide the block is, as a % of the map
  baseBlurb: {
    x: 78, y: 10, width: 40,
    text: `Wake up in a medieval borgo, shop where the locals shop, eat what they eat, and discover the Italy that the crowds never reach`
  },
 
  // Movable text block on the 2nd layer (Mazzano map). Same fields as above,
  // but x, y, width are % of the Mazzano picture.
  layerBlurb: {
    x: 50, y: 54, width: 80,
    // The words sit inside a see-through white box, with "Mazzano Romano" as a heading on top.
    // To change the box:  background:rgba(255,255,255,0.7)  - the last number is how SOLID the white is
    //                     (1 = solid white, 0.7 = 70%, 0.4 = quite see-through).
    //                     padding = space around the words, border-radius = rounded corners.
    // The heading font is set by font-family and font-size (in the first <div ...> inside the box).
    // Keep the whole thing, from <div to the last </div>, on ONE line.
    text: `<div style="background:rgba(255,255,255,0.85); padding:0.7em 1.1em; border-radius:8px; box-shadow:0 2px 10px rgba(0,0,0,0.3);"><div style="font-family:'Palatino Linotype','Book Antiqua',Palatino,Georgia,serif; font-style:normal; font-weight:700; font-size:1.7em; line-height:1.15; margin-bottom:0.25em;">Mazzano Romano</div>A real medieval village. Here you can drink your morning coffee at the local bar, walk the valley paths, and live the way the locals do, with no tour buses in sight.</div>`
  },
 
  // Small floating labels on the 2nd layer (Mazzano map), in the same see-through white box style.
  // x, y  : where the CENTRE of the label sits, as a % of the Mazzano picture
  // width : how wide the label is, as a % of the Mazzano picture (the words wrap to fit)
  // text  : the words. Add or remove lines as you like.
  // (To change how solid the white is, edit  .layer-label  near the top of index.html.)
  layerLabels: [
    { x: 9,  y: 10, width: 20, text: `West towards Bracciano` },
    { x: 68, y: 10, width: 15, text: `East towards Calcata` }
  ],
 
  links: [
 
//CELEBRATION
    {
      label: "Celebration",
      title: "Celebration",
      image: "Ronciglione carnevale.jpg",
      text: `There's always a party happening somewhere!
There are 3 main kinds of festivals in this area of Italy:

<b>Contrade</b>: Many towns re-enact a battle between feuding medieval families with simulated medieval games ranging from a modified form of jousting (known as a Palio), to archery, tug-of-war and walking with a basket on your head.  There are typically around 4 teams, although <b>Sacrofano</b> manages to have as many as 7, and the local crowd cheers on each one.  The stories they are based on may be a little exaggerated, as more and more towns seem to find their own <b>contrade</b> history.  These 2 or 3 day events usually end with a big street festa, food and music.  Best of all, they are not made for tourists, they are a true local party that you can join!

<b>Festas</b>, which can be just the party that each <b>contrade</b> team has in the weeks leading up to that event, usually comprising a small street party with food and drink that you can join in.  Other festas are religious, but the food and drink still gets to be part of it.

<b>Sagras</b>, celebrating the harvest of one or other special item, be that olive oil, chestnuts, artichokes, mushrooms, or even Pappardelle al Cinghiale (a local pasta with wild boar sauce).


Plus, <b>Ronciglione</b> is famous for its own <b>Carnevale</b>.

<div role="button" tabindex="0" onclick="this.outerHTML='<iframe style=&quot;display:block;width:100%;aspect-ratio:16/9;border:0;border-radius:6px;&quot; src=&quot;https://www.youtube.com/embed/_1RGKYEHFH8?autoplay=1&amp;rel=0&quot; referrerpolicy=&quot;strict-origin-when-cross-origin&quot; allow=&quot;autoplay; encrypted-media; fullscreen&quot; allowfullscreen></iframe>'" style="display:block; position:relative; cursor:pointer;"><img src="https://img.youtube.com/vi/_1RGKYEHFH8/maxresdefault.jpg" onerror="this.onerror=null;this.src='https://img.youtube.com/vi/_1RGKYEHFH8/hqdefault.jpg'" alt="Play the video" style="display:block; width:100%; aspect-ratio:16/9; object-fit:cover; border-radius:6px;"><span style="position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:64px; height:44px; background:rgba(0,0,0,0.75); border-radius:12px;"></span><span style="position:absolute; left:50%; top:50%; transform:translate(-35%,-50%); border-style:solid; border-width:11px 0 11px 19px; border-color:transparent transparent transparent #fff;"></span></div>

While there is a short summary of these below, do a search, there are always plenty more - and beware, they can be cancelled or the dates change at short notice.

<b>January / February</b>
 
• <b>Carnevale</b> di <b>Ronciglione</b> (<b>Ronciglione</b>): One of Italy’s oldest historic carnivals. Spanning late winter into early March, it features grand float parades, traditional folk bands, masked balls, and the famous riderless horse races (Corse a Vuoto).
 
• Botteghe, Arti e Mestieri di un Tempo (<b>Mazzano Romano</b>): A historical reenactment of ancient trades and a living nativity scene held in the medieval village centre on January 6th.
 
<b>May</b>
 
• San Pellegrino in Fiore (<b>Viterbo</b>): An annual floral exhibition in early May that transforms <b>Viterbo</b>'s exceptionally preserved medieval quarter (San Pellegrino) with striking flower installations, architecture, and market stalls.
 
• <b>Palio</b> dei Borgia – Offerta dei Ceri (<b>Nepi</b>): The preliminary ceremonies for <b>Nepi</b>'s major festival begin in mid-to-late May, bringing medieval drumming festivals and historical candle offerings to the fortress.`,


image2: "contrade 2.jpg",

 
text2: `<b>June</b>
 
• <b>Palio</b> dei Borgia (<b>Nepi</b>): Spanning mid-June, this Renaissance festival honours Lucrezia Borgia’s 1499 investiture. The 4 historic <b>contrade</b> of <b>Nepi</b> (La Rocca, Santa Maria, San Biagio, and San Giovanni) compete in archery, historical fencing, and horse jousting alongside street banquets and massive historical processions.
 
• Caffeina <b>Festival</b> & Tuscia Film <b>Fest</b> (<b>Viterbo</b>): Major cultural festivals kicking off in late June and running through July, drawing authors, musicians, and filmmakers to open-air stages across <b>Viterbo</b>'s historic piazzas.
 
<b>July</b>
 
• Borgo in <b>Festa</b> (<b>Ronciglione</b>): A 5-night summer festival held in early July inside the medieval village. It highlights regional culinary excellences across local open-air taverns, accompanied by comedy shows, live concerts, and theatrical performances.
 
• <b>Sagra</b> del Montarello (<b>Mazzano Romano</b>): Hosted by Contrada Montarello in early July, featuring traditional grilled specialties and local desserts.
 
• Borgo de Fora <b>Festival</b> (<b>Mazzano Romano</b>): Organised by Contrada Borgo de Fora in late July, offering food stalls, traditional pasta dishes, and grilled meats.
 
<b>August</b>
 
• Amleto in Salsa Piccante (<b>Montenero Sabino</b>): An open-air theatrical festival and local food celebration held in late August.
 
<b>September</b>`,
image3: "Viterbo macchina.jpg",
 
text3: `• Trasporto della Macchina di Santa Rosa (<b>Viterbo</b>): Taking place on September 3rd, this UNESCO-recognised event is <b>Viterbo</b>’s most sacred tradition. A 30-metre-high, illuminated tower weighing five tonnes is carried on the shoulders of 100 men (Facchini di Santa Rosa) through the dark, narrow streets of the medieval city.
 
• <b>Feste</b> Patronali & <b>Ludi</b> Borgiani (<b>Civita Castellana</b>): Held in mid-September to honour saints John and Marciano. The city pivots to its Renaissance heritage during the Ludi Borgiani, where <b>Civita Castellana</b>'s historic districts/<b>contrade</b> (such as Guazzolo, Fontana, Centro, and others) join in historic trekking, archery events, street food trails, and a majestic court parade.
 
• La <b>Giostra</b> delle <b>Contrade</b> (<b>Mazzano Romano</b>): Held in mid-September. The four local <b>contrade</b> (Borgo de Fora, Montarello, Barbacane, and Li Santi) compete in an archery tournament accompanied by 16th-century historical parades.`,
 
image4: "civita palio.jpg",
 
text4: `• <b>Festa</b> Patronale di San Nicola (<b>Mazzano Romano</b>): The official patron saint festival celebrated in early September.
• <b>Festa</b> di Settembre (<b>Anguillara Sabazia</b>): A lakeside festival featuring local food stands and lakefront markets.
 
• <b>Sagra</b> del Fungo Porcino (<b>Oriolo Romano</b>): A massive food festival celebrating the porcini mushroom harvest throughout mid-September in Piazza Umberto I.
 
<b>October</b>
 
• <b>Palio</b> della Stella (<b>Sacrofano</b>): Traditionally held across the second weekend of October. <b>Sacrofano</b>'s 7 historic <b>contrade</b> (Alba, Borgo, Martini, Mediana, Monte, Petruscio, and Quarto di Monte) face off in a fast-paced medieval equestrian tournament where knights in costume must lance hanging stars.

• <b>Sagra</b> della Pappardella al Cinghiale (<b>Sacrofano</b>): Held annually on the third weekend of October, highlighting wild boar ragù served over fresh, house-made pasta, alongside wine tastings, ancient village tours, and craft markets. (Note: In some years, specific local wildlife restrictions like swine flu measures may pause the wild boar meat preparation, pivoting the festival framework instead).
 
• <b>Cioccofest</b> e <b>Festa</b> della Castagna (<b>Caprarola</b>): Held over two full weekends in mid-October inside the scenic Parco delle Scuderie of Palazzo Farnese. It merges an artisanal chocolate festival with local roasted chestnut feasts (caldarroste), hazelnut sweets, hot wine, show-cooking, and family games.
 
• L'Ottobrata – <b>Sagra</b> d'Autunno (<b>Ronciglione</b>): Held in early October, celebrating autumn harvest flavours with open-air food stalls, roasted chestnuts, local wine tastings, and live music.
 
• <b>Sagra</b> della Salsiccia (<b>Morlupo</b>): A historic festival in late October dedicated to local pork sausages grilled over open flames.
 
• <b>Sagra</b> della Polenta (<b>Castelnuovo di Porto</b>): Serving slow-cooked cornmeal polenta topped with pork ribs and sausages.
 
• <b>Sagra</b> del Fungo (<b>Bracciano</b>): A festival celebrating wild autumn mushrooms.
 
• Vendemmiale / <b>Sagra</b> dell'Uva (<b>Capena</b>): An autumn grape harvest festival with wine-making parades and free tastings.`,

image5: "contrade 3.jpg",

 
text5: `<b>November / December</b>
 
• Caffeina Christmas Village (<b>Viterbo</b>): Starting in late November and spanning through December, turning <b>Viterbo</b>'s historic centre into a festive, fairy-tale village with market chalets and light shows.
 
• <b>Sagra</b> della Polenta (<b>Riano</b>): A winter food festival serving hot polenta dishes in early December.
 
• Botteghe, Arti e Mestieri di un Tempo (<b>Mazzano Romano</b>): The December edition of the historical living nativity and craft demonstration, taking place on December 26th.`,
   
    },
//END CELEBRATION BLOCK

 
//CULTURE
    {
      label: "Culture",
      title: "Culture",
      image: "Narce temple sketch.jpg",
      text: `Mazzano Romano is at the centre of the Treia valley region, which boasts a deeply layered history that mirrors the broader shifts of central Italy. The region was originally settled during the Iron Age by the Faliscans (from roughly the 8th century BC until their definitive defeat by Rome in 241 BC), a distinct Italic tribe. Unlike their powerful neighbours the Etruscans, who spoke a non-Indo-European language isolate, the Faliscans spoke an Italic language closely related to Latin. `,
 
image2:"Mazzano museum-sketch.jpg",
 
text2: `Culturally, however, the Faliscans maintained a unique hybrid identity; they frequently joined the Etruscan League and shared their sophisticated pottery, funerary customs, and rock-cut architectural styles, which are still visible today in the deep, sunken vie cave corridors carved into the cliffs around Mazzano Romano. This rugged volcanic landscape, shaped by prehistoric eruptions and carved out over millennia by the Treia River, served as the environmental cradle for this civilization, anchoring major settlements like Narce.

Following the collapse of the Roman Empire, the population retreated to these ancient fortified heights. By the medieval period, the valley’s steep cliffs acted as a natural defensive shield, and the town took on its current structural layout. `,
 
image3: "Mazzano sketch.jpg",
 
text3: `The town's first formal documentation appears in a parchment from 945 AD when the land was donated to the Vatican-controlled Roman monastery of Saints Andrea and Gregorio al Celio. The Holy See and its monastic networks maintained feudal lordship over the territory for centuries until 1526, effectively shaping local governance and integrating the town and its neighbouring strongholds, like Calcata, into the Papal States until Italian unification.

Woven directly through this spiritual and defensive geography is a historic network of paths integrated with the Via Francigena—the legendary medieval "superhighway" formalised in 990 AD by Archbishop Sigeric of Canterbury as the primary pilgrimage route connecting northern Europe to Rome. While the main route traditionally tracked just west of the valley via the ancient Via Cassia, crucial variants and stopovers cut directly through the Treia basin. A vital landmark along this path is the Cascate di Monte Gelato (Monte Gelato Waterfalls), where a 19th-century horizontal watermill stands over medieval foundations. For centuries, these waterfalls served as a critical rest stop where passing pilgrims could refresh themselves before undertaking the final, arduous push toward St. Peter’s Basilica.

Today, the community of Mazzanesi fiercely preserves this heritage through historical reenactments like the Giostra delle Contrade, while operating within a modern culture deeply tied to the surrounding environment. The entire area is now protected under the Treja Valley Regional Natural Park (established in 1982), keeping these ancient pathways active as a haven for modern hikers. Linguistically, the local dialect is heavily influenced by the Romanesco (Roman) dialect, which uniquely traces its roots back to the linguistic melting pot of the Ager Faliscus—preserving subtle regional cadences that distinguish it from standard Italian.

Learn more about the history and the culture of the area at the [Mazzano Museum (MAVNA)](https://www.mavna.it/).
`,
     
    },
//END CULTURE BLOCK
 
//CUISINE
    {
      label: "Cuisine",
      title: "Cuisine",
      image: "antipasto at carlas sketch.jpg",
      text: `The exquisite cuisine of this area is rooted in long traditions and is bound to highly seasonal selections.   Dishes are simple, with a select few very tasty ingredients.   Specialities of the area include slow cooked cinghiale (wild boar), chicory (of a type only found in this area), amazingly flavourful tomatoes and cherry tomatoes, olive oil, chestnut dishes (in season), artichokes (in season), truffles, mushroom dishes and hand rolled pasta such as strozzapretti (priest chokers) and pappardelle.  Popular sauces are caccio e pepe, amatriciana, funghi and cinghiale.    The area even has its own mineral water, Acqua di Nepi. Pecorino is the choice cheese for pasta, as well as a variety of goat cheeses such as Caprini and Marzolina.`,
image2: "Osteria falisca 2-sketch.jpg",
 
text2: `Mazzano is only an hour from the sea, so you can expect the freshest seafood and particularly vongole.
 
For gelato, the frutti di bosco (fruits of the woods), and a breakfast cornetto frutti di bosco (berry jam). 
 
Your culinary experience should include a cooking lesson with the Fabiolous cooking school in Mazzano Romano, breakfast at Bar Novella in Mazzano and meals at Bar Falco and Osteria Falisca.  

Here are some places to try

<b>In Mazzano</b>

• [Bar del Falco](https://www.facebook.com/p/Caff%C3%A8-del-falco-Mazzano-Romano-100057456249218/) Open all day. Carla, the owner, speaks good English and can help with almost anything. Serves meals for lunch and dinner. Closed on Thursday. This is the local bar and restaurant of the old town.
• Domus Birrae Pub: Pub serving first courses, second courses and burgers. Open from 8:00 pm onwards. Closed on Monday.

• [Osteria Falisca](https://www.instagram.com/osteriafalisca) Excellent fish and also serves pizza. Recommended. Open for dinner on Wednesdays and Thursdays, and for both lunch and dinner on Fridays, Saturdays and Sundays. Booking in advance is essential. You can message Chiara via WhatsApp on +39 333 585 8528.

• Pizzeria da Daniele: Takeaway pizza and supplì, they also deliver to the Borgo, call 331 3440377.

• Bar Margherita: In the square before the main piazza. Serves breakfast, snacks and aperitivi. Has a jukebox and pool table. Closed on Sundays.

• Caffetteria Milani: Bar halfway up the hill. Very good for breakfast, snacks, ice cream or aperitivi, with a nice outdoor area at the back. Closed on Wednesday.

• [Bar Novella](https://www.facebook.com/Barnovella/) Also known as the Three Sisters. Bar at the top of the hill. Very good for breakfast, with excellent ice cream and aperitivi. Closed on Monday. ph +39 06 904 9782.

<b>Further afield</b>

On the way to <b>Nepi</b>, if you are driving via the Via Cassia:
[Il Casale dei buoni sapori](https://ilcasaledeibuonisapori.it/) The cuisine is typical of the Lazio region—very similar to Roman cooking—and most of the products offered are sourced locally, with some even produced in-house. “Il Carciofritto” (fried artichoke) is the house speciality! The full address is: 311, Via Nepesina, SS311, 01036 Nepi VT

<b>Trevignano</b>
[Ristorante Acquarella](https://ristoranteacquarella.it/) Traditional Recipes and new flavours from a kitchen—managed with passion, care, and expertise by Rossana Stefanelli and chefs Andrea and Ivan—interprets modern culinary trends with great attention and precision, all while remaining deeply respectful of the area’s long-standing local traditions.   Open Wednesday to Sunday, call +39 06 99 85 131

<b>Vignanello</b> (40 minutes drive)
[Vignò - Trattoria Vignanellese](https://www.facebook.com/VignoTrattoria) Fine seasonal and economical Vignò restaurant, Via Valle Maggiore, 1, Vignanello +39 0761 095251
`,
     
    }
//END CUISINE BLOCK
 
  ]
};
 
