// const printer = new PrintMachine("30px", "red", "Verdana");
// printer.print("Printed from PrintMachine class");

import NewsFeed from "./NewsFeed.js";

const feed = new NewsFeed();

feed.addNews("New JavaScript Release", "2026-05-20", ["js", "update"]);
feed.addNews("SpaceX Launch Success", "2026-05-22", ["space", "tech"]);
feed.addNews("AI Breakthrough", "2026-05-21", ["ai", "innovation"]);

console.log("Total news:", feed.count);

feed.sortByDate();
console.log("Sorted:", feed.news);

console.log("Search by tag 'tech':", feed.searchByTag("tech"));

feed.removeNews("AI Breakthrough");
console.log("After removal:", feed.news);