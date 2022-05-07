import { subtract } from "../helpers/subtract_helper";
import { multiply } from "../helpers/multiply_helper";
import { division } from "../helpers/division_helper";
import { sum } from "../helpers/sum_helper";
import { MatrizModel } from "../models/matriz";
import { switchLines } from "../helpers/switchlines_helper";
import { simplifyResults } from "../helpers/simplifyresults_helper";

interface Step {
  matrizBefore: MatrizModel;
  done: string;
  matrizAfter: MatrizModel;
}

let steps: Step[] = [] as Step[];

function makeSteps(matrizModel: MatrizModel, done: string, make: any) {
  let step: Step = {} as Step;

  step.matrizBefore = MatrizModel.clone(matrizModel);

  step.done = done;

  let matrizAfter = MatrizModel.clone(make());

  step.matrizAfter = matrizAfter

  steps.push(step);

  return matrizAfter;
}

function makingTheValueZeroChangingTheLineAndSaveStep(
  matrizModel: MatrizModel,
  line: number,
  location: number
) {
  let matrizModelAux = MatrizModel.clone(matrizModel);
  let aux = matrizModelAux.matriz[line][location];
  let isSubtractResultsInZero =
    subtract(
      matrizModelAux.matriz[line][location],
      multiply(matrizModelAux.matriz[location][location], aux)
    ) !== 0;

  for (let c = 0; matrizModelAux.getColumn() > c; c++) {
    if (isSubtractResultsInZero) {
      matrizModelAux.matriz[line][c] = sum(
        matrizModelAux.matriz[line][c],
        multiply(matrizModelAux.matriz[location][c], aux)
      );
    } else {
      matrizModelAux.matriz[line][c] = subtract(
        matrizModelAux.matriz[line][c],
        multiply(matrizModelAux.matriz[location][c], aux)
      );
    }
  }

  if (isSubtractResultsInZero) {
    return makeSteps(
      matrizModel,
      `L${line + 1} = L${line + 1} + L${location + 1} x ${aux}`,
      () => MatrizModel.clone(matrizModelAux)
    );
  } else {
    return makeSteps(
      matrizModel,
      `L${line + 1} = L${line + 1} - L${location + 1} x ${aux}`,
      () => MatrizModel.clone(matrizModelAux)
    );
  }
}

function transformOthersCoefficientsToZero(
  matrizModel: MatrizModel,
  location: number
) {
  let matrizModelAux = MatrizModel.clone(matrizModel);

  for (let i = 0; matrizModelAux.getRow() > i; i++) {
    if (i !== location && matrizModelAux.matriz[i][location] !== 0) {
      matrizModelAux = makingTheValueZeroChangingTheLineAndSaveStep(
        matrizModelAux,
        i,
        location
      );
    }
  }

  return matrizModelAux;
}

function divideAllLineForAValue(
  matrizModel: MatrizModel,
  line: number,
  value: number | string
) {
  for (let c = 0; matrizModel.matriz[0].length > c; c++) {
    matrizModel.matriz[line][c] = division(matrizModel.matriz[line][c], value);
  }

  return matrizModel;
}

function searchForAvalueInTheSameColumnEqualToOne(
  matrizModel: MatrizModel,
  location: number
): number {
  for (let c = location; matrizModel.matriz.length > c; c++) {
    if (matrizModel.matriz[c][location] === 1) {
      return c;
    }
  }

  return -1;
}

function switchLinesAndSaveStep(
  matrizModel: MatrizModel,
  from_line: number,
  to_line: number
) {
  return makeSteps(matrizModel, `L${from_line + 1} <=> L${to_line + 1}`, () =>
    switchLines(matrizModel, from_line, to_line)
  );
}

function divideAllLineForAValueAndSaveStep(
  matrizModel: MatrizModel,
  location: number
) {
  let divider = matrizModel.matriz[location][location];

  return makeSteps(
    matrizModel,
    `L${location + 1} = L${location + 1} / ${divider}`,
    () => divideAllLineForAValue(matrizModel, location, divider)
  );
}

function transformCoefficientToOne(matrizModel: MatrizModel, location: number) {
  let matrizModelAux = MatrizModel.clone(matrizModel);

  if (matrizModelAux.matriz[location][location] !== 1) {
    const line = searchForAvalueInTheSameColumnEqualToOne(
      matrizModelAux,
      location
    );

    if (line !== -1) {
      matrizModelAux = switchLinesAndSaveStep(matrizModelAux, location, line);
    }

    if (matrizModelAux.matriz[location][location] !== 1) {
      matrizModelAux = divideAllLineForAValueAndSaveStep(
        matrizModelAux,
        location
      );
    }
  }

  return matrizModelAux;
}

export function scaling(matrizModel: MatrizModel, kCombination: number) {
  steps = []

  for (let j = 0; matrizModel.matriz[0].length - kCombination > j; j++) {
    matrizModel = MatrizModel.clone(transformCoefficientToOne(matrizModel, j));

    matrizModel = MatrizModel.clone(
      transformOthersCoefficientsToZero(matrizModel, j)
    );
  }

  matrizModel = MatrizModel.clone(simplifyResults(matrizModel, kCombination));

  return {
    steps,
  };
}
