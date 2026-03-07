import { Routes } from '@angular/router';
import { NotFound } from '../shared/errors/not-found/not-found';

export const appRoutes: Routes = [



    {
        path: '',
        redirectTo: 'jeux-videos',
        pathMatch: 'full',
    },
    {
        path: 'jeux-videos',
        loadChildren: () => import('../features/video-games/video-games.routes').then(item => item.videoGamesRoutes)
    },
    {
        path: '**',
        component: NotFound
    }
];
