import { Routes } from '@angular/router';
import { EditVideoGame } from './components/edit-video-game/edit-video-game';
import { ListVideoGames } from './video-games';

// route actuelle dans cette classe 'jeux-videos'
export const videoGamesRoutes: Routes = [
    {
        path: '',
        component: ListVideoGames
    },
    {
        path: ':id',
        component: EditVideoGame
    }
];
