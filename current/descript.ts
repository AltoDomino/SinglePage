export const Shop = (changepage: (newPage: "shop" | "main") => void) => {
    const square = document.createElement("div")
    square.innerHTML = "hello"
    
    const button =document.createElement("button")
    button.innerHTML = "go to main"
    button.onclick = () => changepage("main")
    return square
}
