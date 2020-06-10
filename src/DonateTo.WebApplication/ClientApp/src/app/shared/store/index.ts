import * as auth from './auth';
import * as donationRequest from './donation-request';
import * as organization from './organization';
import * as category from './category';
import * as unit from './unit';
import * as status from './status';
import * as address from './address';
import * as settings from './settings';

export interface State {
  settings: settings.SettingsState;
  auth: auth.AuthState;
}

export const fromSettings = settings;
export const fromAuth = auth;
export const fromDonationRequest = donationRequest;
export const fromOrganization = organization;
export const fromCategory = category;
export const fromStatus = status;
export const fromAddress = address;
export const fromUnit = unit;
