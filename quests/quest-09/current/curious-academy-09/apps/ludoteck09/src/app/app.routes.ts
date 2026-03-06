import { Route } from '@angular/router';
import { ListVideoGames } from '../features/video-games/video-games';

export const appRoutes: Route[] = [
    {
        path: 'jeux-videos',
        component: ListVideoGames
    }

];
