import './globals.css'

export const metadata = {
  title: 'Mike Terekhov',
  description: 'Personal portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-['0xProtoNerdFont']">{children}</body>
    </html>
  )
}
