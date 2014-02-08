//= require_tree .


var emojis = [
  "smile", "iphone", "girl", "smiley", "heart", "kiss", "copyright", "coffee",
  "a", "ab", "airplane", "alien", "ambulance", "angel", "anger", "angry",
  "arrow_forward", "arrow_left", "arrow_lower_left", "arrow_lower_right",
  "arrow_right", "arrow_up", "arrow_upper_left", "arrow_upper_right",
  "art", "astonished", "atm", "b", "baby", "baby_chick", "baby_symbol",
  "balloon", "bamboo", "bank", "barber", "baseball", "basketball", "bath",
  "bear", "beer", "beers", "beginner", "bell", "bento", "bike", "bikini",
  "bird", "birthday", "black_square", "blue_car", "blue_heart", "blush",
  "boar", "boat", "bomb", "book", "boot", "bouquet", "bow", "bowtie",
  "boy", "bread", "briefcase", "broken_heart", "bug", "bulb",
  "person_with_blond_hair", "phone", "pig", "pill", "pisces", "plus1",
  "point_down", "point_left", "point_right", "point_up", "point_up_2",
  "police_car", "poop", "post_office", "postbox", "pray", "princess",
  "punch", "purple_heart", "question", "rabbit", "racehorse", "radio",
  "up", "us", "v", "vhs", "vibration_mode", "virgo", "vs", "walking",
  "warning", "watermelon", "wave", "wc", "wedding", "whale", "wheelchair",
  "white_square", "wind_chime", "wink", "wink2", "wolf", "woman",
  "womans_hat", "womens", "x", "yellow_heart", "zap", "zzz", "+1",
  "-1"
]

var names  = ["Jacob", "Isabella", "Ethan", "Emma", "Michael", "Olivia", "Alexander", "Sophia", "William", "Ava", "Joshua", "Emily", "Daniel", "Madison", "Jayden", "Abigail", "Noah", "Chloe", "Dominic", "Martin", "Tom"];

var emojis_list = $.map(emojis, function(value, i) {
  return {'id':i, 'name':value};
});

var hash_tags = [
  { id: "1", name: "socializer"},
  { id: "2", name: "social"},
  { id: "3", name: "tag"},
  { id: "4", name: "blog"},
  { id: "5", name: "code"},
  { id: "6", name: "caturday"},
];

//http://a248.e.akamai.net/assets.github.com/images/icons/emoji/8.png
$("#note_content")
  .atwho({
    at: "@",
    data: names,
    tpl: "<li data-value='@${name}'>${name} <small>${email}</small></li>",
    show_the_at: true
  })
  .atwho({
    at: "#",
    tpl: '<li data-value="#${name}">${name} <small>${content}</small></li>',
    data: hash_tags
  })
  .atwho({
    at: ":",
    tpl: "<li data-value=':${name}:'><img src='http://a248.e.akamai.net/assets.github.com/images/icons/emoji/${name}.png' height='20' width='20'/> ${name} </li>",
    data: emojis_list
  });
