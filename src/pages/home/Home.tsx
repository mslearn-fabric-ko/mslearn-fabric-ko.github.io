import ContentContainer from "./ContentContainer.tsx";

function Home (): JSX.Element {
    return (
        <>
            <Header/>
            <hr/>
            <ContentContainer/>
        </>
    )
}

const Header = () => {
    return (
        <div className={"header"}>
            <div className={"title"}>
                <h1>MS Learn Fabric KO-KR</h1>
            </div>
        </div>
    )
}

export default Home