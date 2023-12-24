import { NextPage } from 'next';

import Projects from '@/screens/projects/Projects';

const ProjectsPage: NextPage = () => {
  return <Projects />;
};

export default ProjectsPage;

// export const getStaticProps = async () => {
//   try {
//     const { data } = await ProjectService.getAll();
//
//     return {
//       props: { data},
//     };
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }
// };
