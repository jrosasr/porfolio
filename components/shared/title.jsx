
export default function Title( { pretitle, title, subtitle } ) {
    return (
        <div className="flex flex-col items-center">
            {pretitle && <h1 className="text-gray-400">{pretitle}</h1>}
            {title && <h1 className="text-3xl">{title}</h1>}
            {subtitle && <h1 className="text-gray-400">{subtitle}</h1>}
        </div>
    );
}