import { SimpleGrid, Tabs, Text } from '@mantine/core';
import { NextSeo } from 'next-seo';

import ProjectCard from '@/components/Projects/ProjectCard';
import { projectCategories } from '@/data/Projects/projectCategories';
import { projects } from '@/data/Projects/projects';

const ProjectsPage = () => {
  return (
    <>
      <NextSeo title='Projects' />
      <Text size={42} weight='bold'>
        Projects
      </Text>
      <Tabs defaultValue='mobile' variant='pills' color='orange' mt='md'>
        <Tabs.List grow>
          {projectCategories.map((category) => (
            <Tabs.Tab value={category.toLowerCase()} key={category}>
              {category}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {projectCategories.map((category) => (
          <Tabs.Panel
            value={category.toLowerCase()}
            key={category}
            pt='xs'
            mt='md'
          >
            <SimpleGrid
              breakpoints={[
                { minWidth: 'sm', cols: 1 },
                { minWidth: 'md', cols: 1 },
              ]}
              spacing='md'
            >
              {projects
                .filter((project) => project.category === category)
                .map((project) => (
                  <ProjectCard project={project} key={project.name} />
                ))}
            </SimpleGrid>
          </Tabs.Panel>
        ))}
      </Tabs>
    </>
  );
};

export default ProjectsPage;
