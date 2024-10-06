import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

export default function Home() {
    const loggedIn = {
        $id: "",
        email: "david.lee1471@hotmail.co.uk",
        userId: "",
        dwollaCustomerUrl: "",
        dwollaCustomerId: "",
        firstName: "David",
        lastName: "Lee",
        name: "",
        address1: "",
        city: "",
        state: "",
        postalCode: "",
        dateOfBirth: "",
        ssn: "",
    };

    return (
        <section className="home">
            <section className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        user={loggedIn?.firstName || "Guest"}
                        title="Welcome"
                        subtext="Access and manage your account and transactions effectively"
                    />
                    <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={2475.52} />
                </header>
            </section>
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[
                    {
                        $id: "",
                        accountId: "",
                        bankId: "",
                        accessToken: "",
                        fundingSourceUrl: "",
                        userId: "",
                        shareableId: "",
                        id: "",
                        availableBalance: 0,
                        currentBalance: 2475.52,
                        officialName: "",
                        mask: "",
                        institutionId: "",
                        name: "",
                        type: "",
                        subtype: "",
                        appwriteItemId: "",
                    },
                    {
                        $id: "",
                        accountId: "",
                        bankId: "",
                        accessToken: "",
                        fundingSourceUrl: "",
                        userId: "",
                        shareableId: "",
                        id: "",
                        availableBalance: 0,
                        currentBalance: 2475.52,
                        officialName: "",
                        mask: "",
                        institutionId: "",
                        name: "",
                        type: "",
                        subtype: "",
                        appwriteItemId: "",
                    },
                ]}
            />
        </section>
    );
}
