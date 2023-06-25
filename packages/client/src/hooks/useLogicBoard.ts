import { CELL_STATE } from '@/components/LogicPaper/type';
import _ from 'lodash';
import { useReducer } from 'react';

const useLogicBoard = ({
  rowLength,
  colLength,
}: {
  rowLength: number;
  colLength: number;
}) => {
  const cellStateReducer = (state: CELL_STATE[][], action: any): any => {
    const tempCellStates = _.cloneDeep(state);

    switch (action.toBe) {
      case CELL_STATE.FILL:
        tempCellStates[action.rowIndex][action.colIndex] = CELL_STATE.FILL;
        return tempCellStates;
      case CELL_STATE.BLANK:
        tempCellStates[action.rowIndex][action.colIndex] = CELL_STATE.BLANK;
        return tempCellStates;
      case CELL_STATE.NOTHING:
        tempCellStates[action.rowIndex][action.colIndex] = CELL_STATE.NOTHING;
        return tempCellStates;
    }
  };

  const [cellStates, changeCellState] = useReducer(
    cellStateReducer,
    Array(rowLength)
      .fill(0)
      .map(() => Array(colLength).fill(CELL_STATE.BLANK)),
  );

  return [cellStates, changeCellState];
};

export default useLogicBoard;
