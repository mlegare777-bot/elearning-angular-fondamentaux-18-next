import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http"
import { Observable } from "rxjs"

export const loggerInterceptor: (req: HttpRequest<unknown>, next: HttpHandlerFn) => Observable<HttpEvent<unknown>> =
    (req, next) => {
        console.info('info:', req.url);

        return next(req);
    };

export const loggerWarnInterceptor: (req: HttpRequest<unknown>, next: HttpHandlerFn) => Observable<HttpEvent<unknown>> =
    (req, next) => {
        console.warn('warn:', req.url);

        return next(req);
    };
