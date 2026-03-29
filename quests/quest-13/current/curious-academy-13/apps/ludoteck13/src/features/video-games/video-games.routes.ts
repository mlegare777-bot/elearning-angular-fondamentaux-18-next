import { Routes } from '@angular/router';
import { EditVideoGame } from './components/edit-video-game/edit-video-game';
import { ListVideoGames } from './video-games';
import { getDynamicTitle } from '../../shared/tools/routes/titles/dynamic-title';
import { RouteTitle } from '../../learnings/route-title/route-title';

// route actuelle dans cette classe 'jeux-videos'
export const videoGamesRoutes: Routes = [
    {
        path: '',
        component: ListVideoGames,
        title: 'mes jeux videos (titre par defaut???)'
    },
    {
        path: 'title/:id',
        component: RouteTitle,
        title: getDynamicTitle
    },
    {
        path: ':id',
        component: EditVideoGame
    }
];
