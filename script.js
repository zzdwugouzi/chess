document.addEventListener("DOMContentLoaded", () => {
    const pieces = {
        r: "A", n: "马", b: "O", a: "X", k: "B", p: "1", c: "包",
        R: "A", N: "吗", B: "O", A: "X", K: "B", P: "2", C: "苞"
    };

    const initialBoard = [
        "rnbakabnr",
        "000000000",
        "0c00000c0",
        "p0p0p0p0p",
        "000000000",
        "000000000",
        "P0P0P0P0P",
        "0C00000C0",
        "000000000",
        "RNBAKABNR"
    ];

    const boardElement = document.getElementById("chessboard");

    initialBoard.forEach((row, rowIndex) => {
        row.split('').forEach((cell, cellIndex) => {
            const cellElement = document.createElement("div");
            cellElement.className = "cell";
            cellElement.dataset.row = rowIndex;
            cellElement.dataset.col = cellIndex;
            if (cell !== "0") {
                cellElement.textContent = pieces[cell];
            }
            boardElement.appendChild(cellElement);
        });
    });
});
