import { NextPage } from 'next';

import { IProjectItems } from '@/shared/types/projects.interface';

import Home from '@/screens/home/Home';
import { ProjectService } from '@/services/project.service';

const HomePage: NextPage = () => {
  return <Home />;
};

export default HomePage;

// export const getStaticProps = async () => {
//   const { data } = await ProjectService.getAll();
//
//   return {
//     props: {
//       data,
//     },
//   };
// };
