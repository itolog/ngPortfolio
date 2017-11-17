export class AuthService {
  private isAuthenticated = false;
  logIn() {
    this.isAuthenticated = true;
  }
  logOut() {
    this.isAuthenticated = false;
    window.localStorage.clear();
  }
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
