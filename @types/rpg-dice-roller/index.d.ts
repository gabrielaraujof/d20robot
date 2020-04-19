/// <reference types="node" />

declare module 'rpg-dice-roller/lib/umd/bundle' {

  export enum ExportFormats {
    JSON = 0,
    BASE_64 = 1,
    OBJECT = 2,
  }

  export class RollResult {
    constructor(
      value: number | { value: Number; initialValue: number },
      modifiers?: string[],
      useInTotal?: boolean
    );

    calculationValue: number;

    initialValue: number;

    modifierFlags: string;

    modifiers: string[];

    useInTotal: boolean;

    value: number;

    toJSON(): Object;

    toString(): string;
  }

  export class RollResults {
    constructor(rolls?: RollResult[]);

    length: number;

    rolls: RollResult[];

    value: number;

    toJSON(): Object;

    toString(): string;
  }

  export class DiceRoll {
    constructor(
      notation: string | { notation: string; rolls: RollResults | RollResult[] }
    );

    notation: string;

    output: string;

    rolls: RollResults[];

    total: number;

    export(format: ExportFormats): string | null;

    hasRolls(): boolean;

    roll(): any[];

    toJSON(): Object;

    toString(): string;

    static import(
      data:
        | string
        | DiceRoll
        | { notation: string; rolls: RollResults | RollResult[] }
    ): DiceRoll;
  }

  export class DiceRoller {
    constructor(data?: { log: DiceRoll });

    log: DiceRoll[];

    output: string;

    total: number;

    clearLog(): void;

    import(data: { log: DiceRoll }): DiceRoll[];

    export(format: ExportFormats): string | null;

    roll(...notation: string[]): DiceRoll | DiceRoll[];

    toJSON(): Object;

    toString(): string;

    static import(data: { log: DiceRoll }): DiceRoll[];
  }
}
