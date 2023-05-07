import { NextPage } from 'next';

import { IProjectItems } from '@/shared/types/projects.interface';

import Projects from '@/screens/projects/Projects';
import { ProjectService } from '@/services/project.service';

const ProjectsPage: NextPage = () => {
  return <Projects />;
};

export default ProjectsPage;

// export const getStaticProps = async () => {
//   const { data } = await ProjectService.getAll();
//
//   return {
//     props: {
//       data,
//     },
//   };
// };
