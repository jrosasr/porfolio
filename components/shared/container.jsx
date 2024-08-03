
export default function Container( { children } ) {
    return (
        <div className="px-12 py-20 md:px-40 md:py-36 max-w-3xl mx-auto">
            {children}
        </div>
    );
}