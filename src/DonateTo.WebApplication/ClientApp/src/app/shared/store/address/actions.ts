import { createAction, props } from '@ngrx/store';
import { CityModel } from '../../models/city.model';
import { StateModel } from '../../models/state.model';
import { CountryModel } from '../../models/country.model';
import { AddressModel } from '../../models/address.model';

export const loadCountries = createAction('[Address Country] Loads countries from server');
export const loadCountriesSuccess = createAction(
  '[Address Country] Load success',
  props<{ countries: CountryModel[] }>()
);
export const loadCountriesFailed = createAction('[Address Country] Load failed');
export const loadStates = createAction('[Address State] Loads states from server', props<{ countryId: number }>());
export const loadStatesSuccess = createAction('[Address State] Load success', props<{ states: StateModel[] }>());
export const loadStatesFailed = createAction('[Address State] Load failed');
export const loadCities = createAction('[Address City] Loads cities from server', props<{ stateId: number }>());
export const loadCitiesSuccess = createAction('[Address City] Load success', props<{ cities: CityModel[] }>());
export const loadCitiesFailed = createAction('[Address City] Load failed');
export const loadAddressesByOrganizationId = createAction(
  '[AddressesByOrganizationId] Load items from server',
  props<{ organizationId: number }>()
);
export const loadAddressesByOrganizationIdSuccess = createAction(
  '[AddressesByOrganizationId] Load success',
  props<{ addresses: AddressModel[] }>()
);
export const loadAddressesByOrganizationIdFailed = createAction('[AddressesByOrganizationId] Load failed');

export const deleteAddress = createAction('[Address] Delete', props<{ address: AddressModel }>());
export const deleteAddressSuccess = createAction('[Address] Delete success', props<{ address: AddressModel }>());
export const deleteAddressFailed = createAction('[Address] Delete failed');
