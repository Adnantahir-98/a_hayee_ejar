import 'bootstrap/dist/css/bootstrap.min.css';
import localFont from 'next/font/local'
import './globals.css';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ReduxProvider from "./redux/provider";

const metadata = {
  title: "Ejar Property Consultant",
  description: "Welcome to No.1 Gulf Property Consultant",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

// Load the variable font
const changa = localFont({
  src: './font/Changa-VariableFont_wght.ttf',
  variable: '--font-changa',
  weight: '100 900', // variable range supported by the font
  style: 'normal',
  display: 'swap',
})


export default function RootLayout({ children }) {

  return (
      <html lang="en">
        <head>
          <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
          <title>Ejar Property Consultant</title>
          <meta name="description" content="Welcome to No.1 Gulf Property Consultant"></meta>
        </head>
        <body className={changa.variable} style={{ backgroundColor: '#383838ff' }}>
          <ReduxProvider>
            <Navbar />
            {children}
            <Footer />
          </ReduxProvider>
        </body>
      </html>
  );
}
