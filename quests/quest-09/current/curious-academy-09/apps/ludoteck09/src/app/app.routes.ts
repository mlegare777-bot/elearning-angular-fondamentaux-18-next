import { Routes } from '@angular/router';
import { NotFound } from '../shared/errors/not-found/not-found';
import { videoGamesRoutes } from '../features/video-games/video-games.routes';

export const appRoutes: Routes = [


    //    ...videoGamesRoutes,
    {
        path: '',
        children: videoGamesRoutes
    },
    {
        path: '**',
        component: NotFound
    }
];
