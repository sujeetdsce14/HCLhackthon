import { Html, Head, Main, NextScript } from 'next/document'

export default Document;

function Document() {
    return (
        <Html lang="en">
            <Head>
          
                {/* eslint-disable-next-line @next/next/no-css-tags */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
              
            
            <meta name="google-site-verification" content="7Oh2PZy1-4Ardjrq6f_PwWupfnhNnmOepvbr_yELwmk" />
          
         
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-28TT0BPSKX"></script>
         
            </Head>

            <body>
         
                <Main />
                <NextScript />

                {/* credits */}
                <div className="text-center mt-4">
                    <p>
                       
                    </p>
                    <p>
                        
                    </p>
                </div>
            </body>
        </Html>
    );
}
