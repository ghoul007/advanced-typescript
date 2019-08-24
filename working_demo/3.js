"use strict";
const routeToAdminPage = (role) => console.log('routeToAdminPage');
const routeToHomePage = (email) => console.log('routeToHomePage');
function redirect(usr) {
    if (usr.role !== undefined) {
        // won't work: usr is still Admin | User
    }
    // if (isAdmin(usr)) {
    if ("role" in usr) {
        routeToAdminPage(usr.role);
    }
    else {
        routeToHomePage(usr.email);
        usr.email;
    }
}
function isAdmin(usr) {
    return usr.role !== undefined;
}
