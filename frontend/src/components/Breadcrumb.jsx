import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <nav
      className="py-28 bg-gradient-to-r from-purple-500 to-indigo-600 px-4 rounded-lg shadow text-white"
      aria-label="Breadcrumb"
    >
    <div className="container-custom">
      <ol className="flex justify-center items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index !== items.length - 1 ? (
              <>
                <Link
                  to={item.path}
                  className="hover:underline hover:text-yellow-300 transition duration-200"
                >
                  {item.label}
                </Link>
                <span className="mx-2 text-white/50">/</span>
              </>
            ) : (
              <span className="font-semibold text-yellow-200">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
