import { ActivatedRouteSnapshot, MaybeAsync, RedirectCommand, Resolve, RouterStateSnapshot } from "@angular/router";
import { StatList } from "../models";
import { Injectable } from "@angular/core";
import { of } from "rxjs";

export const statsResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<StatList | RedirectCommand> => {
    const fakeData: StatList = [
        {
            year: 2024,
            nbSucces: 300,
            nbFailaures: 25
        },
        {
            year: 2025,
            nbSucces: 200,
            nbFailaures: 25
        },
        {
            year: 2026,
            nbSucces: 100,
            nbFailaures: 50
        }

    ];
    return of(fakeData);
}

// @Injectable({
//     providedIn: 'root'
// })

// export class StatisticsResolver implements Resolve<StatList> {
//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<StatList | RedirectCommand> {
//         const fakeData: StatList = [
//             {
//                 year: 2024,
//                 nbSucces: 300,
//                 nbFailaures: 25
//             },
//             {
//                 year: 2025,
//                 nbSucces: 200,
//                 nbFailaures: 25
//             },
//             {
//                 year: 2026,
//                 nbSucces: 100,
//                 nbFailaures: 50
//             }

//         ];
//         return of(fakeData);
//     }

// }
