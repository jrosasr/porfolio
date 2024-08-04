interface ContainerProps {
    children: React.ReactNode
}
export default function Container( props: ContainerProps ) {
    const { children } = props
    return (
        <div className="mx-auto px-12 md:px-40 py-20 max-w-3xl">
            {children}
        </div>
    );
}