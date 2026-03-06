import { Route } from '@angular/router';
import { ListVideoGames } from '../features/video-games/video-games';
import { EditVideoGame } from '../features/video-games/components/edit-video-game/edit-video-game';

export const appRoutes: Route[] = [
    {
        path: 'jeux-videos',
        component: ListVideoGames
    },
    {
        path: 'jeux-videos/:id',
        component: EditVideoGame
    }

];
