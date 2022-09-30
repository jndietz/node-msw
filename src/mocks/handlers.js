import { rest } from "msw";

export const handlers = [
    rest.get("http://localhost:8082/user-data", (req, res, ctx) => {
        return res(ctx.status(200));
    })
]