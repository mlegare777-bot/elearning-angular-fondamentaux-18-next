import { Injectable } from '@angular/core';

import { ResolveFn } from "@angular/router";
import { delay, Observable, of, tap } from "rxjs";

@Injectable({
    providedIn: 'root',
})



export class GetCurrentTitleService {

    get(key: string | null): Observable<string> {
        return of('Mes jeux videos preferes - ' + key).pipe(
            delay(1000)
            // ,
            // tap(
            //     title => console.info(title)
            // )
        );
    }

}