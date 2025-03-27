import Footer from "./common/components/footer/Footer";
import Header from "./common/components/header/Header";

import "../styles/global.scss";
import "../styles/null.scss";
import AuthProvider from "./common/context/AuthContext";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>
          <Header />
          <div className="wraper">
            <main>{children}</main>
          </div>
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
