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
      image: "",
      text: `Mazzano Romano and its surrounding area within a 50 km radius (covering parts of northern Rome and southern Viterbo provinces) boast a rich calendar of historical reenactments, contrade neighborhood rivalries, and traditional sagras (food festivals). The local highlight is Mazzano Romano’s own Giostra delle Contrade, which takes place every September and features four distinct districts: Barbacane, Borgo de Fora, Li Santi, and Montarello.
Here is a month-by-month guide to the major traditional celebrations, festas, and sagras in this region.

January & February

• Festa di Sant'Antonio Abate (Various Towns): Celebrated in mid-January across towns like Campagnano di Roma, Formello, and Nepi. It features traditional bonfires (focaracci), the blessing of animals, and distributions of blessed bread.
• Carnevale Tiberino & Carnevale di Ronciglione: Happening throughout February. Ronciglione hosts one of the most famous historical carnivals in the region, featuring massive float parades and historical uniforms.

March & April

• Festa di San Giuseppe & Sagra della Frittella (Sutri): Held in March, featuring street food stalls specializing in sweet rice frittelle to celebrate Saint Joseph.
• Sagra del Carciofo Romanesco (Ladispoli): A massive food festival held in mid-April dedicated entirely to the Romanesco artichoke.

May

• Festa del Baccanale (Campagnano di Roma): A historic festival centered around the Sagra del Carciofo (artichoke festival), featuring local wine tasting, traditional games, and culinary stands in the historic center.
• Festa di San Pancrazio (Calcata): Local patron saint celebrations in the neighboring medieval cliffside village of Calcata, filled with live music and open-air food stalls.

June

• Palio dei Borgia (Nepi): A major medieval festival and Giostra delle Contrade where Nepi’s historical districts compete in archery and equestrian games to reenact the town's history under Lucrezia Borgia.
• Corteo Storico e Infiorata (Bracciano & Bolsena): Stunning flower petal carpets are laid out in the historic streets for the Corpus Domini celebrations, accompanied by historical parades.

July & August

• Sagra della Lumaca (Graffignano): A traditional summer food festival dedicated to local snail recipes.
• Festa del Mare e Sagra delle Telline (Ostia / Fiumicino coast): Coastal food festivals specializing in fresh local clams and seafood.
• Festa di Sant'Egidio (Sutri): Late August celebration featuring historical parades, fireworks, and open-air taverns operated by the town's historical quarters.

September

• Giostra delle Contrade (Mazzano Romano): Held during the second weekend of September. The town’s four districts (Barbacane, Borgo de Fora, Li Santi, and Montarello) dress in 16th-century costume to compete in traditional games and an archery tournament (Palio degli Arcieri).
• Festa Patronale di San Nicola & Bruschetta and Sausage Fair (Mazzano Romano): Early September local festival combining religious processions with a popular culinary fair.
• Festa di Settembre (Anguillara Sabazia): A lakefront festival on Lake Bracciano celebrating local history with food stalls and artisan markets.

October

• Sagra della Pappardella al Cinghiale (Sacrofano): A widely popular food festival highlighting wild boar ragù over fresh egg pasta.
• Sagra della Castagna (Manziana): Autumn food festival celebrating roasted chestnuts cooked over open braziers alongside rustic peasant specialties.
• Sagra della Salsiccia (Morlupo): A historic annual festival featuring locally produced sausages grilled in the main squares.
• Cioccofest e Festa della Castagna (Caprarola): Hosted near the stunning Palazzo Farnese, pairing chestnut celebrations with artisanal chocolate tastings.

November & December

• Festa dell'Olio e del Vino Novello (Vignanello / Blera): Celebrating the first pressings of extra virgin olive oil and new wines, where ancient tufo rock cellars open to the public for tastings.
• Presepe Vivente (Calcata / Sutri): Highly atmospheric live nativity scenes set up inside ancient Roman caves and medieval alleys throughout December.

VERSION 2

January

• Botteghe, Arti e Mestieri di un Tempo (Mazzano Romano): A historical reenactment of ancient trades and a living nativity scene held in the medieval village center on January 6th.

July

• Sagra del Montarello (Mazzano Romano): Hosted by the Contrada Montarello in early July. It features traditional grilled specialties, local desserts, and community dancing.
• Borgo de Fora Festival (Mazzano Romano): Organized by the Contrada Borgo de Fora in late July. A lively summer evening featuring food stalls with traditional pasta dishes, grilled meats, and a starlight tombola.

August

• Amleto in Salsa Piccante (Montenero Sabino): Located just under 50 km away, this village hosts an open-air theatrical festival and local food celebration in late August.

September

• La Giostra delle Contrade (Mazzano Romano): The town’s premier historical festival takes place in mid-September. Celebrating the town’s 16th-century history, the four historic contrade (Borgo de Fora, Montarello, Barbacane, and Li Santi) compete in an archery tournament accompanied by historical parades, street musicians, and open-air tavern dinners.
• Festa Patronale di San Nicola (Mazzano Romano): The official patron saint festival celebrated annually in early September with religious traditions and local festivities.
• Festa di Settembre (Anguillara Sabazia): A lakeside festival held about 18 km away featuring local food stands, lakefront markets, and cultural performances.
• Sagra del Fungo Porcino (Oriolo Romano): Located 15 km away, this massive food festival celebrates the porcini mushroom harvest throughout mid-September in Piazza Umberto I.

October

• Sagra della Salsiccia (Morlupo): Located 10 km away, this historic festival in late October is dedicated to local pork sausages grilled over open flames.
• Sagra della Pappardella al Cinghiale (Sacrofano): Held roughly 15 km away in mid-October, highlighting wild boar ragù served over fresh house-made pasta.
• Sagra della Polenta (Castelnuovo di Porto): Located 15 km away, serving traditional slow-cooked cornmeal polenta topped with pork ribs and sausages.
• Sagra del Fungo (Bracciano): A festival celebrating wild autumn mushrooms held about 20 km away.
• Vendemmiale / Sagra dell'Uva (Capena): Located 20 km away, this autumn harvest festival celebrates local wine-making traditions with parades and free tastings.

December

• Sagra della Polenta (Riano): Located 18 km away, this winter food festival serves hot polenta dishes in early December.
• Botteghe, Arti e Mestieri di un Tempo (Mazzano Romano): The December edition of the historical living nativity and craft demonstration, taking place on December 26th.

`,
      link: "",
      linkText: ""
    },
//END CELEBRATION BLOCK

//CULTURE
    {
      label: "Culture",
      title: "Culture",
      image: "",
      text: `Replace this with your text about culture around Mazzano Romano.`,
      link: "",
      linkText: ""
    },
//END CULTURE BLOCK

//CUISINE
    {
      label: "Cuisine",
      title: "Cuisine",
      image: "",
      text: `Replace this with your text about cuisine around Mazzano Romano.`,
      link: "",
      linkText: ""
    }
//END CUISINE BLOCK

  ]
};
