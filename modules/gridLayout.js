

function MakeLayoutGrid(layout, colls, collLen, rows, rowLen){

    layout.style.display = 'grid';
    layout.style.gridTemplateColumns = `repeat(${colls}, ${collLen}%)`;
    layout.style.gridTemplateRows = `repeat(${rows}, ${rowLen}%)`;
    layout.style.gap = '20px';
    Array.from(layout).forEach(e => {
        e.target.style.display = 'flex';
        e.target.style.alignItems = 'center';
    });

}


export default MakeLayoutGrid;


