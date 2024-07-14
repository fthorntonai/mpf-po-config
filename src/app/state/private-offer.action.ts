import { createAction, props } from '@ngrx/store';

export const addProperty = createAction('[PrivateOffer Component] AddProperty',props<{ property: string, value: string}>);
export const initializeState = createAction('[PrivateOffer Component] InitializeState',props<{offer:any}>());
export const setState = createAction('[PrivateOffer Component] SetState',props<{offer:any}>());
export const removeProperty = createAction('[PrivateOffer Component] RemoveProperty',props<{property:string}>);
export const updateProperty = createAction('[PrivateOffer Component] UpdateProperty',props<{ property: string, value: string}>);
export const reset = createAction('[PrivateOffer Component] Reset');