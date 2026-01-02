import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "iShot - Capture, Edit, Extract",
  description:
    "A lightweight screenshot tool for macOS with drawing, blur, and OCR capabilities.",
  icons: {
    icon: [
      { url: "/icons/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon.ico", sizes: "any" },
    ],
    apple: [{ url: "/icons/icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
          async
        ></script>
      </head>
      <body>
        {children}
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                if (typeof kofiWidgetOverlay !== 'undefined') {
                  kofiWidgetOverlay.draw('tuantran1849', {
                    'type': 'floating-chat',
                    'floating-chat.donateButton.text': 'Support me',
                    'floating-chat.donateButton.background-color': '#323842',
                    'floating-chat.donateButton.text-color': '#fff'
                  });
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
