import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { Observable } from "rxjs";
import { GetCurrentTitleService } from "./services/get-current-title-service";

export const getDynamicTitle: ResolveFn<string> = (route): Observable<string> => {

    const getTitle = inject(GetCurrentTitleService);
    const id = route.paramMap.get('id');
    return getTitle.get(id);


}