import Script from "next/script"

export default function GoogleAnalytics() {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6FQGSRTHKV"></Script>
            <Script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-6FQGSRTHKV');
                `}
            </Script>
        </>
    );
}
