import { createFeatureSelector, ActionReducer, MetaReducer, createSelector } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";
import * as Loader from './loading.reducers'

import * as Auth from './auth.reducers'
import * as Departments from './department.reducers'
import * as Positions from './position.reducers'

export interface State {
    auth: Auth.State
    loader: Loader.State
    departments: Departments.State
    positions: Positions.State
}

export const reducers = {
    auth: Auth.reducer,
    loader: Loader.reducer,
    departments: Departments.reducer,
    positions: Positions.reducer
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({ keys: ['auth'], rehydrate: true })(reducer)
}

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];

export const getAuthState = createFeatureSelector<Auth.State>('auth')

export const getLoadingMaskState = createFeatureSelector<Loader.State>('loader')
export const getLoaderStatus = createSelector(getLoadingMaskState, Loader.getLoaderStatus)

export const getDepartmentsState = createFeatureSelector<Departments.State>('departments')
export const getDepartments = createSelector(getDepartmentsState, Departments.getDepartments)

export const getPositionsState = createFeatureSelector<Positions.State>('positions')
export const getPositions = createSelector(getPositionsState, Positions.getPositions)

