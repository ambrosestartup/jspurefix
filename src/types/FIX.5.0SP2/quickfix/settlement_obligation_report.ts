import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ISettlObligationInstructions } from './set/settl_obligation_instructions'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Settlement Obligation Report message provides a central  *
* counterparty, institution, or individual counterparty with a *
* capacity for reporting the final details of a currency       *
* settlement obligation.                                       *
****************************************************************
*/
export interface ISettlementObligationReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  ClearingBusinessDate?: Date// [3] 715 (LocalDate)
  SettlementCycleNo?: number// [4] 1153 (Int)
  SettlObligMsgID: string// [5] 1160 (String)
  SettlObligMode: number// [6] 1159 (Int)
  Text?: string// [7] 58 (String)
  EncodedTextLen?: number// [8] 354 (Int)
  EncodedText?: Buffer// [9] 355 (RawData)
  TransactTime?: Date// [10] 60 (UtcTimestamp)
  SettlObligationInstructions: ISettlObligationInstructions[]// [11] NetGrossInd.430, SettlObligID.1161 .. SettlPartySubIDType.786
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
}
