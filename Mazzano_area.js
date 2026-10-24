// ==========================================================================
// LOCATIONS ON THE BASE MAP (everything except the Mazzano icon itself)
// Each block is one icon + popup. Positions are % of the BASE map.
// Rules: every block ends  },  (comma) - the last one may omit it.
//        text goes in `backticks`;  other values in "quotes".
// ==========================================================================
const areaLocations = [

//Airport
  {
    x: 37.7, y: 96.9,
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


//BAGNIOREGIO AND BOLSENA

  {
    x: 8.5, y: 26.6,
    icon: "Civita bagnoregio.svg",
    title: "Civita Bagnoregio, Bolsena and Lake Bolsena",
    image: "Civita bagnoregio 1.jpg",
    text: `Just north of Viterbo are many spectacular places to visit.

Civita di Bagnoregio (1 1/2 hrs drive) is on the site of a 2,500-year-old Etruscan village dramatically isolated atop a crumbling volcanic plateau in Lazio, Italy, is famously nicknamed "il paese che muore" (the dying city). Relentless geological erosion causes the surrounding cliffs to fracture and collapse, leaving a medieval citadel that is only accessible via a pedestrian footbridge. `,

image2:"civita bagnoregio 2.jpg",

text2: `To combat this slow-motion destruction, modern geologists and engineers have implemented advanced technological structural monitoring systems. They have reinforced the fragile underground caverns with massive steel anchoring rods, injected structural nails, and concrete wells to stabilize the terrain. These vital engineering interventions are funded directly by a €5 entrance fee paid by global tourists.The entry fee has successfully transformed the threat of over-tourism into a self-sustaining conservation model, running alongside an official bid for UNESCO World Heritage protection.`,

image3: "Bolsena.jpg",

text3: `Spectacular Lake Bolsena (1 1/2 hrs drive) is Europe’s largest volcanic crater lake and one of Italy’s most picturesque hidden gems. Formed over 300,000 years ago in a collapsed volcanic caldera, its incredibly clear, swimmable waters are framed by striking black-sand beaches and rolling hills draped in olive groves and vineyards. The shoreline is dotted with postcard-perfect medieval fishing villages, while two private, monument-rich islands rise dramatically from the centre. Striking a perfect balance between wild natural beauty and quiet historic charm, it remains a tranquil, highly photogenic alternative to Italy's crowded northern lakes.`,
  },
//END BAGNIO REGIO AND BOLSEA BLOCK

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


//Bunker Soratte
  {
    x: 95.1, y: 49.3,
    icon: "Bunker soratte.svg",
    image: "Bunker soratte.jpg",
    title: "Bunker Soratte",
    text: `The Bunker Soratte is a massive underground military complex carved into the limestone heart of Monte Soratte, located about 50 kilometers north of Rome near Sant’Oreste. Originally begun in 1937 by Benito Mussolini as a secret air-raid shelter for the fascist government and Italian military high command, the tunnels later served as the Mediterranean headquarters for German Field Marshal Albert Kesselring during World War II. During the Cold War, a portion of the labyrinth was retrofitted as an anti-atomic bunker for the Italian president and government. Today, the site operates as a museum managed by local volunteers, offering guided tours through its historic subterranean network, including a virtual reality experience.

Unfortunately, the website is only in Italian.  The Bunker is usually only open in Sundays, and you need to pre-book tickets.  The tour goes for about 2 1/2 hours, so together with Monte Oreste, it is pretty much a day's outing.  The tour groups are big and parking limited, so you need to get there well in advance.  By default, the tours are in Italian, but you can look out for tours in English, or create one, by offering to pay for a minimum of 10 people.  Given the low cost of tours, a private tour for just 4 people, paying for 10, is still well worth the effort, however you need to email them several weeks in advance.`,
link: "https://bunkersoratte.it/index.html",
linktext: "Bunker soratte openings and tickets",
  },
//END Bunker Sorate BLOCK

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
Arriving by car from Mazzano, drive on past the old town, as vehicle entry is restricted, and drive on up the hill, following the blue parking signs to a large parking lot, where tickets need to be bought for parking.   There is a picturesque path down to Calcata from the top right corner of the carpark.  Note the walk back to the car park is steep!`,
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
    icon: "Train.svg",
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

//FALERIA
  {
    x: 78.1, y: 43.9,
    icon: "Faleria.svg",
    image: "Faleria.jpg",
    title: "Faleria",
    text: `14 minutes drive
Originally an ancient Roman transit station known as Stabbia, the historic town center features winding stone alleys dominated by the 12th-century Castello degli Anguillara and the Church of San Giuliano. Today, it serves as a tranquil, scenic getaway for travelers exploring the rugged natural landscapes and ancient ruins of the Tuscia region.
The central palace-fortress, the Castello degki Aunguillara is undergoing significant multi-phase renovation.`,

  },
//END FALERIA BLOCK

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

//LAGO VICO
  {
    x: 9.9, y: 14,
    icon: "Lago vico.svg",
    image: "Lago vico.jpg",
    title: "Lago Vico - Lake Vico",
    text: `25 minutes drive

Lake Vico is a picturesque volcanic lake, 510 metres above sea level.  It is great for hiking, bird watching and swimming.  While there are a couple of kiosks and restaurants, it is also a great place for picnic, with public picnic tables.`,
    
  },
//END LAGO VICO BLOCK

//Le Rughe
  {
    x: 61.5, y: 92.5,
    icon: "Supermarket icon.svg",
    title: "Le Rughe shopping strip",
    text: `25 minutes drive

This little shopping strip is ideal for picking up supplies while driving from the airport to Mazzano, with 2 supermarkets, a bakery and a pharmacy..`,
    
  },
//END LAGO VICO BLOCK

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

//NEPI
  {
    x: 51.3, y: 44.2,
    icon: "Nepi.svg",
    image: "Nepi.jpg",
    title: "Nepi",
    text: `Nepi is a charming historic walled town famously known as the "City of Water". 

20 minutes drive

Visitors can explore the imposing 15th-century Rocca dei Borgia once tied to Lucrezia Borgia, walk across the sweeping double-tiered arches of the 18th-century Acquedotto di Nepi, and admire the Renaissance Palazzo Comunale designed by Antonio da Sangallo the Younger. 
If you park in the lower car park, you can walk up the stairs through the 5 metre thick walls of the old town.  In the Borgo, where you will find The Cathedral of Santa Maria Assunta (Duomo di Nepi) , a grand historic landmark built over a Roman forum and distinguished by an unusual, expansive layout of five parallel aisles. Though its upper basilica showcases a striking 19th-century Neoclassical design following a devastating fire set by Napoleonic troops in 1798, its true crown jewel is the surviving 12th-century Romanesque crypt, featuring a subterranean forest of 24 intricately carved columns – make sure you have some 1 euro coins for lighting.
The ruins of the Rocca dei Borgia, or Borgia castle can be seen from outside, or visited on weekends, typically an 11:30 am opening, and an afternoon opening That can be checked at the link below.`,

image2:"Nepi2.jpg",

text2:`Trekking around Nepi in the Tuscia region takes you through deep, dramatic volcanic tufa ravines known as forre and ancient sunken roads called cavoni. A standout route leads past the historic Via Amerina and plunges into the crevice-like gorge towards the roaring Cascata del Picchio—a 15-meter double waterfall surrounded by dense, moss-draped greenery that feels like a hidden micro-jungle. Along the way, walking between towering rock walls carved by ancient civilizations and crossing small stream-fords offers a quiet, atmospheric escape.`,

image3:"Nepi3.jpg",

link: "https://www.museociviconepi.it/en/monuments/borgia-castle/",
    linkText: "Borgia Castle opening hours"
  },
//END NEPI BLOCK

//SANT ORESTE
  {
    x: 91.2, y: 41.5,
    icon: "Sant oreste.svg",
    image: "Sant oreste.jpg",
    title: "Sant Oreste at Monte Soratte",
    text: `Monte Soratte is on the slopes of Monte Soratte, which can be seen soaring above the area from far away.  The village is famous for its well-preserved defensive walls, narrow winding streets, and panoramic views of the Tiber Valley. Its history dates back at least to 747 AD, and the area is widely known for the Soratte Bunker—a massive network of World War II and Cold War tunnels carved directly into the limestone mountain.`,
  },
//END SANT ORESTE BLOCK

//Ostia Antica
  {
    x: 33.1, y: 96.9,
    icon: "Ostia antica.svg",
    image: "Ostia antica.jpg",
    title: "Ostia Antica ",
    text: `Rome’s version of Pompeii, without the crowds, easy parking, no queues, and great place to spend a couple of hours on the way to or from the airport.

Ostia Antica was the ancient port city of Rome, situated at the mouth of the Tiber River. Originally founded as a military and trade outpost, it grew into a bustling commercial hub that fed and supplied the capital with grain, oil, and other imported goods. Today, its large Archaeological Park of Ostia Antica preserves the ruins of multi-story apartment buildings, bathhouses, temples, and an ancient theatre, offering a detailed look at everyday life in the Roman Empire, and a small museum.
.`,
  },
//END Ostia Antica BLOCK

//Roma
  {
    x: 19.6, y: 22.8,
    icon: "Ronciglione.svg",
    image: "Ronciglione.jpg",
    title: "Ronciglione",
    text: `Crowned Italy’s Borgo dei Borghi in 2023, the stunning medieval and Renaissance hill town of Ronciglione is dramatically perched on a volcanic tuff-rock ridge overlooking Lake Vico and is famous for its rich history under the Farnese family alongside two major cultural festivals.`,
image2: "Ronciglione carnevale.jpg",

text2: `Its most celebrated event is the historic Carnival of Ronciglione, one of central Italy's oldest winter festivals, which typically takes place every year during February (spanning from late January through Shrove Tuesday) and fills the streets with spectacular costume parades, allegorical floats, and the satirical Red Noses guild. The town's other major spectacle is the Palio delle Corse a Vuoto (Riderless Horse Races), a thrilling, centuries-old competition between local neighborhoods where horses gallop full-speed through the paved city streets without jockeys; this event takes place annually in the heart of summer, typically over a weekend in late July, with modern editions famously moving the trials and final races into the cooler evening and night hours..`,
  },
//END Roncligione BLOCK

//Roma
  {
    x: 74, y: 96.9,
    icon: "Train.svg",
    image: "Saxa Rubra.jpg",
    title: "Rome via Saxa Rubra",
    text: `Mazzano Romano is well placed for day trips or overnight trips to Rome. One way of getting there is to drive to Saxa Rubra station, about 50 minutes away. There is a large carpark there, and while theoretically, the parking tickets are only valid for up to 1 day, parking tickets are rare.  A small tram-like train goes into Rome and back every 20 minutes or so.  The train is pretty basic, and the steep steps make it a challenge if you have baggage, so travel light.The trains goes to Flaminio station, near Piazza del Popolo, which is conveniently central - and from which you can catch the metropolitana to elsewhere in Rome.  Tickets are on the Rome metropolitan system, so are covered by the 100 minute BIT system, and you can just tap-on with a credit card in the rare situations that the machines are working.

If you are feeling particularly energetic, you can even get to Saxa Rubra by bus from Mazzano.  Tickets are sold at Bar Novella, and the bus leaves from .  Check the bus timetable at the link below, typicall there is a bus very early in the morning to Rome, and one late afternoon back.  The bus takes about 1 hour 10 to get to Saxa Rubra.`,
  },
//END Roma BLOCK

//SACROFANO
  {
    x: 78.5, y: 81,
    icon: "Sacrofano.svg",
    image: "Sacrofano.jpg",
    title: "Sacrofano",
    text: `Sacrofano is a charming medieval commune with origins tracing back to the ancient Etruscan city of Veii, the town sits within the protected landscape of the Parco di Veio. Its historic center features narrow cobblestone streets, defensive stone structures, the Church of San Giovanni Battista, and a rich feudal history tied to noble dynasties like the Orsini and the Chigi families. 

Jewish Ghetto

In the mid-16th century, the highest part of the Castle, the Castrum, was transformed from a military apparatus into a secluded residential nucleus, the ghetto, destined for the Jewish community that had arrived from Fiumefreddo Bruzio, in the province of Cosenza (Calabria). The ghetto was accessible from a single door closed at sunset and opened again only at dawn.

The racial laws sanctioned by Pope Paul IV’s encyclical Cum nimis absurdum of 1555 were reported in the Statute of Scrofano (1554) listing a series of limitations on the rights of the Jewish community and imposing their conduct. The set of regulations (chapters) eventually became the foundation of an agreement drafted between the Calabrian Jew Simone Cuscio and the Orsini family for the opening of a loan bank in Scrofano in 1543. (Ebraismo dell’Italia Meridionale Peninsulare dalle origini al 1541, Esposito, 1996).

With the growth of the Jewish population, dwellings rose by adding alleys with tall housings equipped with stairs, which were generally very crowded. Within the ghetto, there was an oven for the preparation of unleavened bread and a synagogue, both inside homes. Still today, in a private house, there is a Torah Ark where the Sefer Torah scrolls were kept. The dead were buried in the ghetto.

Not having access to public offices, Jews were treated as foreigners. On the day of the Sabbath and during the Easter Triduum they were obliged to stay home. Yet, whoever offended or harmed a Jew was punished (Statute, 1554).

Life in the Jewish ghetto ended in the second half of the XVIII century with the unification of Italy. The Capture of Rome in 1870 marked the end of the temporal power of the Church and the definitive abolition of ghettos.`,
  },
//END SACROFANO BLOCK


//SUTRI
  {
    x: 29.2, y: 41.2,
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

//TREIA Valley
  {
    x: 72.8, y: 59.5,
    icon: "Treia.svg",
    image: "Treia.jpg",
    title: "Treia valley",
    text: `The Treia Valley is a hiking paradise at the doorstep of Mazzano Romano, to which many people from Rome and elsewhere flock on the weekends. Bushwalking in the Regional Park of Valle del Treia means walking through millennia of human history, where nature and ancient civilizations are seamlessly intertwined. Long before the Romans dominant power took hold, this valley was the heartland of the Faliscan people, a distinct Pre-Roman civilization with their own language and culture, who built their brilliant, fortified capital at Narce—an ancient town spread across the ridges of Monte Li Santi, Narce, and Monte Greco right outside Mazzano. As you hike through the valley's deep gorges, you will stumble upon dramatic Bronze Age caves carved directly into the soft tufa cliffs, which served as early dwellings and later as intricate Faliscan necropolises. Near the base of Narce, the remains of an ancient Faliscan temple dedicated to a water deity remind travelers of the valley's sacred past.
🚶 What You Will See and Experience on the Trails
Setting out on foot from Mazzano Romano offers a sensory journey through mist-shrouded canyons, rushing rivers, and medieval ruins. The trails are alive with the sound of the Treia River, the scent of damp moss, and the shade of towering ferns.`,

image2: "Calcata1.jpg",

text2: `•	The Trek to Calcata: The most iconic walk from Mazzano follows the river trail to Calcata Vecchia, a surreal medieval village perched precariously atop a sheer tufa cliff. Approaching it on foot from the valley floor allows you to watch the town gradually materialize out of the canopy like a fairytale fortress.`,

image3: "Monte gelato-sketch.jpg",

text3: `•	The Route to Monte Gelato: Heading in the opposite direction brings you to the magical waterfalls of Monte Gelato. Here, the Treia River fractures into a series of cascading pools framed by an ancient, stone-built watermill, making it a perfect, tranquil rest stop.

•	The Path to Nepi: For a longer, more ambitious trek, you can push northward toward Nepi, following old pastoral tracks to a town famous for its massive Borgia fortress and ancient aqueducts.

•	The Via Francigena Connection: Walking these paths also connects you to a grander spiritual tradition; the valley intersects closely with variants of the Via Francigena, the epic medieval pilgrimage route stretching all the way from Canterbury to the Vatican. As you traverse the sun-dappled gorges, you are treading the exact same volcanic stone walked by centuries of weary pilgrims seeking their final descent into Rome.`,
    link: "https://www.alltrails.com/parks/italy/lazio/parco-regionale-valle-del-treja",
    linkText: "Treia valley map"
  },
//END TREIA VALLEY BLOCK

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
  },
//END TREVIGNANO BLOCK

//TREVIGNANO
  {
    x: 10.0, y: 63.5,
    icon: "Truffle.svg",
    image: "Truffle.jpg",
    title: "Truffle hHut",
    text: `XXX`,
    link: "https://en.wikipedia.org/wiki/Mazzano_Romano",
    linkText: "Parking suggestion"
  },
//END TRUFFLE HUNT BLOCK

//VITERBO
  {
    x: 3.2, y: 26.6,
    icon: "Viterbo.svg",
    image: "Viterbo.jpg",
    title: "Viterbo",
    text: `A mini-Rome, walled city with restaurants and delicatessens, fashion shops, and a great museum.

50 minutes drive

Viterbo is a historic city in central Italy’s Lazio region, famed as the "City of the Popes" for serving as a 13th-century residence for the Roman Curia. Located north of Rome in the ancient Tuscia area, it features one of Europe's best-preserved medieval quarters—particularly the San Pellegrino district with its distinct stone "profferli" outdoor staircases—alongside the majestic Palazzo dei Papi and natural thermal springs

Visit the National Etruscan Museum Rocca Albornoz (Museo Nazionale Etrusco di Rocca Albornoz), where the centerpiece is a rare, highly prestigious 6th-century BC Etruscan parade chariot (known as a biga). Discovered in 1967 inside the "Tomb of the Chariot" in nearby Ischia.`,
  }
//END VITERBO BLOCK

];
