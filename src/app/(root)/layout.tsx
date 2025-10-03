import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "PrepWise",
    description: "An AI-powered platform for preparing for mock interviews",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default RootLayout;