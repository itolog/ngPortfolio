export class AuthService {
  private isAuthenticated = false;
  logIn() {
    this.isAuthenticated = true;
  }
  logOut() {
    window.localStorage.clear();
    this.isAuthenticated = false;
  }
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
