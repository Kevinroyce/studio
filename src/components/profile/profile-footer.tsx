"use client"

import { useState, useEffect } from 'react';

export function ProfileFooter({ name }: { name: string }) {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="text-center text-sm text-muted-foreground pt-12 pb-4">
            <p>&copy; {year} {name}. All Rights Reserved.</p>
            <p className="text-xs">Powered by ProfilePrint</p>
        </footer>
    );
}
