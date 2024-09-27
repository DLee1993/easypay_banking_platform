import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

export default function Home() {
    const loggedIn = { firstname: "David" };

    return (
        <section className="home">
            <section className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        user={loggedIn?.firstname || "Guest"}
                        title="Welcome"
                        subtext="Access and manage your account and transactions effectively"
                    />
                    <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={2475.52} />
                </header>
            </section>
        </section>
    );
}
