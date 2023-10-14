import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The order status request message is used by the institution *
* to generate an order status message back from the broker.   *
***************************************************************
*/
export interface IOrderStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID?: string// [2] 37 (String)
  ClOrdID?: string// [3] 11 (String)
  SecondaryClOrdID?: string// [4] 526 (String)
  ClOrdLinkID?: string// [5] 583 (String)
  Parties?: IParties[]// [6] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  OrdStatusReqID?: string// [7] 790 (String)
  Account?: string// [8] 1 (String)
  AcctIDSource?: number// [9] 660 (Int)
  Instrument: IInstrument// [10] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  FinancingDetails?: IFinancingDetails// [11] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [12] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  Side: string// [13] 54 (String)
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
