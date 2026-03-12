import { Routes } from "@angular/router";
import { ListStats } from "./components/list-stats/list-stats";
import { OneStat } from "./components/one-stat/one-stat";
import { isAdminGuard } from "./guards/is-admin-guard";

export const statisitcsRoutes: Routes = [
    {
        path: '',
        component: ListStats,
        canActivate: [isAdminGuard]
    },
    {
        path: 'one-stat',
        component: OneStat
    }
]