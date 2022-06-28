/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsersByCompanyService } from './UsersByCompany.service';

describe('Service: UsersByCompany', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersByCompanyService]
    });
  });

  it('should ...', inject([UsersByCompanyService], (service: UsersByCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
