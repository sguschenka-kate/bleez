import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

function MainLayout({children}) {



    return (
        <>
            <Header />
            <div className="line">bleez.shop</div>
            <main className="main">
                <div className="container">
                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
}

export {
    MainLayout
}