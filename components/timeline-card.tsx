interface TimelineCardProps {
  children: React.ReactNode;
  title: string;
  time: string;
  url?: string;
  typeJob: string;
}
export default function TimelineCard(props: TimelineCardProps) {
  const { children, title, time, url, typeJob } = props;

  return (
    <li className="mb-10 ms-4">
      <div className="absolute border-white dark:border-gray-900 bg-orange-400 dark:bg-orange-700 mt-1.5 border rounded-full w-3 h-3 -start-1.5"></div>
      <time className="mb-1 font-normal text-orange-500 text-sm leading-none">
        {time}
        <span className="ml-2 font-bold text-gray-400">{typeJob}</span>
      </time>
      <h3 className="font-semibold text-gray-900 text-lg dark:text-white">
        {title}
      </h3>
      <p className="mb-4 font-normal text-base text-gray-500 dark:text-gray-400">
        {children}
      </p>
      {url && (
        <a
          href={url}
          target="_blank"
          className="inline-flex focus:z-10 items-center gap-x-2 border-gray-200 dark:border-gray-600 bg-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-lg focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 font-medium text-gray-900 text-sm hover:text-orange-500 focus:outline-none dark:hover:text-white focus:text-orange-600 dark:text-gray-400"
        >
          Enlace
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-link"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </a>
      )}
    </li>
  );
}
