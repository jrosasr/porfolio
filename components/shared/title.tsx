interface TitleProps {
    pretitle?: string;
    title?: string;
}
export default function Title( props: TitleProps ) {
    const { pretitle, title } = props
    return (
        <div className="flex flex-col items-center">
            {pretitle && <h1 className="text-gray-400">{pretitle}</h1>}
            {title && <h1 className="text-3xl">{title}</h1>}
        </div>
    );
}