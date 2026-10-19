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
      text: `Replace this with your text about celebrations around Mazzano Romano.`,
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
