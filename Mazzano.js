// =================================================================
// LOCATIONS ON THE MAZZANO PICTURE (the second layer)
// Each block is one icon + popup. Positions are % of the MAZZANO picture.
// Rules: every block ends  },  (comma) - the last one may omit it.
//        text goes in `backticks`;  other values in "quotes".
// =================================================================
const mazzanoLocations = [

//BAR FALCO
  {
    x: 10.2, y: 85.2,
    icon: "Restaurant icon.svg",
    image: "Bar falco.jpg",
    title: "Bar Falco",
    text: `Bar del Falco 
also known as Carla's bar, open from 7am to 9pm, 6 days a week, closed on Thursdays. Carla, the owner, speaks good English and can help with almost anything. Serves terrific meals of local cuisine for both lunch and dinner, better to notify Carla in advance for meals. Cash preferred.`,
    image2: "Bar falco back-sketch.jpg",
    text2: `WhatsApp +39 380 186 2984. www.caffedelfalco.it.  Introduce yourself to Carla immediately upon arrival and make sure it is your local.`,
  },
 //END BAR FALCO

//BUS
  {
    x: 38, y: 15.2,
    icon: "Bus.svg",
    title: "Cotral Busses",
    text: `This is where busses to Saxa Rubra and other places stop. Check the site below for more information - the busses are rare.

Tickets can be bought from Bar Novella.`,
link: "https://cotralspa.it/ricerca-orari/",
Linktext: "Cotral bus timetable",
  },
//END Bus block BLOCK

//BAR NOVELLA
  {
    x: 49, y: 19.7,
    icon: "Coffee icon.svg",
    image: "Bar novella-sketch.jpg",
    title: " Bar Novella",
    text: `Bar Novella
also known as the three sisters, bar at the top of the hill. Amazing at breakfast time. It makes excellent aperitifs. Payment is made at the checkout. Traditional gnocchi on Thursday for lunch. Closed on Mondays.`,
  },
 //END BAR Novella

//OSTERIA FALISCA
  {
    x: 83.9, y: 7.9,
    icon: "Restaurant icon.svg",
    image: "Osteria falisca 1-sketch.jpg",
    title: "Osteria Falisca",
    text: `Osteria Falisca
An extensive menu of amazing seafood, meat, vegetarian and gluten-free gourmet dishes with very low prices.  Also does terrific pizzas.   Open for dinner, Wednesday to Sunday, from 8pm. No walk-in, you need to book by sending a message to Chiara via Whatsapp on +39 333 585 8528.`,
image2:"Osteria falisca 2-sketch.jpg",
 },
 //END OSTERIA FALISCA

//DOMUS BIRRAE PUB
  {
    x: 53.7, y: 45.2,
    icon: "Restaurant icon.svg",
    image: "Domus birrae pub-sketch.jpg",
    title: " Domus Birrae",
    text: `Domus Birrae Pub style restaurant with great background music, and occasional live music on Saturdays.  Pastas, second courses and hamburgers. Try the tagliere or Cacio e pepe.  Three beers on tap. Open from Tuesday to Sunday after 8 pm only. Sometimes it opens only late. Contact +39 2372 5578.`,
},
 //END DOMUS BIRRAE PUB

//SUPERMARKET
  {
    x: 88.9, y: 30.7,
    icon: "Supermarket icon.svg",
    title: "Supermarket",
    text: `Carrefour supermkarket
Small but good (except fruit – and no instant coffee).  It has several delicatessen counters. open from Monday to Saturday, 8:30 to 13:30 and from 16:30 to 20:30, Sunday 9:00 to 13:00. There is a fish shop across the street and up the hill from the supermarket.`,
},
 //END SUPERMARKET

//PEPES
  {
    x: 11.3, y: 90.0,
    icon: "Delicattesen icon.svg",
    image: "Mini-market.jpg",
    title: " Mini market Sbordoni",
    text: `Mini market, an alimentary also known as Pepe's, open from 8am to noon and 5pm to 7pm Monday to Saturday, offers basic groceries, and has a traditional cheese, bread and pizza bread and salumi counter, where you can practice your Italian or sign language.  Get there early for the terrific rosette rolls.    A must visit for making your own lunches for home or picnics.`,
},
 //END PEPES

//FRUTERIA
  {
    x: 51.4, y: 26.6,
    icon: "Fruiteria icon.svg",
    image: "Fruiteria.jpg",
    title: "Melyfrutta Fruit and Veggie shop",
    text: `A wide range of fresh fruit and veggies, and best of all, provides wine on tap. Open 7:00 to 13:00 and 16:00 to 19:30. 

Bring an empty milk bottle of similar, and have it filled up.  Choice of xxxx, at xxx price.
`,
},
 //END FRUTERIA

//FARMACIA
  {
    x: 6.9, y: 20.0,
    icon: "Farmacia icon.svg",
    image: "Farmacia-sketch.jpg",
    title: "Pharmacy",
    text: `The pharmacy is open from Monday to Saturday from 9:00 to 13:00 and from 16:00 to 19:30. There is a noticeboard indicating where to find a pharmacy open on Sundays and public holidays. The gel for mosquito bites is Fenistil.`,
},
 //END FARMACIA

//EDICOLA
  {
    x: 29.1, y: 29.4,
    icon: "Edicola icon.svg",
    image: "Edicola-sketch.jpg",
    title: "Stationary store with printing",
    text: `Need anything printed?
DAYS???? Open 7.30am – 1.00pm and 4.30pm – 7.00pm, where it is possible to print the documents. You can send them as an email to Irene at albanuova@hotmail.com..`,
},
 //END EDICOLA


//ATM
  {
    x: 38, y: 10.6,
    icon: "ATM icon.svg",
    title: "ATM",
text: ` The only ATM is at the post office, with a maximum withdrawal of €250, and can run out. You can select English to use the ATM.`,
},
 //END EDICOLA

//CAR CHARGING
  {
    x: 8.9, y: 30,
    icon: "Car charging icon.svg",
    title: "Car Charging",
text: ` ENEL Way car fast charging point. Download the app, you can book the charging points in advance, although in Mazzano that is hardly necessary. `,
},
 //END CAR CHARGING

//CHEESE SHOP
  {
    x: 50.4, y: 63.7,
    icon: "Cheese icon.svg",
    image: "Cheese shop1-sketch.jpg",
    title: "Caseficio Ingemi Cheese shop",
text: `Artisanal sheep and goat cheeses exclusively made on the premises.
  Open 9:00 to 13:00 and 16:30 t0 19:30 Tuesday to Saturday, except close Thursday afternoons.  Contact 3317472143`,

image2:"Cheese shop2-sketch.jpg",
},
 //END CHEESE SHOP

//MAZZANO MUSEUM
  {
    x: 53.2, y: 31.6,
    icon: "Museum icon.svg",
    image: "Mazzano museum-sketch.jpg",
    title: "Mazzano Museum",
text: `Small, but very interesting and expanding. It can be found on the left northern side of Piazza Giovanni XXIII (Pope John XXIII, from 1958 to 1968), the main square of modern Mazzano. 
The museum is labelled only be a small bljue sign saying "MAVNA".
The main museum in Mazzano Romano is the MAVNA (Museo Archeologico Virtuale di Narce), a virtual and physical archaeological museum dedicated to the ancient Faliscan city of Narce and the Treja Valley. It tells the history of the area since the Faliscan era. The museum has multi-media displays and has a video room about where which museums the antiquities of the area have wound up in.  Usually open Friday, Saturday and Sunday mornings, entry € 3 (cash).`,
link: "https://www.mavna.it/",
},
 //END MAZZANO MUSEUM

//PARKING
  {
    x: 48.6, y: 71.4,
    icon: "Parking icon.svg",
    title: "Parking",
text: ` Parking – to get to the car park, come down the hill from the roundabout – the speed limit is 10 kmh.  At the bottom of the hill, there is a single lane entering Piazza Umberto 1.  Slow to less than a walking pace and be prepared to reverse if there is a car coming the other way. In Piazza Umberto 1, turn tight left, and you will find the car park.`,
image2: "Umberto1.jpg",
text2: `Umberto 1 was the second King of Italy from 1878 to 1900, and son of Victor Emmanuell II.

He had a great moustache!`,
},
 //END PARKING

//SAN NICOLA DI BARI
  {
    x: 62.3, y: 36.7,
    icon: "Church icon.svg",
    image: "Mazzano church-sketch.jpg",
    title: "San Nicola di Bari",
text: ` Built in the 1950s, after the original church in the Borgo of Mazzano Romano was condemned as the result of a lightning strike in 1940.  The church (in Piazza Giovanni XXIII) features an amazing painting of the local priest repelling German soldiers during the world war II.  Masses are usually Sundays at 8:00, 10:00 and 11:30, but can vary.`,
image2: "Mazzano church painting.jpg",
text2: `The painting inside the Chiesa di San Nicola di Bari commemorates the "Miracle of Mazzano Romano," a real event from World War II where the local parish priest courageously confronted invading German soldiers at the entrance of the village. Invoking the protection of the town's patron saint, Saint Nicholas, the priest stood his ground and successfully turned back the heavily armed Nazi troops, sparing the town from a planned wartime raid or massacre. The commemorative artwork was placed in the church by the grateful community to honor the priest's bravery and thank Saint Nicholas for the divine intercession that saved their lives.`,
},
 //END SAN NICOLA DI BARI

//CHIESA DI SAN SEBASTIANO
  {
    x: 12.7, y: 78.8,
    icon: "Church icon.svg",
    image: "San sebastiano-sketch.jpg",
    title: "San Sebastiano",
    text: `Technically a church, but the size of a chapel dating back to 1465.
The frescoes date from the period between the late 15th and early 16th centuries.
The frescoes on the left depict the figure of the Madonna flanked by Saint Anne and the Christ Child while the frescoes in the apse feature the figure of the Savior at the top and Saint Sebastian below, depicted in the traditional manner of his martyrdom, flanked by Saint Roch and Saint Gregory.`,
},
 //END CHIESA DI SAN SEBASTIANO

//ANTI SA
  {
    x: 45.9, y: 92.7,
    icon: "Antisa.svg",
    image: "Antisa.jpg",
    title: "Antisà",
    text: `This parking area is in the remains of what was once the 16th century Church of San Nicola all'Antisà: There seems to have been an earlier version of the church mentioned in a papal bull issued by Innocent IV in 1244, this ancient church was located near the medieval castle of Mazzano. It was originally part of a fortified settlement and for centuries represented an important religious and community center for the village.

The church was demolished in 1940 as the result of damage from a lightning strike, replaced by the new church in Piazza Giovanni XXIII.
`,
},
 //END ANTI SA

//Mazzano Borgo
  {
    x: 46.9, y: 85.1,
    icon: "Borgo.svg",
    image: "Mazzano sketch.jpg",
    title: "Il Borgo",
    
text:`This is the Borgo, or old town of Mazzano Romano. It was originally inhabited by the Faliscans, who were an ancient Italic people who lived in the area between the River Tiber and Monte Cimino, north of Rome. Their language was a close cousin of Latin, but their way of life was much like that of their Etruscan neighbours. From their capital at Falerii (today’s Civita Castellana), they resisted Rome for centuries, until they were finally defeated in 241 BC.

Mazzano first appears in written records in 945 AD, when Prince Alberic of Rome gave it to the monastery of Saints Andrew and Gregory. By then, people had moved up onto the steep tufa cliffs above the Treja valley to escape raiders, and the village grew into a walled hilltop fortress with a single entrance. Later it passed to the powerful Anguillara counts.`,

image2:"Tower sketch.jpg",

text2: `At the top of the old town, near the summit called Montarello, stands a medieval tower. In 1455 Pope Callixtus III ordered a fortress built to defend Mazzano. The tower dates from this period and sits in the best spot to protect the town, so it may be the result of that order.`,

image3:"Mazzano alley.jpg",

text3: `Stories also tell of a penal settlement called “Messano.” Some writers place it in Roman times. Local historians link it to the medieval papal era, when the town’s deep cellars may have held prisoners. Neither version is firmly documented.

In 1658 the Del Drago princes inherited Mazzano and ran it as a huge private estate. Their hold lasted almost three centuries. It ended only with Italy’s land reform of 1950, which took the land and gave it to the local farmers who had worked it for generations..`,
},
 //END Mazzano Borgo

//WALKING TO SANTA MARIA
  {
    x: 89.4, y: 11.4,
    icon: "Hiking right icon.svg",
    image: "Santa maria.jpg",
    title: "Santa Maria di Castelvecchio walk",
text: `The walk to Santa Maria di Castelvecchio is a scenic hike through the dense, shaded gorges of the Parco Regionale Valle del Treja leading to a spectacular view of Calcata.

To get to the start, take the road for Calcata from the Mazzano Romano roundabout, and turn left at the sign, about 950 metres down the road.  Follow the signs, and park a further 900 metres or so up that side road.

Following paths like Sentiero 009 or Sentiero 019, the trail dips down into the lush river valley, crosses the Treja River via a suspension bridge, and ascends a steep, volcanic tuff cliffside. The route can be tackled as a short, direct climb from Calcata Vecchia or as a longer, roughly 7-kilometer loop starting from Mazzano Romano. 

Walking along this path offers striking, elevated views of Calcata perched on its rock spur across the canyon, though hikers should wear sturdy boots as the forest floor and volcanic rock sections can become quite muddy and slippery after rainfall.

It is strongly recommended to have hiking sticks, mosquito spray and mosquito gel.`,

},
 //END WALKNG TO SANTA MARIA


//WALKING TOWARDS MONTE GELATO
  {
    x: 24.7, y: 90.9,
    icon: "Hiking left icon.svg",
    image: "Monte gelato-sketch.jpg",
    title: "Walking towards Monte Gelato",
text: `Taking this path down the hill, you can walk to the famous waterfalls of Monte Gelato .
Because of its abundance of water, Monte Gelato has been frequented by man since prehistoric times.
This area preserves traces of the many settlements that have taken place here over time: from the remains of a Roman villa of the first century BC, to the agricultural settlement of the eighth century AD, to the water mill built in 1800s which was maintained active until the 1960s.
The “Mola,” or water mill, was built by the Del Drago family, who in those years owned the same-name estate.`,
image2: "Mill sketch.jpg",
text2: `It is a complex of buildings that makes use of a pre-existing medieval constructions: a structure situated between the two branches of the Treja river, in correspondence with the famous waterfalls, perhaps already used in ancient times as a mill, and a tower located nearby, along the present-day road.
The mill, which remained in use until after the war and was then abandoned, has been recovered only in very recent times, and houses one of the Park’s information points that with models and panels illustrates several aspects of the structure of the surrounding area.`,
image3: "Terence hill sketch.jpg",
text3: `Monte Gelato is also the site of many movies, famously depicted in the Spaghetti Western staring Terence Hill.
`,
link: "https://www.parchilazio.it/valledeltreja",
},
 //END WALKING TOWARDS MONTE GELATO

//WALKING TOWARDS CALCATA
  {
    x: 51.9, y: 75.0,
    icon: "Hiking right icon.svg",
    image: "Calcata1.jpg",
    title: "Walking towards Calcata",
text: `Ideal for a day outing, you can walk to Calcata (approximate  1/2 hours) through the lush Treja valley, alongside the Treja river, which is a tributory to the Tiber in Rome.  In Calcata you can have lunch and walk back in the afternoon, or arrange for someone to pick you up there in a car.

Walking down Via del Fontana, near the carpark, you will first encounter The Mazzano Romano Washhouse (Il Lavatoio Comunale).  It was originally constructed in the late 19th century (c. 1880s–1890s) as part of a post-unification public health push to bring clean, organized water channels to rural Lazio villages.`,
image2:"Wash house sketch.jpg",
text2: `Built using sturdy local volcanic tufa stone, the structure underwent its most significant modern rebuilding, expansion, and roofing upgrade in the mid-1920s (c. 1925–1926) to cope with growing population demands and seasonal water shortages. It was still in use until thethe late 1970s, becoming obsolete due to the widespread adoption of domestic washing machines. It was saved from demolition and fully restored as a protected heritage site in the early 2010s.`,

image3:"Narce temple sketch.jpg",
text3: `On the 1 & 1/2 hour walk to Calcata, you will also encounter the remains of the temple remains of Narce, located at the Monte Li Santi-Le Rote sanctuary site, consist primarily of the stone foundations and wall footprints of a sacred Faliscan complex built into terraces along the Treja River. Dating from the 6th to the 2nd century BC, the visible ruins include the structural bases of two main rooms, sacrificial pits, and retaining walls, all of which are now preserved beneath modern protective roofs. While the original mudbrick walls and decorative terracotta roofs have vanished, these remaining stone footprints outline a major riverfront pilgrimage center dedicated to fertility and maternal deities.
As you approach Calcata, you will be walking through the site of the old Faliscan town of Narce, of which many excavated antiquities can be seen at the Mazzano Museum.`,
link: "https://www.parchilazio.it/valledeltreja",
},
 //END WALKING TOWARDS CALCATA

//CASA ALBIN - IL TERRAZZO
  {
    x: 61.9, y: 90.8,
    icon: "Accommodation.svg",
    image: "Terrace.jpg",
    title: "Il Patio – Casa Diana and Il Terrazzo – Casa Albin",
text: `Il Patio – Casa Diana and Il Terrazzo – Casa Albin comprise two one-bedroom apartments in the medieval Borgo of Mazzano Romano. Built in the early 1500s, this medieval building has thick stone walls that echo centuries of history. The two self-contained apartments have their own entrances, with an interconnecting balcony so they can be rented separately or together. The apartments have been newly renovated and immaculately decorated in a classic Italian style, while including modern comforts such as double-glazed windows, digital access and thermostatically controlled central heating.`,
image2: "Living.jpg",
text2: `Each apartment has an air-conditioned lounge and dining area suitable for up to 4 people, a modern bathroom with heated towel racks, and a small fully-equipped kitchen with a refrigerator and freezer, cooktop and oven, dishwasher, microwave, kettle and toaster. There is also tea, coffee and a selection of basic cooking ingredients.`,
image3: "Cooking.jpg",

text3: `Il Patio – Casa Diana has a cosy bedroom in the form of an archway over the street. This suite is accessed via a small courtyard.

Both apartments TV with Netflix etc, Wifi, washer/dryer, heated towel rack, hairdryer, bedside USB charging ports and both soft and firm pillows.`,
image4: "Bedroom.jpg",

text4: `Il Terrazzo – Casa Albin overlooks the Treja national park, with waterfalls visible and audible from the windows and terrace. Il Terrazzo has an additional mezzanine area with a sofa bed, suitable for an additional adult or older children.
Il Terrazzo Casa Albin also has a spectacular terrace with views of both the adjoining medieval tower and the national park below.`,
image5: "Bathroom.jpg",

text5:`Public parking is available close to the entrance to the medieval village, which is not accessible to vehicles.
 Note that animals and smoking cigarettes or vapes is not permitted in either apartment, including on the terrace or patio area.
Additional accommodation can be arranged at 2 adjoining similar accommodation facilities for between 2 and 8 people, as well as other locations in the Borgo (old part) of Mazzano.
Make a request for accommodation ????.`,
link: "https://www.airbnb.it/rooms/1599326244767097184",
},
 //END CASA ALBIN - IL TERRAZZO BLOCK


//COOKING SCHOOL BLOCK
  {
    x: 67.4, y: 86.2,
    icon: "Fabiolous cooking day icon.svg",
    image: "Fabiolous.jpg",
    title: "Fabiolous cooking school",
text: `Immediately below Casa Albin - Il Terrazzo, at Il Drago, you can experience a piece of history shopping with our chef at a typical market, handpicking fresh ingredients, meeting local merchants, and cooking together some of the recipes that mark the most authentic culinary traditions. After your hands-on lesson, you get to sip wine, enjoy our view, and indulge in your complete meal in the romantic living room or on the terrace.
`,
link: "https://fabiolouscookingday.com/cook-in-a-medieval-town/",
text2: `As the standard booking arrangement involves a pickup in Rome  SOMETHING MORE HERE.`,
},
 //END COOKING SCHOOL BLOCK


];
