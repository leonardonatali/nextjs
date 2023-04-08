export default function list(): JSX.Element {
    let items: JSX.Element[] = []

    for (let i = 1; i <= 10; i++) {
        items.push(<li key={i}>Item: {i}</li>)        
    }

    return (
        <div>
            <h1>Items list</h1>
            <ul>
                {items}
            </ul>
        </div>
    )
}
