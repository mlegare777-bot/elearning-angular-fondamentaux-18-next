import { Routes } from '@angular/router';
import { NotFound } from '../shared/errors/not-found/not-found';
import { statisitcsRoutes } from '../features/statistics/components/list-stats/statistics.routes';
import { videoGamesRoutes } from '../features/video-games/video-games.routes';

export const appRoutes: Routes = [



    {
        path: '',
        redirectTo: 'jeux-videos',
        pathMatch: 'full',
    },
    {
        path: 'jeux-videos',
        children: videoGamesRoutes

    },
    {
        path: 'stats',

        loadChildren: () => import('../features/statistics/components/list-stats/statistics.routes').then(item => item.statisitcsRoutes)
    },
    {
        path: '**',
        component: NotFound
    }
];
