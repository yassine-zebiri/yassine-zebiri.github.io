// src/app/classes/DB.ts
var DB = class _DB {
  constructor(title) {
    this.title = title;
  }
  static {
    this.create = [];
  }
  display() {
    console.log(this.title);
  }
  create(s) {
    console.log("created : " + s);
    _DB.create.push(s);
  }
};

// src/app/classes/index.ts
var App = class _App {
  static {
    this.nbr = 5;
  }
  static {
    this.Star = [];
  }
  constructor() {
    this.Number = 15;
  }
  static DrawStars(count) {
    for (let i = 0; i < count; i++) {
      _App.Star.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 20 + 10
      });
    }
    _App.Star = [..._App.Star];
  }
  static Draw() {
    _App.Div = document.getElementById("stars-background");
    _App.Star.forEach((e) => {
      const div = document.createElement("div");
      div.classList.add("star");
      div.style.left = e.x + "%";
      div.style.top = e.y + "%";
      div.style.width = e.size + "px";
      div.style.height = e.size + "px";
      div.style.animationDuration = e.duration + "s";
      _App.Div?.appendChild(div);
    });
  }
};
var classes_default = App;
var User = class _User extends DB {
  constructor(title) {
    super(title);
    this.title = title;
    _User.created += 1;
    _User.Arr.push(title);
  }
  static {
    this.created = 0;
  }
  static {
    this.Arr = [];
  }
  static Say(s) {
    console.log(s);
  }
};

// src/index.ts
document.addEventListener("DOMContentLoaded", () => {
  classes_default.DrawStars(500);
  classes_default.Draw();
});
User.Say("hello world form User class");
