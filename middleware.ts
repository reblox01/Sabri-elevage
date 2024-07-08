export { default } from "next-auth/middleware";

export const config = {
    matcher: [
        "/admin/tables",
        "/admin/tables/dindes",
        "/admin/tables/poulettes"
    ]
}