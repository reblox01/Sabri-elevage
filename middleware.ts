export { default } from "next-auth/middleware";

export const config = {
    matcher: [
        "/admin/tables",
        "/admin/tables/dindes",
        "/admin/tables/poulettes",
        "/admin/tables/poulettes/aliment-2-sa",
        "/admin/tables/poulettes/poussins",
        "/admin/tables/poulettes/reglement",
        "/admin/tables/poulettes/vente-pc",
        "/admin/tables/poulettes/aliment-so",
    ]
}