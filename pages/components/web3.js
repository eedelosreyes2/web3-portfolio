import { contact } from '../clientData/contact.json';

export default function Web3() {
  return (
    <div>
      <div className="font-bold pb-5">Gm</div>
      {/* <hr className="pb-5 w-9" /> */}
      <div className="pb-2">
        Eli here, a web2 dev (but web3 degen) currently learning and looking to
        extend my skills into web3.
      </div>
      <div>
        {contact.map(({ id, platform, url }) => (
          <div key={id} className="inline-block">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center font-bold text-cyan-500 pr-4"
            >
              {platform}
              <div className="p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
