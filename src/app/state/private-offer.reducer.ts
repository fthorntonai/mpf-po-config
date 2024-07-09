import { createReducer, on } from '@ngrx/store';
import { addProperty, removeProperty,updateProperty, reset,initializeState } from './private-offer.action';

let baseObject = {};
export const initialState = baseObject ;

export const privateOfferReducer = createReducer(
  initialState,
  on(initializeState, (state,data:object) => { return JSON.parse(JSON.stringify(data))}),
  on(addProperty, (state) => {return  JSON.parse(JSON.stringify(state))['property'] = 'test'}),
  on(updateProperty, (state) => {return  JSON.parse(JSON.stringify(state))['property'] = 'test'}),
  on(removeProperty, (state) => {return  JSON.parse(JSON.stringify(state))['property'] = 'test'}),
  on(reset, (state) => 0)
);
