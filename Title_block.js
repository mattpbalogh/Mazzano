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
  links: [

//CELEBRATION
    {
      label: "Celebration",
      title: "Celebration",
      image: "Ronciglione carnevale.jpg",
      text: `
January / February

• Carnevale di Ronciglione (Ronciglione): One of Italy’s oldest historic carnivals. Spanning late winter into early March, it features grand float parades, traditional folk bands, masked balls, and the famous riderless horse races (Corse a Vuoto).

• Botteghe, Arti e Mestieri di un Tempo (Mazzano Romano): A historical reenactment of ancient trades and a living nativity scene held in the medieval village center on January 6th.

May

• San Pellegrino in Fiore (Viterbo): An annual floral exhibition in early May that transforms Viterbo's exceptionally preserved medieval quarter (San Pellegrino) with striking flower installations, architecture, and market stalls.

• Palio dei Borgia – Offerta dei Ceri (Nepi): The preliminary ceremonies for Nepi's major festival begin in mid-to-late May, bringing medieval drumming festivals and historical candle offerings to the fortress.

June

• Palio dei Borgia (Nepi): Spanning mid-June, this Renaissance festival honors Lucrezia Borgia’s 1499 investiture. The 4 historic contrade of Nepi (La Rocca, Santa Maria, San Biagio, and San Giovanni) compete in archery, historical fencing, and horse jousting alongside street banquets and massive historical processions.

• Caffeina Festival & Tuscia Film Fest (Viterbo): Major cultural festivals kicking off in late June and running through July, drawing authors, musicians, and filmmakers to open-air stages across Viterbo's historic piazzas.

July

• Borgo in Festa (Ronciglione): A 5-night summer festival held in early July inside the medieval village. It highlights regional culinary excellences across local open-air taverns, accompanied by comedy shows, live concerts, and theatrical performances.

• Sagra del Montarello (Mazzano Romano): Hosted by Contrada Montarello in early July, featuring traditional grilled specialties and local desserts.

• Borgo de Fora Festival (Mazzano Romano): Organized by Contrada Borgo de Fora in late July, offering food stalls, traditional pasta dishes, and grilled meats.

August

• Amleto in Salsa Piccante (Montenero Sabino): An open-air theatrical festival and local food celebration held in late August.

September`,
image2: "Viterbo macchina.jpg",

text2: `• Trasporto della Macchina di Santa Rosa (Viterbo): Taking place on September 3rd, this UNESCO-recognised event is Viterbo’s most sacred tradition. A 30-metre-high, illuminated tower weighing five tonnes is carried on the shoulders of 100 men (Facchini di Santa Rosa) through the dark, narrow streets of the medieval city.

• Feste Patronali & Ludi Borgiani (Civita Castellana): Held in mid-September to honor saints John and Marciano. The city pivots to its Renaissance heritage during the Ludi Borgiani, where Civita Castellana's historic districts/contrade (such as Guazzolo, Fontana, Centro, and others) join in historic trekking, archery events, street food trails, and a majestic court parade.

• La Giostra delle Contrade (Mazzano Romano): Held in mid-September. The four local contrade (Borgo de Fora, Montarello, Barbacane, and Li Santi) compete in an archery tournament accompanied by 16th-century historical parades.`,

image3: "civita palio.jpg",

text3: `• Festa Patronale di San Nicola (Mazzano Romano): The official patron saint festival celebrated in early September.
• Festa di Settembre (Anguillara Sabazia): A lakeside festival featuring local food stands and lakefront markets.

• Sagra del Fungo Porcino (Oriolo Romano): A massive food festival celebrating the porcini mushroom harvest throughout mid-September in Piazza Umberto I.

October

• Palio della Stella (Sacrofano): Traditionally held across the second weekend of October. Sacrofano's 7 historic contrade (Alba, Borgo, Martini, Mediana, Monte, Petruscio, and Quarto di Monte) face off in a fast-paced medieval equestrian tournament where knights in costume must lance hanging stars.

• Sagra della Pappardella al Cinghiale (Sacrofano): Held annually on the third weekend of October, highlighting wild boar ragù served over fresh, house-made pasta, alongside wine tastings, ancient village tours, and craft markets. (Note: In some years, specific local wildlife restrictions like swine flu measures may pause the wild boar meat preparation, pivoting the festival framework instead).

• Cioccofest e Festa della Castagna (Caprarola): Held over two full weekends in mid-October inside the scenic Parco delle Scuderie of Palazzo Farnese. It merges an artisanal chocolate festival with local roasted chestnut feasts (caldarroste), hazelnut sweets, hot wine, show-cooking, and family games.

• L'Ottobrata – Sagra d'Autunno (Ronciglione): Held in early October, celebrating autumn harvest flavors with open-air food stalls, roasted chestnuts, local wine tastings, and live music.

• Sagra della Salsiccia (Morlupo): A historic festival in late October dedicated to local pork sausages grilled over open flames.

• Sagra della Polenta (Castelnuovo di Porto): Serving slow-cooked cornmeal polenta topped with pork ribs and sausages.

• Sagra del Fungo (Bracciano): A festival celebrating wild autumn mushrooms.

• Vendemmiale / Sagra dell'Uva (Capena): An autumn grape harvest festival with wine-making parades and free tastings.

November / December

• Caffeina Christmas Village (Viterbo): Starting in late November and spanning through December, turning Viterbo's historic center into a festive, fairy-tale village with market chalets and light shows.

• Sagra della Polenta (Riano): A winter food festival serving hot polenta dishes in early December.

• Botteghe, Arti e Mestieri di un Tempo (Mazzano Romano): The December edition of the historical living nativity and craft demonstration, taking place on December 26th.`,
      link: "",
      linkText: ""
    },
//END CELEBRATION BLOCK

//CULTURE
    {
      label: "Culture",
      title: "Culture",
      image: "Narce temple sketch.jpg",
      text: `Mazzano Romano is at the centre of the Treia valley region, which boasts a deeply layered history that mirrors the broader shifts of central Italy. The region was originally settled during the Iron Age by the Faliscans (from roughly the 8th century BC until their definitive defeat by Rome in 241 BC), a distinct Italic tribe. Unlike their powerful neighbors the Etruscans, who spoke a non-Indo-European language isolate, the Faliscans spoke an Italic language closely related to Latin. `,

image2:"Mazzano museum-sketch.jpg",

text2: `Culturally, however, the Faliscans maintained a unique hybrid identity; they frequently joined the Etruscan League and shared their sophisticated pottery, funerary customs, and rock-cut architectural styles, which are still visible today in the deep, sunken via cave corridors carved into the cliffs around Mazzano Romano. This rugged volcanic landscape, shaped by prehistoric eruptions and carved out over millennia by the Treja River, served as the environmental cradle for this civilization, anchoring major settlements like Narce.
Following the collapse of the Roman Empire, the population retreated to these ancient fortified heights. By the medieval period, the valley’s steep cliffs acted as a natural defensive shield, and the town took on its current structural layout. `,

image3: "Mazzano sketch.jpg",

text3: `The town's first formal documentation appears in a parchment from 945 AD when the land was donated to the Vatican-controlled Roman monastery of Saints Andrea and Gregorio al Celio. The Holy See and its monastic networks maintained feudal lordship over the territory for centuries until 1526, effectively shaping local governance and integrating the town and its neighboring strongholds, like Calcata, into the Papal States until Italian unification.
Woven directly through this spiritual and defensive geography is a historic network of paths integrated with the Via Francigena—the legendary medieval "superhighway" formalised in 990 AD by Archbishop Sigeric of Canterbury as the primary pilgrimage route connecting northern Europe to Rome. While the main route traditionally tracked just west of the valley via the ancient Via Cassia, crucial variants and stopovers cut directly through the Treja basin. A vital landmark along this path is the Cascate di Monte Gelato (Monte Gelato Waterfalls), where a 19th-century horizontal watermill stands over medieval foundations. For centuries, these waterfalls served as a critical rest stop where passing pilgrims could refresh themselves before undertaking the final, arduous push toward St. Peter’s Basilica.
Today, the community of Mazzanesi fiercely preserves this heritage through historical reenactments like the Giostra delle Contrade, while operating within a modern culture deeply tied to the surrounding environment. The entire area is now protected under the Treja Valley Regional Natural Park (established in 1982), keeping these ancient pathways active as a haven for modern hikers. Linguistically, the local dialect is heavily influenced by the Romanesco (Roman) dialect, which uniquely traces its roots back to the linguistic melting pot of the Ager Faliscus—preserving subtle regional cadences that distinguish it from standard Italian.
`,
      link: "",
      linkText: ""
    },
//END CULTURE BLOCK

//CUISINE
    {
      label: "Cuisine",
      title: "Cuisine",
      image: "antipasto at carlas sketch.jpg",
      text: `The exquisite cuisine of this area is rooted in long traditions and is bound to highly seasonal selections.   Dishes are simple, with a select few very tasty ingredients.   Specialties of the area include slow cooked cinghiale (wild boar), chicory (of a type only found in this area), amazingly flavourful tomatoes and cherry tomatoes, olive oil, chestnut dishes (in season), artichokes (in season), truffles, mushroom dishes and hand rolled pasta such as strozzapretti (priest chokers) and pappardelle.  Popular sauces are caccio e pepe, amatriciana, funghi and cinghiale.    The area even has its own mineral water, Acqua di Nepi. Pecorino is the choice cheese for pasta, while as a variety of goat cheeses such as Caprini and Marzolina.`,
image2: "Osteria falisca 2-sketch.jpg",

text2: `Mazzano is only an hour from the sea, so you can expect the freshest seafood and particularly vongole.

For gelato, the friuti di bosca (fruits of the woods), and a breakfast cornetto fruiti di bosca. 

Your culinary experience should include a cooking lesson with the Fabiolous cooking school in Mazzano Romano, breakfast at Bar Novella in Mazzano and meals at Bar Falco and Osteria Falisca.  
`,
      link: "",
      linkText: ""
    }
//END CUISINE BLOCK

  ]
};
