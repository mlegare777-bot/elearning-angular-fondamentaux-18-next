import { Routes } from '@angular/router';
import { EditVideoGame } from './components/edit-video-game/edit-video-game';
import { ListVideoGames } from './video-games';

export const videoGamesRoutes: Routes = [
    {
        path: 'jeux-videos',
        component: ListVideoGames
    },
    {
        path: 'jeux-videos/:id',
        component: EditVideoGame
    }
];
