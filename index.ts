import { Main } from "./current/portfolio";
import { Shop } from "./current/descript";

let currentPage: "main" | "shop" = "main"; 
const opis = document.getElementById("opis");

const changeCurrentPage = (newPage: "main" | "shop") => {
    render(newPage, currentPage);
    currentPage = newPage;
};

const mainView = Main(changeCurrentPage);
const shopView = Shop(changeCurrentPage);

const views = {
    main: mainView, 
    shop: shopView
};

const render = (newPage: "main" | "shop", oldPage?: "main" | "shop") => {
    if (!opis) console.error("opisu ni ma");

    if (oldPage) {
        opis?.replaceChild(views[newPage],views[oldPage]);
    } else {
        opis?.appendChild(views[newPage]);
    }
};

render("main");
