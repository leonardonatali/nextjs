class TileProps {
    color: string 
    size: string
}

function Tile(props: TileProps): JSX.Element {
    return (
        <span style={{ backgroundColor: props.color, width: props.size, height: props.size, }}></span>
    );
}

export default Tile;
