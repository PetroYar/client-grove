import Footer from "./common/components/footer/Footer";
import Header from "./common/components/header/Header";

import "../styles/global.scss";
import "../styles/null.scss";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body>
        <div className="wraper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}