import { Router } from "@angular/router"
import { inject } from "@angular/core"


export const loginGuard = () => {

    const router = inject(Router)

    if (localStorage.getItem('token_usuario')) {
        return true;
    } else {
        router.navigate(['']);
        return false;
    }

}