import type { Company } from '@domain/company/company.model';

import companyJson from '../seed/company.json';

export function loadCompany(): Company {
  return companyJson;
}
