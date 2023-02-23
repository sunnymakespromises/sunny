import './globals.css';

/* /app/layout.js */
export default function HomeLayout({ children }) {
    return (
        <html lang='en' className = 'w-full h-full'>
            <head />
            <body className = 'w-full h-full bg-primary-50 dark:bg-primary-900 flex flex-col justify-center items-center'>
                {children}
            </body>
        </html>
    )
}
