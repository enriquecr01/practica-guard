import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  infoUser = { }

  private availableUsers = [
    { username: 'admin', password: '123456', role: 'ADMIN' },
    { username: 'client', password: '123456', role: 'CLIENT' }
  ]

  constructor() { }

  login(username, password) {
    // Si le regresas un booleano a every puede romer el ciclo
    // Si le regresas true seguira el ciclo y se es false lo rompera
    this.availableUsers.every((user, index) => {
      if (user.username === username) {
        if (user.password === password) {
          this.infoUser = user;
          return false
        }
      } else {
        return true
      }
    })

    return this.infoUser;
  }

}
