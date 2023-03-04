import abcjs from "abcjs";
import "abcjs/abcjs-audio.css";

const exercises = [
  "X:1\nT:Exercício 1\nM:4/4\nL:4/4\nK:C\nC | D | E | F | G | A | B | c |",
  "X:2\nT:Exercício 2\nM:4/4\nL:2/4\nK:C\nC D | E  F | G  A | B  c |",
  "X:3\nT:Exercício 3\nM:4/4\nL:1/4\nK:C\nC D  E  F | G  A  B  c | c B A  G | F  E  D  C |",
  "X:4\nT:Exercício 4\nM:4/4\nL:1/8\nK:C\nC D  E  F  G  A  B  c | c B A  G  F  E  D  C |",
  "X:1\nT:Exercício 5\nM:4/4\nL:4/4\nK:C\nC | E | G |  B | c |",
  "X:1\nT:Exercício 6\nM:4/4\nL:4/4\nK:C\nD | F | A |  c | e |",
  "X:1\nT:Exercício 7\nM:4/4\nL:4/4\nK:C\nE | G | B |  d | f |",
];

const noteDictionary: Record<string, string> = {
  C: "Do",
  D: "Re",
  E: "Mi",
  F: "Fa",
  G: "Sol",
  A: "La",
  B: "Si",
  c: "Do",
  d: "Re",
  e: "Mi",
  f: "Fa",
  g: "Sol",
  a: "La",
  b: "Si",
};

const renderExercise = (exercise: string) => {
  const randomId = Math.random();
  const element = document.createElement("div");
  element.id = randomId.toString();

  document.body.appendChild(element);

  abcjs.renderAbc(randomId.toString(), exercise, {
    responsive: "resize",
    add_classes: true,
    clickListener: (abcElem) => {
      if (!abcElem.pitches) return;
      alert(noteDictionary[abcElem.pitches[0].name]);
    },
  });
};

exercises.forEach((exercise, index) => {
  renderExercise(exercise);
});

export {};
