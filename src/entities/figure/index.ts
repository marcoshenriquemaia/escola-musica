import { FigureNames } from "../../@types/figureNames";

export interface FigureConstructor {
  name: FigureNames;
}
export class Figure {
  name: FigureNames;

  constructor({ name }: FigureConstructor) {
    this.name = name;
  }
}
