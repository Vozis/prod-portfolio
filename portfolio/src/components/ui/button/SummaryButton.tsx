import { FC } from 'react';

const SummaryButton: FC = () => {
  return (
    <a
      href={'/summary.pdf'}
      download
      className={
        'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-flex px-4 py-2 rounded-xl shadow-2xl mt-6 ml-auto'
      }
    >
      Получить резюме
    </a>
  );
};

export default SummaryButton;
