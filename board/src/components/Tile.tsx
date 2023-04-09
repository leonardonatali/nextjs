class TileProps {
    color: string 
    size: string
}

function Tile(props: TileProps): JSX.Element {
    return (
        <div style={{ backgroundColor: props.color, width: props.size, height: props.size, }}></div>
    );
}

export default Tile;
