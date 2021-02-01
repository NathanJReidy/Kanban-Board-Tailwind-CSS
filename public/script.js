const topButton = document.querySelector("#topButton");
const rightDiv = document.querySelector("#rightDiv");
const sidebar = document.querySelector("#sidebar");
const logoDiv = document.querySelector("#logoDiv");
const headingX = document.createElement("h1");
const x = document.createTextNode("X");

function openSidebar() {
    topButton.addEventListener('click', button => {
        rightDiv.className="flex flex-col sm:w-4/5 w-full p-3 opacity-20";
        sidebar.className="sm:flex bg-gray-100 w-1/2 sm:w-1/5 border-r flex-shrink-0";
        logoDiv.className="flex w-full p-3 justify-between";

        headingX.className="font-bold text-gray-500 font-bold rounded-full cursor-pointer"
        headingX.appendChild(x);
        logoDiv.appendChild(headingX);
        headingX.style.display="flex";
    })

}

function closeSidebar() {
    console.log("closeSidebar function activated!");
    headingX.addEventListener('click', button => {
        console.log("closeSidebar scrip runs");
        rightDiv.className="flex flex-col sm:w-4/5 w-full p-3";
        sidebar.className="hidden sm:flex bg-gray-100 w-1/5 border-r flex-shrink-0";
        logoDiv.className="flex w-full p-3";
        headingX.style.display="none";
    })
}

function main() {
    openSidebar();
    closeSidebar();
}

main();
