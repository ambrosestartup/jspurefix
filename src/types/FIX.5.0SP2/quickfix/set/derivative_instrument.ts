import { IDerivativeSecurityAltIDGrp } from './derivative_security_alt_id_grp'
import { IDerivativeSecurityXML } from './derivative_security_xml'
import { IDerivativeEventsGrp } from './derivative_events_grp'
import { IDerivativeInstrumentParties } from './derivative_instrument_parties'

export interface IDerivativeInstrument {
  DerivativeSymbol?: string// [1] 1214 (String)
  DerivativeSymbolSfx?: string// [2] 1215 (String)
  DerivativeSecurityID?: string// [3] 1216 (String)
  DerivativeSecurityIDSource?: string// [4] 1217 (String)
  DerivativeSecurityAltIDGrp?: IDerivativeSecurityAltIDGrp[]// [5] DerivativeSecurityAltID.1219, DerivativeSecurityAltIDSource.1220
  DerivativeProduct?: number// [6] 1246 (Int)
  DerivativeProductComplex?: string// [7] 1228 (String)
  DerivFlexProductEligibilityIndicator?: boolean// [8] 1243 (Boolean)
  DerivativeSecurityGroup?: string// [9] 1247 (String)
  DerivativeCFICode?: string// [10] 1248 (String)
  DerivativeSecurityType?: string// [11] 1249 (String)
  DerivativeSecuritySubType?: string// [12] 1250 (String)
  DerivativeMaturityMonthYear?: string// [13] 1251 (String)
  DerivativeMaturityDate?: Date// [14] 1252 (LocalDate)
  DerivativeMaturityTime?: string// [15] 1253 (String)
  DerivativeSettleOnOpenFlag?: string// [16] 1254 (String)
  DerivativeInstrmtAssignmentMethod?: string// [17] 1255 (String)
  DerivativeSecurityStatus?: string// [18] 1256 (String)
  DerivativeIssueDate?: Date// [19] 1276 (LocalDate)
  DerivativeInstrRegistry?: string// [20] 1257 (String)
  DerivativeCountryOfIssue?: string// [21] 1258 (String)
  DerivativeStateOrProvinceOfIssue?: string// [22] 1259 (String)
  DerivativeLocaleOfIssue?: string// [23] 1260 (String)
  DerivativeStrikePrice?: number// [24] 1261 (Float)
  DerivativeStrikeCurrency?: string// [25] 1262 (String)
  DerivativeStrikeMultiplier?: number// [26] 1263 (Float)
  DerivativeStrikeValue?: number// [27] 1264 (Float)
  DerivativeOptAttribute?: string// [28] 1265 (String)
  DerivativeContractMultiplier?: number// [29] 1266 (Float)
  DerivativeMinPriceIncrement?: number// [30] 1267 (Float)
  DerivativeMinPriceIncrementAmount?: number// [31] 1268 (Float)
  DerivativeUnitOfMeasure?: string// [32] 1269 (String)
  DerivativeUnitOfMeasureQty?: number// [33] 1270 (Float)
  DerivativePriceUnitOfMeasure?: string// [34] 1315 (String)
  DerivativePriceUnitOfMeasureQty?: number// [35] 1316 (Float)
  DerivativeSettlMethod?: string// [36] 1317 (String)
  DerivativePriceQuoteMethod?: string// [37] 1318 (String)
  DerivativeValuationMethod?: string// [38] 1319 (String)
  DerivativeListMethod?: number// [39] 1320 (Int)
  DerivativeCapPrice?: number// [40] 1321 (Float)
  DerivativeFloorPrice?: number// [41] 1322 (Float)
  DerivativePutOrCall?: number// [42] 1323 (Int)
  DerivativeExerciseStyle?: string// [43] 1299 (String)
  DerivativeOptPayAmount?: number// [44] 1225 (Float)
  DerivativeTimeUnit?: string// [45] 1271 (String)
  DerivativeSecurityExchange?: string// [46] 1272 (String)
  DerivativePositionLimit?: number// [47] 1273 (Int)
  DerivativeNTPositionLimit?: number// [48] 1274 (Int)
  DerivativeIssuer?: string// [49] 1275 (String)
  DerivativeEncodedIssuerLen?: number// [50] 1277 (Int)
  DerivativeEncodedIssuer?: Buffer// [51] 1278 (RawData)
  DerivativeSecurityDesc?: string// [52] 1279 (String)
  DerivativeEncodedSecurityDescLen?: number// [53] 1280 (Int)
  DerivativeEncodedSecurityDesc?: Buffer// [54] 1281 (RawData)
  DerivativeSecurityXML?: IDerivativeSecurityXML// [55] DerivativeSecurityXMLLen.1282, DerivativeSecurityXML.1283, DerivativeSecurityXMLSchema.1284
  DerivativeContractSettlMonth?: string// [56] 1285 (String)
  DerivativeEventsGrp?: IDerivativeEventsGrp[]// [57] DerivativeEventType.1287, DerivativeEventDate.1288 .. DerivativeEventText.1291
  DerivativeInstrumentParties?: IDerivativeInstrumentParties[]// [58] DerivativeInstrumentPartyID.1293, DerivativeInstrumentPartyIDSource.1294 .. DerivativeInstrumentPartySubIDType.1298
  DerivativeContractMultiplierUnit?: number// [59] 1438 (Int)
  DerivativeFlowScheduleType?: number// [60] 1442 (Int)
}
