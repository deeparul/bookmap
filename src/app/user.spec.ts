import { UserService } from './service/user.service';

describe('User', () => {
  it('should create an instance', () => {
    expect(new UserService()).toBeTruthy();
  });
});
