/*
****************************************************************
* The presence of DiscretionInstructions component block on an *
* order indicates that the trader wishes to display one price  *
* but will accept trades at another price.                     *
****************************************************************
*/
export interface IDiscretionInstructions {
  DiscretionInst?: string// [1] 388 (String)
  DiscretionOffsetValue?: number// [2] 389 (Float)
  DiscretionMoveType?: number// [3] 841 (Int)
  DiscretionOffsetType?: number// [4] 842 (Int)
  DiscretionLimitType?: number// [5] 843 (Int)
  DiscretionRoundDirection?: number// [6] 844 (Int)
  DiscretionScope?: number// [7] 846 (Int)
}
