export default class Route {
  constructor(url, title, pathHtml, autorize, pathJS = "") {
    this.url = url;
    this.title = title;
    this.pathHtml = pathHtml;
    this.pathJS = pathJS;
    this.autorize = autorize;
  }
}
/* les autorisations seront dans un tableau
[] -> tout le monde pourra y acceder
 ["disconnected"] -> Réservé aux utilisateurs déconnectés
 ["client"] -> Réservé aux utilisateurs avec le rôle client
 ["admin"] -> Réservé aux utilisateurs admin
 ["admin","client"] -> Réservé aux utilisateurs admin ou clients
*/
