import { createReducer, on } from '@ngrx/store';
import { addProperty, removeProperty,updateProperty, reset,initializeState, setState } from './private-offer.action';

let baseObject = { "offer": { "contractAmount": "0","firstInvoice":"0", "offerDuration": "0", "numberOfPayments":1 ,
  "paymentFrequency": "", "startDate": "", "endDate": "", "paymentAmount": "", "range": "", "jsonView": "" } };
export const initialState = baseObject ;

export const privateOfferReducer = createReducer(
  initialState,
  on(initializeState, (state,data:object) => { return JSON.parse(JSON.stringify(data))}),
  on(setState, (state,data:object) => { return JSON.parse(JSON.stringify(data))}),
 // on(addProperty, (state) => {return  JSON.parse(JSON.stringify(state))['property'] = 'test'}),
 // on(updateProperty, (state) => {return  JSON.parse(JSON.stringify(state))['property'] = 'test'}),
 // on(removeProperty, (state) => {return  JSON.parse(JSON.stringify(state))['property'] = 'test'}),
 on(reset, (state) =>{ return { "offer" :{ "contractAmount": "0","firstInvoice":"0", "offerDuration": "0","numberOfPayments":1 ,
  "paymentFrequency": "", "startDate": "", "endDate": "", "paymentAmount": "", "range": "", "jsonView": "" }}})
);
