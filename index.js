import { HerbalTea, MagicPill, Fervex, Drug } from "./drugs";
import { Pharmacy } from "./pharmacy";
import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new HerbalTea("Herbal Tea", 10, 5),
  new Fervex("Fervex", 5, 40),
  new MagicPill("Magic Pill", 15, 40)
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log.toString(), err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
