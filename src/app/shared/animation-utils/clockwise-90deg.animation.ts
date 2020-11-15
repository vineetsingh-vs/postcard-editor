import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

export const states = new Map([
    [0, "default"],
    [1, "first"],
    [2, "second"],
    [3, "third"],
    [4, "fourth"]
  ]);

export const rotationalTrigger = [
    trigger("rotatedState", [
      state("default", style({ transform: "rotate(0)" })),
      state("first", style({ transform: "rotate(90deg)" })),
      state("second", style({ transform: "rotate(180deg)" })),
      state("third", style({ transform: "rotate(270deg)" })),
      state("fourth", style({ transform: "rotate(360deg)" })),
      transition("default => first", animate("400ms ease-out")),
      transition("first => second", animate("400ms ease-in")),
      transition("second => third", animate("400ms ease-in")),
      transition("third => fourth", animate("400ms ease-in")),
      transition("fourth => first", animate("400ms ease-in"))
    ])
  ];
