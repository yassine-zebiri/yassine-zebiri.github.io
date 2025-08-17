import App, { User } from "./app/classes";


document.addEventListener("DOMContentLoaded",()=>{
    App.DrawStars(500);
    App.Draw();
})


User.Say('hello world form User class');