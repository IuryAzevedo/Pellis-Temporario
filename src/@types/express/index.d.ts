
declare namespace Express{
    export interface Request{
        user_id: string
    }
}
declare namespace global {
    namespace Express {
        interface Request {
            user_id: string;
            user: {
                id: string | undefined;
            };
        }
    }
}