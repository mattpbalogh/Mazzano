// ==========================================================================
// LOCATIONS ON THE BASE MAP (everything except the Mazzano icon itself)
// Each block is one icon + popup. Positions are % of the BASE map.
// Rules: every block ends  },  (comma) - the last one may omit it.
//        text goes in `backticks`;  other values in "quotes".
// ==========================================================================
const areaLocations = [

//Airport
  {
    x: 33.1, y: 96.9,
    icon: "Airport.svg",
    title: "Fiumicino Airport (Aeroporto Leonardo Da Vinci) for Rome",
    text: `Rome airport, generally known as Fiumicino airport after the nearby village, is about 1 hour and 10 minutes from Mazzano.  The airport is well outside Rome, near the sea, and the best place to pick up a hire car, as one doesn't have to drive into Rome.`,
  },
//END Airport BLOCK

//Anguillara

  {
    x: 32.6, y: 83.9,
    icon: "Anguillara.svg",
    title: "Anguillara Sabazia",
    image: "Anguillara.jpg",
    text: `Anguillara Sabazia is perched on a tufa promontory, the medieval village features narrow cobblestone alleys, a 16th-century clock gate, and the Collegiate Church of Santa Maria Assunta. Its history dates back to ancient Roman times—when it was named after the Angularia villa—as well as the prehistoric Neolithic site of La Marmotta submerged nearby in the lake. Today, it serves as a popular scenic destination and commuter town known for its lakeside promenade, regional parklands, and local fish cuisine.`,
  },
//END Anquillara BLOCK

//Bracciano
  {
    x: 6.3, y: 81.9,
    icon: "Bracciano.svg",
    title: "Bracciano",
    image: "Bracciano.jpg",
    text: `Bracciano is overlooks the clear waters of Lake Bracciano (Lago di Bracciano), which forms part of the protected Bracciano-Martignano Regional Natural Park. The town is famous for its narrow medieval stone alleys, scenic lakeside promenades, and deep historical roots that stretch back to ancient times.
Of particular interest is the huge castle (Castello Orsini-Odescalchi) that you can browse for hours, with almost no other visitors.  There are English audio-guides for hire.  Check the opening hours at the link below.

Built between 1470 and 1485 by the powerful Orsini family, this pentagonal fortress with its five round, machicolated towers is one of the finest examples of Renaissance military architecture in Europe. Over the centuries, it transformed from a stern military stronghold into a refined noble residence—hosting popes, kings, and artists—and was later acquired by the Odescalchi family in 1696. Today, it operates as a museum showcasing period furniture, medieval weapons, and Renaissance frescoe.

Fun fact, Tom Cruise and Katie Holmes had their wedding reception in this castle.`,
  },
//END Bracciano BLOCK

//CALCATA
  {
    x: 79.7, y: 52,
    icon: "Calcata.svg",
    title: "Calcata",
    image: "Calcata1.jpg",
    text: `Calcata (or more strictly, Calcata Antica) is one of the most picturesq villages in all of Europe. It is surrounded by spectacular views, 
Abandoned in the 1930s, hippies arrived in the 1960s, and their heritage is still reflected in the artisan shops, bars and restaurants.
For centuries, the small church in the main square, Chiesa del SS. Nome di Gesù (Church of the Holy Name of Jesus),was a famous pilgrimage site because its local church claimed to possess the Holy Foreskin of Jesus, allegedly hidden there by a German soldier after the 1527 Sack of Rome.  Up to 31 European towns claimed a Holy Foreskin during the Middle Ages. By 1900, the Vatican grew embarrassed by the bizarre devotion and decreed that anyone who wrote about or discussed the Holy Foreskin would face automatic excommunication. The bizarre saga came to an abrupt end in 1983 when the relic mysteriously vanished from a priest's wardrobe, sparking lasting conspiracy theories that the Vatican itself orchestrated the theft to quietly bury the controversial piece of history.`,
image2: "Calcata2.jpg",
text2: `
IMPORTANT PARKING INFORMATION
Arriving by car from Mazzano, drive on past the old town, as vehicle entry is restricted, and drive on up the hill, following the blue parking signs to a large parking lot, where tickets need to be bought for parking.   There is a picturesque path down to Calcata from the top right corner of the carpark.  Note the walk back to the car park is steep!
`,
  },
//END Calcata BLOCK

//CAPRAOLA
  {
    x: 26.8, y: 12.6,
    icon: "Palazzo farnese.svg",
    image: "Palazzo farnese.jpg",
    title: "Capraola and Villa Farnese",
    text: `Capraola and the magnificant Villa Farnese comprise one of the most stunning experiences in the area.
25 minutes drive
The Villa Farnese, also known as Villa Caprarola, is a magnificent 16th-century pentagonal mansion that dramatically dominates the small town of Caprarola in Northern Lazio. Commissioned by the powerful Farnese family and masterfully redesigned by architect Jacopo Barozzi da Vignola, this architectural triumph seamlessly blends a fortified pentagonal outer structure with a stunning, contrastingly circular inner courtyard. Inside, the palace features breathtaking Mannerist frescoes by artists like the Zuccari brothers—including the famous Sala del Mappamondo (Room of the Maps)—and a monumental spiral staircase called the Scala Regia. The property opens up to the dense woods of Monte Cimini and is completed by elaborate Italian Renaissance gardens, cascading water features.

The Villa (well, actually its a grand palace) features stunning art on the walls of every grand state chamber, including the map room, depicting all corners of the world from floor to ceiling, the green corridor, which is like walking through the bushes, and enourmous gardens that you can get lost in for hours.`,
    image2: "Villa farnese gardens.jpg",
    text2: `There is a small entrance fee, but hardly anyone else there - a highlight!`,
  },
//END Capraola BLOCK

//CASTEL SANT'ELIA
  {
    x: 60.3, y: 36.3,
    icon: "Castel sant elia.svg",
    image: "Castel sant elia.jpg",
    title: "Castel Sant'Elia",
    text: `Stunning town - must visit
25 minutes drive
Park near the gate into the old part, and walk the length of the picturesque town to see the stunning views of the ravine and the Basilica of Sant Elia in the valley below.
Drive down to the 11th century Basilica, and pick up a guide sheet - there is a small entrance fee.  Check out the ancient crypt below, and the historical frescoes - can you recognise the saints and stories depicted?`,
  },
//END CASTEL SANT'ELIA BLOCK

//CIVITA CASTELLANA
  {
    x: 77, y: 25,
    icon: "Civita castellana.svg",
    image: "Civita castellana.jpg",
    title: "Civita Castellana",
    text: `features shopping and attractions
20 minutes drive
The Duomo of Santa Maria in Maggiore features stunning 13th century mosaics, an amazing crypt (remember your Euro coins for the lights) and an organ that Mozart came to Civita Castellana to play. There is also great museum of Faliscan antiquities.
Just outside to the north is a shopping centre with a large convenience store, supermarket, fast food outlet and gelato bar.`,
  },
//END CIVITA CASTELLANA BLOCK

//CESANO
  {
    x: 51, y: 88.5,
    icon: "Cesano.svg",
    image: "Cesano.jpg",
    title: "Cesano",
    text: `Fast train to Trastevere in Rome
40 minutes drive
Plenty of parking
Rougly every hour, but sometimes cancelled.Monitor for random platform changes`,
    link: "https://en.wikipedia.org/wiki/Mazzano_Romano",
    linkText: "Timetable"
  },
//END CESANO BLOCK

//LAGO BRACCIANO
  {
    x: 22, y: 74.6,
    icon: "Lago bracciano.svg",
    image: "Lago bracciano.jpg",
    title: "Lago Bracciano",
    text: `Surrounded by the 3 gorgeous towns of Anguillara Sabazia, Bracciano and Trevignano, Lake Bracciano is formed in the mouth of an existent volcano.

20 minutes drive

It has perfectly clean water (it is the drinking water supply for Rome', with no motor boats permitted other than an occassional cross-lake ferry. It is surrounded by pebbly beaches, most of which are privately owned, but well worth the small entrance fee.  You are provided with a deck chair, and there is typically a bar and restaurant, toilets and changing rooms.`,
    
  },
//END LAGO BRACCIANO BLOCK

//MONTE GELATO
  {
    x: 59.3, y: 57.9,
    icon: "Monte gelato.svg",
    image: "Monte gelato-sketch.jpg",
    title: "Monte Gelato",
    text: `The waterfalls (Cascate) of Monte Gelato.

10 minutes drive or 1 hour beuatiful walk from Mazzano

Because of its abundance of water, Monte Gelato has been frequented by man since prehistoric times.

This area preserves traces of the many settlements that have taken place here over time: from the remains of a Roman villa of the first century BC, to the agricultural settlement of the eighth century AD, to the water mill built in 1800s which was maintained active until the 1960s.`,

image2:"Mill sketch.jpg",

text2: `The “Mola,” or water mill, was built by the Del Drago family, who in those years owned the same-name estate.

It is a complex of buildings that makes use of a pre-existing medieval constructions: a structure situated between the two branches of the Treja river, in correspondence with the famous waterfalls, perhaps already used in ancient times as a mill, and a tower located nearby, along the present-day road.

`,
image3:"Terence hill sketch.jpg",
text3: `The mill, which remained in use until after the war and was then abandoned, has been recovered only in very recent times, and houses one of the Park’s information points that with models and panels illustrates several aspects of the structure of the surrounding area.

Monte Gelato has also been features in many films, including  the spaghetti western, My Name is Trinity, starring Terence Hill.`,
  },
//END MONTE GELATO BLOCK



//SANT ORESTE
  {
    x: 91.2, y: 41.5,
    icon: "Sant oreste.svg",
    image: "Sant oreste.jpg",
    title: "Sant Oreste at Monte Soratte",
    text: `Monte Soratte is on the slopes of Monte Soratte, which can be seen soaring above the area from far away.  The village is famous for its well-preserved defensive walls, narrow winding streets, and panoramic views of the Tiber Valley. Its history dates back at least to 747 AD, and the area is widely known for the Soratte Bunker—a massive network of World War II and Cold War tunnels carved directly into the limestone mountain `,
  },
//END SANT ORESTE BLOCK


//SUTRI
  {
    x: 29.2, y: 41.3,
    icon: "Sutri.svg",
    image: "Sutri.jpg",
    title: "Sutri",
    text: `Stunning town, packed with places to see.  The town was at the crossroads of Roman, Etruscan and Faliscan communities.
20 minutes drive - park below the town, in a large carpark on the right.
Below the town, on the Western side, you will see many caves carved into the rock by both Roman and Etruscans in the 4th century BC.

To the South West is the rock amphitheatre, part of the Roman outpust dating from around 384 BC. It is the only known amphitheatre carved entirely into rock, with no constructed segments.  While you can see the amphitheatre from the outside, entrtance requires a ticket purchased from the kiosk at the gate.  It has limited entrance times, so check the link below before visiting.  `,
image2:"",
text2: `Slightly north of the Amphtheatre is the stunning Mithreaum, or Church of the Madonna of the Birth, carved entirely into the rock.  Originally carved to be a place of worship to the god Mithra, who was an opponent of Christianity.  It was converted into a church in the 13th and 14th century, decorated with detailed frescoes.  Entrance is with a tour guide only, and set times.  Tickets are bought from the kiosk outside the amphitheatre. There is a Sutri pass that provides entrance to both the amphitheatre and the Mithraeum.

On the Eastern side of the main road (Via Cassia)is the steep road up to the town (resident cars only permitted), featuring pictuesque alley ways and many intriguing arches.  There is also the Cathedral of Sanata Maria Assunta, and long rectangular ancient washhouse . `,
    link: "https://en.wikipedia.org/wiki/Mazzano_Romano",
    linkText: "Parking suggestion"
  },
//END SUTRI BLOCK



//TREVIGNANO
  {
    x: 26.0, y: 63.5,
    icon: "Trevignano.svg",
    image: "Trevignano.jpg",
    title: "Trevignano",
    text: `Gorgeous lakeside town on Lago Bracciano
20 minutes drive
Absolute water front bars and restaurants along the Lungolago. Perfect for aperitivi or dinner.
The town is known for fresh lake fish dishes - particularly coregone (whitefish) - as well as Cacio Fiore, a traditional raw sheep's milk cheese protected as a Slow Food Presidio.

Check out:

The Orsini fortress ruins (Rocca di Trevignano)

Museo Civico Etrusco Romano - located in the town hall on Piazza Vittorio Emanuele III, this museum displays ancient grave goods, pottery, and artifacts dating from the 8th to 6th centuries BC, excavated from nearby Etruscan necropolises.

Church of Santa Maria Assunta - a 16th-century church nestled within the historic center's labyrinth of stone alleys, notable for housing The Death of the Virgin fresco by Renaissance painter Pellegrino da Modena.`,
    link: "https://en.wikipedia.org/wiki/Mazzano_Romano",
    linkText: "Parking suggestion"
  }
//END TREVIGNANO BLOCK

];
