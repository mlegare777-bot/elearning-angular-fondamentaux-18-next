import { Routes } from '@angular/router';
import { NotFound } from '../shared/errors/not-found/not-found';
import { videoGamesRoutes } from '../features/video-games/video-games.routes';
import { StatisticsResolver } from '../features/statistics/resolvers/statistics.resolver';
import { Title } from '@angular/platform-browser';
import { Login } from '../features/authentification/component/login/login';
import { requiredAuthenticatedGuard } from '../features/authentification/guards/required-authenticated-guard';
import { authentificationRoutes } from '../features/authentification/authentification.route';

export const appRoutes: Routes = [



    {
        path: '',
        redirectTo: 'jeux-videos',
        pathMatch: 'full'
    },
    {
        path: 'jeux-videos',
        children: videoGamesRoutes,
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
            stats: StatisticsResolver
        }
    },
    ...authentificationRoutes,
    {
        path: '**',
        component: NotFound
    }
];
