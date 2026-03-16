import { Routes } from '@angular/router';
import { NotFound } from '../shared/errors/not-found/not-found';
import { videoGamesRoutes } from '../features/video-games/video-games.routes';
import { Title } from '@angular/platform-browser';
import { Login } from '../features/authentification/component/login/login';
import { requiredAuthenticatedGuard } from '../features/authentification/guards/required-authenticated-guard';
import { authentificationRoutes } from '../features/authentification/authentification.route';
import { getDynamicTitle } from '../shared/tools/routes/titles/dynamic-title';
import { statsResolver } from '../features/statistics/resolvers/statistics.resolver';

export const appRoutes: Routes = [



    {
        path: '',
        redirectTo: 'jeux-videos',
        pathMatch: 'full'
    },
    {
        path: 'jeux-videos',
        children: videoGamesRoutes,
        // title: 'Mes jeux videos !!!!',
        title: getDynamicTitle,
        canActivate: [requiredAuthenticatedGuard]

    },
    {
        path: 'stats',
        loadChildren: () => import('../features/statistics/statistics.routes').then(item => item.statisitcsRoutes),
        data: {
            title: 'Mes statistiques de jeux',
            titleColor: 'RED'
        },
        canActivate: [requiredAuthenticatedGuard],
        resolve: {
            stats: statsResolver
        }
    },
    ...authentificationRoutes,
    {
        path: '**',
        component: NotFound
    }
];
