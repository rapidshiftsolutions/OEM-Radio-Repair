import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - OEM Radio Repair ',
    default: 'OEM Radio Repair   - Your Trusted Partner.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The OEM Radio Repair  Blog"
          href="/blog/feed.xml"
        />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="tgAseXOCr25EjtPoO0MNSw" async></script>
      </head>
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  )
}
