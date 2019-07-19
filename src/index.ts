import { PublicRoutes } from './~public';
import { OriginsRoutes } from './~origins';

export { iOrigin } from './interfaces/origin.interface';

export class FrogedClient {

    // CONSTRUCTOR
    constructor(dev: boolean = false) {
        this.public.dev = dev;
        this.origins.dev = dev;
    }

    // METHODS
    public setToken(token: string) {
        this.public.token = token;
        this.origins.token = token;
    }
    public setSlug(slug: string) {
        this.public.slug = slug;
        this.origins.slug = slug;
    }

    // ROUTES
    public public: PublicRoutes = new PublicRoutes;
    public origins: OriginsRoutes = new OriginsRoutes;
}