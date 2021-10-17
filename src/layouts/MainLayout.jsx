import { Header } from '../components/Header'

function MainLayout({children}) {
    return (
        <>
            <Header></Header>
            <main className="main">
                <div className="container">
                    {children}
                </div>
            </main>
        </>
    )
}

export {
    MainLayout
}