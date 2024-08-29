export { default } from "next-auth/middleware";

export const config = {
    matcher: [
        "/admin/tables",
        "/admin/tables/dindes",
        "/admin/tables/poulettes",

        // Vente Glo DC
        "/admin/tables/dindes/ajouter",

        // Aliment sahil
        "/admin/tables/poulettes/aliment-2-sa",
        "/admin/tables/poulettes/aliment-2-sa/ajouter-achat",
        "/admin/tables/poulettes/aliment-2-sa/ajouter-vente",

        // Poussins
        "/admin/tables/poulettes/poussins",
        "/admin/tables/poulettes/poussins/ajouter-achat",
        "/admin/tables/poulettes/poussins/ajouter-vente",

        // Reglement
        "/admin/tables/poulettes/reglement",
        "/admin/tables/poulettes/reglement/ajouter",

        // Vente PC
        "/admin/tables/poulettes/vente-pc",
        "/admin/tables/poulettes/vente-pc/ajouter-vente",
        "/admin/tables/poulettes/vente-pc/ajouter-achat",

        // Aliment Sofalim
        "/admin/tables/poulettes/aliment-so",
        "/admin/tables/poulettes/aliment-so/ajouter-vente",
        "/admin/tables/poulettes/aliment-so/ajouter-achat",
    ]
}