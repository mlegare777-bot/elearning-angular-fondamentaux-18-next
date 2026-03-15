import { Routes } from '@angular/router';
import { EditVideoGame } from './components/edit-video-game/edit-video-game';
import { ListVideoGames } from './video-games';
import { getDynamicTitle } from '../../shared/tools/routes/titles/dynamic-title';

// route actuelle dans cette classe 'jeux-videos'
export const videoGamesRoutes: Routes = [
    {
        path: '',
        component: ListVideoGames
    },
    {
        path: 'title/:id',
        component: ListVideoGames,
        title: getDynamicTitle
    },
    {
        path: ':id',
        component: EditVideoGame
    }
];
